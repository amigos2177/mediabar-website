import {
  mediaBarAnswersVideos,
  type MediaBarAnswersVideo,
} from './media-bar-answers'

export type ResourceLink = {
  label: string
  href: string
  external?: boolean
}

export type ResourceVideo = MediaBarAnswersVideo

export type VideoProductionFaq = {
  category: string
  slug: string
  question: string
  answer: string[]
  links?: ResourceLink[]
  video?: ResourceVideo
}

export { mediaBarAnswersVideos }

export const videoFaqCategories = [
  {
    name: 'Choosing a Direction',
    slug: 'choosing-a-direction',
    description: 'Start with the audience, purpose, and business decision the video needs to support.',
  },
  {
    name: 'Budget and Scope',
    slug: 'budget-and-scope',
    description: 'Understand what changes a production estimate and how to compare plans fairly.',
  },
  {
    name: 'Pre-Production',
    slug: 'pre-production',
    description: 'Prepare the message, people, locations, approvals, and schedule before the cameras arrive.',
  },
  {
    name: 'Production Day',
    slug: 'production-day',
    description: 'Know what affects crew size, camera coverage, sound, interviews, and the pace of a shoot.',
  },
  {
    name: 'Post-Production and Delivery',
    slug: 'post-production-and-delivery',
    description: 'Plan editing, review, accessibility, formats, and long-term use before delivery.',
  },
  {
    name: 'Filming in Texas',
    slug: 'filming-in-texas',
    description: 'Account for Texas travel, weather, locations, regulated environments, and aerial work.',
  },
] as const

