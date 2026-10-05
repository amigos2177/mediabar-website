export const spotlightCities = ['San Antonio', 'Boerne', 'New Braunfels'] as const
export const spotlightTermsVersion = '2026-10-05-pilot-3-on-location'
export const spotlightPublicationPermission = 'If selected, I authorize Media Bar Productions to publish my business’s approved feature on its YouTube channel as part of Texas Business Spotlight, and to share that approved feature on its website, social channels, and portfolio. I understand the episode will be public. I agree that download access to the feature and approximately one minute of selected B-roll follows seven days after its public YouTube release. I may share the YouTube link immediately.'

export type SpotlightApplication = {
  businessName: string
  contactName: string
  email: string
  city: string
  businessLink: string
  story: string
  visuals: string
  eligible: boolean
  participation: boolean
  publicationPermission: boolean
  contactPermission: boolean
}

export function validateSpotlightApplication(value: unknown):
  { application: SpotlightApplication; error?: never } | { error: string; application?: never } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { error: 'Please check your application and try again.' }
  const input = value as Record<string, unknown>
  const fields = { businessName: 120, contactName: 120, email: 254, city: 40, businessLink: 500, story: 2000, visuals: 1000 }
  const cleaned: Record<string, string> = {}
  for (const [name, limit] of Object.entries(fields)) {
    const field = input[name] ?? ''
    if (typeof field !== 'string' || field.length > limit) return { error: 'One or more fields are invalid or too long.' }
    cleaned[name] = field.trim()
  }
  if (!cleaned.businessName || !cleaned.contactName) return { error: 'Please include your name and business name.' }
  if (/[\r\n]/.test(cleaned.businessName + cleaned.contactName)) return { error: 'Please enter names on a single line.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)) return { error: 'Please enter a valid email address.' }
  if (!(spotlightCities as readonly string[]).includes(cleaned.city)) return { error: 'Please choose San Antonio, Boerne, or New Braunfels.' }
  if (cleaned.story.length < 20 || cleaned.visuals.length < 10) return { error: 'Please tell us a little more about your story and what we could film.' }
  if (cleaned.businessLink) {
    try {
      const url = new URL(cleaned.businessLink)
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error('Invalid URL')
    } catch { return { error: 'Use a full website or social link beginning with https://, or leave it blank.' } }
  }
  if (input.eligible !== true || input.participation !== true || input.publicationPermission !== true || input.contactPermission !== true) {
    return { error: 'Please review and confirm all required participation and publishing statements.' }
  }
  return { application: { ...cleaned, eligible: true, participation: true, publicationPermission: true, contactPermission: true } as SpotlightApplication }
}

export function spotlightEmail(application: SpotlightApplication) {
  const text = [
    'TEXAS BUSINESS SPOTLIGHT — YOUTUBE SERIES PILOT APPLICATION',
    `Business: ${application.businessName}`, `Contact: ${application.contactName}`,
    `Email: ${application.email}`, `City: ${application.city}`,
    `Website / social: ${application.businessLink || 'Not provided'}`,
    '', 'THEIR STORY', application.story, '', 'WHAT WE COULD FILM', application.visuals,
    '', 'PARTICIPATION CONFIRMED',
    'Applicant represents an operating business in the selected city.',
    'Applicant reviewed participation details and can coordinate filming permissions and scheduling.',
    `YouTube publication permission: confirmed. Exact statement: ${spotlightPublicationPermission}`,
    'Applicant agrees to Media Bar contacting them about this application. No marketing subscription.',
    `Terms version: ${spotlightTermsVersion}`,
    '', 'Pilot scope: one 90–120-second feature, one on-location visit of up to two consecutive hours at one business location including setup, the interview, and business footage, two rounds of revisions to the feature. Private review and approval before public YouTube release. Download access to the feature and approximately one minute of selected, lightly color-corrected B-roll clips without titles or added music follows seven days after public YouTube release. The business may share the YouTube link immediately. No unselected camera files, raw interviews, project files, reshoots or additional edited videos.',
  ].join('\n')
  return { subject: `Texas Business Spotlight application: ${application.businessName}`, text, replyTo: application.email }
}
