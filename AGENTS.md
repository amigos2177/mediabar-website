<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mediabar-project-context -->
# Media Bar Productions — Project Context

## Stack
- Next.js 16, App Router, TypeScript, Tailwind CSS v4
- Resend for contact-form email
- Deployed on Vercel; repo at /Users/rubengarcia/mediabar-website
- Blog posts are Markdown, parsed with gray-matter + marked

## Migration — DONE & VERIFIED (do not redo)
- Migrated from old ASP.NET site (Azure) to this Next.js build
- DNS cut over May 22, 2026
- All 44 previously-indexed URLs covered by 301/308 redirects in next.config.ts — verified end-to-end before cutover
- sitemap.ts and robots.ts deployed; JSON-LD schema live on all pages
- Domains: apex mediabarproductions.com redirects to www (primary)

## Standing Rules (Claude Code)
- Per-file approval always — never "allow all"
- Auto-commit OFF at session start
- Run `npm run build` after each batch of edits
- Small, focused commits on main
- SEO-optimized descriptive slugs on any new routes

## Current State (as of June 30, 2026)
Site is live and stable. SEO metadata pass DONE for all routes.
- Root layout: title template + metadataBase set in app/layout.tsx.
- Per-route metadata: every route has unique title + description + canonical. Client-component pages use a sibling layout.tsx; server-component pages have the export directly in page.tsx.
- sitemap.ts: lastModified fixed to LAUNCH = 2026-05-22 (was `new Date()` on every deploy).
- trailingSlash: false set in next.config.ts.
- All batches build clean, 0 errors.
- **RBFCU "Go Beyond Banking" case study (DONE, pushed June 30):** new route `/work/rbfcu-go-beyond-banking` (client `page.tsx` + sibling `layout.tsx`). layout.tsx maps all SEO into Next metadata and emits the full JSON-LD graph (WebSite, Organization/LocalBusiness, WebPage, BreadcrumbList, Article, FAQPage) with real `uploadDate` on each of the 5 VideoObjects. Assets: `public/images/rbfcu-*.jpg` + `public/static/RBFCU_Go_Beyond_Banking_Case_Study.pdf`. Internal links live in `components/CaseStudyLinks.tsx` (`.mbcs-` styles in globals.css): Component 1 on /work TV Commercials, Component 2 featured card on /video-production/commercials (campfire BTS bg), Component 3A/B/C on the austin/dallas/san-antonio location pages. Added to sitemap.ts. NOTE: the /work portfolio JSON-LD (BreadcrumbList + VideoObjectSchema) was moved out of `app/work/layout.tsx` into `app/work/page.tsx` so it no longer leaks into nested /work routes.
- **RBFCU Rich Results Test (DONE, June 30):** live URL passed, 9 valid items (Article, Breadcrumb, 5 Videos, LocalBusiness, Organization). FAQPage markup is valid but no longer a rich-result type (Google restricted FAQ rich results to gov/health sites in 2023 — expected, not an error). VideoObject `uploadDate` upgraded from date-only to full ISO 8601 with timezone to clear the optional datetime/timezone warnings.
- **TODO (RBFCU) — GSC indexing, Ruben executes (manual gate):** after the current deploy, in Google Search Console:
  - [ ] URL Inspection → Request Indexing: `/work/rbfcu-go-beyond-banking` (the new page — highest priority)
  - [ ] Request recrawl of the 5 pages that now link to it: `/work`, `/video-production/commercials`, `/locations/austin`, `/locations/dallas`, `/locations/san-antonio`
  - [ ] Sitemaps → resubmit `sitemap.xml` (new URL already included at priority 0.8)
  - Note: Request Indexing is rate-limited (~10/day); do the new page first, then commercials + /work, then the 3 location pages. Footer link is site-wide but does not need per-page reindexing.

## July 17, 2026 audit sprint — implemented locally
- Added a four-step `/project-planner` that submits through the hardened contact API.
- Added filterable portfolio categories, visible project descriptions, and click-to-play Vimeo embeds.
- Added Vercel Analytics and Speed Insights with non-PII conversion events.
- Hardened the contact endpoint with input limits, allowlists, HTML escaping, honeypot handling, origin/request-size checks, and best-effort rate limiting.
- Added Photography to the main navigation and added the project planner to navigation, footer, pricing, homepage CTAs, and sitemap.
- Consolidated sitewide structured-data identity on `#business`, added a homepage `VideoObject`, and removed the duplicate RBFCU organization node.
- Corrected duplicate blog H1 output, repaired truncated excerpts, improved blog metadata, and optimized studio gallery images and alt text.
- Added keyboard focus and reduced-motion support, `next/font`, and video poster fallbacks.
- Verification: production build passes all 57 routes; targeted ESLint passes with zero errors; `git diff --check` passes.
- Not deployed. Vercel dashboard activation, GSC/Bing/IndexNow actions, durable distributed rate limiting, and transcript/watch-page content remain manual or source-content gates.

