import fs from 'node:fs'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import ts from 'typescript'
import { resolveSitemap } from 'next/dist/build/webpack/loaders/metadata/resolve-route-data.js'

// Exercise the installed framework serializer, not a copy of its implementation.
const source = fs.readFileSync('lib/sitemap-xml.ts', 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
const { escapeSitemapXml } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
const text = `Unilever & H-E-B <film> "Gary" 'Genna' &amp; café`
const url = 'https://example.com/watch?a=1&b=2'
const fixture = [{ url, lastModified: new Date('2026-11-11'), videos: [{
  title: text, description: text, thumbnail_loc: url, player_loc: url,
}] }]
const escaped = escapeSitemapXml(fixture)
assert.equal(fixture[0].videos[0].title, text, 'Must not mutate public metadata')
assert(escaped[0].lastModified instanceof Date, 'Dates must remain dates')
const xml = resolveSitemap(escaped)
const check = spawnSync('python3', ['-c', `
import json, sys, xml.etree.ElementTree as ET
payload=json.load(sys.stdin)
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','v':'http://www.google.com/schemas/sitemap-video/1.1'}
fixture=ET.fromstring(payload['fixture'])
assert fixture.find('s:url/s:loc',ns).text == payload['url']
for tag in ['title','description','thumbnail_loc','player_loc']:
    expected=payload['text'] if tag in ['title','description'] else payload['url']
    assert fixture.find('s:url/v:video/v:'+tag,ns).text == expected, tag
built=ET.fromstring(payload['built'])
urls=built.findall('s:url',ns)
assert len(urls) >= 100, len(urls)
assert len(built.findall('.//v:video',ns)) >= 44
assert len({item.find('s:loc',ns).text for item in urls}) == len(urls)
print('Strict sitemap XML and reserved-character round trips pass: '+str(len(urls))+' URLs, '+str(len(built.findall('.//v:video',ns)))+' videos.')
`], { input: JSON.stringify({fixture: xml, text, url, built: fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8')}), encoding: 'utf8' })
if (check.status !== 0) throw new Error(check.stderr || check.error?.message || 'Sitemap validation failed')
console.log(check.stdout.trim())
