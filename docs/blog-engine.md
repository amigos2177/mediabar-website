# Media Bar Blog Engine

The repeatable system for shipping a ranking-ready blog post every couple of days.
Two homes: this file lives in the repo (`docs/blog-engine.md`) as the durable backup,
and its contents go into a Claude Project called "Media Bar Blog Engine" — the Project
is where it actually runs.

---

## How to run it

1. **Project setup (once):** Create a Claude Project named "Media Bar Blog Engine."
   Add this file (plus your keyword plan and brand voice notes) to the Project's
   knowledge. Paste the Kickoff Prompt below into the Project's custom instructions.
2. **Every session:** Open the Project, say "run it" (or paste the Kickoff Prompt),
   pick a topic from the shortlist, review the draft, ship.
3. **Cadence:** A recurring calendar reminder every 2 days is the trigger. Reminder
   fires → run it → ~10 minutes later you have a committable draft.

Two parts stay manual on purpose: **the merge** (your editorial gate) and **the GSC
indexing request** (Google's Indexing API isn't meant for general pages — click it by hand).

---

## Confirmed blog schema (from the repo)

- **Blog files live in:** `content/blog/<slug>.md`
- **Images live in:** `public/images/blog/<slug>.png` (referenced as `/images/blog/<slug>.png`)
- **Audio lives in:** `public/audio/blog/<slug>.mp3` (referenced as `/audio/blog/<slug>.mp3`)
- **Slug = filename** (without `.md`); `sitemap.ts` auto-discovers every `.md` in the folder.
- **Markdown renders raw HTML** (`marked` → `dangerouslySetInnerHTML`), so `<figure>`,
  `<audio>`, `<details>`, and inline `<style>` all work directly in a post.
- **Front-matter keys (these only):**

```yaml
---
title: "≤40 chars, primary keyword front-loaded"   # template appends " | Media Bar Productions"
slug: "keyword-rich-hyphenated-slug"
date: "YYYY-MM-DD"
excerpt: "120-155 chars — this is the meta description; keyword + reason to click"
featuredImage: /images/blog/keyword-rich-hyphenated-slug.png
---
```

- `excerpt` IS the meta + OG description. No separate SEO-title field — the page
  `<title>` is always `title` + " | Media Bar Productions", so keep `title` short.
- `featuredImage` is optional but always add one: 1200×630, keeps the blog card and
  social preview from going blank.

---

## Internal-link map

Every post links to 3-4 of these, using real paths:

- Services: `/video-production` (hub) and the 11 sub-pages —
  `/video-production/{corporate, events, medical, live-streaming, food, motion-graphics,
  post-production, real-estate, aerial, commercials, interview}`
- Locations: `/locations/{san-antonio, austin, houston, dallas}`
- Always end with a CTA to `/contact`

Sibling pairings: events ↔ corporate ↔ live-streaming · medical ↔ interview ·
food ↔ commercials · motion-graphics ↔ post-production · real-estate ↔ aerial.

---

## The two tracks

- **Track A — Timely:** today's issues for marketing directors, SMB owners, agencies.
  Trend-driven, opinionated, shareable. Earns links and authority. ~1 of every 3 posts.
- **Track B — Evergreen:** durable, ranking-focused pieces mapped to keyword gaps and the
  four Texas metros. The workhorses. ~2 of every 3 posts. Current priority.

Ranking gaps to target (impressions but stuck page 2-3): event/conference video, medical/
healthcare video, live-streaming/webcasting, corporate video, food/restaurant video.

---

## Kickoff Prompt (paste each session, or set as Project instructions)

