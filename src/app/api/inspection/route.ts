import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Lazy initialization to prevent build failures
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

interface InspectionFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  preferredContact: 'phone' | 'email' | 'either';
  notes?: string;
}

function generateInspectionEmailHTML(data: InspectionFormData): string {
  const contactMethodLabel = {
    phone: '📞 Phone Call',
    email: '📧 Email',
    either: '✅ Either',
  };

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
              <h2 style="margin: 0; color: #22c55e; font-size: 22px; font-weight: 600;">
                🏠 New Free Inspection Request
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
          
          <!-- Priority Badge -->
          <tr>
            <td style="padding: 24px 32px 0; text-align: center;">
              <span style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; font-size: 13px; font-weight: 600; padding: 8px 20px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                ⚡ Action Required - Schedule Inspection
              </span>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                
                <!-- Name -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Customer Name</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 18px; font-weight: 600;">${data.name}</p>
                  </td>
                </tr>
                
                <tr><td style="height: 16px;"></td></tr>
                
                <!-- Phone & Email Row -->
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="48%" style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                          <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                          <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">
                            <a href="tel:${data.phone}" style="color: #f59e0b; text-decoration: none;">${data.phone}</a>
                          </p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                          <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                          <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">
                            <a href="mailto:${data.email}" style="color: #f59e0b; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <tr><td style="height: 16px;"></td></tr>
                
                <!-- Address (Highlighted) -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%); border: 2px solid #3b82f6; border-radius: 12px; padding: 20px;">
                    <p style="margin: 0 0 4px; color: #60a5fa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">📍 Property Address</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 18px; font-weight: 600;">${data.address}</p>
                  </td>
                </tr>
                
                <tr><td style="height: 16px;"></td></tr>
                
                <!-- Preferred Contact -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Preferred Contact Method</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 16px; font-weight: 500;">${contactMethodLabel[data.preferredContact]}</p>
                  </td>
                </tr>
                
                ${data.notes ? `
                <tr><td style="height: 16px;"></td></tr>
                
                <!-- Notes -->
                <tr>
                  <td style="background-color: #0f172a; border-radius: 12px; padding: 16px;">
                    <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Additional Notes</p>
                    <p style="margin: 0; color: #f1f5f9; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.notes}</p>
                  </td>
                </tr>
                ` : ''}
                
              </table>
            </td>
          </tr>
          
          <!-- CTAs -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="48%" align="center">
                    <a href="tel:${data.phone}" style="display: block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; font-size: 15px; font-weight: 600; padding: 14px 24px; border-radius: 8px; text-decoration: none;">
                      📞 Call Now
                    </a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" align="center">
                    <a href="mailto:${data.email}" style="display: block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; font-size: 15px; font-weight: 600; padding: 14px 24px; border-radius: 8px; text-decoration: none;">
                      ✉️ Send Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px; text-align: center; border-top: 1px solid #334155;">
              <p style="margin: 0; color: #64748b; font-size: 13px;">
                This inspection request was submitted through the True North Roofing website.
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
    const body: InspectionFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.address || !body.preferredContact) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
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
      subject: `🏠 New Inspection Request: ${body.address}`,
      html: generateInspectionEmailHTML(body),
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