## July 18, 2026 homepage redesign — implemented locally
- Reworked the homepage around a clearer conversion story while preserving the cinematic showreel hero and Media Bar visual identity.
- Added outcome-led hero messaging, stronger primary/secondary CTAs, an above-the-fold proof strip, and optimized client-logo images.
- Elevated the RBFCU campaign into a large featured case-study module with factual campaign highlights and a direct case-study path.
- Reduced homepage service choice overload to six high-intent offerings, added useful service descriptions, and retained a path to all specialist services.
- Reframed the client portal and four-phase workflow as a concrete differentiator instead of a generic process teaser.
- Design direction was informed by Mobbin creative-agency hero and selected-work patterns, adapted to Media Bar rather than copied.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; desktop (1440px) and mobile (390px) full-page browser captures reviewed successfully.
- Latest protected Vercel preview deployed July 18, 2026 (`dpl_2LQxWL13NUTaYtWJxkGMQajw49nh`); not yet committed, pushed, or promoted to production.
- Homepage imagery follow-up: replaced the grainy RBFCU campfire frame with the sharp riverside production still and replaced the Commercials Reel helicopter poster with a web-optimized 2400px Spurs Coyote production photo supplied by Ruben.
- En-dash cleanup: removed every `U+2013` character from authored site content, metadata, form/API values, blog content, scripts, and project documentation; standardized numeric ranges and compound terms to normal hyphens. Repository scan returns zero en-dash matches and the 57-route production build passes.
- Homepage services follow-up: replaced the empty four-column area beside Motion Graphics with a responsive Specialized Production panel linking directly to interview, medical, aerial, food, real-estate, and all-service routes. Desktop and 390px mobile captures reviewed successfully.

## Remaining work
- **Blog content consolidation**: several thin or overlapping posts still need an editorial keep/merge/noindex decision.
- **Video transcripts/watch pages**: add only when factual source transcripts and project details are available.
- **Client logo optimization**: convert the remaining intentional `<img>` logo treatments to `next/image` where sizing behavior permits.
- **/work video captions**: verify caption availability in Vimeo and add transcript/caption links where source material exists.
- **GSC sitemap check**: Verify Google Search Console sitemap 'discovered pages' count (~1 week after May 23) — showed 36 vs ~38 routes; if still short, a route is missing from sitemap.ts.
- **San Antonio location page expansion**: audit wants a FAQ section, keyword-rich internal links into service pages, and client names on app/locations/san-antonio.
- **Service page body copy**: add natural "San Antonio" mentions to the body of motion-graphics, live-streaming, post-production, real-estate, and medical service pages (currently only in footer).
- **Search and analytics activation**: after deployment, confirm Vercel Analytics and Speed Insights, then complete GSC, Bing Webmaster Tools, and IndexNow account actions.

## How to update this file
At the end of each session, update the "Current State" section above so the next session knows where things stand. Verify claims with the codebase (e.g. grep for a field) rather than assuming.

## SEO & content system

Two docs in `docs/` are the source of truth for all blog and SEO work. Read the
relevant one before acting:

- **`docs/blog-engine.md`** — how to produce a ranking-ready blog post end to end:
  topic radar → committable `.md` → optional audio overview → matching GBP promo.
  Use it for any "run it" / "new blog post" request.
- **`docs/seo-playbook.md`** — daily SEO ops: GBP rules, reviews, measurement, and
  the canonical two-mode instructions. Use it for GBP posts, review asks, the
  weekday rotation, and measurement.

When the spec doc and the live repo disagree, the **live repo wins** — confirm new
work against an existing published post.

## Repo conventions (blog)

- Posts: `content/blog/<slug>.md` — slug = filename; `sitemap.ts` auto-discovers every `.md`.
- Images: `public/images/blog/<slug>.png` (referenced `/images/blog/<slug>.png`).
- Audio: `public/audio/blog/<slug>.mp3` (referenced `/audio/blog/<slug>.mp3`).
- Markdown renders **raw HTML** (`marked` → `dangerouslySetInnerHTML`) — `<figure>`,
  `<audio>`, `<details>`, and inline `<style>` work directly in a `.md`. No MDX needed.
- Front-matter keys: `title` (≤40 chars, keyword front-loaded), `slug`, `date`,
  `excerpt` (120-155 chars), `featuredImage`, plus `faqs:` (live-site standard;
  powers `FAQPageJsonLd` in `components/JsonLd.tsx`).
- Match an existing live post's front-matter before committing a new one.

## Hard rules (do not violate)

- **Manual gates are the human's:** merge/publish, GSC URL Inspection → Request
  Indexing, GBP posting, and sending any email. Agents draft; Ruben executes.
- **Canonical domain:** `mediabarproductions.com` — use it for all internal links
  and GBP CTAs.
- **No invented statistics.** Keep cost talk in ranges, never fabricated figures.
- **Reviews:** genuine clients only — never vendors, freelancers, or staff. No
  incentives, no scripted wording. Link: `https://g.page/r/CU_xOVu2pdSuEBM/review`
- **GBP posts:** front-load the first ~120 chars, no phone numbers in the body,
  1200×900 4:3 image (subject centered), UTM-tag links
  (`?utm_source=gbp&utm_medium=organic&utm_campaign=<name>`). "What's New" posts
  archive after 7 days; also add images to the Photos tab (those don't expire).
<!-- END:mediabar-project-context -->
