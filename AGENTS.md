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

## Current State (as of May 23, 2026)
Site is live and stable. SEO metadata pass DONE for all 38 routes.
- Root layout: title template + metadataBase set in app/layout.tsx.
- Per-route metadata: all 38 routes have unique title + description + canonical. Client-component pages use a sibling layout.tsx; server-component pages have the export directly in page.tsx.
- sitemap.ts: lastModified fixed to LAUNCH = 2026-05-22 (was `new Date()` on every deploy).
- trailingSlash: false set in next.config.ts.
- All batches build clean (42 routes, 0 errors).

## Remaining work
- **Batch 6 — blog post meta descriptions**: posts have an `excerpt` field but it is truncated/unusable as a meta description. Plan: add a separate `description` field to each post's front-matter (do NOT overwrite `excerpt`), then read it via `generateMetadata` in `app/blog/[slug]/page.tsx`.
- **H1 template fix**: audit flagged a duplicate/template H1 pattern — likely in `components/Layout`. Investigate before fixing.
- **Client logo alt text**: audit flagged missing or generic alt text on client logo images.
- **/work video captions**: audit flagged missing captions on Vimeo embeds in `app/work/page.tsx`.
- **GSC sitemap check**: Verify Google Search Console sitemap 'discovered pages' count (~1 week after May 23) — showed 36 vs ~38 routes; if still short, a route is missing from sitemap.ts.

## How to update this file
At the end of each session, update the "Current State" section above so the next session knows where things stand. Verify claims with the codebase (e.g. grep for a field) rather than assuming.
<!-- END:mediabar-project-context -->
