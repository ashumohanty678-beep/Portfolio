'use client';

import React, { useState } from 'react';
import { ContactCard } from '@/components/ui/contact-card';
import RotatingEarth from '@/components/ui/wireframe-dotted-globe';
import { MailIcon, MapPinIcon, Globe, CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const MAKE_WEBHOOK_URL =
  import.meta.env.VITE_MAKE_WEBHOOK_URL ||
  'https://hook.eu1.make.com/av6te36okp2k8jksimb7cvk2ph43mg3e';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please fill in all required fields: Name, Email, and Message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const messageToSend = formData.phone.trim()
      ? `${trimmedMessage}\n\n[Phone / Subject: ${formData.phone.trim()}]`
      : trimmedMessage;

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      message: messageToSend,
    };

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errDetail = '';
        try {
          const text = await response.text();
          if (text) errDetail = text;
        } catch {
          // ignore
        }

        if (response.status === 410) {
          throw new Error('The Make.com scenario is currently inactive. Please ensure your Make scenario is turned ON or listening ("Run once"), then try again.');
        }

        throw new Error(`Failed to send message (${response.status}${errDetail ? `: ${errDetail}` : ''}). Please try again later.`);
      }

      setSubmittedName(trimmedName);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.error('Contact form webhook submission failed:', err);
      setErrorMessage(
        err?.message || 'Failed to submit form. Please check your internet connection or try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-4">
      <ContactCard
        title="Get in touch"
        description="Have a question regarding my projects, engineering work, or looking to collaborate? Fill out the form or reach out directly — I typically respond within 24 hours."
        className="rounded-2xl md:rounded-3xl border-white/10 hover:border-purple-500/25 bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90 backdrop-blur-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)] transition-all duration-300"
        formSectionClassName="bg-gradient-to-b from-[#0a0818]/70 via-[#0e0b20]/60 to-[#080614]/85 border-white/[0.08] dark:border-purple-500/15 rounded-b-2xl md:rounded-b-none md:rounded-r-3xl"
        visual={
          <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_0_30px_rgba(112,66,248,0.06)] bg-gradient-to-b from-[#0e0c20]/60 to-[#070614]/85 backdrop-blur-md flex items-center justify-center relative group transition-colors">
            <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent pointer-events-none" />
            <RotatingEarth width={360} height={240} className="w-full flex items-center justify-center relative z-10" />
          </div>
        }
        contactInfo={[
          {
            icon: MailIcon,
            label: 'Email',
            value: 'ashumohanty678@gmail.com',
          },
          {
            icon: Globe,
            label: 'LinkedIn',
            value: 'ashutosh-mohanty-892867385',
          },
          {
            icon: MapPinIcon,
            label: 'Location',
            value: 'Gunupur, Odisha, India',
            className: 'col-span-1 md:col-span-2 lg:col-span-1',
          },
        ]}
      >
        {isSubmitted ? (
          <div className="w-full py-10 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.25)]">
              <CheckCircle2 size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="font-hn text-xl font-bold text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-xs font-mono text-neutral-300 max-w-xs leading-relaxed">
                Thank you for reaching out{submittedName ? `, ${submittedName}` : ''}. I have received your message and will be in touch shortly.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setErrorMessage(null);
                setSubmittedName('');
                setFormData({ name: '', email: '', phone: '', message: '' });
              }}
              className="mt-2 text-xs font-mono border border-white/10 hover:border-purple-500/30 bg-[#120e26]/70 hover:bg-[#171230]/80 text-neutral-200 hover:text-white cursor-pointer rounded-xl px-4 py-2 transition-all backdrop-blur-sm"
            >
              Send Another Note
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {errorMessage && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-mono flex items-start justify-between gap-2 animate-in fade-in duration-200 backdrop-blur-sm"
              >
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setErrorMessage(null)}
                  className="text-neutral-400 hover:text-white text-base leading-none px-1 cursor-pointer"
                  aria-label="Dismiss error"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name" className="text-xs font-mono text-neutral-300 font-medium flex items-center gap-1">
                Name <span className="text-emerald-400">*</span>
              </Label>
              <Input
                id="contact-name"
                required
                disabled={isSubmitting}
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errorMessage) setErrorMessage(null);
                }}
                className="bg-[#0e0b1e]/60 hover:bg-[#120e26]/75 focus:bg-[#15112e]/90 border border-white/10 hover:border-purple-500/25 text-white placeholder:text-neutral-500/80 focus-visible:ring-2 focus-visible:ring-emerald-400/20 focus-visible:border-emerald-400/60 text-sm rounded-xl backdrop-blur-sm transition-all duration-200 disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email" className="text-xs font-mono text-neutral-300 font-medium flex items-center gap-1">
                Email <span className="text-emerald-400">*</span>
              </Label>
              <Input
                id="contact-email"
                type="email"
                required
                disabled={isSubmitting}
                placeholder="your.email@domain.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errorMessage) setErrorMessage(null);
                }}
                className="bg-[#0e0b1e]/60 hover:bg-[#120e26]/75 focus:bg-[#15112e]/90 border border-white/10 hover:border-purple-500/25 text-white placeholder:text-neutral-500/80 focus-visible:ring-2 focus-visible:ring-emerald-400/20 focus-visible:border-emerald-400/60 text-sm rounded-xl backdrop-blur-sm transition-all duration-200 disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-phone" className="text-xs font-mono text-neutral-300 font-medium">
                Phone / Subject (Optional)
              </Label>
              <Input
                id="contact-phone"
                disabled={isSubmitting}
                placeholder="+91 ... / Project Inquiry"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#0e0b1e]/60 hover:bg-[#120e26]/75 focus:bg-[#15112e]/90 border border-white/10 hover:border-purple-500/25 text-white placeholder:text-neutral-500/80 focus-visible:ring-2 focus-visible:ring-emerald-400/20 focus-visible:border-emerald-400/60 text-sm rounded-xl backdrop-blur-sm transition-all duration-200 disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message" className="text-xs font-mono text-neutral-300 font-medium flex items-center gap-1">
                Message <span className="text-emerald-400">*</span>
              </Label>
              <Textarea
                id="contact-message"
                required
                disabled={isSubmitting}
                rows={4}
                placeholder="Write your message or inquiry here..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errorMessage) setErrorMessage(null);
                }}
                className="bg-[#0e0b1e]/60 hover:bg-[#120e26]/75 focus:bg-[#15112e]/90 border border-white/10 hover:border-purple-500/25 text-white placeholder:text-neutral-500/80 focus-visible:ring-2 focus-visible:ring-emerald-400/20 focus-visible:border-emerald-400/60 text-sm rounded-xl resize-none backdrop-blur-sm transition-all duration-200 disabled:opacity-60"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cream hover:bg-white text-black font-mono font-bold text-xs sm:text-sm py-3 transition-all duration-200 shadow-[0_4px_20px_rgba(239,238,233,0.18)] hover:shadow-[0_0_25px_rgba(239,238,233,0.35),0_0_15px_rgba(52,211,153,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Submit Message</span>
                </>
              )}
            </Button>
          </form>
        )}
      </ContactCard>
    </div>
  );
}

export default ContactSection;
