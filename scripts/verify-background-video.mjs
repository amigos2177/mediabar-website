import assert from 'node:assert/strict'
import fs from 'node:fs'
import ts from 'typescript'
const source=fs.readFileSync('lib/defer-background-video.ts','utf8')
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText
const {deferBackgroundVideo}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'))
function fixture(ready='loading',idleSupport=true){
 const host=new EventTarget(), timers=new Map(),idles=new Map();let next=0,started=0
 host.setTimeout=(fn,ms)=>{assert.equal(ms,1800);timers.set(++next,fn);return next}
 host.clearTimeout=id=>timers.delete(id)
 if(idleSupport){host.requestIdleCallback=(fn,opts)=>{assert.equal(opts.timeout,2000);idles.set(++next,fn);return next};host.cancelIdleCallback=id=>idles.delete(id)}
 const cancel=deferBackgroundVideo(()=>started++,host,{readyState:ready})
 const flush=map=>{const fns=[...map.values()];map.clear();fns.forEach(fn=>fn())}
 return {host,timers,idles,cancel,flush,get started(){return started}}
}
const a=fixture();assert.equal(a.timers.size,0);a.host.dispatchEvent(new Event('load'));assert.equal(a.started,0);a.flush(a.timers);assert.equal(a.started,0);a.flush(a.idles);assert.equal(a.started,1)
const b=fixture();b.cancel();b.host.dispatchEvent(new Event('load'));assert.equal(b.timers.size,0);assert.equal(b.started,0)
const c=fixture('complete');c.cancel();c.flush(c.timers);assert.equal(c.started,0)
const d=fixture('complete');d.flush(d.timers);const late=[...d.idles.values()][0];d.cancel();late();assert.equal(d.started,0,'Already dispatched idle callbacks must respect cancellation')
const e=fixture('complete',false);e.flush(e.timers);assert.equal(e.started,1,'Safari fallback must still start video')
console.log('PASS: waits for window load, delay and idle; supports no-idle browsers; cancellation before load, during delay and after idle scheduling prevents startup.')
