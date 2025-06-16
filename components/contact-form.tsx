"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle, Mail, Shield } from "lucide-react";
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

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset verification if email changes
    if (name === "email" && emailVerified) {
      setEmailVerified(false);
      setShowOTP(false);
      setOtp("");
    }
  };

  async function handleSendOTP() {
    if (!formData.email || !formData.name) {
      setStatus({
        type: "error",
        message: "Please enter your name and email first",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const result = await sendOTPEmail(formData.email, formData.name);

    if (result.success) {
      setShowOTP(true);
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

  async function handleVerifyOTP() {
    if (otp.length !== 5) {
      setStatus({
        type: "error",
        message: "Please enter a valid 5-digit code",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const verifyResult = await verifyOTP(formData.email, otp);

    if (verifyResult.success) {
      setEmailVerified(true);
      setShowOTP(false);
      setStatus({
        type: "success",
        message: "Email verified successfully!",
      });
    } else {
      setStatus({
        type: "error",
        message: verifyResult.error || "Invalid verification code",
      });
    }

    setIsSubmitting(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!emailVerified) {
      setStatus({
        type: "error",
        message: "Please verify your email address first",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const contactFormData = new FormData();
    contactFormData.append("name", formData.name);
    contactFormData.append("email", formData.email);
    contactFormData.append("subject", formData.subject);
    contactFormData.append("message", formData.message);

    const result = await sendContactEmail(contactFormData);

    if (result.success) {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setEmailVerified(false);
      setOtp("");
    } else {
      setStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#0a1428]/80 backdrop-blur-md border-white/10">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-white/90 flex items-center gap-2"
            >
              <span>Name</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field with Verify Button */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-white/90 flex items-center gap-2"
            >
              <span>Email</span>
              {emailVerified && (
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              )}
            </Label>
            <div className="flex gap-2">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 ${
                  emailVerified ? "border-green-500/50" : ""
                }`}
                placeholder="Enter your email address"
              />
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={!formData.email || isSubmitting || emailVerified}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  emailVerified
                    ? "bg-green-500/20 text-green-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Shield className="w-4 h-4" />
                {emailVerified ? "Verified" : "Verify"}
              </button>
            </div>
          </div>

          {/* OTP Section - Shows inline when verify is clicked */}
          {showOTP && !emailVerified && (
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-3 text-blue-400">
                <Shield className="w-5 h-5" />
                <h4 className="font-medium">Email Verification</h4>
              </div>

              <p className="text-sm text-white/60">
                Enter the 5-digit code sent to your email
              </p>

              <div className="flex justify-center">
                <InputOTP
                  maxLength={5}
                  value={otp}
                  onChange={(value: string) => setOtp(value)}
                >
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="w-12 h-12 text-lg font-semibold bg-white/5 border-white/20 text-white"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={isSubmitting}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Didn&apos;t receive the code?{" "}
                  <span className="font-semibold">Resend Code</span>
                </button>

                {otp.length === 5 && (
                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Verify Code
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white/90">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white/90">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 resize-none"
              placeholder="Tell us about your project, ideas, or any questions you have..."
            />
          </div>

          {/* Status Messages */}
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

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !emailVerified}
            className={`w-full font-medium py-3 transition-all duration-300 transform ${
              emailVerified
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02]"
                : "bg-white/10"
            } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </div>
            )}
          </Button>

          {/* Helper text */}
          {!emailVerified && (
            <p className="text-center text-sm text-blue-400">
              Please verify your email address to enable message submission
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
