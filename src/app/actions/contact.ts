"use server";

import { Resend } from "resend";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  subject: string;
  message: string;
}

export async function sendInquiryAction(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is not configured.");
    console.log("Form data submitted:", data);
    return {
      success: false,
      error: "CONFIGURATION_ERROR",
    };
  }

  const resend = new Resend(apiKey);

  // Clean phone number for WhatsApp link (e.g. +91 94269 15578 -> 919426915578)
  const cleanPhoneForWhatsapp = data.phone.replace(/[^0-9]/g, "");

  // Generate clean, modern, responsive HTML email template
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
            background-color: #0B0F19; /* Dark Blue */
            padding: 32px 24px;
            text-align: center;
            border-bottom: 4px solid #FF6B35; /* Orange Accent Line */
          }
          .brand-title {
            color: #FFBE00; /* Yellow accent */
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
          .badge {
            display: inline-block;
            background-color: #f0f4f8;
            color: #0b0f19;
            font-size: 12px;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 20px;
            margin-bottom: 24px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
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
            box-shadow: 0 2px 4px rgba(255, 107, 53, 0.2);
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <div class="brand-title">TECKON</div>
              <div class="brand-subtitle">Shreeji Hydraulics</div>
              <div class="header-title">✉️ New Website Inquiry</div>
            </div>
            
            <div class="content">
              <div class="section-title">Contact Details</div>
              <table class="info-table">
                <tr>
                  <td class="info-label">Full Name</td>
                  <td class="info-value"><strong>${data.fullName}</strong></td>
                </tr>
                <tr>
                  <td class="info-label">Email</td>
                  <td class="info-value"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td class="info-label">Phone</td>
                  <td class="info-value">
                    <a href="tel:${data.phone}">${data.phone}</a>
                    ${cleanPhoneForWhatsapp ? `
                      <span style="color: #cbd5e1; margin: 0 8px;">|</span>
                      <a href="https://wa.me/${cleanPhoneForWhatsapp}" target="_blank" style="color: #25D366; font-size: 13px; text-decoration: none; font-weight: 600;">💬 WhatsApp</a>
                    ` : ""}
                  </td>
                </tr>
                <tr>
                  <td class="info-label">Location</td>
                  <td class="info-value">${[data.city, data.country].filter(Boolean).join(", ") || "Not Specified"}</td>
                </tr>
                <tr>
                  <td class="info-label">Inquiry For</td>
                  <td class="info-value"><strong>${data.subject || "General Inquiry"}</strong></td>
                </tr>
              </table>
              
              <div class="section-title">Customer Message</div>
              <div class="message-box">
                <p class="message-text">${data.message || "No message provided."}</p>
              </div>
              
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${data.email}?subject=RE: ${encodeURIComponent(data.subject || 'Website Inquiry')}" class="cta-btn">Reply to Customer</a>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-text">This inquiry was sent from the contact form on the Teckon website.</p>
              <div class="footer-logo">TECKON™ SHREEJI HYDRAULICS</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Teckon Inquiries <onboarding@resend.dev>";
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
  } catch (err: any) {
    console.error("Server Action Exception:", err);
    return { success: false, error: "SYSTEM_ERROR" };
  }
}
