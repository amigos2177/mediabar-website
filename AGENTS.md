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
- Homepage redesign is live in production as of July 18, 2026 (`dpl_6WNttTVd63SU4b1ammswfX16dL5e`, commit `ccb1f1d`).

## July 18, 2026 San Antonio location redesign — preview ready
- Rebuilt `/locations/san-antonio` as a local conversion page with a cinematic hero, local awards and longevity proof, San Antonio client logos, five high-intent service paths, and a featured RBFCU case study.
- Added a local production advantage section, six industry-specific entry points, five visible FAQs, and a focused project-planner CTA.
- Strengthened local SEO with improved title/description/Open Graph metadata, `Service` schema, `FAQPage` schema, breadcrumb schema, and keyword-rich service links.
- Design direction was informed by Mobbin service-page, proof, case-study, and FAQ patterns while retaining Media Bar's established visual system.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; desktop and 390px mobile deployed previews reviewed successfully; no broken images, horizontal overflow, console errors, or en-dash characters.
- Hero spacing follow-up: added a 32px desktop/tablet inset to keep the hero copy clear of narrow browser edges and side rails; mobile retains its existing alignment.
- Deployed to production July 18, 2026 as `dpl_NicJYXzKBKEYrBGoAQsewg1HqG8f`; the public San Antonio route returns HTTP 200 with the expected metadata. Source is committed and pushed as `4dadae9`.

## July 18, 2026 Austin location redesign — preview ready
- Rebuilt `/locations/austin` as an Austin buyer journey with a production-led hero, Texas client proof, five service paths, an RBFCU campaign case study, Central Texas logistics, industry relevance, FAQs, and project-planner CTA.
- Removed generic city-guide content, emoji cards, unsupported economic rankings, and brittle client-side reveal behavior.
- Added improved Austin metadata plus `Service`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin service-page references informed the proof-first hierarchy, service-card rhythm, case-study emphasis, FAQ treatment, and final conversion section.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Promoted to production July 18, 2026 as `dpl_8is34R44KwMuhx57DkR8C9UkLYBF`; the public Austin route returns HTTP 200 with the expected title and no production errors were found in the post-deploy scan. Source is committed and pushed as `4088b72`.

## July 18, 2026 Dallas-Fort Worth location redesign — live
- Rebuilt `/locations/dallas` as an enterprise and operations-focused DFW buyer journey with a production-led hero, Texas client proof, five service paths, an RBFCU campaign case study, production-management proof, six industry entry points, FAQs, and a project-planner CTA.
- Removed the generic city-guide content, emoji cards, unsupported market superlatives and statistics, and client-side reveal behavior.
- Added improved Dallas-Fort Worth metadata plus `Service`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin professional-services and B2B service-page references informed the operational headline, proof-first hierarchy, structured capabilities, case-study treatment, process proof, FAQ, and consultation CTA.
- Replaced the soft RBFCU camera frame with the sharper 1920px farmers-market production still and verified the crop at desktop and mobile sizes.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Released to production July 18, 2026; source is committed and pushed with the release.

## July 18, 2026 Houston location redesign — live
- Rebuilt `/locations/houston` as a technical and regulated-industry buyer journey with a cinematic production hero, Texas client proof, six service paths, technical-planning proof, subject-matter interview guidance, six industry entry points, FAQs, and a project-planner CTA.
- Removed generic city-guide content, emoji cards, unsupported market claims and statistics, and client-side reveal behavior.
- Added improved Houston metadata plus `Service`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin enterprise and B2B professional-services references informed the operational headline, proof-first hierarchy, capability structure, technical workflow, FAQ treatment, and consultation CTA.
- Selected high-resolution, production-owned imagery for the hero, technical workflow, and executive interview sections; converted the Houston logo strip to `next/image`.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Released to production July 18, 2026 as `dpl_GLdZo3Ch3SZg4bMgjQYiM5yKPeru`; the canonical Houston route returns HTTP 200 with the new content and metadata, and no Houston runtime errors were found. Source is committed and pushed as `5086e44`.

## July 18, 2026 Video Production Services redesign — live
- Rebuilt `/video-production` as a guided services hub organized around four buyer outcomes instead of eleven equally weighted video cards, while preserving direct crawlable links to every service page.
- Added a production-led hero, client proof, RBFCU campaign example, four-step workflow, Texas market paths, five visible FAQs, and a focused project-planner CTA.
- Replaced eleven landing-page Vimeo embeds with optimized production imagery and direct service links to reduce page weight and decision overload.
- Added stronger metadata plus `Service`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin B2B hero, agency capability, and professional-services process patterns informed the proof-first hierarchy, grouped capabilities, workflow, FAQ, and consultation CTA.
- Fixed sitewide navigation crowding at 1280px and converted both navigation logo treatments to `next/image`.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Released to production July 18, 2026 as `dpl_GRSzMUs2y1ttN4V87iFJK3aL5S3u`; the canonical services route returns HTTP 200 with the new content and metadata, and no route-specific runtime errors were found. Source is committed and pushed as `646268a`.

