"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Mail, ArrowLeft } from "lucide-react";
import {
  sendContactEmail,
  sendOTPEmail,
  verifyOTP,
} from "@/app/actions/contact";
import { Button } from "./ui/MovingBorders";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type FormStep = "form" | "verify";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<FormStep>("form");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSendOTP(data: FormData) {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Store form data
    setFormData({ name, email, message });

    const result = await sendOTPEmail(email, name);

    if (result.success) {
      setStep("verify");
      setStatus({
        type: "success",
        message: "Verification code sent to your email!",
      });
    } else {
      setStatus({
        type: "error",
        message: result.error || "Failed to send verification code.",
      });
    }

    setIsSubmitting(false);
  }

  async function handleVerifyAndSend() {
    if (otp.length !== 5) {
      setStatus({
        type: "error",
        message: "Please enter a valid 5-digit code",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Verify OTP
    const verifyResult = await verifyOTP(formData.email, otp);

    if (!verifyResult.success) {
      setStatus({
        type: "error",
        message: verifyResult.error || "Invalid verification code",
      });
      setIsSubmitting(false);
      return;
    }

    // Send the actual contact email
    const contactFormData = new FormData();
    contactFormData.append("name", formData.name);
    contactFormData.append("email", formData.email);
    contactFormData.append("message", formData.message);

    const result = await sendContactEmail(contactFormData);

    if (result.success) {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      // Reset everything
      setOtp("");
      setFormData({ name: "", email: "", message: "" });
      setStep("form");
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      setStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  }

  async function handleResendOTP() {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const result = await sendOTPEmail(formData.email, formData.name);

    if (result.success) {
      setStatus({
        type: "success",
        message: "New verification code sent!",
      });
    } else {
      setStatus({
        type: "error",
        message: "Failed to resend code. Please try again.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#0a1428]/80 backdrop-blur-md border-white/10">
      <CardContent className="p-8">
        {step === "form" ? (
          <form id="contact-form" action={handleSendOTP} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/90">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/90">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {status.type && (
              <div
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm">{status.message}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Verification Code...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Verify Email & Send
                </div>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => {
                setStep("form");
                setOtp("");
                setStatus({ type: null, message: "" });
              }}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to form
            </button>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Verify Your Email
              </h3>
              <p className="text-white/70">
                We&apos;ve sent a 5-digit code to{" "}
                <span className="text-purple-400 font-medium">
                  {formData.email}
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <InputOTP
                maxLength={5}
                value={otp}
                onChange={(value: string) => setOtp(value)}
              >
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot
                    index={0}
                    className="bg-white/5 border-white/20 text-white text-lg w-12 h-12"
                  />
                  <InputOTPSlot
                    index={1}
                    className="bg-white/5 border-white/20 text-white text-lg w-12 h-12"
                  />
                  <InputOTPSlot
                    index={2}
                    className="bg-white/5 border-white/20 text-white text-lg w-12 h-12"
                  />
                  <InputOTPSlot
                    index={3}
                    className="bg-white/5 border-white/20 text-white text-lg w-12 h-12"
                  />
                  <InputOTPSlot
                    index={4}
                    className="bg-white/5 border-white/20 text-white text-lg w-12 h-12"
                  />
                </InputOTPGroup>
              </InputOTP>

              <button
                onClick={handleResendOTP}
                disabled={isSubmitting}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Didn&apos;t receive the code? Resend
              </button>
            </div>

            {status.type && (
              <div
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm">{status.message}</span>
              </div>
            )}

            <Button
              onClick={handleVerifyAndSend}
              disabled={isSubmitting || otp.length !== 5}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Verify & Send Message
                </div>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
