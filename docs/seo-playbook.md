# Media Bar SEO Playbook

The single front door for daily SEO. Open this each morning.
Repo home: `docs/seo-playbook.md` · Replaces the standalone `seo-daily-plan.md`.

## The system map (four parts, one engine)

| Part | What it does | Where it lives |
|---|---|---|
| **Blog Engine** | Produces ranking-ready blog posts | Claude Project + `docs/blog-engine.md` |
| **This Playbook** | Daily ops: GBP, reviews, links, authority, measurement | `docs/seo-playbook.md` |
| **Client Tracker** | Data backbone for reviews / reconnect / referrals | [Google Sheet](https://docs.google.com/spreadsheets/d/1tIuOIGAUa5esbxzQ2HZ7Pm__AMIkkRWHey-uFEYeONQ/edit) |
| **GBP** | Local-pack engine, anchored to San Antonio | Google Business Profile |

**Core principle:** GBP is anchored to your real San Antonio location. Austin,
Houston, and Dallas are won on the SITE — strong `/locations/*` pages + content +
local links — not on GBP.

**The one habit that powers everything:** add a row to the Client Tracker at every
project delivery. That single act keeps reviews, reconnects, and referrals flowing.

---

## How to run it (Project instructions)

This is the canonical copy of the Project's custom instructions. Keep it in sync:
if you change how the modes work, edit it here first, then paste into the Project.
(Supersedes the standalone Kickoff Prompt in `blog-engine.md`, which remains the
content-production spec for Mode 1.)

```
You are the Media Bar SEO assistant. Two knowledge docs guide you:
blog-engine.md (content production) and seo-playbook.md (daily SEO ops, GBP,
reviews, measurement). Follow their specs exactly.

TWO MODES, triggered by what I say:

── MODE 1: "run the blog engine" (also "run it" / "new blog post") ──
Follow blog-engine.md exactly.
STEP 1 — Topic radar: web-search current angles, cross-checked against the
ranking gaps (event/conference, medical/healthcare, live-streaming/webcasting,
corporate, food/restaurant). Give 5-7 candidates, each tagged Track A or B with
target keyword, target reader, the on-site page it links to, and why now. STOP
and let me pick. Don't draft yet.
STEP 2 — On my pick, write the full committable .md in Media Bar's exact format:
front-matter keys ONLY (title ≤40 chars keyword-front-loaded, slug, date,
excerpt 120-155 chars, featuredImage), ~1,200-1,500 words in Media Bar voice,
3-5 H2s, a short FAQ, a /contact CTA, and 3-4 real internal links. Save as
content/blog/<slug>.md, give it to me as a downloadable file, then remind me of
the publish checklist. No invented stats; cost talk in ranges.
STEP 3 — GBP promo: after the .md, draft the matching GBP "What's New" promo for
the post. Front-load the first ~120 chars, ~2 short paragraphs + a one-line nudge,
Media Bar voice, NO phone in the body. CTA button "Learn more" → the new blog URL
tagged ?utm_source=gbp&utm_medium=organic&utm_campaign=<name>. Include a 1200×900
4:3 image note (center-crop of the featuredImage). Ready to paste. One per post;
space multiple posts ~a week apart.

── MODE 2: "run my SEO day" ──
Use the weekday rotation in seo-playbook.md.
1. Confirm today's day of week (ask if unclear).
2. Restate the two fixed daily habits: respond to any new review; one small GBP
   action.
3. Draft the artifacts for today's needle-mover:
   MON — run topic radar (Mode 1 STEP 1) + draft GBP Post #1 (front-loaded copy,
         "Learn more" CTA + UTM, 4:3 image reminder).
   TUE — remind me to publish blog #1 + request indexing; name 1-2 specific older
         posts to internally link to it.
   WED — draft 3-5 review-request messages pulled from the Client Tracker (genuine
         CLIENTS only — never vendors/freelancers); use the wrap-email template.
   THU — propose one off-site authority task + draft GBP Post #2.
   FRI — remind me to publish blog #2 + request indexing; produce the weekly
         metrics-check template; ask me for one insight to feed Monday.
4. End by listing what's mine to do manually.

ALWAYS-ON RULES:
- Manual gates are mine: publishing/merge, GSC Request Indexing, GBP posting, and
  sending any email. You draft; I execute.
- Reviews: genuine clients only, no incentives, no scripted wording.
  Review link: https://g.page/r/CU_xOVu2pdSuEBM/review
- GBP: "What's New" posts expire in 7 days; front-load the first ~120 chars; no
  phone numbers in the post body; images 1200×900 4:3; tag links with
  ?utm_source=gbp&utm_medium=organic&utm_campaign=<name>.
- Client Tracker (add a row at every delivery):
  https://docs.google.com/spreadsheets/d/1tIuOIGAUa5esbxzQ2HZ7Pm__AMIkkRWHey-uFEYeONQ/edit
- Confirm the canonical domain (mediabarproductions.com vs. mediabarsa.com) before
  building internal links or GBP CTAs.
```

---

## 1. Daily rhythm (~20-40 min weekdays)

**Fixed daily (every weekday, ~10 min):**
- [ ] Respond to any new review — same day, even one line
- [ ] One small GBP action — upload a photo/clip, answer/seed a Q&A, or verify info

**Weekday rotation (one needle-mover/day):**
- **MON — Plan & post** (~30m): Blog Engine topic radar / draft pick · publish/schedule GBP Post #1
- **TUE — Ship content** (~35m): publish blog #1 → request indexing in GSC · link 1-2 older posts to it
- **WED — Reviews push** (~20m): 3-5 review requests (new clients + back-catalog via `mediabar-reconnect`)
- **THU — Authority** (~30m): one off-site task (citation / backlink ask / local PR / Emmy mention) · publish GBP Post #2
- **FRI — Ship + measure** (~40m): publish blog #2 → request indexing · weekly metrics check · note 1 insight for Monday
- **WEEKEND (optional):** cut 1 short vertical clip from recent footage → Short/Reel + embed on a page

**Bad-week floor (shoot-heavy weeks, ~10 min):**
- [ ] Respond to any new review · [ ] one GBP photo/clip · [ ] one internal link OR one review request

*Order of protection when slammed: Reviews + GBP → blog posts → off-site can wait.*

**Weekly anchors:** 2 blog posts indexed · 2 GBP posts + 5 daily GBP actions · 3-5 review
requests · 1 internal-link pass · 1 off-site task · 1 Friday measurement loop.

**Monthly deep work (~2 hrs):** refresh 1 older post + re-index · audit 1 page (title, excerpt,
headings, links, embedded video, schema) · build 3-5 citations / fix NAP · competitor glance ·
GSC trend review · technical hygiene (sitemap, Core Web Vitals, mobile).

---

## 2. GBP playbook

**Rules (2026 — enforcement is AI-driven, so follow these):**
- "What's New" posts archive after **7 days** (Event/Offer posts last until their end date) → post is a recurring habit, not one-and-done.
- 1,500-char limit, but **front-load the first ~120 chars** — Maps/mobile truncate early.
- **No phone numbers in the body** (use the CTA button) · **no incentives** · **don't ask for specific wording or staff names.**
- Image: **1200×900, 4:3, JPG/PNG, <5MB, subject centered.**
- Tag every link: `?utm_source=gbp&utm_medium=organic&utm_campaign=<name>` so you can measure it.
- Space posts ~a week apart. Also add images to the **Photos tab** (those don't expire).

**CTA button default:** "Learn more" → a service or location page. Test "Book/Call" → `/contact` for lead-focused posts.

### Post bank (ready to use)

**Standalone — BTS (factory shoot image / truck shoot image):**
- *Truck:* "Behind the scenes on a San Antonio corporate shoot — two cameras, full lighting, real location, real story." → Learn more → `/video-production/corporate`
- *Factory:* "On the factory floor, capturing the people and the tech behind the operation. Corporate video that shows how the work actually gets done." → Learn more → `/video-production/corporate`

**Blog-promo (when a post goes live):**
- *Corporate multi-format:* "One video shoot. A month of content. See how San Antonio brands turn a single production day into social, web, and internal video — without blowing the budget." → Learn more → blog URL
- *AI vs. crew:* "AI video tools are everywhere in 2026 — but are they enough? Here's when they work, and when a real Texas crew earns back every dollar." → Learn more → blog URL

*Optimized images ready: `Corporate_Video_Production_San_Antonio_GBP_1200x900.jpg`, `Corporate_Video_Production_GBP_1200x900.jpg`.*

---

## 3. Review system

Your review link: **https://g.page/r/CU_xOVu2pdSuEBM/review**

**Rules:**
- Only genuine **clients** — never employees, vendors, contractors, or freelancers (conflict-of-interest = policy violation + removal risk).
- No incentives. Don't request specific wording or that they name a staff member. Just ask.
- Drip a few asks per week (the Wednesday slot) — avoid unnatural volume spikes.

**Wrap email (send at delivery — peak-happiness moment):**
> **Subject:** That's a wrap on [project] 🎬
> Hi [Name], it was a pleasure working with you on [project] — thank you for trusting us with it. Everything's delivered and yours to use; just say the word if you need another cut or format. If you've got 60 seconds, a quick Google review would mean a lot and helps other Texas teams find us: https://g.page/r/CU_xOVu2pdSuEBM/review — thanks again. Best, Ruben

**Email signature line:** 🌟 Worked with us? A quick Google review helps a lot: https://g.page/r/CU_xOVu2pdSuEBM/review

**Invoice footer line:** Enjoyed working with Media Bar Productions? Leave us a quick review: https://g.page/r/CU_xOVu2pdSuEBM/review

**Freelancer goodwill goes elsewhere:** LinkedIn recommendations, website collaboration testimonials, and client referrals — never Google reviews.

---

## 4. Measurement (Friday, ~10 min)

| Metric | Source |
|---|---|
| Impressions / clicks / avg position (5 gap verticals) | GSC |
| Organic sessions + GBP-tagged sessions (`utm_source=gbp`) | GA |
| GBP calls / directions / website clicks / searches | GBP Performance |
| Total reviews / avg rating | GBP |
| Posts indexed this month / links added | Client Tracker + manual |

**Gap verticals:** event/conference · medical/healthcare · live-streaming/webcasting · corporate · food/restaurant.

---

## 5. Gate before scaling

Don't increase posting volume until all four `/locations/*` pages are genuinely strong
(local proof, embedded video, service links). That foundation is the ceiling on the
whole multi-metro plan.

*Note: confirm your canonical domain (mediabarproductions.com vs. mediabarsa.com) and
use it consistently for all internal links and GBP CTAs.*
