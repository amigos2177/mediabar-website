import Script from 'next/script'

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
const validMeasurementId = measurementId && /^G-[A-Z0-9]+$/.test(measurementId)
  ? measurementId
  : null

export function GoogleAnalytics() {
  if (!validMeasurementId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${validMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${validMeasurementId}');
        `}
      </Script>
    </>
  )
}
