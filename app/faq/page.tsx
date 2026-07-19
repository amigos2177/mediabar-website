import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from './faq.module.css'

const categories = [
  'Pricing',
  'Process & Timeline',
  'Ownership & Delivery',
  'Services',
  'Logistics',
  'Studio',
  'Why Media Bar',
]

const faqs = [
  {
    category: 'Pricing',
    q: 'How much does a video cost?',
    a: 'It depends on the scope, but we give you a fully itemized quote so there are no surprises. A basic testimonial or interview video starts around $1,500-$3,000. A polished commercial or brand film typically runs $5,000-$25,000+. We\'ll ask the right questions and give you a real number fast.',
  },
  {
    category: 'Pricing',
    q: 'Do you charge hourly or by project?',
    a: 'Almost always by project. We scope out exactly what\'s needed, including crew, gear, studio time, edit passes, graphics, and music licensing, then give you a fixed price. That way you know what you\'re paying for before anything starts, and there are no hourly overruns.',
  },
  {
    category: 'Pricing',
    q: 'What\'s included in a quote?',
    a: 'Every line item: pre-production (scripting, storyboarding, shot list), production (crew, equipment, studio or location), and post-production (editing, color, audio mix, graphics, revisions). Music licensing is included when applicable. You won\'t get a vague lump sum.',
  },
  {
    category: 'Pricing',
    q: 'Do you require a deposit?',
    a: 'Yes. We typically require a 50% deposit to hold your production date, with the balance due upon delivery of the final files. For larger projects we can structure milestone payments. We\'ll outline the payment schedule in your contract.',
  },
  {
    category: 'Process & Timeline',
    q: 'How long does the production process take?',
    a: 'From kickoff to final delivery, most projects take 2-4 weeks. Rush turnarounds are available. We\'ve delivered same-day edits for live events and 48-hour cuts for time-sensitive campaigns. Timeline depends on complexity, revision rounds, and your approval speed.',
  },
  {
    category: 'Process & Timeline',
    q: 'What does the process look like from first contact to final video?',
    a: 'Step 1: Discovery call or form, where you tell us what you need. Step 2: We send a detailed quote within 1 business day. Step 3: You approve and put down a deposit. Step 4: Pre-production, including scripting, planning, and location scouting. Step 5: Production day(s). Step 6: Edit and review, typically with 2 rounds of revisions. Step 7: Final delivery in your preferred format.',
  },
  {
    category: 'Process & Timeline',
    q: 'How many revision rounds are included?',
    a: 'Two rounds of revisions are included in every project. Additional revision rounds can be added. We find that two rounds is enough for most clients who are engaged in the process, which is why we include a thorough review at the rough cut stage.',
  },
  {
    category: 'Process & Timeline',
    q: 'Can you work with our existing agency or marketing team?',
    a: 'Absolutely. We\'ve served as the production arm for agencies, in-house marketing departments, and brand teams. We can take direction from a creative brief or collaborate on concept development, whatever role you need us to fill.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'Who owns the footage after production?',
    a: 'You do. All footage and final files are yours. We don\'t license it back to you, hold raw footage hostage, or restrict your use of anything we shoot for you. You\'ll receive the final deliverables and, upon request, the raw footage archive.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'What file formats do you deliver in?',
    a: 'Standard delivery is H.264 MP4 at broadcast quality, ready for web, social, and presentation. We can also deliver ProRes for broadcast masters, compressed social cuts (vertical/square for Reels/TikTok/Stories), and DCP for cinema if needed. Just tell us where it\'s going.',
  },
  {
    category: 'Ownership & Delivery',
    q: 'Do you keep backups of our footage?',
    a: 'We maintain project files and delivered assets for 90 days after final delivery. After that, storage is the client\'s responsibility. We strongly recommend downloading and archiving all deliverables and raw footage immediately upon receipt.',
  },
  {
    category: 'Services',
    q: 'What types of video do you produce?',
    a: 'Corporate video, TV commercials, event coverage, interviews and documentaries, medical video, aerial/drone, motion graphics and animation, live streaming, post-production and editing, food video, and real estate video. If it involves a camera and a story, we can probably help.',
  },
  {
    category: 'Services',
    q: 'Do you do photography as well?',
    a: 'Yes. Our studio is equipped for stills photography as well as video. We handle product photography, corporate headshots, event photography, and architectural/real estate photography. We can include photo and video services in the same custom quote.',
  },
  {
    category: 'Services',
    q: 'Can you write the script for us?',
    a: 'Yes. Scriptwriting and creative development are available as part of our full-service offering. We\'ll do a discovery session to understand your goals, audience, and message, then develop a script and/or storyboard for your review before anything goes on camera.',
  },
  {
    category: 'Services',
    q: 'Do you handle casting and talent?',
    a: 'We can source local talent through our established network of actors and on-screen talent in San Antonio. We also work with talent agencies and can source from outside the market for specific requirements. Talent fees are itemized separately in your quote.',
  },
  {
    category: 'Logistics',
    q: 'Do you travel outside San Antonio?',
    a: 'Yes. We travel throughout Texas regularly, including Austin, Houston, Dallas, and beyond. We\'ve also traveled nationally and internationally for larger productions. Travel costs (flights, hotel, per diem) are itemized in the quote. For local South Texas work, there\'s typically no travel fee.',
  },
  {
    category: 'Logistics',
    q: 'Where are you located?',
    a: 'Our studio is at 8610 N New Braunfels Ave, Suite 704, San Antonio, TX 78217, just off Loop 410 on the north side of San Antonio. We have ample parking, a loading dock, and easy freeway access.',
  },
  {
    category: 'Logistics',
    q: 'Do you shoot on location or only in the studio?',
    a: 'Both. Many of our projects are shot on location at client facilities, retail environments, outdoor venues, and events. Our studio is available for productions that need a controlled environment. We can also combine location and studio shooting in the same project.',
  },
  {
    category: 'Studio',
    q: 'How do I book the studio?',
    a: 'Studio bookings are handled through our production team. Call us at 210-279-9442 or use the contact form to request a date. We\'ll confirm availability and send a studio rental agreement. Full-day and half-day rates are available.',
  },
  {
    category: 'Studio',
    q: 'What\'s included in a studio rental?',
    a: 'Studio rental includes access to the main production stage, the DMX lighting grid, the control room, the hair and makeup station, and on-site parking. Production equipment (cameras, lenses, audio) is available as an add-on. A Media Bar crew member is available for technical support.',
  },
  {
    category: 'Studio',
    q: 'Can I rent the studio without hiring your crew?',
    a: 'Yes. We offer dry studio rental for productions that bring their own crew and equipment. We do require a walkthrough before the rental date to ensure all parties understand the facility and equipment. A studio deposit and signed rental agreement are required.',
  },
  {
    category: 'Why Media Bar',
    q: 'Why choose Media Bar over a freelancer?',
    a: 'A freelancer gives you one person. We give you a full team that can include a director, DP, audio engineer, editor, colorist, and motion graphics artist, backed by a process we have refined since 2011. That means fewer surprises, higher production value, and someone to call if anything goes sideways.',
  },
  {
    category: 'Why Media Bar',
    q: 'What makes Media Bar different from other production companies?',
    a: 'Three Emmys and fifteen Telly Awards reflect the standard we bring to the work. We own our facility, which keeps costs down and quality consistent. We have been rooted in San Antonio since 2011 and are invested in this city\'s businesses in a way that a fly-in crew never will be.',
  },
  {
    category: 'Why Media Bar',
    q: 'Have you worked with brands like ours before?',
    a: 'Our client roster spans Fortune 500 brands (Unilever, Baker Hughes, Carrier), regional institutions (Frost Bank, HEB), sports organizations (San Antonio Spurs), and local San Antonio businesses. We adjust our process and approach to fit your world, not the other way around.',
  },
]

