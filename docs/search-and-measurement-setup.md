# Search and Measurement Setup

This is the operating checklist for search verification, sitemap submission, conversion measurement, and baseline reporting.

## Canonical property

- Website: `https://www.mediabarproductions.com`
- Google Search Console domain property: `mediabarproductions.com`
- Google Search Console URL prefix property, if needed: `https://www.mediabarproductions.com/`
- Sitemap: `https://www.mediabarproductions.com/sitemap.xml`
- Robots file: `https://www.mediabarproductions.com/robots.txt`

Use the domain property as the primary Google Search Console property. It covers the root domain, `www`, and any other subdomains. Keep the URL prefix property only when a tool or workflow requires it.

## Site verification

The root layout supports verification tokens through Vercel environment variables:

| Provider | Vercel environment variable | Generated tag |
|---|---|---|
| Google Search Console | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `google-site-verification` |
| Bing Webmaster Tools | `NEXT_PUBLIC_BING_SITE_VERIFICATION` | `msvalidate.01` |

Enter only the token value, not the full meta tag. Set each variable for Production, Preview, and Development if verification must work in every environment. Production is the required environment.

After adding a token in Vercel:

1. Redeploy production.
2. View the homepage source.
3. Confirm the expected verification meta tag is present.
4. Complete verification in the provider dashboard.

DNS verification is preferred for the Google domain property. The meta tag variables remain useful for a URL prefix property and for Bing.

## Google Search Console

1. Add or confirm the domain property for `mediabarproductions.com`.
2. Verify ownership through the DNS record Google provides.
3. Submit `https://www.mediabarproductions.com/sitemap.xml`.
4. Confirm the sitemap status is successful and review discovered page totals.
5. Request indexing for the priority URLs below after major releases.

### Priority indexing queue

1. `https://www.mediabarproductions.com/`
2. `https://www.mediabarproductions.com/video-production`
3. `https://www.mediabarproductions.com/video-production/corporate`
4. `https://www.mediabarproductions.com/video-production/commercials`
5. `https://www.mediabarproductions.com/video-production/events`
6. `https://www.mediabarproductions.com/video-production/medical`
7. `https://www.mediabarproductions.com/video-production/live-streaming`
8. `https://www.mediabarproductions.com/locations/san-antonio`
9. `https://www.mediabarproductions.com/work`
10. `https://www.mediabarproductions.com/contact`

Request indexing only for important new or materially updated URLs. The sitemap and internal links handle the full site.

## Bing Webmaster Tools

1. Add `https://www.mediabarproductions.com`.
2. Import the verified Google Search Console property when available, or use the Bing meta tag.
3. Submit `https://www.mediabarproductions.com/sitemap.xml`.
4. Confirm that Bing processed the sitemap without errors.
5. Review Site Explorer, Search Performance, Backlinks, and SEO Reports after data begins to populate.

## IndexNow automation

IndexNow is configured to submit only changed, public URLs after the matching
commit is live on the production domain.

- Verification key:
  `https://www.mediabarproductions.com/87c34f30eb5268423b5a521989b425ca.txt`
- Deployment check:
  `https://www.mediabarproductions.com/api/deployment`
- Submission script: `scripts/submit-indexnow.mjs`
- GitHub workflow: `.github/workflows/indexnow.yml`

The workflow runs on pushes to `main`, waits until the production deployment
reports the same Git commit, reads the live sitemap, maps changed source files
to canonical public URLs, and sends those URLs to the IndexNow bulk endpoint.
It skips documentation-only changes and does not submit preview domains.

Validation commands:

- `npm run indexnow:dry-run` previews the full payload without submitting it.
- `npm run indexnow -- --dry-run --changed-since <commit>` previews only URLs
  affected since a specific commit.

IndexNow notifies participating search engines that a URL changed. It does not
guarantee crawling or indexing. Continue using Google Search Console and Bing
Webmaster Tools for coverage and performance review.

## Conversion event taxonomy

Vercel Web Analytics is the primary on-site measurement layer. Event properties are intentionally limited to two flat, non-personal values for broad plan compatibility.

| Event | Meaning | Properties |
|---|---|---|
| `Conversion Intent Clicked` | A visitor clicked phone, email, contact, planner, or portal access | `intent`, `placement` |
| `Conversion Source Clicked` | A conversion-intent click grouped by the type of page that generated it | `intent`, `source` |
| `Blog Journey Clicked` | A blog reader moved to a service, work, contact, planner, phone, email, or portal destination | `destination`, `placement` |
| `Campaign Landing Viewed` | A tagged campaign visit reached the site, including Google Business Profile links | `source`, `campaign` |
| `Contact Form Started` | A person changed the first real contact field | none |
| `Contact Form Submitted` | The contact API accepted a valid message | `service` |
| `Contact Form Submission Failed` | A server or network error blocked the contact submission | `reason`, `service` |
| `Project Planner Started` | A person changed the first real planner field | none |
| `Project Planner Step Completed` | A validated planner step advanced | `stepNumber`, `stepName` |
| `Project Brief Submitted` | The contact API accepted a complete project brief | `service`, `timeline` |
| `Project Brief Submission Failed` | A server or network error blocked the brief | `reason`, `service` |
| `Portfolio Video Played` | A visitor opened a Vimeo portfolio player | `videoId`, `title` |

Never add names, email addresses, phone numbers, company names, messages, project overviews, or pasted links to analytics events.

## Primary and supporting conversions

