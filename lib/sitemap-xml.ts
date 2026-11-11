/**
 * Next 16.4.3's metadata sitemap serializer interpolates strings verbatim.
 * Escape once, only at that boundary; never store escaped public metadata.
 * Recheck this adapter when upgrading Next to avoid double escaping.
 */
export function escapeSitemapXml<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
    })[character]!) as T
  }
  if (value instanceof Date || value === null) return value
  if (Array.isArray(value)) return value.map(escapeSitemapXml) as T
  if (typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) =>
      [key, escapeSitemapXml(child)],
    )) as T
  }
  return value
}