## July 18, 2026 Corporate Video Production redesign — live
- Rebuilt `/video-production/corporate` as a corporate buyer journey around brand films, leadership communications, customer stories, recruiting and culture, training, and product or service storytelling.
- Added verified company proof, client logos, a click-to-play corporate reel, multi-format content planning, a stakeholder-friendly production process, cross-functional use cases, six visible FAQs, and focused project-planner CTAs.
- Removed the unsupported `500+ videos` claim, exact pricing and turnaround promises, revision and footage-ownership claims, four eager Vimeo embeds, emoji cards, manual reveal code, and client-side FAQ event handling.
- Added stronger metadata plus `Service`, `VideoObject`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin enterprise-service references informed the outcome-led hero, immediate client proof, use-case organization, process clarity, and consultation CTA while preserving Media Bar's visual system.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Reviewed preview `dpl_DwhZPuPPorHkXXooQXiRiWJQxXZz` was promoted to production July 18, 2026 as `dpl_Cu684yyunHQeHXecaeCstZ1bUFKg`; source is committed and pushed with the release.

## July 18, 2026 Commercial Video Production redesign — live
- Rebuilt `/video-production/commercials` as a campaign-focused buyer journey for broadcast, connected TV, paid social, pre-roll, brand campaigns, product launches, and public-facing messages.
- Added verified campaign proof, brand logos, a large RBFCU case-study feature, one click-to-play finished spot, multi-format deliverable planning, a launch-date-driven production process, six visible FAQs, and focused project-planner CTAs.
- Removed five eager Vimeo embeds, emoji cards, manual reveal and FAQ event code, exact budget and rush promises, and generic unsupported performance language.
- Added stronger metadata plus `Service`, `VideoObject`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin campaign and creative-agency references informed the bold outcome-led hero, immediate proof, editorial case-study scale, capability rhythm, process clarity, and consultation CTA while preserving Media Bar's visual system.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; deployed desktop and 390px mobile previews reviewed successfully with no broken images, horizontal overflow, console errors, or en-dash characters.
- Reviewed preview `dpl_CBBYY1EiEvPcPbYJNX5gANfkvma5` was promoted to production July 18, 2026 as `dpl_G7gdbMC8cmNrBAmWAfPck8LiSX6b`; source is committed and pushed with the release.

## July 18, 2026 Event Video Production redesign — live
- Rebuilt `/video-production/events` around event types, coverage planning, venue and audio coordination, post-event content value, live-streaming cross-navigation, and a four-step event workflow.
- Added selected client proof, one click-to-play NAFA conference recap, six practical deliverable examples, six visible FAQs, and focused project-planner CTAs.
- Removed four eager Vimeo embeds, emoji cards, manual reveal and FAQ event code, fixed camera-count and turnaround promises, and unsupported claims about event volume or universal venue coverage.
- Added stronger metadata plus `Service`, `VideoObject`, `FAQPage`, and breadcrumb schema with visible page content matching the structured data.
- Mobbin event and professional-services references informed the coverage-first hierarchy, immediate proof, editorial video feature, event-to-content story, and consultation CTA while preserving Media Bar's visual system.
- Verification: production build passes all 57 routes; targeted ESLint and `git diff --check` pass; protected preview `dpl_5i3Rf2G2MmE8LWccUVRdLXSPWtxe` reviewed at 1280px and 390px with no broken images, horizontal overflow, console errors, or en-dash characters.
- Added 14 new production, final-still, team, award, and founder assets under `public/images/media-library/`; use `docs/image-library.md` before selecting imagery so redesigned pages do not repeat the same photographs.
- Released to production July 18, 2026 as `dpl_5G7WrNycepuARyqySBsPGvKKF2RV`; the canonical Events route returns HTTP 200 with the new content, metadata, and concert performance still. Source is committed and pushed as `9874df6`, with this release note following.

## July 18, 2026 SEO implementation batch — preview pending
- Converted every VideoObject `uploadDate` to a complete ISO 8601 datetime with the correct Central Time offset.
- Replaced internal links that depended on redirects with their canonical service and portfolio routes.
- Repaired two legacy blog service links and completed four truncated blog excerpts.
- Added reusable named blog-author infrastructure for Ruben Garcia, visible author cards, and connected Person schema.
- Refined Search Console priority metadata and San Antonio body copy on the video-production hub plus corporate, events, live-streaming, and motion-graphics pages.
- Added `/careers` as a truthful Crew & Careers landing page, remapped legacy job and crew URLs to it, and added it to the footer and sitemap.
- Verification: the webpack production build passes all 58 routes; targeted ESLint passes. Full-repository lint retains pre-existing apostrophe errors on unrelated legacy pages.
- Preview deployment is the next and final gate for this batch. Do not promote it to production until Ruben reviews it.

## Remaining work
- **Blog content consolidation**: several thin or overlapping posts still need an editorial keep/merge/noindex decision.
- **Video transcripts/watch pages**: add only when factual source transcripts and project details are available.
- **Client logo optimization**: convert the remaining intentional `<img>` logo treatments to `next/image` where sizing behavior permits.
- **/work video captions**: verify caption availability in Vimeo and add transcript/caption links where source material exists.
- **GSC sitemap check**: Verify Google Search Console sitemap 'discovered pages' count (~1 week after May 23) — showed 36 vs ~38 routes; if still short, a route is missing from sitemap.ts.
- **Service page body copy**: add natural "San Antonio" mentions to post-production, real-estate, and medical service pages.
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
