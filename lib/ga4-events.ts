type Value = string | number | boolean
export type EventProperties = Record<string, Value>
type PendingEvent = { name: string; properties: EventProperties; createdAt: number }

/** Content context must not masquerade as traffic acquisition fields. */
export function ga4Context(properties: EventProperties): EventProperties {
  const { source, campaign, ...rest } = properties
  return {
    ...rest,
    ...(source === undefined ? {} : { page_group: rest.page_group ?? source }),
    ...(campaign === undefined ? {} : { campaign_label: rest.campaign_label ?? campaign }),
  }
}

/** Buffer only until the existing lazy GA initialization; never load GA ourselves. */
export function createGa4Dispatcher(transport: {
  ready: () => boolean
  send: (name: string, properties: EventProperties) => void
  onReady: (flush: () => void) => void
  now?: () => number
}) {
  const now = transport.now ?? Date.now
  let pending: PendingEvent[] = []
  let subscribed = false
  const lifetime = 15_000
  const limit = 25

  function flush() {
    if (!transport.ready()) return
    const batch = pending
    pending = [] // Remove first so repeated ready notifications cannot replay events.
    for (const event of batch) {
      if (now() - event.createdAt < lifetime) transport.send(event.name, event.properties)
    }
  }

  return (name: string, properties: EventProperties) => {
    const normalized = ga4Context(properties)
    if (transport.ready()) {
      flush()
      transport.send(name, normalized)
      return
    }
    pending = pending.filter((event) => now() - event.createdAt < lifetime)
    pending.push({ name, properties: normalized, createdAt: now() })
    pending = pending.slice(-limit)
    if (!subscribed) {
      subscribed = true
      transport.onReady(flush)
    }
  }
}
