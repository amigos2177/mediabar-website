import { buildMetadata } from '@/lib/seo'
import { FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Video Production FAQ | San Antonio',
  description: 'Common questions about video production in San Antonio — pricing, timelines, process, and deliverables — answered by the Media Bar Productions team.',
  path: '/faq',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageJsonLd faqs={[
        {
          question: 'How much does a video cost?',
          answer: "It depends on the scope — but we give you a fully itemized quote so there are no surprises. A basic testimonial or interview video starts around $1,500–$3,000. A polished commercial or brand film typically runs $5,000–$25,000+. We'll ask the right questions and give you a real number fast.",
        },
        {
          question: 'Do you charge hourly or by project?',
          answer: "Almost always by project. We scope out exactly what's needed — crew, gear, studio time, edit passes, graphics, music licensing — and give you a fixed price. That way you know what you're paying for before anything starts, and there are no hourly overruns.",
        },
        {
          question: "What's included in a quote?",
          answer: "Every line item: pre-production (scripting, storyboarding, shot list), production (crew, equipment, studio or location), and post-production (editing, color, audio mix, graphics, revisions). Music licensing is included when applicable. You won't get a vague lump sum.",
        },
        {
          question: 'Do you require a deposit?',
          answer: "Yes — we typically require a 50% deposit to hold your production date, with the balance due upon delivery of the final files. For larger projects we can structure milestone payments. We'll outline the payment schedule in your contract.",
        },
        {
          question: 'How long does the production process take?',
          answer: "From kickoff to final delivery, most projects take 2–4 weeks. Rush turnarounds are available — we've delivered same-day edits for live events and 48-hour cuts for time-sensitive campaigns. Timeline depends on complexity, revision rounds, and your approval speed.",
        },
        {
          question: 'What does the process look like from first contact to final video?',
          answer: 'Step 1: Discovery call or form — you tell us what you need. Step 2: We send a detailed quote within 1 business day. Step 3: You approve and put down a deposit. Step 4: Pre-production — scripting, planning, location scouting. Step 5: Production day(s). Step 6: Edit and review — typically 2 rounds of revisions. Step 7: Final delivery in your preferred format.',
        },
        {
          question: 'How many revision rounds are included?',
          answer: 'Two rounds of revisions are included in every project. Additional revision rounds can be added. We find that two rounds is enough for most clients who are engaged in the process — which is why we include a thorough review at the rough cut stage.',
        },
        {
          question: 'Can you work with our existing agency or marketing team?',
          answer: "Absolutely. We've served as the production arm for agencies, in-house marketing departments, and brand teams. We can take direction from a creative brief or collaborate on concept development — whatever role you need us to fill.",
        },
        {
          question: 'Who owns the footage after production?',
          answer: "You do. All footage and final files are yours. We don't license it back to you, hold raw footage hostage, or restrict your use of anything we shoot for you. You'll receive the final deliverables and, upon request, the raw footage archive.",
        },
        {
          question: 'What file formats do you deliver in?',
          answer: "Standard delivery is H.264 MP4 at broadcast quality — ready for web, social, and presentation. We can also deliver ProRes for broadcast masters, compressed social cuts (vertical/square for Reels/TikTok/Stories), and DCP for cinema if needed. Just tell us where it's going.",
        },
        {
          question: 'Do you keep backups of our footage?',
          answer: "We maintain project files and delivered assets for 90 days after final delivery. After that, storage is the client's responsibility. We strongly recommend downloading and archiving all deliverables and raw footage immediately upon receipt.",
        },
        {
          question: 'What types of video do you produce?',
          answer: 'Corporate video, TV commercials, event coverage, interviews and documentaries, medical video, aerial/drone, motion graphics and animation, live streaming, post-production and editing, food video, and real estate video. If it involves a camera and a story, we can probably help.',
        },
        {
          question: 'Do you do photography as well?',
          answer: "Yes — our studio is equipped for stills photography as well as video. We handle product photography, corporate headshots, event photography, and architectural/real estate photography. Ask about our combined photo+video packages.",
        },
        {
          question: 'Can you write the script for us?',
          answer: "Yes. Scriptwriting and creative development are available as part of our full-service offering. We'll do a discovery session to understand your goals, audience, and message, then develop a script and/or storyboard for your review before anything goes on camera.",
        },
        {
          question: 'Do you handle casting and talent?',
          answer: "We can source local talent through our established network of actors and on-screen talent in San Antonio. We also work with talent agencies and can source from outside the market for specific requirements. Talent fees are itemized separately in your quote.",
        },
        {
          question: 'Do you travel outside San Antonio?',
          answer: "Yes. We travel throughout Texas regularly — Austin, Houston, Dallas, and beyond. We've also traveled nationally and internationally for larger productions. Travel costs (flights, hotel, per diem) are itemized in the quote. For local South Texas work, there's typically no travel fee.",
        },
        {
          question: 'Where are you located?',
          answer: 'Our studio is at 8610 N New Braunfels Ave, Suite 704, San Antonio, TX 78217 — just off Loop 410 on the north side of San Antonio. We have ample parking, a loading dock, and easy freeway access.',
        },
        {
          question: 'Do you shoot on location or only in the studio?',
          answer: 'Both. Many of our projects are shot on location — at client facilities, retail environments, outdoor venues, and events. Our studio is available for productions that need a controlled environment. We can also combine location and studio shooting in the same project.',
        },
        {
          question: 'How do I book the studio?',
          answer: "Studio bookings are handled through our production team. Call us at 210-279-9442 or use the contact form to request a date. We'll confirm availability and send a studio rental agreement. Full-day and half-day rates are available.",
        },
        {
          question: "What's included in a studio rental?",
          answer: 'Studio rental includes access to the main production stage with the cyc wall, the DMX lighting grid, the control room, the hair and makeup station, and on-site parking. Production equipment (cameras, lenses, audio) is available as an add-on. A Media Bar crew member is available for technical support.',
        },
        {
          question: 'Can I rent the studio without hiring your crew?',
          answer: 'Yes — we offer dry studio rental for productions that bring their own crew and equipment. We do require a walkthrough before the rental date to ensure all parties understand the facility and equipment. A studio deposit and signed rental agreement are required.',
        },
        {
          question: 'Why choose Media Bar over a freelancer?',
          answer: 'A freelancer gives you one person. We give you a full team — director, DP, audio engineer, editor, colorist, motion graphics artist — with 13 years of process behind us. That means fewer surprises, higher production value, and someone to call if anything goes sideways.',
        },
        {
          question: 'What makes Media Bar different from other production companies?',
          answer: "Three Emmys and fifteen Telly Awards for a reason — we hold our work to broadcast standards regardless of budget. We own our facility, which keeps costs down and quality consistent. We've been in San Antonio for 13 years and we're invested in this city's businesses in a way that a fly-in crew never will be.",
        },
        {
          question: 'Have you worked with brands like ours before?',
          answer: 'Our client roster spans Fortune 500 brands (Unilever, Baker Hughes, Carrier), regional institutions (Frost Bank, HEB), sports organizations (San Antonio Spurs), and local San Antonio businesses. We adjust our process and approach to fit your world, not the other way around.',
        },
      ]} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq' },
      ]} />
      {children}
    </>
  )
}
