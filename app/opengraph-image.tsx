import { ImageResponse } from 'next/og'

export const alt = 'Media Bar Productions — Video Production in San Antonio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#1A1A1A',
          fontFamily: 'sans-serif',
        }}
      >
        {/* thin top rule: red body + gold right accent */}
        <div style={{ display: 'flex', width: '100%', height: 6, flexShrink: 0 }}>
          <div style={{ flex: 1, background: '#CC0000' }} />
          <div style={{ width: 120, background: '#C9A84C', flexShrink: 0 }} />
        </div>

        {/* centered content column */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
            padding: '0 80px',
          }}
        >
          <div style={{ color: '#FFFFFF', fontSize: 62, fontWeight: 700, letterSpacing: 5, textAlign: 'center' }}>
            MEDIA BAR PRODUCTIONS
          </div>

          <div style={{ width: 80, height: 3, background: '#CC0000', flexShrink: 0 }} />

          <div style={{ color: '#C9A84C', fontSize: 34, fontWeight: 400, letterSpacing: 2, textAlign: 'center' }}>
            Video Production · San Antonio
          </div>

          <div
            style={{
              display: 'flex',
              border: '1px solid #C9A84C',
              borderRadius: 4,
              padding: '10px 28px',
              color: '#C9A84C',
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            3 Emmy Awards · 15 Telly Awards
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
