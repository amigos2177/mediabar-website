import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Texas Business Spotlight: a new YouTube series by Media Bar Productions.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), 'public/images/business-spotlight/studio-retouched.png'))
  const logo = await readFile(path.join(process.cwd(), 'public/images/business-spotlight/texas-business-spotlight-red-wide.jpg'))
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#eee3c9', color: '#24231e' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: 630, padding: '30px 48px', justifyContent: 'space-between' }}>
        <img src={`data:image/jpeg;base64,${logo.toString('base64')}`} alt="Texas Business Spotlight YouTube series" width={300} height={169} />
        <div style={{ display: 'flex', color: '#9f2e22', fontSize: 17, fontWeight: 700 }}>A YOUTUBE SERIES BY MEDIA BAR PRODUCTIONS</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ fontSize: 54, letterSpacing: '-2px', lineHeight: 1.05 }}>Every business has a story.</div><div style={{ fontSize: 23, marginTop: 18 }}>Three local businesses. Three complimentary features.</div></div>
        <div style={{ fontSize: 19 }}>San Antonio / Boerne / New Braunfels</div>
      </div>
      {/* ImageResponse requires a native image with a self-contained source. */}
      <img src={`data:image/png;base64,${photo.toString('base64')}`} alt="" width={570} height={630} style={{ objectFit: 'cover', objectPosition: '66% center' }} />
    </div>, size,
  )
}
