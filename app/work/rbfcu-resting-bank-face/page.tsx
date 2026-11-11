import RbfcuCampaignPage, { campaignMetadata } from '@/components/RbfcuCampaignPage'
import { rbfcuCampaigns } from '@/data/work-campaigns'

const campaign = rbfcuCampaigns[1]
export const metadata = campaignMetadata(campaign)
export default function Page() { return <RbfcuCampaignPage campaign={campaign} /> }
