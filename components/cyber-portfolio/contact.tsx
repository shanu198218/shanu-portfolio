"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Terminal,
  Send,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaMedium, FaFacebook } from "react-icons/fa6";

export function CyberContact() {
  const [copied, setCopied] = useState(false);
  const email = "mgshamalidilrukshi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-32 border-b border-[#1f2630] bg-[#08090b] bg-tech-grid"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="font-mono text-xs text-[#ccff00] mb-8 tracking-wider flex items-center gap-2">
          <span className="font-semibold">05 // INITIATE TRANSMISSION</span>
          <span className="text-neutral-500">//</span>
          <span className="text-neutral-300">CONTACT &amp; ENGAGEMENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline & Availability Specs */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans leading-[1.05]">
              HAVE A GOOD PROBLEM? <br />
              <span className="text-[#ccff00] font-serif italic lowercase font-normal">
                let&apos;s build
              </span>{" "}
              THE SOLUTION.
            </h2>

            <p className="text-base sm:text-lg text-neutral-100 font-normal leading-relaxed max-w-xl">
              Available for full-stack engineering contracts, web application
              architecture consulting, and custom web platform builds.
              Let&apos;s discuss technical parameters and project
              specifications.
            </p>

            {/* Specifications Box - High Contrast */}
            <div className="p-6 bg-[#0e1217] border border-[#232d3b] rounded-sm font-mono text-xs space-y-4 max-w-xl shadow-xl">
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  LOCATION:
                </span>
                <span className="text-white font-semibold">
                  COLOMBO, SRI LANKA
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  TIMEZONE:
                </span>
                <span className="text-white font-semibold">
                  UTC+05:30 (IST)
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  AVAILABILITY:
                </span>
                <span className="text-[#ccff00] font-bold">
                  OPEN FOR CONTRACTS / FULLTIME
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  RESPONSE TIME:
                </span>
                <span className="text-[#ccff00] font-bold">
                  TYPICALLY &lt; 24 HOURS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Contact Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f1318] border border-[#232d3b] hover:border-[#ccff00]/60 transition-colors rounded-sm p-6 sm:p-8 corner-decor shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1c2532] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#ccff00]" />
                  <span className="text-white font-bold tracking-wider">
                    DIRECT TRANSMISSION
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#ccff00]">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  <span className="font-semibold text-xs">SYS: ONLINE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-5">
                <div>
                  <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2 font-medium">
                    PRIMARY RECIPIENT
                  </label>
                  <div className="flex items-center justify-between p-3.5 bg-[#141a24] border border-[#283547] rounded-sm font-mono text-xs text-neutral-100">
                    <span className="truncate font-semibold">{email}</span>
                    <button
                      onClick={handleCopy}
                      className="ml-2 p-1.5 text-neutral-300 hover:text-[#ccff00] transition-colors"
                      title="Copy email"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#11161d] border border-[#1f2937] rounded-sm font-mono text-xs text-neutral-200 leading-relaxed">
                  <p>
                    <span className="text-[#ccff00] font-bold">&gt;</span>{" "}
                    Inquiries regarding web architecture, Next.js frontend
                    engineering, NestJS microservices, or full-time
                    opportunities are welcome.
                  </p>
                </div>

                {/* Email Me Button */}
                <a
                  href={`mailto:${email}?subject=Project%20Inquiry%20-%20Full%20Stack%20Architecture`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#ccff00] text-black font-mono text-xs font-bold tracking-widest transition-all uppercase rounded-sm shadow-lg hover:shadow-[#ccff00]/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>SEND INQUIRY VIA EMAIL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Socials Grid */}
                <div className="pt-5 border-t border-[#1c2532]">
                  <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3 font-semibold">
                    VERIFIED SOCIAL LINKS
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                    <a
                      href="https://www.linkedin.com/in/shamali-dilrukshi-482478225/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-200 rounded-sm flex items-center gap-2.5 transition-colors font-medium"
                    >
                      <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
                      <span>LINKEDIN</span>
                    </a>
                    <a
                      href="https://github.com/shanu198218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-200 rounded-sm flex items-center gap-2.5 transition-colors font-medium"
                    >
                      <FaGithub className="w-4 h-4 text-white" />
                      <span>GITHUB</span>
                    </a>
                    <a
                      href="https://medium.com/@mgshamalidilrukshi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-200 rounded-sm flex items-center gap-2.5 transition-colors font-medium"
                    >
                      <FaMedium className="w-4 h-4 text-[#00ab6c]" />
                      <span>MEDIUM</span>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1AFxAfKWz7/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-200 rounded-sm flex items-center gap-2.5 transition-colors font-medium"
                    >
                      <FaFacebook className="w-4 h-4 text-[#1877f2]" />
                      <span>FACEBOOK</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
