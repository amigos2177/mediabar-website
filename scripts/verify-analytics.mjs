import fs from 'node:fs'
import assert from 'node:assert/strict'
import ts from 'typescript'

function moduleUrl(source) {
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } })
  return `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
}
const helperUrl = moduleUrl(fs.readFileSync('lib/ga4-events.ts', 'utf8'))
const eventsUrl = moduleUrl(fs.readFileSync('lib/analytics-events.ts', 'utf8'))
const measurementUrl = moduleUrl(fs.readFileSync('lib/inquiry-measurement.ts', 'utf8').replace("'./analytics-events'", JSON.stringify(eventsUrl)))
const { ga4Context, createGa4Dispatcher } = await import(helperUrl)
const original = { source: 'home', campaign: 'launch', firstTouchSource: 'chatgpt', leadType: 'project_brief' }
assert.deepEqual(ga4Context(original), { page_group: 'home', campaign_label: 'launch', firstTouchSource: 'chatgpt', leadType: 'project_brief' })
assert.equal(original.source, 'home')
assert.deepEqual(ga4Context({ source: 'home', page_group: 'service' }), { page_group: 'service' })

let clock = 0, ready = false, flush
const sent = []
const dispatch = createGa4Dispatcher({ ready: () => ready, now: () => clock, send: (...args) => sent.push(args), onReady: (callback) => { flush = callback } })
dispatch('early_click', original)
assert.equal(sent.length, 0)
ready = true
flush(); flush()
assert.equal(sent.length, 1, 'Ready notification must not replay events')
dispatch('generate_lead', { source: 'service', leadType: 'project_brief' })
assert.equal(sent.length, 2)
ready = false
dispatch('stale_click', {})
clock = 15_001; ready = true; flush()
assert.equal(sent.length, 2, 'Expired events must not be delivered')
ready = false
for (let i = 0; i < 30; i++) dispatch(`bounded_${i}`, {})
ready = true; flush()
assert.equal(sent.length, 27, 'Queue must retain at most 25 pending events')
assert.equal(sent[2][0], 'bounded_5')

// Exercise the actual client wrapper with inert transports: no network or real conversions.
const vercel = [], ga = [], ads = []
globalThis.__analyticsTestTrack = (...args) => vercel.push(args)
const fakeWindow = new EventTarget()
fakeWindow.location = { pathname: '/contact' }
fakeWindow.gtag = (...args) => ga.push(args)
fakeWindow.oaiq = (...args) => ads.push(args)
globalThis.window = fakeWindow
let client = fs.readFileSync('lib/client-analytics.ts', 'utf8')
client = client.replace("import { track } from '@vercel/analytics'", 'const track = (...args: unknown[]) => globalThis.__analyticsTestTrack(...args)')
client = client.replace("'./ga4-events'", JSON.stringify(helperUrl))
client = client.replace("'./inquiry-measurement'", JSON.stringify(measurementUrl))
const { trackAnalyticsEvent } = await import(moduleUrl(client))
trackAnalyticsEvent('contact_form_submitted', original, 'generate_lead')
assert.equal(ga[0][1], 'generate_lead')
assert.equal(ga[0][2].page_group, 'home')
assert.equal(ga[0][2].source, undefined)
assert.deepEqual(vercel[0][1], original, 'Vercel properties must remain unchanged')
assert.equal(ads.length, 0, 'Ordinary lead must not become an eligible ad conversion')
trackAnalyticsEvent('qualified_project_inquiry', { source: 'home' })
assert.equal(ads.length, 1, 'Existing qualified measurement remains separate')
assert.equal(ads[0][1], 'lead_created')
assert.equal(ga.length, 2)
assert.equal(vercel.length, 2)
delete fakeWindow.gtag
trackAnalyticsEvent('early_form_intent', { source: 'service' })
assert.equal(ga.length, 2)
fakeWindow.gtag = (...args) => ga.push(args)
fakeWindow.dispatchEvent(new Event('mbp:ga4-ready'))
fakeWindow.dispatchEvent(new Event('mbp:ga4-ready'))
assert.equal(ga.length, 3, 'Actual wrapper flushes early event once')
assert.equal(ga[2][2].page_group, 'service')
assert.equal(vercel.length, 3)
assert(fs.readFileSync('components/GoogleAnalytics.tsx', 'utf8').includes("window.dispatchEvent(new Event('mbp:ga4-ready'))"))
console.log('Analytics checks pass: context mapping, original payload preservation, deferred/exactly-once flush, expiry, bounded queue, GA alias and separate qualified-ad path. No real analytics or inquiries sent.')

// An explicit test form must not reach GA4, Vercel, OpenAI or the Google Ads event bridge.
fakeWindow.location.search = '?inquiry_test=1'
const before = [ga.length, vercel.length, ads.length]
const { analyticsEvents } = await import(eventsUrl)
for (const eventName of Object.values(analyticsEvents).filter(name => /Form|Planner|Brief|Question/.test(name))) {
  trackAnalyticsEvent(eventName, { inquiry_reference: 'MBP-00000000-0000-4000-8000-000000000001' })
}
let googleBridgeEvents = 0
fakeWindow.addEventListener('mbp:eligible-project-inquiry', () => googleBridgeEvents++)
fakeWindow.location.pathname = '/san-antonio-video-inquiry'
trackAnalyticsEvent('qualified_project_inquiry', { leadType: 'project_inquiry' })
trackAnalyticsEvent(analyticsEvents.contactFormSubmitted, {}, 'generate_lead')
assert.deepEqual([ga.length, vercel.length, ads.length], before)
assert.equal(googleBridgeEvents, 0)
fakeWindow.location.search = ''
trackAnalyticsEvent(analyticsEvents.contactFormSubmitted, { inquiry_reference: 'MBP-00000000-0000-4000-8000-000000000001' }, 'generate_lead')
assert.equal(ga.length, before[0] + 1, 'Normal inquiries resume without sticky test state')
assert.equal(vercel.length, before[1] + 1)
assert.equal(ads.length, before[2])
trackAnalyticsEvent('qualified_project_inquiry', { inquiry_reference: 'MBP-00000000-0000-4000-8000-000000000001', leadType: 'project_inquiry' })
assert.equal(googleBridgeEvents, 1, 'Normal eligible inquiry still reaches the Google Ads bridge')
assert.equal(ads.length, before[2] + 1, 'Normal eligible inquiry still reaches OpenAI measurement')
assert.equal(ga.length, before[0] + 2)
assert.equal(vercel.length, before[1] + 2)
console.log('PASS: explicit test mode excludes inquiry starts, steps, failures, leads and qualified ad measurements; real inquiries resume without persistent state.')
