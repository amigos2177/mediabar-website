# Media Bar Answers — revised brief
October 17, 2026. Draft for review; not published.

## Goal and baseline
Improve the usefulness and video discoverability of the seven existing episodes without promising rankings, People also ask placement, or a fixed indexing timeline. Preserve URLs, branding, transcripts, avatar disclosure and unrelated content.

The implementation starts at GitHub main c4346a77ba44089267b6afca7b01a987faed6b33, verified against the live /api/deployment response. The older home-directory checkout is stale. Current pages have Article markup and click-to-load facades, without episode VideoObjects or video sitemap entries. Earlier removal was intentional; restoration here is paired with an immediately available primary player. Google still determines watch-page eligibility.

## Technical changes
- Exactly one VideoObject per episode, connected through Article.video to its canonical #video identity.
- Preserve Article author, publisher, collection, sameAs and body; update visible headline, answer and modification date consistently.
- Use existing episode data for title, description, thumbnail, duration, upload date and YouTube ID. Derive seconds from ISO duration to avoid duplicated values drifting.
- Correct episode 01 to the supplied 68-second duration and full upload timestamp; distinguish supplied metadata from independently verified values in the QA report.
- Use the same local thumbnail in schema and sitemap, and the same privacy-enhanced YouTube embed URL in iframe, schema and sitemap. Do not put the watch URL in contentUrl.
- Add the unchanged spoken transcript and founder identity to VideoObject.
- Render a real iframe without requiring a click. Use the existing 16:9 container, no autoplay, eager loading for the primary player. The YouTube controls/poster replace the custom facade: this is an intentional visible difference and increases third-party loading.
- Do not treat noscript, a custom data attribute or an oEmbed status alone as proof of Google discovery or playback.
- Add seven video sitemap entries. Preserve the URL set and existing portfolio video entries. Use genuine content-modification dates, not rewritten publication dates.
- Keep video markup off the library, broader FAQ, homepage and service pages.

## Copy
1. Delays: “Why Do Corporate Videos Get Delayed?” Lead with unclear/conflicting feedback, then decision-maker, consolidated comments and early delivery planning.
2. Corporate cost: retain existing $3,500–$15,000-or-more planning guidance and explain scope factors.
3. Estimate: align the question with the business goal, audience, filming plan, dates, deliverables, approvals and budget context needed for an estimate.
4. Interviews: ask whether three interviews fit into one day, rather than asking for an unspecified day length.
5. Healthcare: “What Should Healthcare Teams Confirm Before Filming?” Keep the answer healthcare-specific and preserve the organization's responsibility for compliance decisions. No city keyword list or new clinical/compliance claims.
6. Commercials: Ruben approved a $7,000–$40,000 range on October 17. Explain that a simple single-location commercial without actors differs from a commercial with actors and multiple locations. Present it as production planning guidance, with a tailored estimate based on scope; airtime remains separate. Add short visible sections about cost drivers, 30/60-second versions and broadcast/streaming/social delivery. Preserve the existing RBFCU case-study link without adding performance claims.
7. First video: lead with the audience's most important question, then format, distribution and desired action.

Use a distinct answerQuestion field for each short-answer H2 so existing related FAQ links retain accurate labels. Put answer text immediately after its H2, using natural length rather than a mandatory SEO word count. Preserve spoken transcripts even when titles and editorial summaries change.

## Supporting links and YouTube drafts
Update the medical service page's healthcare episode anchor and add a contextual episode link near the top of the healthcare planning guide. Draft a first-line episode-specific tracked link for each YouTube description. Do not change YouTube descriptions, visibility, captions or titles during this review stage.

## FAQ and search expectations
Keep existing FAQ markup aligned to visible FAQs. Do not add new FAQ markup for ranking purposes. Google retired FAQ rich results on May 7, 2026. Yahoo question results are not observed Google PAA evidence. Missing markup alone does not prove the reason for low visibility; alleged cannibalization and Search Console figures remain supplied claims unless rechecked.

## Acceptance and release
- Locked dependency installation, lint, TypeScript, production build, schema regression checks and diff checks.
- Server HTML: one complete VideoObject linked from Article, correct iframe without a click, exact transcript and question immediately followed by answer for all seven episodes.
- Parsed sitemap: unchanged URL set, seven episode videos, existing portfolio entries intact, metadata consistent with the pages.
- Desktop/mobile: no overflow or framework errors; readable headings; 16:9 player; working links; assess actual playback separately from iframe presence.
- Record any unverified metadata, playback, Google validation or performance checks explicitly.
- Review locally first. Publication, YouTube edits, indexing requests and sitemap submission are later approval/manual gates. Valid structured data does not prove indexing.

## Sources checked during the brief review
- https://developers.google.com/search/docs/appearance/video
- https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading
- https://developers.google.com/search/docs/appearance/featured-snippets
- https://developers.google.com/search/updates#may-2026
