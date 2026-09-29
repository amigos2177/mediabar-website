import { Resend } from 'resend'
import { createSpotlightHandler } from '@/lib/business-spotlight-handler'

export const runtime = 'nodejs'

export const POST = createSpotlightHandler({
  enabled: () => Boolean(process.env.RESEND_API_KEY)
    && process.env.BUSINESS_SPOTLIGHT_APPLICATIONS_CLOSED !== 'true'
    && process.env.SPOTLIGHT_PREVIEW !== 'true',
  send: async (mail, idempotencyKey) => {
    const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: 'Media Bar Website <forms@mediabarproductions.com>',
      to: 'contact@mediabarproductions.com',
      ...mail,
    }, { idempotencyKey })
    return !error && Boolean(data?.id)
  },
})