Primary conversions:

- `Contact Form Submitted`
- `Project Brief Submitted`
- Phone clicks from `Conversion Intent Clicked`
- Email clicks from `Conversion Intent Clicked`

Supporting conversions:

- Contact and planner starts
- Completed planner steps
- Portfolio video plays
- Visits to `/contact` and `/project-planner`
- Blog journeys into service and inquiry pages
- Tagged campaign landings, including Google Business Profile traffic

Do not count client portal clicks as marketing leads.

## Conversion reporting views

Use these saved views in Vercel Web Analytics:

1. Primary leads: `Contact Form Submitted` plus `Project Brief Submitted`.
2. Direct inquiries: `Conversion Intent Clicked`, filtered to `phone` or `email`.
3. CTA source quality: `Conversion Source Clicked`, grouped by `source` and filtered by `intent`.
4. Blog contribution: `Blog Journey Clicked`, grouped by `destination`.
5. Google Business Profile traffic: `Campaign Landing Viewed`, filtered to `source = gbp`.

The tracking layer does not send names, email addresses, phone numbers, company
names, messages, project overviews, or pasted links. Campaign parameters are
trimmed to 100 characters and recorded once per tagged landing page per browser
session.

## Baseline snapshot

Record the first complete baseline after Google Search Console, Bing, and the new production analytics release have collected enough data. Use the previous 28 full days and compare them with the prior 28 days.

Baseline date: `2026-07-19`
Google Search Console reporting window: `2026-06-20` through `2026-07-17`

| Metric | Current value | Prior period | Source |
|---|---:|---:|---|
| Organic clicks | 38 | Pending | Google Search Console |
| Organic impressions | 11,238 | Pending | Google Search Console |
| Organic CTR | 0.3% | Pending | Google Search Console |
| Average position | 30.9 | Pending | Google Search Console |
| Indexed sitemap pages | 44 of 48 | Pending | Google Search Console |
| Bing clicks | Pending account data | Pending | Bing Webmaster Tools |
| Bing impressions | Pending account data | Pending | Bing Webmaster Tools |
| Total site visitors | Pending production data | Pending | Vercel Web Analytics |
| Contact form submissions | Pending production data | Pending | Vercel Web Analytics |
| Project brief submissions | Pending production data | Pending | Vercel Web Analytics |
| Phone intent clicks | Pending production data | Pending | Vercel Web Analytics |
| Email intent clicks | Pending production data | Pending | Vercel Web Analytics |

### Google Search Console audit notes

- Domain property is verified for `mediabarproductions.com`.
- Sitemap was submitted on `2026-06-30`.
- Sitemap status was `Success` and was last read on `2026-07-16`.
- Google reported 44 indexed sitemap URLs and 4 discovered URLs not yet indexed.
- Three indexable URLs needed stronger signals: `/blog`,
  `/blog/importance-of-video-production-services`, and
  `/video-production/aerial`.
- `/blog/boost-seo-with-video-production-ai-era` is intentionally retired and
  redirects directly to `/blog/ai-video-production-limits`; the retired URL
  should not be submitted for indexing.
- HTTPS report showed 0 non-HTTPS URLs and no critical issues.
- Manual Actions reported no issues.
- Security Issues reported no issues.
- Core Web Vitals had insufficient Chrome usage data for mobile and desktop.
- Search Console reported 394 external links, but most were concentrated in low-value or suspicious domains. Link count alone should not be treated as authority.

### Current search opportunities

The highest-impression, low-click queries in the 28-day baseline were:

| Query | Clicks | Impressions |
|---|---:|---:|
| `event video production` | 0 | 716 |
| `video production san antonio` | 0 | 291 |
| `video production for events` | 0 | 245 |
| `video production company san antonio` | 1 | 39 |
| `post production san antonio` | 1 | 25 |

The event service page led non-homepage impressions with 2,326 impressions and 1 click. Live streaming had 755 impressions and 1 click. Medical video had 714 impressions and 1 click. These pages are the first title, description, snippet, and intent-alignment tests after the measurement release.

## Weekly scorecard

Review every Friday:

1. Google clicks, impressions, position, and top queries.
2. Landing pages gaining or losing organic traffic.
3. Sitemap and indexing errors.
4. Primary conversion totals and conversion intent by placement.
5. Planner starts, step completions, and submitted briefs.
6. Bing search performance and crawl issues.
7. Google Business Profile calls, website clicks, direction requests, and searches.
8. One observation and one action for the next week.

## UTM convention

Use lowercase values with hyphens:

`?utm_source=gbp&utm_medium=organic&utm_campaign=<campaign-name>`

Recommended source values:

- `gbp`
- `linkedin`
- `youtube`
- `email`
- `partner`

Do not tag internal links with UTM parameters. Internal UTMs overwrite acquisition attribution.

## Google Business Profile alignment

- Website URL: `https://www.mediabarproductions.com/`
- Primary market: San Antonio
- Phone: `210-279-9442`
- Service and description language should match the website.
- Use the same business name, address, phone, hours, and category details across major citations.
- Link posts to the closest service, location, work, or blog page with the UTM convention above.

## Monthly authority review

Track:

- New referring domains
- High-quality local, industry, client, partner, and award links
- Broken or incorrect citations
- Brand mentions without links
- New reviews and rating trend
- Pages that need stronger internal links

Favor relevant earned links and accurate citations. Do not buy bulk links or create low-quality directory profiles.
