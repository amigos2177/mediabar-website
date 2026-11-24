import RbfcuCampaignPage, { campaignMetadata } from '@/components/RbfcuCampaignPage'
import { rbfcuCampaigns } from '@/data/work-campaigns'

const campaign = rbfcuCampaigns[1]
export const metadata = campaignMetadata(
  campaign,
  'Four :30 broadcast commercials for RBFCU’s Resting Bank Face campaign, produced end-to-end by Media Bar Productions in San Antonio from pre-production to post.',
)
export default function Page() {
  return (
    <RbfcuCampaignPage
      campaign={campaign}
      description="Media Bar Productions handled RBFCU’s Resting Bank Face campaign from pre-production through filming and post-production. The campaign includes four commercials, each filmed over a full production day with actors. Launched November 9, 2026, the campaign brings the Resting Bank Face concept to screen through four distinct spots."
      highlights={[
        {
          number: '01',
          title: 'Pre-production & casting',
          copy: 'Each of the four comedic scenarios (Resting Bank Face, Doctor, Intervention, and Interrogation) was planned around casting, locations, art direction, and financial-brand review before cameras rolled.',
        },
        {
          number: '02',
          title: 'Four full production days',
          copy: 'Every :30 commercial received a dedicated full shoot day with actors and a full San Antonio commercial crew, giving each spot its own visual world while keeping one unified campaign tone.',
        },
        {
          number: '03',
          title: 'Broadcast finishing & rollout',
          copy: 'Editorial, color grading, sound design, and final broadcast finishing were completed in-house so all four spots launched cleanly together on November 9, 2026.',
        },
      ]}
    />
  )
}
