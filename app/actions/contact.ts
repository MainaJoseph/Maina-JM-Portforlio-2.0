"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory store for OTPs (use Redis or DB in production)
const otpStore = new Map<string, { code: string; expires: number }>();

// Generate a random 5-digit OTP
function generateOTP(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

// Clean up expired OTPs
function cleanupExpiredOTPs() {
  const now = Date.now();
  const entries = Array.from(otpStore.entries());
  for (const [email, data] of entries) {
    if (data.expires < now) {
      otpStore.delete(email);
    }
  }
}

export async function sendOTPEmail(email: string, name: string) {
  if (!email || !name) {
    return { error: "Email and name are required" };
  }

  try {
    // Clean up expired OTPs
    cleanupExpiredOTPs();

    // Generate OTP
    const otp = generateOTP();

    // Store OTP with 10-minute expiration
    otpStore.set(email, {
      code: otp,
      expires: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    // Send OTP email
    await resend.emails.send({
      from: "portfolio@azuritek.com",
      to: [email],
      subject: "Verify Your Email - Contact Form",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">Email Verification</h1>
            <p style="color: #666; font-size: 16px;">Hi ${name}, thanks for reaching out!</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; padding: 30px; text-align: center; margin-bottom: 30px;">
            <p style="color: white; font-size: 18px; margin-bottom: 20px;">Your verification code is:</p>
            <div style="background: white; border-radius: 8px; padding: 20px; display: inline-block;">
              <h2 style="color: #333; font-size: 36px; letter-spacing: 8px; margin: 0;">${otp}</h2>
            </div>
            <p style="color: white; font-size: 14px; margin-top: 20px;">This code expires in 10 minutes</p>
          </div>
          
          <div style="text-align: center; color: #666;">
            <p style="margin-bottom: 10px;">Enter this code to verify your email and send your message.</p>
            <p style="font-size: 14px;">If you didn't request this code, please ignore this email.</p>
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            <p>This is an automated message from Joseph Maina's portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send OTP email:", error);
    return { error: "Failed to send verification code. Please try again." };
  }
}

export async function verifyOTP(email: string, code: string) {
  if (!email || !code) {
    return { error: "Email and code are required" };
  }

  // Clean up expired OTPs
  cleanupExpiredOTPs();

  const storedData = otpStore.get(email);

  if (!storedData) {
    return { error: "No verification code found. Please request a new one." };
  }

  if (storedData.expires < Date.now()) {
    otpStore.delete(email);
    return { error: "Verification code expired. Please request a new one." };
  }

  if (storedData.code !== code) {
    return { error: "Invalid verification code. Please try again." };
  }

  // OTP is valid, remove it from store
  otpStore.delete(email);

  return { success: true };
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  try {
    // Send notification email to you
    await resend.emails.send({
      from: "portfolio@azuritek.com",
      to: ["mainajm254@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="margin-top: 30px; padding: 15px; background: #f0f9ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-weight: 600;">✓ Email Verified</p>
            <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">
              This message was sent after successful email verification.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "portfolio@azuritek.com",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">Message Received!</h1>
          </div>
          
          <div style="background: #f8f9fa; border-radius: 10px; padding: 30px; margin-bottom: 30px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Hi ${name},
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              I typically respond within 24-48 hours.
            </p>
          </div>
          
          <div style="background: #f1f5f9; border-radius: 8px; padding: 20px;">
            <h3 style="color: #475569; margin-top: 0;">Your Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="color: #334155; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
            <p>Best regards,<br>Joseph Maina</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
