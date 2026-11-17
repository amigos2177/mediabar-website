'use client'

import { useState } from 'react'
import Link from 'next/link'
import VimeoPlayer from './VimeoPlayer'
import styles from './PortfolioFeature.module.css'

type Cut = { name: string; url: string; poster: string; duration: string }
type Feature = {
  category: string
  client: string
  heading: string
  description: string
  cuts: Cut[]
  related?: { href: string; text: string }
}

const features: Record<'alamo-heights' | 'castellanos' | 'atma-recruiting' | 'cantu-law', Feature> = {
  'alamo-heights': {
    category: 'Nonprofit film', client: 'Alamo Heights School Foundation', heading: 'Hall of Fame Induction',
    description: 'Guests and honorees come together for the Alamo Heights School Foundation’s Hall of Fame induction.',
    cuts: [{ name: 'Hall of Fame Induction', url: 'https://vimeo.com/1247791705/a5b1ba2e36', poster: 'alamo-heights', duration: '2:32' }],
    related: { href: '#castellanos', text: 'Watch the Castellanos family story' },
  },
  castellanos: {
    category: 'Nonprofit family story', client: 'Ronald McDonald House Charities of San Antonio', heading: 'The Castellanos family',
    description: 'Meet the Castellanos family in a short, subtitled excerpt, or watch their full story.',
    cuts: [
      { name: 'Short film', url: 'https://vimeo.com/1247789831/f825f9502e', poster: 'castellanos', duration: '0:33' },
      { name: 'Full film', url: 'https://vimeo.com/1247789824/0e1c7d56f2', poster: 'castellanos', duration: '5:38' },
    ],
  },
  'atma-recruiting': {
    category: 'Recruiting film', client: 'ATMA Energy', heading: 'Recruiting for ATMA Energy',
    description: 'ATMA Energy introduces itself to prospective hires in this two-minute recruiting film.',
    cuts: [{ name: 'Recruiting for ATMA Energy', url: 'https://vimeo.com/1247794206/c16f7e1b13', poster: 'atma-recruiting', duration: '2:03' }],
    related: { href: '/blog/recruiting-video-production', text: 'Read the recruiting-video guide' },
  },
  'cantu-law': {
    category: 'Commercial', client: 'Cantu Law', heading: 'Cantu Law Commercials',
    description: 'Three 30-second San Antonio commercials featuring Cantu Law clients.',
    cuts: [
      { name: 'Youssef Eskandar', url: 'https://vimeo.com/1247791791/ec766a18cb', poster: 'cantu-youssef', duration: '0:30' },
      { name: 'Myrna White', url: 'https://vimeo.com/1247791783/044bd71830', poster: 'cantu-myrna', duration: '0:30' },
      { name: 'Arthur Tigerina', url: 'https://vimeo.com/1247791764/fc0e6fed4e', poster: 'cantu-arthur', duration: '0:30' },
    ],
    related: { href: '/work/rbfcu-keldon-johnson', text: 'Explore the RBFCU campaign' },
  },
}

export default function PortfolioFeature({ project }: { project: keyof typeof features }) {
  const feature = features[project]
  const [selected, setSelected] = useState(0)
  const cut = feature.cuts[selected]
  const title = feature.cuts.length > 1 ? feature.heading + ' · ' + cut.name : feature.heading

  return (
    <section id={project} className={styles.feature} aria-labelledby={project + '-title'}>
      <div className={styles.media}>
        <VimeoPlayer key={cut.url} videoUrl={cut.url} title={title} thumbnailUrl={'/images/portfolio-films/' + cut.poster + '.webp'} />
      </div>
      <div>
        <p className={styles.label}>{feature.client} · {feature.category}</p>
        <h2 id={project + '-title'}>{feature.heading}</h2>
        <p>{feature.description}</p>
        {feature.cuts.length > 1 && (
          <div className={styles.choices} role="group" aria-label={'Choose a film from ' + feature.client}>
            {feature.cuts.map((item, i) => (
              <button type="button" key={item.url} aria-pressed={i === selected} onClick={() => setSelected(i)}>{item.name}</button>
            ))}
          </div>
        )}
        <a href={cut.url} target="_blank" rel="noopener noreferrer">Open film on Vimeo · {cut.duration} ↗</a>
        {feature.related && <Link href={feature.related.href}>{feature.related.text} →</Link>}
      </div>
    </section>
  )
}
