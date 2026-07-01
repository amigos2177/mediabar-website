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
- **TODO (RBFCU):** run Google Rich Results Test against the live production URL to confirm Article / Breadcrumb / FAQ / Video validate.

## Remaining work
- **Batch 6 — blog post meta descriptions**: posts have an `excerpt` field but it is truncated/unusable as a meta description. Plan: add a separate `description` field to each post's front-matter (do NOT overwrite `excerpt`), then read it via `generateMetadata` in `app/blog/[slug]/page.tsx`.
- **H1 template fix**: audit flagged a duplicate/template H1 pattern — likely in `components/Layout`. Investigate before fixing.
- **Client logo alt text**: audit flagged missing or generic alt text on client logo images.
- **/work video captions**: audit flagged missing captions on Vimeo embeds in `app/work/page.tsx`.
- **GSC sitemap check**: Verify Google Search Console sitemap 'discovered pages' count (~1 week after May 23) — showed 36 vs ~38 routes; if still short, a route is missing from sitemap.ts.
- **San Antonio location page expansion**: audit wants a FAQ section, keyword-rich internal links into service pages, and client names on app/locations/san-antonio.
- **Service page body copy**: add natural "San Antonio" mentions to the body of motion-graphics, live-streaming, post-production, real-estate, and medical service pages (currently only in footer).
- **Photography page fixes**: add "San Antonio" to the H1, add an internal link from app/photography to the San Antonio location page, and add the page to the main navigation (currently orphaned).
- **Blog content depth**: expand thin blog posts (several are 300-600 words); the "Keeping Creative in San Antonio" post is a stub pointing offsite — either expand it into a real post or set it to noindex.

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
  `excerpt` (120–155 chars), `featuredImage`, plus `faqs:` (live-site standard;
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
