import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes
// In production, store in a database or send to an email service
const leads: Array<{
  name: string
  email: string
  company: string
  projectBrief: string
  budget: string
  startDate: string
  submittedAt: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectBrief, budget, startDate, honeypot } = body

    // Honeypot validation
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!name || !email || !projectBrief || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Store the lead
    leads.push({
      name,
      email,
      company,
      projectBrief,
      budget,
      startDate,
      submittedAt: new Date().toISOString(),
    })

    // TODO: In production, send an email here using:
    // - Nodemailer
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Your preferred email service

    // Example with environment variables:
    // const emailService = new EmailService({
    //   apiKey: process.env.EMAIL_API_KEY,
    // })
    // await emailService.send({
    //   to: email,
    //   subject: 'Project Inquiry Received',
    //   template: 'contact-confirmation',
    //   data: { name, email, company, budget },
    // })

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve leads (for admin dashboard)
export async function GET() {
  return NextResponse.json(leads)
}
