import RbfcuCampaignPage, { campaignMetadata } from '@/components/RbfcuCampaignPage'
import { rbfcuCampaigns } from '@/data/work-campaigns'

const campaign = rbfcuCampaigns[0]
export const metadata = campaignMetadata(campaign)
export default function Page() { return <RbfcuCampaignPage campaign={campaign} description="Media Bar Productions handled the RBFCU Keldon Johnson campaign from pre-production through post-production, introducing the Spurs player as an RBFCU spokesperson and highlighting his character alongside his role on the team. A tightly planned four-hour schedule accommodated a photo shoot with Keldon and three commercials—expanding the original two-commercial plan. Delivery also included 10- and 15-second versions." /> }
