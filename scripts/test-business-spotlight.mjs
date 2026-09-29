import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

// Compile only the independent request handler for isolated tests. No credentials or network calls.
const directory = mkdtempSync(path.join(tmpdir(), 'spotlight-tests-'))
for (const name of ['business-spotlight', 'business-spotlight-handler']) {
  const source = readFileSync(new URL(`../lib/${name}.ts`, import.meta.url), 'utf8')
  writeFileSync(path.join(directory, `${name}.js`), ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText)
}
const require = createRequire(import.meta.url)
const { createSpotlightHandler } = require(path.join(directory, 'business-spotlight-handler.js'))
process.on('exit', () => rmSync(directory, { recursive: true, force: true }))
const valid = {
  businessName: 'Test Business', contactName: 'Test Applicant', email: 'test@example.com', city: 'Boerne',
  businessLink: 'https://example.com', story: 'We make furniture and teach people how to care for it.', visuals: 'Our workshop, makers and finished tables.',
  eligible: true, participation: true, publicationPermission: true, contactPermission: true, submissionId: '9a0e5d60-9a30-4b23-8f4a-123456789abc',
}
function request(body = valid, headers = {}) {
  return new Request('http://localhost:3100/api/business-spotlight', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3100', ...headers }, body: JSON.stringify(body) })
}
function setup(options = {}) {
  const calls = []
  const handler = createSpotlightHandler({ enabled: () => true, send: async (...args) => { calls.push(args); return true }, ...options })
  return { handler, calls }
}
test('all three eligible cities deliver complete applications and stable retry keys', async () => {
  const { handler, calls } = setup()
  for (const city of ['San Antonio', 'Boerne', 'New Braunfels']) {
    const response = await handler(request({ ...valid, city }))
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { success: true })
  }
  assert.equal(calls.length, 3)
  assert.equal(calls[0][0].replyTo, valid.email)
  assert.match(calls[0][0].subject, /Business Spotlight application: Test Business/)
  assert.match(calls[0][0].text, /two rounds of revisions/i)
  assert.match(calls[0][0].text, /No marketing subscription/)
  assert.match(calls[0][0].text, /2026-09-29-pilot-3-youtube-broll/)
  assert.match(calls[0][0].text, /YouTube publication permission: confirmed/)
  assert.match(calls[0][0].text, /I understand the episode will be public/)
  assert.match(calls[0][0].text, /approximately one minute of selected B-roll follows seven days/)
  assert.equal(calls[0][1], `business-spotlight/${valid.submissionId}`)
})
test('invalid city, email, URL, consent, field sizes and injected headers never reach email', async () => {
  for (const change of [{ city: 'Austin' }, { email: 'invalid' }, { businessLink: 'javascript:alert(1)' }, { eligible: false }, { participation: 'true' }, { publicationPermission: false }, { publicationPermission: undefined }, { publicationPermission: 'true' }, { contactPermission: false }, { story: 'x'.repeat(2001) }, { contactName: 'Name\r\nBcc: attacker@example.com' }, { submissionId: 'bad' }, { businessName: {} }]) {
    const { handler, calls } = setup()
    assert.equal((await handler(request({ ...valid, ...change }))).status, 400)
    assert.equal(calls.length, 0)
  }
})
test('cross-origin, invalid JSON, oversize and honeypot requests do not send', async () => {
  const { handler, calls } = setup()
  assert.equal((await handler(request(valid, { Origin: 'https://other.example' }))).status, 403)
  assert.equal((await handler(new Request('http://localhost:3100/api/business-spotlight', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{broken' }))).status, 400)
  assert.equal((await handler(request({ ...valid, story: 'x'.repeat(17_000) }))).status, 413)
  assert.equal((await handler(request({ ...valid, faxNumber: 'bot' }))).status, 400)
  assert.equal(calls.length, 0)
})
test('rate limit blocks attempts and expires after ten minutes', async () => {
  let now = 1_000
  const { handler, calls } = setup({ now: () => now })
  for (let i = 0; i < 5; i++) assert.equal((await handler(request())).status, 200)
  assert.equal((await handler(request())).status, 429)
  assert.equal(calls.length, 5)
  now += 600_001
  assert.equal((await handler(request())).status, 200)
})
test('closed and preview modes reject without sending', async () => {
  const { handler, calls } = setup({ enabled: () => false })
  assert.equal((await handler(request())).status, 503)
  assert.equal(calls.length, 0)
})
test('public host works when Next normalizes the internal URL; malformed origin is rejected', async () => {
  const { handler, calls } = setup()
  const forwarded = new Request('http://localhost:3101/api/business-spotlight', {method:'POST',headers:{'Content-Type':'application/json',Host:'127.0.0.1:3101',Origin:'http://127.0.0.1:3101'},body:JSON.stringify(valid)})
  assert.equal((await handler(forwarded)).status,200)
  assert.equal((await handler(request(valid,{Origin:'null'}))).status,403)
  assert.equal(calls.length,1)
})
test('identical retries produce identical email content and key', async () => {
  let now = 1000
  const { handler, calls } = setup({ now:()=>now })
  await handler(request())
  now += 5000
  await handler(request())
  assert.deepEqual(calls[0],calls[1])
})
test('provider failures never report a successful application', async () => {
  for (const send of [async () => false, async () => { throw new Error('Network failure') }]) {
    const { handler } = setup({ send })
    const response = await handler(request())
    assert.equal(response.status, 502)
    assert.match((await response.json()).error, /could not be confirmed/)
  }
})
