import RbfcuCampaignPage, { campaignMetadata } from '@/components/RbfcuCampaignPage'
import { rbfcuCampaigns } from '@/data/work-campaigns'

const campaign = rbfcuCampaigns[1]
export const metadata = campaignMetadata(campaign)
export default function Page() { return <RbfcuCampaignPage campaign={campaign} description="Media Bar Productions handled RBFCU’s Resting Bank Face campaign from pre-production through filming and post-production. The campaign includes four commercials, each filmed over a full production day with actors. Launched November 9, 2026, the campaign brings the Resting Bank Face concept to screen through four distinct spots." /> }
