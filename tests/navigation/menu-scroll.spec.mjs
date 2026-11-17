import { expect, test } from '@playwright/test'

const destinations = [
  { label: 'Home', path: '/', heading: /video production in san antonio/i },
  { label: 'Our Work', path: '/work', heading: /stories built/i },
  { label: 'About', path: '/about', heading: /built by people/i },
]

for (const { label, path, heading } of destinations) {
  test(`${label} opens at the top from a scrolled project`, async ({ page, isMobile, baseURL }) => {
    // Exercise only the local build. Third-party embeds and analytics are outside this test.
    await page.route('**/*', route => {
      return new URL(route.request().url()).origin === baseURL ? route.continue() : route.abort()
    })
    await page.goto('/work/ae-forged-by-war-host-production')
    await page.evaluate(() => window.scrollTo({ top: 3 * innerHeight, behavior: 'instant' }))
    await expect.poll(() => page.evaluate(() => scrollY / innerHeight)).toBeGreaterThan(1)

    const header = page.getByRole('navigation').filter({
      has: page.getByRole('link', { name: 'Media Bar Productions', exact: true }),
    })
    if (isMobile) {
      await header.getByRole('button', { name: 'Open menu' }).click()
    }
    const menu = isMobile ? page.getByRole('dialog', { name: 'Menu' }) : header
    const name = !isMobile && label === 'Home' ? 'Media Bar Productions' : label
    await menu.getByRole('link', { name, exact: true }).click()

    await expect(page).toHaveURL(new URL(path, baseURL).href)
    await page.waitForLoadState('load')
    await page.evaluate(() => document.fonts.ready.then(() => undefined))
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeInViewport()
    await expect.poll(() => page.evaluate(() => scrollY)).toBe(0)
    // A single frame at zero can precede a late scroll restoration.
    const maxScroll = await page.evaluate(() => new Promise(resolve => {
      const until = performance.now() + 500
      let maximum = 0
      function sample() {
        maximum = Math.max(maximum, Math.abs(scrollY))
        if (performance.now() >= until) resolve(maximum)
        else requestAnimationFrame(sample)
      }
      sample()
    }))
    expect(maxScroll, 'Destination should stay at the top after navigation').toBe(0)
  })
}
