"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";
import { Button } from "./ui/MovingBorders";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      // Reset form
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

  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#0a1428]/80 backdrop-blur-md border-white/10">
      <CardContent className="p-8">
        <form id="contact-form" action={handleSubmit} className="space-y-6">
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
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
