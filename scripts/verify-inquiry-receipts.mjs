// Actual contact route with isolated mail transport. No credentials, emails or analytics sent.
import fs from 'node:fs'
import vm from 'node:vm'
import { randomUUID } from 'node:crypto'
import assert from 'node:assert/strict'
import ts from 'typescript'

function compile(file, dependencies, globals = {}) {
  const fixture = { exports: {} }
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  vm.runInNewContext(js, {
    module: fixture, exports: fixture.exports,
    require(name) { assert(name in dependencies, `Unexpected import: ${name}`); return dependencies[name] },
    URL, URLSearchParams, TextDecoder, Uint8Array, console: { error() {} }, ...globals,
  })
  return fixture.exports
}
const events = compile('lib/analytics-events.ts', {})
const measurement = compile('lib/inquiry-measurement.ts', { './analytics-events': events })
const pattern = /^MBP-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
const valid = {
  firstName: 'Receipt', lastName: 'Fixture', email: 'fixture@example.invalid',
  message: 'Can you quote a test shoot and testimonial film?',
  service: 'Corporate Video', budget: '$5,000 - $15,000',
  firstTouchSource: 'google', utmSource: 'google', utmMedium: 'cpc',
  utmCampaign: 'isolated-fixture', landingPage: '/video-production/corporate',
  sourcePage: '/project-planner', sourcePlacement: 'home-hero', sourceAction: 'start_project',
}
function setup(outcome = 'success') {
  const emails = []
  class FakeResend {
    emails = { send: async email => {
      emails.push(email)
      if (outcome === 'throw') throw Error('isolated mail failure')
      return outcome === 'error' ? { error: { message: 'isolated rejection' } } : { data: { id: 'isolated-provider-id' }, error: null }
    } }
  }
  const { POST } = compile('app/api/contact/route.ts', {
    'node:crypto': { randomUUID }, 'next/server': { NextResponse: { json: (body, init) => Response.json(body, init) } },
    resend: { Resend: FakeResend }, '@/lib/discovery-sources': { discoverySources: ['Google Search', 'Other'] },
  }, { process: { env: { RESEND_API_KEY: 'isolated-stub-only' } } })
  function request(body = valid, headers = {}) {
    return new Request('http://localhost:3121/api/contact', { method: 'POST',
      headers: { 'Content-Type': 'application/json', Host: 'localhost:3121', Origin: 'http://localhost:3121', ...headers },
      body: JSON.stringify(body),
    })
  }
  return { POST, emails, request }
}
const results = []
const real = setup()
const references = new Set()
for (const source of [undefined, 'contact-quick-question', 'video-production-faq']) {
  const response = await real.POST(real.request({ ...valid, source, inquiryReference: 'attacker-supplied-reference' }))
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('cache-control'), 'no-store')
  const receipt = await response.json()
  assert.equal(receipt.success, true)
  assert.equal(receipt.internalTest, false)
  assert.match(receipt.inquiryReference, pattern)
  assert(!references.has(receipt.inquiryReference)); references.add(receipt.inquiryReference)
  const email = real.emails.at(-1)
  assert(email.subject.endsWith(`[${receipt.inquiryReference}]`))
  assert(email.html.includes(receipt.inquiryReference))
  assert(!email.subject.includes('[INTERNAL TEST]'))
  assert(!email.html.includes('attacker-supplied-reference'))
  assert.equal(email.to, 'contact@mediabarproductions.com')
  assert.equal(email.replyTo, valid.email)
  assert(email.html.includes('isolated-fixture') && email.html.includes('home-hero'))
  const analytics = measurement.inquiryReceiptProperties(receipt)
  assert.equal(analytics.inquiry_reference, receipt.inquiryReference)
  assert(measurement.shouldTrackInquiry(receipt, '', false))
  assert(!JSON.stringify(analytics).includes(valid.email))
  results.push({ scenario: source || 'project', accepted: true, emailAndAnalyticsReferenceMatch: true })
}
const internal = setup()
for (const source of [undefined, 'contact-quick-question', 'video-production-faq']) {
  const response = await internal.POST(internal.request({ ...valid, source, internalTest: true }))
  assert.equal(response.status, 200)
  const receipt = await response.json()
  assert.equal(receipt.internalTest, true)
  assert.match(receipt.inquiryReference, pattern)
  const email = internal.emails.at(-1)
  assert(email.subject.startsWith('[INTERNAL TEST] '))
  assert(email.html.includes('INTERNAL TEST — not a customer lead'))
  assert(email.html.includes(receipt.inquiryReference))
  assert(!measurement.shouldTrackInquiry(receipt, '', false), 'Server test acknowledgement excludes leads even without current URL flag')
  results.push({ scenario: `internal-${source || 'project'}`, emailedAndLabelled: true, leadEligible: false })
}
for (const flag of ['true', 'false', 1, 0, null, [], {}]) {
  const t = setup(); const response = await t.POST(t.request({ ...valid, internalTest: flag }))
  assert.equal(response.status, 400); assert.equal(t.emails.length, 0)
}
for (const outcome of ['error', 'throw']) {
  const t = setup(outcome); const response = await t.POST(t.request())
  assert.equal(response.status, 500)
  const receipt = await response.json()
  assert.equal(receipt.inquiryReference, undefined)
}
for (const body of [{ ...valid, website: 'bot' }, { ...valid, website: 'bot', internalTest: true }]) {
  const t = setup(); const response = await t.POST(t.request(body))
  assert.equal(response.status, 200); assert.equal(t.emails.length, 0)
  assert.equal((await response.json()).inquiryReference, undefined)
}
for (const change of [{ email: 'invalid' }, { firstName: '' }, { message: '' }, { source: 'invalid' }]) {
  const t = setup(); const response = await t.POST(t.request({ ...valid, ...change, internalTest: true }))
  assert.equal(response.status, 400); assert.equal(t.emails.length, 0)
}
const rateCheck = setup()
for (let attempt = 0; attempt < 5; attempt++) assert.equal((await rateCheck.POST(rateCheck.request({ ...valid, internalTest: true }))).status, 200)
assert.equal((await rateCheck.POST(rateCheck.request({ ...valid, internalTest: true }))).status, 429)
assert.equal(rateCheck.emails.length, 5)
const originCheck = setup()
assert.equal((await originCheck.POST(originCheck.request({ ...valid, internalTest: true }, { Origin: 'https://other.example' }))).status, 403)
assert.equal(originCheck.emails.length, 0)
assert(measurement.isInternalInquiryTest('?inquiry_test=1'))
for (const search of ['', '?inquiry_test=0', '?inquiry_test=true', '?utm_campaign=test', '?name=Test']) {
  assert(!measurement.isInternalInquiryTest(search))
}
for (const receipt of [null, {}, { inquiryReference: valid.email }, { inquiryReference: 'bad' }]) {
  assert.equal(measurement.inquiryReceiptProperties(receipt).inquiry_reference, undefined)
}
if (process.env.INQUIRY_REVIEW_OUTPUT) {
  fs.mkdirSync(process.env.INQUIRY_REVIEW_OUTPUT, { recursive: true })
  fs.writeFileSync(`${process.env.INQUIRY_REVIEW_OUTPUT}/normal-email-preview.html`, real.emails[0].html)
  fs.writeFileSync(`${process.env.INQUIRY_REVIEW_OUTPUT}/internal-test-email-preview.html`, internal.emails[0].html)
}
console.log(JSON.stringify({ results, checks: ['random server references; ignored client reference', 'email/response/analytics reference equality', 'normal messages mentioning tests remain real', 'explicit tests labelled and excluded', 'invalid flags rejected', 'honeypots and provider failures have no successful reference', 'test mode preserves validation and origin checks', 'PII and invalid references excluded from analytics'] }, null, 2))
