// Isolated component-handler tests: every fetch and analytics transport is stubbed.
import fs from 'node:fs'
import vm from 'node:vm'
import assert from 'node:assert/strict'
import ts from 'typescript'

const root=process.cwd()+'/';
const attribution={utmSource:'google',utmMedium:'cpc',utmCampaign:'tracking-check',utmContent:'fixture',landingPage:'/video-production/corporate',firstTouchSource:'google',referrer:'https://www.google.com/search'};
function setup(file,mode,website='',projectInquiry=false){
 const events=[],requests=[];let release; const pending=new Promise(r=>release=r);
 const fields={name:'Test Person',firstName:'Test',lastName:'Person',email:'test@example.invalid',message:'Isolated test only',service:'Corporate Video',budget:'$5,000 - $15,000',goal:'Brand awareness',overview:'An isolated tracking validation project.',website};
 const react={useState(initial){let v=typeof initial==='function'?initial():initial;if(v&&typeof v==='object'&&'website'in v)v={...v,...fields};return[v,()=>{}]},useRef:v=>({current:v}),useEffect:()=>{}};
 const jsx=(type,props)=>({type,props}); const fakeRequire=id=>{
 if(id==='react')return react;if(id==='react/jsx-runtime')return{jsx,jsxs:jsx,Fragment:'fragment'};
 if(id==='next/link')return{default:'a'};
 if(id.includes('analytics-events'))return{analyticsEvents:new Proxy({},{get:(_,k)=>k})};
 if(id.includes('client-analytics'))return{trackAnalyticsEvent:(...args)=>events.push(args)};
 if(id.includes('campaign-attribution'))return{captureCampaignAttribution:()=>attribution,readCampaignAttribution:()=>attribution};
 if(id.includes('conversion-attribution'))return{readConversionAttribution:()=>null,clearConversionAttribution:()=>{}};
 if(id.includes('discovery-sources'))return{discoverySources:[]};if(id.endsWith('.css'))return{default:{}};throw new Error(id)};
 const fixtureModule={exports:{}}; const context={module:fixtureModule,exports:fixtureModule.exports,require:fakeRequire,console,window:{location:{pathname:'/contact'}},fetch:async(url,opt)=>{requests.push(JSON.parse(opt.body));await pending;if(mode==='network')throw Error('offline');return{ok:mode!=='server',json:async()=>mode==='server'?{error:'failed'}:{success:true}}}};
 const compiled=ts.transpileModule(fs.readFileSync(root+file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;vm.runInNewContext(compiled,context);
 const tree=fixtureModule.exports.default(file.includes('ContactForm')?{projectInquiry}:{});
 function find(n){if(!n)return;if(Array.isArray(n)){for(const x of n){const z=find(x);if(z)return z}}else if(typeof n==='object'){if(n.type==='form'&&n.props.onSubmit)return n.props.onSubmit;return find(n.props?.children)}}
 const submit=find(tree);assert(submit,'form handler found');return{events,requests,release,setMode:m=>{mode=m},submit:()=>submit({preventDefault(){}})};
}
(async()=>{let results=[];for(const file of ['app/contact/ContactForm.tsx','app/project-planner/ProjectPlannerForm.tsx','app/resources/video-production-faq/AskQuestionForm.tsx']){
 for(const mode of ['success','server','network']){const t=setup(file,mode);const first=t.submit();const second=t.submit();const expectedRequests=1;assert.equal(t.requests.length,expectedRequests);t.release();await Promise.all([first,second]);assert.equal(t.events.filter(e=>e[2]==='generate_lead').length,mode==='success'?expectedRequests:0);if(mode==='success'){assert(!JSON.stringify(t.events).includes('test@example.invalid'),'no email in analytics payload')}results.push({file,mode,requests:t.requests.length,leadEvents:t.events.filter(e=>e[2]==='generate_lead').length})}
 const bot=setup(file,'success','bot-filled');const pending=bot.submit();bot.release();await pending;assert.equal(bot.events.filter(e=>e[2]==='generate_lead').length,0);assert.equal(bot.events.filter(e=>e[0]==='qualified_project_inquiry').length,0);results.push({file,mode:'honeypot-success',leadEvents:0,qualifiedEvents:0});
 for(const failure of ['server','network']){const retry=setup(file,failure);let first=retry.submit();retry.release();await first;retry.setMode('success');await retry.submit();assert.equal(retry.requests.length,2);assert.equal(retry.events.filter(e=>e[2]==='generate_lead').length,1);results.push({file,mode:failure+'-then-retry',leadEvents:1})}
 if(file.includes('ContactForm')){const eligible=setup(file,'success','',true);let ok=eligible.submit();eligible.release();await ok;assert.equal(eligible.events.filter(e=>e[0]==='qualified_project_inquiry').length,1);const spam=setup(file,'success','spam',true);ok=spam.submit();spam.release();await ok;assert.equal(spam.events.filter(e=>e[0]==='qualified_project_inquiry'||e[2]==='generate_lead').length,0)}
}console.log(JSON.stringify(results,null,2))})().catch(e=>{console.error(e);process.exit(1)})
