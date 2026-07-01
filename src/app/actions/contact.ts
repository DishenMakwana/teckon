"use server";

import { Resend } from "resend";
import { z } from "zod";

// ── Validation schema ───────────────────────────────────────────────────────
const ContactSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  phone: z.string().max(30).default(""),
  city: z.string().max(100).default(""),
  country: z.string().max(100).default(""),
  subject: z.string().max(200).default(""),
  message: z.string().max(2000).default(""),
});

// ── HTML escaping ───────────────────────────────────────────────────────────
// Prevents HTML injection from user-supplied data into the email template.
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function sendInquiryAction(rawData: unknown) {
  // Server-side validation — client-side form validation can be bypassed.
  const parsed = ContactSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, error: "VALIDATION_ERROR" };
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not configured.");
    return { success: false, error: "CONFIGURATION_ERROR" };
  }

  const resend = new Resend(apiKey);

  // Clean phone number for WhatsApp link (e.g. "+91 94269 15578" → "919426915578")
  const cleanPhoneForWhatsapp = data.phone.replace(/[^0-9]/g, "");

  // Escape all user-supplied values before interpolation into HTML.
  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeCity = escapeHtml(data.city);
  const safeCountry = escapeHtml(data.country);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);

  const location =
    [safeCity, safeCountry].filter(Boolean).join(", ") || "Not Specified";

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry Received</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f6f9fc;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            color: #333333;
          }
          .wrapper {
            width: 100%;
            background-color: #f6f9fc;
            padding: 20px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            border: 1px solid #eef2f6;
          }
          .header {
            background-color: #0B0F19;
            padding: 32px 24px;
            text-align: center;
            border-bottom: 4px solid #FF6B35;
          }
          .brand-title {
            color: #FFBE00;
            font-size: 24px;
            font-weight: 900;
            letter-spacing: 1px;
            margin: 0;
            text-transform: uppercase;
          }
          .brand-subtitle {
            color: #ffffff;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            margin: 4px 0 0 0;
            text-transform: uppercase;
            opacity: 0.8;
          }
          .header-title {
            color: #ffffff;
            font-size: 18px;
            font-weight: 700;
            margin: 16px 0 0 0;
          }
          .content {
            padding: 32px 24px;
          }
          .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #0B0F19;
            margin: 0 0 16px 0;
            border-bottom: 1px solid #eef2f6;
            padding-bottom: 8px;
          }
          .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
          }
          .info-table td {
            padding: 10px 0;
            vertical-align: top;
            font-size: 14px;
          }
          .info-label {
            width: 30%;
            font-weight: 600;
            color: #666666;
          }
          .info-value {
            width: 70%;
            color: #111111;
          }
          .info-value a {
            color: #FF6B35;
            text-decoration: none;
            font-weight: 600;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #FF6B35;
            padding: 16px 20px;
            border-radius: 4px 8px 8px 4px;
            margin-top: 8px;
          }
          .message-text {
            font-size: 14px;
            line-height: 1.6;
            color: #334155;
            margin: 0;
            white-space: pre-line;
          }
          .footer {
            background-color: #fafbfc;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #eef2f6;
          }
          .footer-text {
            font-size: 12px;
            color: #888888;
            margin: 0 0 8px 0;
            line-height: 1.5;
          }
          .footer-logo {
            font-size: 11px;
            font-weight: 700;
            color: #0b0f19;
            letter-spacing: 1px;
          }
          .cta-btn {
            display: inline-block;
            background-color: #FF6B35;
            color: #ffffff !important;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 8px;
            margin-top: 12px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <div class="brand-title">TECKON</div>
              <div class="brand-subtitle">Shreeji Hydraulics</div>
              <div class="header-title">&#x2709;&#xFE0F; New Inquiry from Teckon Website</div>
            </div>

            <div class="content">
              <div class="section-title">Contact Details</div>
              <table class="info-table">
                <tr>
                  <td class="info-label">Full Name</td>
                  <td class="info-value"><strong>${safeName}</strong></td>
                </tr>
                <tr>
                  <td class="info-label">Email</td>
                  <td class="info-value"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td class="info-label">Phone</td>
                  <td class="info-value">
                    <a href="tel:${safePhone}">${safePhone}</a>
                    ${
                      cleanPhoneForWhatsapp
                        ? `<span style="color:#cbd5e1;margin:0 8px;">|</span>
                           <a href="https://wa.me/${cleanPhoneForWhatsapp}" target="_blank" style="color:#25D366;font-size:13px;text-decoration:none;font-weight:600;">&#x1F4AC; WhatsApp</a>`
                        : ""
                    }
                  </td>
                </tr>
                <tr>
                  <td class="info-label">Location</td>
                  <td class="info-value">${location}</td>
                </tr>
                <tr>
                  <td class="info-label">Inquiry For</td>
                  <td class="info-value"><strong>${safeSubject || "General Inquiry"}</strong></td>
                </tr>
              </table>

              <div class="section-title">Customer Message</div>
              <div class="message-box">
                <p class="message-text">${safeMessage || "No message provided."}</p>
              </div>

              <div style="text-align:center;margin-top:32px;">
                <a href="mailto:${safeEmail}?subject=RE: ${encodeURIComponent(data.subject || "Website Inquiry")}" class="cta-btn">Reply to Customer</a>
              </div>
            </div>

            <div class="footer">
              <p class="footer-text">This inquiry was sent from the contact form on the Teckon website.</p>
              <div class="footer-logo">TECKON&#x2122; SHREEJI HYDRAULICS</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Teckon Inquiries <onboarding@resend.dev>";
    const toEmail = process.env.RESEND_TO_EMAIL || "dishenmakwana.dm@gmail.com";

    const { data: resData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Teckon Inquiry] ${data.subject || "New Inquiry"} - ${data.fullName}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: "DELIVERY_ERROR" };
    }

    return { success: true, id: resData?.id };
  } catch (err) {
    console.error("Server Action Exception:", err);
    return { success: false, error: "SYSTEM_ERROR" };
  }
}
