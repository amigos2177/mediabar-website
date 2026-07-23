export type ConversionIntent =
  | 'phone'
  | 'email'
  | 'project-planner'
  | 'contact'
  | 'client-portal'
  | 'gpt-advisor'

export type ConversionAttribution = {
  intent: ConversionIntent
  action: string
  placement: string
  sourceGroup: string
  sourcePath: string
}

const CONVERSION_STORAGE_KEY = 'mbp-conversion-attribution:v1'

function isConversionAttribution(value: unknown): value is ConversionAttribution {
  if (!value || typeof value !== 'object') return false

  const candidate = value as Record<string, unknown>
  return ['intent', 'action', 'placement', 'sourceGroup', 'sourcePath']
    .every((key) => typeof candidate[key] === 'string')
}

export function captureConversionAttribution(attribution: ConversionAttribution) {
  try {
    window.sessionStorage.setItem(CONVERSION_STORAGE_KEY, JSON.stringify(attribution))
  } catch {
    // Conversion tracking still works when storage is unavailable.
  }
}

export function readConversionAttribution(intent: ConversionIntent) {
  try {
    const stored = window.sessionStorage.getItem(CONVERSION_STORAGE_KEY)
    if (!stored) return null

    const parsed: unknown = JSON.parse(stored)
    return isConversionAttribution(parsed) && parsed.intent === intent ? parsed : null
  } catch {
    return null
  }
}

export function clearConversionAttribution(intent: ConversionIntent) {
  try {
    const stored = readConversionAttribution(intent)
    if (stored) window.sessionStorage.removeItem(CONVERSION_STORAGE_KEY)
  } catch {
    // Do not affect the completed form experience when storage is unavailable.
  }
}
