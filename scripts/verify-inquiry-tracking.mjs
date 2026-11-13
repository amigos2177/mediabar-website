// Isolated component-handler tests: every fetch and analytics transport is stubbed.
import fs from 'node:fs'
import vm from 'node:vm'
import assert from 'node:assert/strict'
import ts from 'typescript'

const root=process.cwd()+'/';
const testReference = 'MBP-12345678-1234-4123-8123-123456789abc';
function compileHelper(file, dependencies = {}) {
 const output = { exports: {} };
 vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText,
  { module: output, exports: output.exports, require: name => dependencies[name], URLSearchParams });
 return output.exports;
}
const actualEvents = compileHelper('lib/analytics-events.ts');
const measurement = compileHelper('lib/inquiry-measurement.ts', { './analytics-events': actualEvents });
const attribution={utmSource:'google',utmMedium:'cpc',utmCampaign:'tracking-check',utmContent:'fixture',landingPage:'/video-production/corporate',firstTouchSource:'google',referrer:'https://www.google.com/search'};
function setup(file,mode,website='',projectInquiry=false,options={}){
 const events=[],requests=[];let release; const pending=new Promise(r=>release=r);
 const fields={name:'Test Person',firstName:'Test',lastName:'Person',email:'test@example.invalid',message:'Isolated test only',service:'Corporate Video',budget:'$5,000 - $15,000',goal:'Brand awareness',overview:'An isolated tracking validation project.',website};
 const states=[];let stateIndex=0;
 const react={useState(initial){const index=stateIndex++;if(!(index in states)){let v=typeof initial==='function'?initial():initial;if(v&&typeof v==='object'&&'website'in v)v={...v,...fields};states[index]=v}return[states[index],value=>{states[index]=typeof value==='function'?value(states[index]):value}]},useRef:v=>({current:v}),useEffect:()=>{}};
 const jsx=(type,props)=>({type,props}); const fakeRequire=id=>{
 if(id==='react')return react;if(id==='react/jsx-runtime')return{jsx,jsxs:jsx,Fragment:'fragment'};
 if(id==='next/link')return{default:'a'};
 if(id.includes('analytics-events'))return actualEvents;
 if(id.includes('inquiry-measurement'))return {...measurement,isInternalInquiryTest:()=>measurement.isInternalInquiryTest(options.search || '')};
 if(id.includes('InquiryMeasurementNotice'))return{InquiryReference:'receipt',InquiryTestNotice:'test-notice'};
 if(id.includes('client-analytics'))return{trackAnalyticsEvent:(...args)=>events.push(args)};
 if(id.includes('campaign-attribution'))return{captureCampaignAttribution:()=>attribution,readCampaignAttribution:()=>attribution};
 if(id.includes('conversion-attribution'))return{readConversionAttribution:()=>null,clearConversionAttribution:()=>{}};
 if(id.includes('discovery-sources'))return{discoverySources:[]};if(id.endsWith('.css'))return{default:{}};throw new Error(id)};
 const fixtureModule={exports:{}}; const context={module:fixtureModule,exports:fixtureModule.exports,require:fakeRequire,console,window:{location:{pathname:'/contact'}},fetch:async(url,opt)=>{requests.push(JSON.parse(opt.body));await pending;if(mode==='network')throw Error('offline');return{ok:mode!=='server',json:async()=>mode==='server'?{error:'failed'}:{success:true,...(options.legacy ? {} : {inquiryReference: options.reference ?? testReference}),internalTest:options.serverTest ?? options.search === '?inquiry_test=1'}}}};
 const compiled=ts.transpileModule(fs.readFileSync(root+file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;vm.runInNewContext(compiled,context);
 function render(){stateIndex=0;return fixtureModule.exports.default(file.includes('ContactForm')?{projectInquiry}:{})}
 const tree=render();
 function find(n){if(!n)return;if(Array.isArray(n)){for(const x of n){const z=find(x);if(z)return z}}else if(typeof n==='object'){if(n.type==='form'&&n.props.onSubmit)return n.props.onSubmit;return find(n.props?.children)}}
 const submit=find(tree);assert(submit,'form handler found');return{events,requests,release,render,setMode:m=>{mode=m},submit:()=>submit({preventDefault(){}})};
}
(async()=>{let results=[];for(const file of ['app/contact/ContactForm.tsx','app/project-planner/ProjectPlannerForm.tsx','app/resources/video-production-faq/AskQuestionForm.tsx']){
 for(const mode of ['success','server','network']){const t=setup(file,mode);const first=t.submit();const second=t.submit();const expectedRequests=1;assert.equal(t.requests.length,expectedRequests);t.release();await Promise.all([first,second]);assert.equal(t.events.filter(e=>e[2]==='generate_lead').length,mode==='success'?expectedRequests:0);if(mode==='success'){assert(!JSON.stringify(t.events).includes('test@example.invalid'),'no email in analytics payload');const lead=t.events.find(e=>e[2]==='generate_lead');assert.equal(lead[1].inquiry_reference,testReference);assert.equal(t.requests[0].internalTest,false);assert(JSON.stringify(t.render()).includes(testReference),'successful confirmation includes inquiry reference')}results.push({file,mode,requests:t.requests.length,leadEvents:t.events.filter(e=>e[2]==='generate_lead').length})}
 const bot=setup(file,'success','bot-filled');const pending=bot.submit();bot.release();await pending;assert.equal(bot.events.filter(e=>e[2]==='generate_lead').length,0);assert.equal(bot.events.filter(e=>e[0]==='qualified_project_inquiry').length,0);results.push({file,mode:'honeypot-success',leadEvents:0,qualifiedEvents:0});
 for(const failure of ['server','network']){const retry=setup(file,failure);let first=retry.submit();retry.release();await first;retry.setMode('success');await retry.submit();assert.equal(retry.requests.length,2);assert.equal(retry.events.filter(e=>e[2]==='generate_lead').length,1);results.push({file,mode:failure+'-then-retry',leadEvents:1})}
 for (const options of [{search:'?inquiry_test=1'}, {serverTest:true}]) {
  const internal = setup(file,'success','',true,options);const pending=internal.submit();internal.release();await pending;
  assert.equal(internal.events.filter(e=>e[2]==='generate_lead'||e[0]==='qualified_project_inquiry').length,0);
  assert.equal(internal.requests[0].internalTest,options.search==='?inquiry_test=1');
  results.push({file,mode:options.search?'explicit-test':'server-test-ack',leadEvents:0,qualifiedEvents:0});
 }
 for (const options of [{legacy:true},{reference:'customer@example.invalid'}, {reference:'MBP-invalid'}]) {
  const compatible=setup(file,'success','',false,options);const pending=compatible.submit();compatible.release();await pending;
  const lead=compatible.events.find(e=>e[2]==='generate_lead');assert(lead);assert.equal(lead[1].inquiry_reference,undefined);
 }
 if(file.includes('ProjectPlannerForm')) {
  const qualified=setup(file,'success');const pending=qualified.submit();qualified.release();await pending;
  const event=qualified.events.find(e=>e[0]==='qualified_project_inquiry');assert(event);assert.equal(event[1].inquiry_reference,testReference);
 }
 if(file.includes('ContactForm')){const eligible=setup(file,'success','',true);let ok=eligible.submit();eligible.release();await ok;assert.equal(eligible.events.filter(e=>e[0]==='qualified_project_inquiry').length,1);assert.equal(eligible.events.find(e=>e[0]==='qualified_project_inquiry')[1].inquiry_reference,testReference);const spam=setup(file,'success','spam',true);ok=spam.submit();spam.release();await ok;assert.equal(spam.events.filter(e=>e[0]==='qualified_project_inquiry'||e[2]==='generate_lead').length,0)}
}console.log(JSON.stringify(results,null,2))})().catch(e=>{console.error(e);process.exit(1)})
