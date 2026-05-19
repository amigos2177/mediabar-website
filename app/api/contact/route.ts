import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 16px;color:#888888;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
      <td style="padding:8px 16px;color:#ffffff;font-size:13px;vertical-align:top">${value}</td>
    </tr>`
}

function section(title: string, rows: string) {
  return `
    <tr>
      <td colspan="2" style="padding:24px 16px 8px;border-top:1px solid #C9A84C">
        <span style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#C9A84C">${title}</span>
      </td>
    </tr>
    ${rows}`
}

function buildHtml(fields: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  timeline?: string
  message: string
}) {
  const contactRows = [
    row('Name', `${fields.firstName} ${fields.lastName}`),
    row('Email', fields.email),
    ...(fields.phone ? [row('Phone', fields.phone)] : []),
    ...(fields.company ? [row('Company', fields.company)] : []),
  ].join('')

  const projectFields = [
    ...(fields.service ? [row('Service', fields.service)] : []),
    ...(fields.budget ? [row('Budget', fields.budget)] : []),
    ...(fields.timeline ? [row('Timeline', fields.timeline)] : []),
  ]

  const projectSection = projectFields.length
    ? section('Project Details', projectFields.join(''))
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#0A0A0A">
    <tr>
      <td colspan="2" style="padding:32px 16px 16px;border-bottom:2px solid #CC0000">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#CC0000">Media Bar Productions</span>
        <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff;font-weight:700">New Project Inquiry</h1>
        <p style="margin:6px 0 0;font-size:13px;color:#888888">From ${fields.firstName} ${fields.lastName} &lt;${fields.email}&gt;</p>
      </td>
    </tr>
    ${section('Contact Info', contactRows)}
    ${projectSection}
    ${section('Message', row('', fields.message.replace(/\n/g, '<br>')))}
    <tr>
      <td colspan="2" style="padding:24px 16px;border-top:1px solid #1a1a1a">
        <p style="margin:0;font-size:11px;color:#555555">Sent from the contact form at mediabarproductions.com</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    let body: Record<string, string>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const { firstName, lastName, email, phone, company, service, budget, timeline, message } = body

    if (!firstName?.trim()) {
      return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
    }
    if (!lastName?.trim()) {
      return NextResponse.json({ error: 'Last name is required.' }, { status: 400 })
    }
    if (!email?.trim()) {
      return NextResponse.json({ error: 'Email address is required.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: 'Please tell us about your project.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Media Bar Website <forms@mediabarproductions.com>',
      to: 'contact@mediabarproductions.com',
      replyTo: email.trim(),
      subject: `New Project Inquiry from ${firstName.trim()} ${lastName.trim()}`,
      html: buildHtml({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone?.trim() || undefined,
        company: company?.trim() || undefined,
        service: service?.trim() || undefined,
        budget: budget?.trim() || undefined,
        timeline: timeline?.trim() || undefined,
        message: message.trim(),
      }),
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or call us at 210-279-9442.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thanks — we got your message and will respond within 1 business day.',
    })
  } catch (err) {
    console.error('[contact] Unhandled error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us at 210-279-9442.' },
      { status: 500 }
    )
  }
}