export const videoProductionFaqs: VideoProductionFaq[] = [
  {
    category: 'Choosing a Direction',
    slug: 'what-does-professional-video-production-include',
    question: 'What does professional video production include?',
    answer: [
      'Professional video production usually includes strategy, creative development, pre-production, filming, post-production, review, and delivery. The exact team and process should match the job, not a standard equipment package.',
      'A strong production partner helps define the audience and desired action before choosing cameras or locations. That early work shapes the script, interview plan, crew, schedule, edit, captions, graphics, and final versions. The result should be a usable communication asset, not simply attractive footage.',
    ],
    links: [{ label: 'See the full production process', href: '/how-we-work' }],
  },
  {
    category: 'Choosing a Direction',
    slug: 'when-is-professional-video-worth-it',
    question: 'When is professional video production worth the investment?',
    answer: [
      'Professional production is most valuable when the message is important, the audience is large, the filming opportunity is difficult to repeat, or the content needs to represent the organization for a long time.',
      'A phone can be right for an informal update or a quick social post. A trained team becomes more useful when the project involves executives, customers, patients, paid advertising, multiple locations, live events, specialized sound, brand review, or several delivery formats. The decision should follow the risk and expected use of the content.',
    ],
  },
  {
    category: 'Choosing a Direction',
    slug: 'what-video-should-a-business-make-first',
    question: 'What type of video should a business make first?',
    answer: [
      'Start with the question your most important audience needs answered. For many organizations, that means a clear brand or service overview, a customer story, an executive message, a recruiting film, or a short library of expert answers.',
      'The first project should solve a real communication problem and have a clear distribution plan. A useful brief identifies who needs to see the video, what they should understand, where they will watch, and what should happen next. Format follows those decisions.',
    ],
    video: mediaBarAnswersVideos.firstBusinessVideo,
    links: [{ label: 'Explore video production services', href: '/video-production' }],
  },
  {
    category: 'Choosing a Direction',
    slug: 'how-to-choose-a-video-production-company',
    question: 'How should we choose a video production company?',
    answer: [
      'Look for relevant work, a clear planning process, realistic communication, and a team that can explain why it recommends a particular approach. A reel shows visual ability, but a case study and a thoughtful discovery conversation reveal more about how the company solves problems.',
      'Ask who will lead the project, what is included in the estimate, how approvals work, what happens when the scope changes, and which deliverables you will receive. For Texas assignments, confirm whether the team understands local travel, locations, weather, venue coordination, and regional crew needs.',
    ],
    links: [
      { label: 'Meet Media Bar', href: '/about' },
      { label: 'Review a campaign case study', href: '/work/rbfcu-go-beyond-banking' },
    ],
  },
  {
    category: 'Choosing a Direction',
    slug: 'what-should-a-video-creative-brief-include',
    question: 'What should a video creative brief include?',
    answer: [
      'A useful brief identifies the audience, business goal, core message, desired action, distribution channels, required deliverables, stakeholders, deadline, budget context, and any brand or legal constraints.',
      'It does not need to prescribe every shot. The brief should give the production team enough context to recommend the best creative and technical plan. Examples of work you like can help, especially when you explain what is useful about each example rather than asking for a copy.',
    ],
    video: mediaBarAnswersVideos.productionEstimate,
    links: [{ label: 'Start the Media Bar project planner', href: '/project-planner' }],
  },
  {
    category: 'Budget and Scope',
    slug: 'how-is-a-video-production-budget-determined',
    question: 'How is a video production budget determined?',
    answer: [
      'A video budget is built from the work required to plan, capture, finish, and deliver the project. The creative concept, crew, equipment, locations, talent, number of shoot days, travel, editing, graphics, music, review process, and deliverable count can all affect the estimate.',
      'Two videos of the same length can require very different productions. A sixty-second interview edit and a sixty-second commercial with casting, multiple locations, art direction, and visual effects should not be priced as the same product. A useful estimate connects each cost to the approved scope.',
    ],
    video: mediaBarAnswersVideos.corporateVideoCost,
    links: [{ label: 'See what drives video cost', href: '/pricing' }],
  },
  {
    category: 'Budget and Scope',
    slug: 'how-much-should-local-tv-commercial-cost-in-texas',
    question: 'How much should a local TV commercial cost in Texas?',
    answer: [
      'There is no one-size-fits-all price because a useful commercial estimate starts with the business goal and the approved creative concept. A straightforward spot filmed at one location is a different production from a scripted campaign with multiple scenes, actors, locations, and shoot days.',
      'The scope can include crew, equipment, location access, talent and usage rights, editing, music, sound mixing, color, graphics, captions, approvals, revision rounds, and versions for broadcast, connected TV, streaming, and social media. Production creates the commercial, while media buying purchases and schedules the advertising placement. Those are separate scopes even when they are planned together.',
    ],
    video: mediaBarAnswersVideos.localCommercialCost,
    links: [
      { label: 'Explore commercial video production', href: '/video-production/commercials' },
      { label: 'Plan a commercial project', href: '/project-planner' },
    ],
  },
  {
    category: 'Budget and Scope',
    slug: 'what-increases-video-production-cost',
    question: 'What usually increases video production cost?',
    answer: [
      'The largest cost changes often come from additional shoot days, more locations, larger crews, specialized equipment, professional talent, complex art direction, travel, animation, visual effects, and a growing list of final versions.',
      'Late changes can also add cost because one decision may affect the script, schedule, edit, graphics, music, and approvals. Early alignment is one of the most reliable ways to protect the budget. When priorities are clear, a producer can recommend where additional production value will be visible and where a simpler approach will work.',
    ],
  },
  {
    category: 'Budget and Scope',
    slug: 'how-to-compare-video-production-estimates',
    question: 'How should we compare video production estimates?',
    answer: [
      'Compare scope before comparing totals. Confirm whether each estimate includes creative development, scripting, production management, crew roles, equipment, locations, talent, insurance, travel, editing, graphics, music, captions, review rounds, and every required delivery format.',
      'A lower total may represent a different plan rather than a better price. Ask about exclusions, assumptions, overtime, cancellation terms, usage rights, raw footage, and what triggers a change order. The best estimate makes it possible to understand the production you are actually buying.',
    ],
  },
  {
    category: 'Budget and Scope',
    slug: 'can-one-video-shoot-create-multiple-assets',
    question: 'Can one video shoot create multiple pieces of content?',
    answer: [
      'Yes. A well-planned production day can create a main film plus shorter edits, vertical clips, interview excerpts, recruiting content, internal communications, still frames, and other channel-specific assets.',
      'The important step is to identify those uses before filming. A team may need different framing, additional interview questions, clean product shots, photography coverage, or extra time for social-first scenes. Planning the content system in advance is usually more efficient than trying to manufacture every version from a single finished edit.',
    ],
    links: [{ label: 'Read the multi-format planning guide', href: '/blog/corporate-video-multi-format-strategy' }],
  },
  {
    category: 'Budget and Scope',
    slug: 'where-should-a-video-budget-be-spent',
    question: 'Where should we spend the video budget first?',
    answer: [
      'Protect the parts the audience will notice and the project cannot easily fix later: the idea, preparation, performance, lighting, sound, and enough time to capture the right material. Clear direction and clean audio often create more value than adding equipment without a purpose.',
      'The right priority changes by project. A customer story may depend on interview preparation and a comfortable setting. A commercial may depend on casting and art direction. An event may depend on audio access and reliable coverage. Spend against the communication risk, not a generic gear list.',
    ],
  },
  {
    category: 'Pre-Production',
    slug: 'how-far-in-advance-should-video-production-start',
    question: 'How far in advance should we begin planning a video project?',
    answer: [
      'Begin as soon as the goal, deadline, and likely stakeholders are known. A straightforward interview may need less preparation than a commercial, multi-location campaign, healthcare production, or event with a fixed date.',
      'Lead time is used for discovery, concept approval, scripting, scheduling, location access, talent, permits, insurance, travel, and technical planning. More time does not need to make the process slower. It creates room to solve problems before they become production-day expenses.',
    ],
  },
  {
    category: 'Pre-Production',
    slug: 'who-should-be-involved-in-video-planning',
    question: 'Who should be involved in video planning and approvals?',
    answer: [
      'Include the person who owns the business goal, the day-to-day project lead, the brand or communications reviewer, and any legal, clinical, technical, or executive stakeholder whose approval can materially change the work.',
      'Keep the active review group as small as the organization allows. Establish who can approve the concept, script, production plan, rough cut, and final delivery. Conflicting feedback is easier to resolve when one client lead consolidates comments and the approval path is defined before filming.',
    ],
  },
  {
    category: 'Pre-Production',
    slug: 'do-we-need-a-finished-script-before-contacting-a-production-company',
    question: 'Do we need a finished script before contacting a production company?',
    answer: [
      'No. A goal, audience, deadline, and useful business context are enough to begin a productive conversation. A production company can help develop the concept, message, interview plan, script, storyboard, or shot list.',
      'If your agency or internal team already has an approved script, the production partner can focus on execution and may still identify practical issues related to timing, locations, talent, graphics, or deliverables. The important thing is to clarify which decisions are fixed and which are open to collaboration.',
    ],
  },
  {
    category: 'Pre-Production',
    slug: 'how-to-prepare-people-for-a-video-interview',
    question: 'How should we prepare employees, executives, or customers for an interview?',
    answer: [
      'Explain the purpose, audience, location, expected time, and general topics. Avoid asking most people to memorize a full answer. They usually sound more natural when they understand the message and respond in their own words.',
      'A good interviewer creates a conversation, asks follow-up questions, and gives the subject time to reset. For nervous participants, schedule a short preparation call and avoid a crowded room. Clothing guidance, accessibility needs, pronunciation notes, and sensitive topics should be discussed before the shoot.',
    ],
    links: [{ label: 'Explore interview video production', href: '/video-production/interview' }],
  },
  {
    category: 'Pre-Production',
    slug: 'what-permissions-are-needed-for-video-production',
    question: 'What permissions or releases may a video production need?',
    answer: [
      'Depending on the project, production may need location permission, appearance releases, talent agreements, music licenses, property releases, permits, certificates of insurance, and approval to display trademarks, artwork, or other protected material.',
      'Requirements vary by location, organization, intended use, and subject matter. A producer can help identify common production documents, but the client should involve its legal or compliance team when rights, privacy, employment, healthcare, minors, or regulated claims are involved. This resource is production guidance, not legal advice.',
    ],
  },
  {
    category: 'Production Day',
    slug: 'how-many-people-are-on-a-video-production-crew',
    question: 'How many people are on a video production crew?',
    answer: [
      'Crew size follows the creative and technical plan. A focused interview may use a compact team, while a commercial, live event, multi-location production, or complex lighting setup can require specialized camera, sound, lighting, art, production, and client-support roles.',
      'More people are not automatically better, but missing a necessary role can slow the day or weaken the result. Ask who is responsible for directing, camera, sound, lighting, data, production management, and any specialty work. The estimate should make the staffing plan understandable.',
    ],
  },
  {
    category: 'Production Day',
    slug: 'how-many-cameras-does-a-video-production-need',
    question: 'How many cameras does a video production need?',
    answer: [
      'The answer depends on whether the action can be repeated, how many people are speaking, the available time, and the edit style. One camera may be right for a controlled setup. Multiple cameras can protect an unrepeatable event, capture simultaneous reactions, or create edit options during an interview.',
      'Every added camera also needs a purposeful angle, matching exposure and color, media management, and sometimes another operator. Camera count should solve a coverage problem rather than serve as a quality claim.',
    ],
  },
  {
    category: 'Production Day',
    slug: 'how-long-is-a-video-production-day',
    question: 'How long does a video production day take?',
    answer: [
      'The schedule is built around setup, lighting, sound, rehearsals, filming, company moves, breaks, and strike. The length depends on the number of scenes, people, locations, and setups, not only the duration of the final video.',
      'A realistic call sheet protects performance and safety. Trying to place too many setups into one day can create overtime or force creative compromises. A producer should identify the must-have material, group efficient setups, and explain what can move to another day if conditions change.',
    ],
    video: mediaBarAnswersVideos.executiveInterviewsOneDay,
  },
  {
    category: 'Production Day',
    slug: 'can-we-film-in-an-office-while-it-is-open',
    question: 'Can we film in an office, store, or facility while it is operating?',
    answer: [
      'Often, yes, but the production plan must account for sound, safety, access, customers, employees, confidential information, and normal operations. Some scenes can be filmed in a controlled area while the rest of the facility remains active.',
      'A location walkthrough helps identify noise, power, loading, parking, release needs, sensitive screens or documents, and the best time for each setup. In medical, industrial, food-service, and public environments, the organization should involve its safety, privacy, compliance, or operations lead early.',
    ],
  },
  {
    category: 'Production Day',
    slug: 'why-is-sound-important-in-video-production',
    question: 'Why is sound so important in video production?',
    answer: [
      'Viewers may tolerate an imperfect image longer than dialogue they cannot understand. Clean production sound begins with the right microphone, controlled placement, monitoring, room evaluation, and a plan for background noise.',
      'Air conditioning, refrigerators, traffic, crowds, machinery, reflective rooms, and venue sound systems can all affect recording. For events, the video team should coordinate with the audio provider before show day. For interviews, choosing a quieter room can improve the final piece more than an expensive visual upgrade.',
    ],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'what-happens-after-video-filming',
    question: 'What happens after filming is complete?',
    answer: [
      'The team secures and organizes the media, reviews the footage, synchronizes sound, builds the story, refines picture and pacing, mixes audio, corrects color, adds graphics and captions, and prepares review and delivery files.',
      'The sequence varies by project. A documentary interview may begin with transcripts and a story edit. A commercial may follow approved boards. An event recap may depend on music and key moments. Good post-production is a decision-making process, not simply assembling clips in chronological order.',
    ],
    video: mediaBarAnswersVideos.postProductionDelays,
    links: [{ label: 'Explore post-production services', href: '/video-production/post-production' }],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'how-long-does-video-editing-take',
    question: 'How long does video editing take?',
    answer: [
      'Editing time depends on footage volume, story complexity, graphics, sound, color, number of deliverables, and the speed of client feedback. A short finished video is not always a short edit.',
      'Set the review calendar before production when the launch date matters. Identify who receives each cut, how long reviewers have, and which milestones require legal, brand, clinical, or executive approval. A schedule is more reliable when the production team and client both own their review dates.',
    ],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'how-to-give-useful-video-feedback',
    question: 'How can our team give useful feedback on a video edit?',
    answer: [
      'Connect feedback to the approved audience, goal, message, and scope. Time-coded comments are easier to act on than separate emails, and one consolidated client response prevents the editor from receiving conflicting directions.',
      'Explain the problem before prescribing the exact edit. For example, “the product benefit is not clear by this point” gives the team more room to solve the issue than one isolated shot request. Separate required factual corrections from creative preferences, and confirm that all decision-makers reviewed the same version.',
    ],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'what-video-formats-and-versions-should-we-request',
    question: 'What video formats and versions should we request?',
    answer: [
      'Request versions based on where the audience will watch. A typical delivery plan may include a high-quality master, web files, vertical and square social versions, shorter cutdowns, captioned versions, and platform-specific aspect ratios.',
      'Share the destination list before filming and editing. Website, broadcast, connected TV, YouTube, LinkedIn, Instagram, event playback, digital signage, and internal presentations may have different technical and creative needs. Keep an approved deliverable matrix so file names, durations, ratios, captions, and calls to action are clear.',
    ],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'should-business-videos-have-captions',
    question: 'Should business videos include captions?',
    answer: [
      'In most cases, yes. Accurate captions help people who are deaf or hard of hearing, viewers watching without sound, and audiences in noisy or quiet environments. They also make dialogue easier to review and reuse.',
      'Plan captioning as a deliverable rather than an afterthought. Automated transcripts should be checked for names, technical language, speaker changes, and timing. Accessibility obligations vary, so organizations should involve the appropriate accessibility or legal professional when requirements apply.',
    ],
    links: [{ label: 'Read official ADA web accessibility guidance', href: 'https://www.ada.gov/resources/web-guidance/', external: true }],
  },
  {
    category: 'Post-Production and Delivery',
    slug: 'who-owns-raw-video-footage',
    question: 'Who owns the raw footage and project files?',
    answer: [
      'Ownership and access should be written into the production agreement. Final deliverables, raw camera media, editable project files, licensed music, stock footage, fonts, and third-party assets are different things and may carry different rights or transfer requirements.',
      'Ask what will be delivered, when ownership transfers, how long files are retained, and whether future editing requires the original software or licenses. Media Bar states its own ownership and delivery terms in each project agreement. Other production companies may structure them differently.',
    ],
    links: [{ label: 'Read Media Bar company FAQs', href: '/faq' }],
  },
  {
    category: 'Filming in Texas',
    slug: 'does-a-texas-video-production-need-a-permit',
    question: 'Does a video production in Texas need a filming permit?',
    answer: [
      'Permit requirements depend on the city, county, public property, road use, parking, equipment footprint, special effects, and location owner. A private interior with the owner’s permission may be different from filming on a sidewalk, street, park, or government property.',
      'Confirm requirements with the authority that controls the location. Do not assume one Texas city’s process applies in another. A local producer or location manager can help coordinate applications, insurance certificates, neighborhood notices, police or fire support, and other location conditions when needed.',
    ],
    links: [{ label: 'Visit the Texas Film Commission', href: 'https://gov.texas.gov/film', external: true }],
  },
  {
    category: 'Filming in Texas',
    slug: 'how-does-texas-weather-affect-video-production',
    question: 'How does Texas weather affect a production plan?',
    answer: [
      'Heat, sudden storms, wind, bright midday sun, humidity, and seasonal daylight can change the schedule, equipment plan, performance, and safety needs. Exterior work should include a weather decision process and a practical backup plan.',
      'In hot conditions, productions may schedule demanding exterior scenes earlier, provide shade and hydration, protect equipment, and build in recovery time. Wind matters for sound, lighting, drones, and overhead equipment. The right plan depends on the location, season, people, and type of work.',
    ],
  },
  {
    category: 'Filming in Texas',
    slug: 'can-a-san-antonio-crew-film-across-texas',
    question: 'Can a San Antonio production company film in Austin, Houston, Dallas, and other Texas markets?',
    answer: [
      'Yes. A San Antonio-based production team can plan and film throughout Texas, using a traveling core crew, trusted local crew, or a combination based on the assignment.',
      'The production plan should account for travel time, freight, local access, parking, location rules, crew calls, and whether several markets can be scheduled efficiently. Media Bar regularly serves organizations across Texas while keeping production leadership connected to its San Antonio team.',
    ],
    links: [
      { label: 'San Antonio', href: '/locations/san-antonio' },
      { label: 'Austin', href: '/locations/austin' },
      { label: 'Dallas-Fort Worth', href: '/locations/dallas' },
      { label: 'Houston', href: '/locations/houston' },
    ],
  },
  {
    category: 'Filming in Texas',
    slug: 'how-to-plan-video-in-medical-industrial-or-controlled-locations',
    question: 'How should we plan filming in a medical, industrial, or controlled-access location?',
    answer: [
      'Begin with the organization’s safety, privacy, operations, and compliance requirements. Identify restricted areas, confidential information, required credentials, personal protective equipment, infection-control rules, escorts, power limits, and times when filming will least affect operations.',
      'Use a technical walkthrough when possible and document what the crew may capture. The production team can design a smaller footprint, longer lenses, remote monitoring, or staged demonstrations when normal access is not practical. Qualified client representatives remain responsible for site-specific regulatory and safety decisions.',
    ],
    video: mediaBarAnswersVideos.healthcareVideoPlanning,
    links: [{ label: 'Explore medical video production', href: '/video-production/medical' }],
  },
  {
    category: 'Filming in Texas',
    slug: 'what-is-required-for-commercial-drone-video',
    question: 'What is required for commercial drone video in Texas?',
    answer: [
      'Commercial drone work generally falls under federal aviation rules, including pilot certification, aircraft registration, operating limits, and airspace authorization when required. Location permission, weather, people, moving vehicles, nearby airports, and local restrictions can also affect whether a planned shot is possible.',
      'Aerial ideas should be reviewed early because authorization and safety planning may change the schedule or shot design. Confirm current requirements with the Federal Aviation Administration and use a qualified commercial operator. Conditions and rules can change, so a previous flight does not guarantee approval for a new one.',
    ],
    links: [
      { label: 'Read FAA Part 107 guidance', href: 'https://www.faa.gov/uas/commercial_operators', external: true },
      { label: 'Explore aerial video production', href: '/video-production/aerial' },
    ],
  },
]

export function faqSchemaItems() {
  return videoProductionFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer.join(' '),
  }))
}
