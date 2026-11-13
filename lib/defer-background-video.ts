// Decorative video should not compete with the initial page load.
export function deferBackgroundVideo(
  start: () => void,
  host: Window = window,
  page: Pick<Document, 'readyState'> = document,
) {
  let cancelled = false
  let timer: number | undefined
  let idle: number | undefined

  const run = () => {
    if (!cancelled) start()
  }
  const afterLoad = () => {
    timer = host.setTimeout(() => {
      if (cancelled) return
      if (typeof host.requestIdleCallback === 'function') {
        idle = host.requestIdleCallback(run, { timeout: 2000 })
      } else {
        run()
      }
    }, 1800)
  }

  if (page.readyState === 'complete') afterLoad()
  else host.addEventListener('load', afterLoad, { once: true })

  return () => {
    cancelled = true
    host.removeEventListener('load', afterLoad)
    if (timer !== undefined) host.clearTimeout(timer)
    if (idle !== undefined) host.cancelIdleCallback(idle)
  }
}
