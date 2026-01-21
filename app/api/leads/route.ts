import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes
// In production, store in a database
const subscribers: Array<{
  name: string
  email: string
  subscribedAt: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = subscribers.find((sub) => sub.email === email)
    if (existing) {
      return NextResponse.json(
        { error: 'Already subscribed' },
        { status: 400 }
      )
    }

    // Store the subscriber
    subscribers.push({
      name,
      email,
      subscribedAt: new Date().toISOString(),
    })

    // TODO: In production, send the lead magnet and confirmation email using:
    // - Nodemailer
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Your preferred email service

    // TODO: Also integrate with email marketing platform:
    // - ConvertKit
    // - Beehiiv
    // - Substack
    // - EmailOctopus
    // - Mailchimp

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve subscribers
export async function GET() {
  return NextResponse.json(subscribers)
}