```
Run the Media Bar Blog Engine.

STEP 1 — Topic radar. Web-search for current, timely angles in video
marketing and the video production industry that marketing directors,
small-business owners, and ad agencies would want to read THIS WEEK, and
cross-check against Media Bar's ranking gaps (event/conference video,
medical/healthcare video, live-streaming/webcasting, corporate video,
food/restaurant video — terms we get impressions for but rank page 2-3 on).
Give me 5-7 candidates. Tag each Track A (timely/shareable) or Track B
(evergreen/ranking), each with: target keyword, target reader, the on-site
page it should link to, and why it's worth writing now. Then STOP and let me
pick. Don't draft yet.

STEP 2 — On my pick, write the full post as a committable .md file in Media
Bar's exact blog format.

Front-matter (these keys ONLY):
  title: ≤ 40 characters, primary keyword front-loaded (the template appends
    " | Media Bar Productions", so keep it short)
  slug: keyword-rich, lowercase, hyphenated
  date: today's date, YYYY-MM-DD
  excerpt: 120-155 chars — this IS the meta description; keyword + reason to click
  featuredImage: /images/blog/<slug>.png

Body:
  - One H1 (may carry a fuller headline than the title tag, e.g. add ": 2026 Guide")
  - ~1,200-1,500 words. Media Bar voice: confident, benefit-led, locally rooted
    (San Antonio / Texas), Emmy + 13-years credibility, active voice, short paragraphs.
  - 3-5 H2 sections, lists where useful, a short FAQ for snippet capture, and a
    CTA to /contact at the end.
  - 3-4 internal links using REAL paths from this map: the matching
    /video-production/<service> page, /video-production/live-streaming if relevant,
    the relevant /locations/<city> page, and /contact.
  - No invented statistics. Keep any cost talk to ranges, not fabricated figures.

Save it as content/blog/<slug>.md and give it to me as a downloadable file.
Then remind me of the publish steps: confirm front-matter against an existing
post, drop the file in content/blog/, add a 1200×630 featuredImage, commit +
push, request indexing in GSC.

STEP 3 — GBP promo. After the post, draft a matching Google Business Profile
"What's New" promo for it (full spec in "GBP promo post" below). Front-load the
first ~120 chars with the hook, keep it to ~2 short paragraphs plus a one-line
nudge, Media Bar voice, NO phone number in the body. CTA button "Learn more" →
the new blog URL, tagged ?utm_source=gbp&utm_medium=organic&utm_campaign=<name>.
Add a 1200×900 4:3 image note (center-crop of the featuredImage). Give it to me
ready to paste. One promo per post — space multiple posts ~a week apart.
```

---

## Audio overview workflow (optional add-on per post)

Add a short, in-Ruben's-voice audio overview to a post, plus a matching transcript.
The audio drives engagement and accessibility; the transcript adds indexable text.
Net result per post: full written article + your-voice audio + transcript, all three
reinforcing each other.

### The loop

1. **Write the post** (Kickoff Prompt above). Produces `content/blog/<slug>.md`.
2. **Get the narration script** — ask the Project: *"Give me the audio narration
   script for this post."* It returns a tightened, first-person script (spec below).
   The same text becomes the on-page transcript.
3. **Voice it in ElevenLabs** — paste the script in with your cloned voice, export MP3.
   (Commercial use needs a paid plan; Professional Voice Cloning needs Creator or above.)
4. **Add it to the post** — save the MP3, paste the styled player card + transcript into
   the `.md`, commit, push, request indexing.

### Narration script spec

```
Write the audio narration script for the post at content/blog/<slug>.md.

- 350-450 words (~2-3 minutes spoken). One single narrator — NOT a two-host dialogue.
- First person, Media Bar voice: confident, benefit-led, San Antonio / Texas rooted,
  Emmy + Telly + 13 years credibility, active voice, short sentences.
- A genuine SUMMARY / spin of the whole post — do NOT copy the intro paragraphs
  verbatim. (Near-duplicate audio text = duplicate content on the page; reword it.)
- Plain punctuation for ElevenLabs pacing: commas/periods for natural pauses,
  ellipses (…) for a deliberate beat. No stage directions, no markdown.
- End on a soft CTA to reach out to Media Bar Productions (no phone number).
- No invented stats; cost talk in ranges.

Then give me the same script formatted as <p> paragraphs for the transcript block.
```

### File + embed

- **Save the MP3 as:** `public/audio/blog/<slug>.mp3` (match the post slug exactly).
  Served at `/audio/blog/<slug>.mp3`. A 2-3 min MP3 is a few MB — fine to keep in the repo.
- **Insert this block** right after the intro paragraph, before the first `## ` heading.
  Keep `preload="none"` so it never slows page load. Drop the narration script in as the
  `<details>` paragraphs.

