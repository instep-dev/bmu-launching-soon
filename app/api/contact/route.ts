import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, messageTitle, message } = await req.json();

    const html = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
        <tr>
          <td style="background: linear-gradient(135deg, #1abfbb, #7b4ba0, #9b2356); padding: 24px 32px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">BMU Healthcare</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">Pesan Baru dari Website</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px;">
            <p style="margin: 0 0 24px; color: #374151; font-size: 14px;">Yth. Tim BMU Healthcare,</p>
            <p style="margin: 0 0 20px; color: #374151; font-size: 14px;">Anda menerima pesan baru melalui formulir kontak website BMU Healthcare.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
              <tr style="background: #f9fafb;">
                <td style="padding: 12px 16px; font-size: 13px; color: #6b7280; font-weight: 600; width: 140px; border-bottom: 1px solid #e5e7eb;">Nama Lengkap</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #111827; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 13px; color: #6b7280; font-weight: 600; width: 140px; border-bottom: 1px solid #e5e7eb;">Email</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #111827; border-bottom: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px 16px; font-size: 13px; color: #6b7280; font-weight: 600; width: 140px; border-bottom: 1px solid #e5e7eb;">Judul Pesan</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #111827; border-bottom: 1px solid #e5e7eb;">${messageTitle}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-size: 13px; color: #6b7280; font-weight: 600; width: 140px; vertical-align: top;">Pesan</td>
                <td style="padding: 12px 16px; font-size: 13px; color: #111827; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 16px 32px 24px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 11px;">Email ini dikirim secara otomatis dari formulir kontak website bmuhealthcare.com. Harap tidak membalas email ini secara langsung.</p>
          </td>
        </tr>
      </table>
    `;

    await resend.emails.send({
      from: "BMU Healthcare <noreply@notifications.instep.id>",
      to: "dian.sunardi@bmuhealthcare.com",
      subject: `[BMU Healthcare] ${messageTitle}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
