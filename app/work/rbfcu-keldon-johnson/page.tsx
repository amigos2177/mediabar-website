import RbfcuCampaignPage, { campaignMetadata } from '@/components/RbfcuCampaignPage'
import { rbfcuCampaigns } from '@/data/work-campaigns'

const campaign = rbfcuCampaigns[0]
export const metadata = campaignMetadata(
  campaign,
  'Three :30 broadcast commercials and short-form cutdowns for RBFCU featuring San Antonio Spurs forward Keldon Johnson, produced by Media Bar Productions.',
)
export default function Page() {
  return (
    <RbfcuCampaignPage
      campaign={campaign}
      description="Media Bar Productions handled the RBFCU Keldon Johnson campaign from pre-production through post-production, introducing the Spurs player as an RBFCU spokesperson and highlighting his character alongside his role on the team. A tightly planned four-hour schedule accommodated a photo shoot with Keldon and three commercials—expanding the original two-commercial plan. Delivery also included 10- and 15-second versions."
      highlights={[
        {
          number: '01',
          title: 'Four-hour athlete schedule',
          copy: 'Pre-lighting, camera blocking, and shot sequencing were locked ahead of arrival so a single four-hour window captured both a still photo shoot and three full commercials—exceeding the original two-spot scope.',
        },
        {
          number: '02',
          title: 'Authentic spokesperson direction',
          copy: 'Production focused on making Keldon Johnson comfortable on set so his personality and community connection came through naturally across Music, PSA 01, and PSA 02.',
        },
        {
          number: '03',
          title: 'Multi-length campaign delivery',
          copy: 'In addition to the three :30 broadcast commercials, Media Bar finished coordinated :15 and :10 cutdowns so RBFCU’s media team could deploy the campaign across broadcast and digital placements.',
        },
      ]}
    />
  )
}
