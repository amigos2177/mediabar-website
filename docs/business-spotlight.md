# Texas Business Spotlight pilot

Prepared September 29, 2026 on `codex/business-spotlight`, based on GitHub main `02448f2`.

## Scope

- `/business-spotlight`: invitation, offer, selection criteria, participation details, application and confirmation.
- San Antonio, Boerne and New Braunfels; three businesses in one pilot round.
- One guided studio interview and up to two consecutive hours at one business location, including setup.
- One 90–120-second landscape HD feature and **two rounds of consolidated revisions**. Private review and approval before publication.
- First release on Media Bar’s YouTube channel. Businesses may share the YouTube link immediately. Download access to the feature and selected B-roll follows seven days after public release.
- Approximately one minute total of individual selected B-roll clips, lightly color-corrected, without titles or added music, for the business’s own marketing. No raw interview recordings, unselected camera files, project files, reshoots or additional edited videos. Feature revisions do not extend to the B-roll selection.
- Supplied Texas Business Spotlight wide logo is used in the hero and share image; the square version is retained as an asset. Both JPGs are copied unchanged from the user’s September 29 attachments.
- Original coffee-shop commercial still is rendered directly by the website; no generated replacement people or scenery.
- Footer discovery link, sitemap entry, canonical metadata and a dedicated 1200×630 share image.

## Applications

`POST /api/business-spotlight` validates eligibility, contact details, consent and field lengths server-side, checks origin, limits request bytes, uses a honeypot and bounds per-instance request throttling. Throttling follows the existing contact endpoint's in-memory pattern; it is not a distributed, global rate limit.

Uses the existing `RESEND_API_KEY`, from `forms@mediabarproductions.com` to `contact@mediabarproductions.com`, with applicant Reply-To. Subject is `Texas Business Spotlight application: [business]`. Application content is plain text. No database or CRM was added; accepted applications are delivered to the team inbox. There is no automatic applicant email or marketing-list signup. Success appears only after Resend accepts the message. Actual inbox delivery still needs an explicitly authorized live test after deployment.

Four required acknowledgments include a separate explicit publishing permission. The exact permission wording and terms version `2026-09-29-pilot-3-youtube-broll` are recorded in the application email. This acknowledgment does not grant permission on behalf of every person filmed; appearance and location permissions are obtained before production.

The browser retains answers on failure and reuses the idempotency key for an unchanged retry. Editing the application produces a new key. Email content is stable across retries. This is not permanent deduplication by business.

## Preview and closure

- `SPOTLIGHT_PREVIEW=true` shows a preview banner and disables real submissions in both browser and server. The preview button explicitly reports that nothing was sent or stored.
- `BUSINESS_SPOTLIGHT_APPLICATIONS_CLOSED=true` replaces the form with a closed message and rejects server submissions. Use this when the pilot intake is complete.
- A missing email key returns an honest unavailable response; the form never pretends an application was delivered.
- Existing host-based noindex protection covers localhost and preview deployments.
- No production deployment, external test email, or publish action has been performed.

## Validation

Run `node scripts/test-business-spotlight.mjs` for isolated request-handler tests (no network or credentials). Run targeted ESLint and `npm run build -- --webpack`. Browser evidence and screenshots are saved in the chat's outputs directory.

Verified: eight isolated handler tests, targeted lint, TypeScript and the production build (83 routes). Browser checks pass at 1440, 820 and 390 pixels with no horizontal overflow, one H1 and loaded page imagery. Required fields, unavailable delivery, simulated provider error/success, preserved answers, focus transitions, retry IDs, sitemap and share image were checked. No real email was sent. An unrelated existing footer Trustindex script emitted `Cannot read properties of null (reading 'remove')` from `cdn.trustindex.io/loader-cert.js`; the form and page checks passed, and the third-party widget was left unchanged.

Before publishing, review the draft runtime/format, scope exclusions, scheduling language, sharing permissions, and application handling. Filming releases are confirmed with selected businesses before production. No intake deadline or guaranteed delivery date has been invented.

September 29 visual refinement: latest supplied brick-red/charcoal Texas Business Spotlight wide logo used in hero and share image; square version retained. Warm parchment surfaces and muted brick-red accents now match the logo. Location banner reads “Told here.” All other approved page copy retained. Local preview only.

September 29 photo replacement: hero and social share image now use a built-in image-tool retouch of user-supplied DSC03725.JPG. Reflection cleanup, exposure adjustment, and optical-style blur on the seated subject and monitor depictions. Original source retained unchanged. Caption and alt text describe the studio interview. Local draft only.