export default function FAQPage() {
  const grouped: Record<string, typeof faqs> = {}
  faqs.forEach((f) => {
    if (!grouped[f.category]) grouped[f.category] = []
    grouped[f.category].push(f)
  })

  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Frequently asked questions</p>
            <h1>
              Straight answers
              <span>before the first call.</span>
            </h1>
          </div>
          <div className={styles.heroIntro}>
            <p>
              Pricing, process, ownership, logistics, studio access, and what it
              actually feels like to work with Media Bar.
            </p>
            <Link href="/contact" className={styles.textLink}>
              Ask something else <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <nav className={styles.categoryNav} aria-label="FAQ categories">
          {categories.map((cat) => (
            <a key={cat} href={`#${cat.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}`}>
              {cat}
            </a>
          ))}
        </nav>

        <div className={styles.faqLayout}>
          <aside className={styles.faqAside}>
            <p className={styles.eyebrow}>Quick context</p>
            <h2>The useful details, organized.</h2>
            <p>
              Open only what you need. If your assignment has a detail we have
              not covered, send it through the project planner.
            </p>
            <Link href="/project-planner" className={styles.textLink}>
              Plan your project <span aria-hidden="true">↗</span>
            </Link>
          </aside>

          <div className={styles.faqGroups}>
          {Object.entries(grouped).map(([category, items]) => (
            <section
              key={category}
              className={styles.faqGroup}
              id={category.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}
            >
              <p className={styles.groupLabel}>{category}</p>
              <div className={styles.faqList}>
                {items.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}<span aria-hidden="true">+</span></summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
          </div>
        </div>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Still need an answer?</p>
            <h2>Bring us the real question behind the project.</h2>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/project-planner" className={styles.primaryButton}>Plan your project</Link>
            <a href="tel:2102799442" className={styles.phoneLink}>210-279-9442</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
