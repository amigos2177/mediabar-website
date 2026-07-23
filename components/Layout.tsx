import { ReactNode } from 'react'
import Nav from './Nav'
import ContactPrompt from './ContactPrompt'
import Footer from './Footer'

export default function Layout({
  children,
  hideContactPrompt = false,
}: {
  children: ReactNode
  hideContactPrompt?: boolean
}) {
  return (
    <>
      <a className="mbp-skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      {!hideContactPrompt && <ContactPrompt />}
      <Footer />
    </>
  )
}
