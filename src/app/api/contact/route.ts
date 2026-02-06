import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Lazy initialization to prevent build failures
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function generateContactEmailHTML(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 32px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                TRUE NORTH
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">
                Roofing & Construction
              </p>
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 32px 32px 0; text-align: center;">
              <h2 style="margin: 0; color: #f59e0b; font-size: 22px; font-weight: 600;">
                📬 New Contact Form Submission
              </h2>
              <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">
                Received on ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                
                <!-- Name & Phone Row -->
                <tr>
                  <td style="padding-bottom: 20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="48%" style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                          <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                          <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">${data.name}</p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                          <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                          <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">
                            <a href="tel:${data.phone}" style="color: #f59e0b; text-decoration: none;">${data.phone}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">
                      <a href="mailto:${data.email}" style="color: #f59e0b; text-decoration: none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                
                <tr><td style="height: 20px;"></td></tr>
                
                <!-- Subject -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">${data.subject}</p>
                  </td>
                </tr>
                
                <tr><td style="height: 20px;"></td></tr>
                
                <!-- Message -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                    <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- CTA -->
          <tr>
            <td style="padding: 0 32px 32px; text-align: center;">
              <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; font-size: 16px; font-weight: 600; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
                Reply to ${data.name.split(' ')[0]}
              </a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px; text-align: center; border-top: 1px solid #334155;">
              <p style="margin: 0; color: #64748b; font-size: 13px;">
                This message was sent from the True North Roofing website contact form.
              </p>
              <p style="margin: 8px 0 0; color: #475569; font-size: 12px;">
                © ${new Date().getFullYear()} True North Roofing & Construction, LLC
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    if (!resend) {
      console.error('Email not configured: RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'True North Roofing <noreply@truenorth-tx.co>',
      to: ['Office@truenorth-tx.co'],
      replyTo: body.email,
      subject: `Website Contact: ${body.subject}`,
      html: generateContactEmailHTML(body),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
