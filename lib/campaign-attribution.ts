export type CampaignAttribution = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  landingPage: string
  firstTouchSource: string
  referrer: string
}

const ATTRIBUTION_STORAGE_KEY = 'mbp-campaign-attribution:v2'
const MAX_UTM_LENGTH = 100
const MAX_PATH_LENGTH = 240
const MAX_REFERRER_LENGTH = 240

function clean(value: string | null, maxLength: number) {
  return value?.trim().slice(0, maxLength) || ''
}

function externalReferrer() {
  if (!document.referrer) return ''

  try {
    const referrer = new URL(document.referrer)
    if (referrer.origin === window.location.origin) return ''
    return clean(`${referrer.origin}${referrer.pathname}`, MAX_REFERRER_LENGTH)
  } catch {
    return ''
  }
}

function sourceFromReferrer(referrer: string) {
  if (!referrer) return 'direct'

  try {
    const hostname = new URL(referrer).hostname.replace(/^www\./, '')
    if (hostname.includes('google.')) return 'google'
    if (hostname.includes('bing.')) return 'bing'
    if (hostname === 'youtube.com' || hostname.endsWith('.youtube.com')) return 'youtube'
    if (hostname === 'creativesintexas.com' || hostname.endsWith('.creativesintexas.com')) {
      return 'creativesintexas'
    }
    if (hostname === 'chatgpt.com' || hostname.endsWith('.chatgpt.com')) return 'chatgpt'
    return hostname.slice(0, MAX_UTM_LENGTH)
  } catch {
    return 'referral'
  }
}

function fromCurrentUrl(): CampaignAttribution {
  const params = new URLSearchParams(window.location.search)
  const referrer = externalReferrer()
  const utmSource = clean(params.get('utm_source'), MAX_UTM_LENGTH)
  const attribution = {
    utmSource,
    utmMedium: clean(params.get('utm_medium'), MAX_UTM_LENGTH),
    utmCampaign: clean(params.get('utm_campaign'), MAX_UTM_LENGTH),
    utmContent: clean(params.get('utm_content'), MAX_UTM_LENGTH),
    landingPage: clean(window.location.pathname, MAX_PATH_LENGTH),
    firstTouchSource: utmSource || sourceFromReferrer(referrer),
    referrer,
  }

  return attribution
}

function isCampaignAttribution(value: unknown): value is CampaignAttribution {
  if (!value || typeof value !== 'object') return false

  const candidate = value as Record<string, unknown>
  return [
    'utmSource',
    'utmMedium',
    'utmCampaign',
    'utmContent',
    'landingPage',
    'firstTouchSource',
    'referrer',
  ]
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
  const stored = readCampaignAttribution()
  if (stored) return stored

  const current = fromCurrentUrl()

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(current))
  } catch {
    // Attribution can still be submitted from component state when storage is unavailable.
  }

  return current
}