```html
<style>
.mb-audio{
  --mb-red:#C8102E;            /* confirm exact brand red against the site CSS */
  margin:2.25rem 0; padding:1.25rem 1.5rem;
  background:#161616; border:1px solid #2a2a2a;
  border-left:3px solid var(--mb-red); border-radius:12px;
}
.mb-audio figcaption{
  display:flex; align-items:center; gap:.55rem;
  font-size:.78rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
  color:var(--mb-red); margin-bottom:.85rem;
}
.mb-audio figcaption::before{content:"►"; font-size:.7em;}
.mb-audio audio{width:100%; display:block;}
.mb-transcript{margin-top:1rem; border-top:1px solid #2a2a2a; padding-top:.85rem;}
.mb-transcript summary{
  cursor:pointer; list-style:none;
  font-size:.9rem; font-weight:600; color:#cfcfcf;
  display:flex; align-items:center; gap:.45rem;
}
.mb-transcript summary::-webkit-details-marker{display:none;}
.mb-transcript summary::before{
  content:""; width:0; height:0;
  border-left:6px solid var(--mb-red);
  border-top:4px solid transparent; border-bottom:4px solid transparent;
  transition:transform .2s ease;
}
.mb-transcript[open] summary::before{transform:rotate(90deg);}
.mb-transcript summary:hover{color:#fff;}
.mb-transcript p{color:#b8b8b8; font-size:.95rem; line-height:1.75; margin:.8rem 0;}
</style>

<figure class="mb-audio">
  <figcaption>Listen — <post short title> · <N> min</figcaption>
  <audio controls preload="none" src="/audio/blog/<slug>.mp3"></audio>
  <details class="mb-transcript">
    <summary>Audio transcript</summary>
    <!-- narration script, one <p> per paragraph -->
  </details>
</figure>
```

Notes: the native player shows `0:00 / 0:00` until first play — that's `preload="none"`,
not a bug; press play to confirm it streams. The white player against the dark card is
intentional (a full dark player needs a custom JS control — not worth it). To do this in
Claude Code, point it at the post, hand it the MP3 path and the script, and tell it the
renderer passes raw HTML so no component is needed.

---

## GBP promo post (every run)

Every blog post now ships with a matching Google Business Profile "What's New"
promo, drafted in the same run. GBP is San Antonio's local-pack engine, so tying
a fresh post to each new article keeps the profile active and routes local
readers straight to the new URL. (This is the blog-promo path; the standalone
GBP posts in Mode 2 — BTS, etc. — still run on their own cadence.)

Spec (mirrors `seo-playbook.md` §2 — keep the two in sync):

- **Front-load the first ~120 chars** with the hook — Maps/mobile truncate early.
- 1,500-char limit, but keep it tight: ≈2 short paragraphs + a one-line nudge.
- Media Bar voice. **No phone numbers in the body** (use the CTA button). No incentives.
- **CTA button: "Learn more"** → the new blog URL.
- Tag the link: `?utm_source=gbp&utm_medium=organic&utm_campaign=<slug-or-vertical>`.
- **Image: 1200×900, 4:3, subject centered** — a center-crop of the post's
  featuredImage (which is 16:9, so it needs a separate crop; ImageMagick/PIL handles it).
- Output it ready to paste: body copy, the button label, the UTM-tagged URL, and the image note.

**Posting cadence:** post archives after 7 days, so space promos ~a week apart.
Also drop each 4:3 image in the **Photos tab** — those don't expire.

## Publish checklist (after the draft)

1. Confirm front-matter keys match an existing post.
2. Drop the `.md` in `content/blog/`.
3. Add a 1200×630 `featuredImage` at `public/images/blog/<slug>.png`.
4. *(Optional)* Add the audio overview: MP3 at `public/audio/blog/<slug>.mp3` +
   the `mb-audio` card and transcript in the post body (see Audio overview workflow).
5. `git add` → `git commit` → `git push` (Vercel auto-deploys).
6. Confirm the live URL renders (and the audio plays, if added).
7. GSC → URL Inspection → Request Indexing on the new URL.
8. Post the matching GBP "What's New" promo (front-loaded copy, "Learn more" +
   UTM link to the live URL, 1200×900 4:3 image). Drop the image in the GBP
   Photos tab too. Space it ~a week from your last GBP post.
