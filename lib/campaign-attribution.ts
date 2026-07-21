export type CampaignAttribution = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  landingPage: string
}

const ATTRIBUTION_STORAGE_KEY = 'mbp-campaign-attribution:v1'
const MAX_UTM_LENGTH = 100
const MAX_PATH_LENGTH = 240

function clean(value: string | null, maxLength: number) {
  return value?.trim().slice(0, maxLength) || ''
}

function fromCurrentUrl(): CampaignAttribution | null {
  const params = new URLSearchParams(window.location.search)
  const attribution = {
    utmSource: clean(params.get('utm_source'), MAX_UTM_LENGTH),
    utmMedium: clean(params.get('utm_medium'), MAX_UTM_LENGTH),
    utmCampaign: clean(params.get('utm_campaign'), MAX_UTM_LENGTH),
    utmContent: clean(params.get('utm_content'), MAX_UTM_LENGTH),
    landingPage: clean(window.location.pathname, MAX_PATH_LENGTH),
  }

  return attribution.utmSource
    || attribution.utmMedium
    || attribution.utmCampaign
    || attribution.utmContent
    ? attribution
    : null
}

function isCampaignAttribution(value: unknown): value is CampaignAttribution {
  if (!value || typeof value !== 'object') return false

  const candidate = value as Record<string, unknown>
  return ['utmSource', 'utmMedium', 'utmCampaign', 'utmContent', 'landingPage']
    .every((key) => typeof candidate[key] === 'string')
}

export function readCampaignAttribution() {
  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    if (!stored) return null

    const parsed: unknown = JSON.parse(stored)
    return isCampaignAttribution(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function captureCampaignAttribution() {
  const current = fromCurrentUrl()
  if (!current) return null

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(current))
  } catch {
    // Attribution can still be submitted from component state when storage is unavailable.
  }

  return current
}

