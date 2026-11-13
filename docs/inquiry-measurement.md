# Inquiry references and internal tests

Draft implementation, November 12, 2026. Publication requires Ruben's approval.

## Reference

The contact endpoint creates a random `MBP-<UUID v4>` reference after validation. The same reference appears in the notification subject and body, the successful API response (`inquiryReference`), the confirmation screen and the successful analytics payload (`inquiry_reference`). Both ordinary and eligible qualified events use it. Names, emails and messages are not part of the reference and are not added to analytics.

Client-supplied references are ignored. Validation errors, provider errors and discarded honeypots do not return a successful reference. Each accepted request gets a reference; this is not a persistent delivery ledger or cross-request idempotency mechanism. Existing duplicate-click protection remains.

A successful response means the email provider accepted the message, not proof of final inbox delivery. Operational reconciliation still needs the provider delivery record/mailbox receipt. Browser analytics may be unavailable or blocked; never bypass privacy controls to force counts to match.

A reference is sent as a raw event parameter. No GA4 custom dimension or account configuration is changed. Avoid registering this unique value as a standard reporting dimension because it creates high cardinality. Individual GA4 reconciliation requires access to raw event parameters (for example an approved event export); that access is not configured by this patch. Existing source and form-type reporting remains unchanged.

## Internal test workflow

Open the specific form URL with `?inquiry_test=1`:

- `/contact?inquiry_test=1#contact-form`
- `/san-antonio-video-inquiry?inquiry_test=1`
- `/project-planner?inquiry_test=1`
- `/resources/video-production-faq?inquiry_test=1`

The visible test-mode notice confirms the flag is active. It does not persist in cookies or storage and is not propagated to other destinations. Navigating to a clean form URL ends test mode. For a multi-page test, open each target form with its own flag. This flag is not an authorization or security mechanism; it changes labelling and measurement only, while retaining validation, rate limiting and normal email delivery.

Submissions in this mode still email the regular inbox. Subjects begin `[INTERNAL TEST]`, and the body says `INTERNAL TEST — not a customer lead`. The request carries boolean `internalTest: true`; the API acknowledges it in the response. Strings such as `"true"` are rejected. No tests are inferred from a person's name, email, message, campaign label or project wording.

The three form components (four routes) exclude ordinary and qualified conversions if either the captured request mode or the server acknowledgement says test. The shared analytics wrapper also excludes inquiry starts, steps, failures and completions while the explicit URL flag is active, before GA4, Vercel or qualified ad transports. GA page views and general navigation/content events are not suppressed. This is not a general analytics opt-out.

Remove the flag for real inquiries. A real request for a test shoot or testimonial still tracks. A missing reference from an older cached API response does not break normal lead tracking; invalid reference values are omitted rather than copied into analytics.

Historic November 6 test events are not deleted or changed. Future tests must use this explicit workflow. Inbox messages and historical lead qualification remain human review tasks.

## Verification

- `node scripts/verify-inquiry-receipts.mjs`: actual API handler with inert mail provider; validates references, mail/response equality, test labelling, invalid flags, provider errors, honeypots, validation/origin checks and privacy.
- `node scripts/verify-inquiry-tracking.mjs`: actual form handlers with inert fetch/analytics; valid leads, qualified leads, reference propagation, confirmation receipts, test exclusions, legacy response compatibility, duplicates, failures and retries.
- `node scripts/verify-analytics.mjs`: actual dispatch wrapper with inert transports; queue/context behavior preserved, test activity reaches no inquiry/ad transports, clean URLs resume real measurement.
- Production build, targeted lint, structured-data/sitemap checks, background video tests and desktop/mobile form checks.

These tests do not send real inquiries or analytics events. Publishing and a subsequent live verification are separate steps.
