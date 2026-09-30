"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  ExternalLink,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { personalInfo } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData._honey) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cf5d41f8-e639-4bcf-a041-e0df4c5f385d",
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          subject: formData.subject
            ? `[Portfolio Inquiry] ${formData.subject} - ${formData.name}`
            : `[Portfolio Inquiry] New message from ${formData.name}`,
          message: formData.message,
          from_name: "Bhavya Portfolio Contact",
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.message || "Unable to send message. You can email directly below."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setErrorMessage("Network issue occurred. You can click below to email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMailClientFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Hello Bhavya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="section-container">
        <SectionHeading
          badge="Get in Touch"
          title="Contact &amp; Connect"
          subtitle="Feel free to reach out for entry-level Java Developer roles, engineering discussions, or software opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-bold text-slate-900 hover:text-blue-700 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.rawPhone}`}
                      className="block text-sm sm:text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  title="Copy phone number to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shrink-0 ml-2"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Exact Profile Links */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3">
                Professional Profiles &amp; Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 font-semibold text-xs hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.78a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64Z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold text-xs hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Web3Forms Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-lg bg-blue-700 text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Delivered directly to Bhavya&apos;s email inbox ({personalInfo.email})
                  </p>
                </div>
              </div>

              {submitStatus === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been delivered directly to{" "}
                    <strong>{personalInfo.email}</strong>. Bhavya will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        _honey: "",
                      });
                    }}
                    className="mt-2 inline-flex text-xs font-semibold text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-spam botcheck */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._honey}
                    onChange={(e) =>
                      setFormData({ ...formData, _honey: e.target.value })
                    }
                  />

                  {submitStatus === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div className="space-y-2 grow">
                        <p>{errorMessage}</p>
                        <button
                          type="button"
                          onClick={openMailClientFallback}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Click to Email Directly via Mail App</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Name / Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g., Alex / Tech Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g., Java Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your note, job description details, or interview invitation here..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-y bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-blue-700 active:bg-slate-950 disabled:bg-slate-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Bhavya</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
