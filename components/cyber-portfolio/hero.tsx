"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Sparkles,
} from "lucide-react";

export function CyberHero() {
  const metrics = [
    {
      num: "01",
      label: "PROFESSIONAL EXP",
      val: "3+ YEARS",
      desc: "FULL-STACK PRODUCTION",
    },
    {
      num: "02",
      label: "BACKEND & SYSTEMS",
      val: "C# / .NET / GO",
      desc: "SCALABLE REST APIS",
    },
    {
      num: "03",
      label: "FRONTEND STACK",
      val: "REACT / NEXT.JS",
      desc: "TYPESCRIPT & RESPONSIVE UI",
    },
    {
      num: "04",
      label: "AI TOOLING & SDLC",
      val: "AI-ASSISTED",
      desc: "CODEX / CLAUDE / KIRO AI",
    },
  ];

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-28 border-b border-[#1f2630] bg-[#08090b] bg-tech-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Top Tag Line */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#ccff00] mb-8 tracking-wider">
          <span className="font-semibold">
            // [001] SOFTWARE ENGINEER &amp; FULL-STACK ARCHITECT
          </span>
          <span className="text-neutral-500">//</span>
          <span className="text-neutral-300">
            C# // .NET CORE // GO // REACT // NEXT.JS // TS
          </span>
          <span className="text-neutral-500">//</span>
          <span className="text-neutral-300">3+ YEARS EXP</span>
        </div>

        {/* 2-Column Hero Grid with generous breathing room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline & Narrative */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <div>
              {/* Massive Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-6">
                ENGINEERING <br />
                <span className="font-serif italic font-normal text-[#ccff00] text-glow-lime lowercase">
                  what&apos;s
                </span>{" "}
                <span className="font-sans font-extrabold text-white">
                  NEXT.
                </span>
              </h1>

              {/* Badges / Chips - High Contrast */}
              <div className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs">
                <span className="px-3 py-1.5 bg-[#141921] border border-[#2c3746] text-neutral-100 tracking-wider rounded-sm font-medium">
                  ROLE // FULL-STACK SOFTWARE ENGINEER
                </span>
                <span className="px-3 py-1.5 bg-[#141921] border border-[#ccff00]/40 text-[#ccff00] tracking-wider rounded-sm font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>AI-ASSISTED: OPENAI CODEX // CLAUDE // KIRO AI</span>
                </span>
              </div>

              {/* Mission Narrative / Bio - User's exact experience level & description */}
              <div className="bg-[#0f141a]/80 border-l-2 border-[#ccff00] pl-5 sm:pl-6 py-4 mb-10 space-y-3.5 shadow-lg">
                <p className="text-base sm:text-lg md:text-xl text-neutral-100 leading-relaxed font-sans font-normal">
                  Software Engineer with{" "}
                  <span className="text-white font-bold bg-[#ccff00]/15 text-[#ccff00] px-2 py-0.5 rounded-xs border border-[#ccff00]/40 inline-block">
                    3+ years of professional experience
                  </span>{" "}
                  building full-stack web applications using{" "}
                  <strong className="text-white font-semibold">C#</strong>,{" "}
                  <strong className="text-white font-semibold">
                    .NET Core
                  </strong>
                  , <strong className="text-white font-semibold">Go</strong>,{" "}
                  <strong className="text-white font-semibold">React.js</strong>
                  ,{" "}
                  <strong className="text-white font-semibold">Next.js</strong>,{" "}
                  <strong className="text-white font-semibold">
                    TypeScript
                  </strong>
                  , and{" "}
                  <strong className="text-white font-semibold">
                    JavaScript
                  </strong>
                  .
                </p>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
                  Experienced in designing and developing scalable frontend and
                  backend systems, REST APIs, responsive user interfaces, and
                  healthcare applications. Strong background in requirements
                  analysis, solution design, debugging, refactoring, testing,
                  deployment, and SDLC practices.
                </p>
                <p className="text-xs sm:text-sm text-[#ccff00] font-mono leading-relaxed flex items-center gap-2 pt-1 border-t border-[#1c2532]">
                  <span>
                    &gt; Experienced in leveraging AI-assisted development tools
                    (OpenAI Codex, Claude, Kiro AI) to accelerate delivery and
                    elevate code quality.
                  </span>
                </p>
              </div>

              {/* 4 Metrics Bento Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#1f2630]">
                {metrics.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 sm:p-4.5 bg-[#0e1216] border border-[#212a36] rounded-sm hover:border-[#ccff00]/60 transition-colors group"
                  >
                    <div className="font-mono text-xs text-neutral-400 tracking-wider mb-1.5 flex items-center justify-between">
                      <span className="text-neutral-400 font-semibold">
                        {item.num} //
                      </span>
                      <span className="text-neutral-500 group-hover:text-[#ccff00] transition-colors">
                        ■
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-white tracking-tight font-sans">
                      {item.val}
                    </div>
                    <div className="font-mono text-[11px] text-neutral-300 font-medium tracking-wider uppercase mt-1">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Socials */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-mono text-xs font-bold tracking-widest hover:bg-[#ccff00] transition-all uppercase rounded-sm shadow-lg hover:shadow-[#ccff00]/20"
                >
                  <span>VIEW SELECTED WORK</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="/shamali_dilrukshi.pdf"
                  download="Shamali_Dilrukshi_CV.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f141a] text-white border border-[#2e3b4d] hover:border-[#ccff00] font-mono text-xs font-semibold tracking-widest transition-colors uppercase rounded-sm"
                >
                  <span>DOWNLOAD CV [PDF]</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ccff00]" />
                </a>
              </div>

              {/* Social text links */}
              <div className="flex flex-wrap items-center gap-6 mt-8 font-mono text-xs text-neutral-300">
                <a
                  href="https://github.com/shanu198218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ccff00] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>GITHUB</span>
                  <span className="text-[#ccff00]">→</span>
                </a>
                <span className="text-neutral-600">//</span>
                <a
                  href="https://www.linkedin.com/in/shamali-dilrukshi-482478225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ccff00] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>LINKEDIN</span>
                  <span className="text-[#ccff00]">→</span>
                </a>
                <span className="text-neutral-600">//</span>
                <a
                  href="https://medium.com/@mgshamalidilrukshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ccff00] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>MEDIUM</span>
                  <span className="text-[#ccff00]">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architect Profile Spec Card */}
          <div className="lg:col-span-5 xl:col-span-4 mt-4 lg:mt-0">
            <div className="bg-[#0f1318] border border-[#222b37] rounded-sm p-5 sm:p-6 relative corner-decor group hover:border-[#ccff00]/50 transition-colors shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#1f2734] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#ccff00] font-bold">FIG. 01</span>
                  <span className="text-neutral-500">//</span>
                  <span className="text-neutral-100 font-semibold tracking-wider">
                    ENGINEER PROFILE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  <span className="text-xs text-[#ccff00] font-semibold">
                    SYS: ACTIVE
                  </span>
                </div>
              </div>

              {/* Photo Viewport Container */}
              <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-[#090b0e] border border-[#212b39] rounded-sm shadow-inner">
                <Image
                  src="/avatar.png"
                  alt="Shamali Dilrukshi"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />

                {/* Viewport Tech Overlays */}
                <div className="absolute inset-0 pointer-events-none p-3.5 flex flex-col justify-between">
                  <div className="flex justify-between items-start font-mono text-[11px] text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs border border-white/10">
                    <span>SYS.VIEW // CAM_01</span>
                    <span className="text-[#ccff00] font-semibold">
                      ISO 400
                    </span>
                  </div>

                  {/* Corner Target Marks */}
                  <div className="flex justify-between items-end font-mono text-xs">
                    <span className="text-[#ccff00] font-bold">[+]</span>
                    <span className="text-[#ccff00] font-bold">[+]</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Spec Table */}
              <div className="mt-5 pt-4 border-t border-[#1f2734] space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    NAME:
                  </span>
                  <span className="text-neutral-100 font-bold text-xs">
                    SHAMALI DILRUKSHI
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    ROLE:
                  </span>
                  <span className="text-[#ccff00] font-semibold text-xs">
                    SOFTWARE ENGINEER
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    EXPERIENCE:
                  </span>
                  <span className="text-white font-bold text-xs">
                    3+ YEARS PROFESSIONAL
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    LANGUAGES:
                  </span>
                  <span className="text-neutral-200 text-xs">
                    C# // .NET // GO // TS // JS
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    FRONTEND:
                  </span>
                  <span className="text-neutral-200 text-xs">
                    REACT.JS // NEXT.JS
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase text-[11px]">
                    LOCATION:
                  </span>
                  <span className="text-neutral-200 text-xs">
                    SRI LANKA (UTC+05:30)
                  </span>
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-5 pt-3.5 border-t border-[#1f2734] bg-[#131922] p-3 rounded-sm flex items-center justify-between font-mono text-xs">
                <span className="flex items-center gap-2 text-[#ccff00] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                  <span>AVAILABLE FOR CONTRACTS</span>
                </span>
                <span className="text-neutral-300 font-medium">OPEN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-divider line with status tag */}
        <div className="mt-16 pt-5 border-t border-[#1f2630] flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-xs text-neutral-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#ccff00] font-semibold">
              // SYSTEM INIT:
            </span>
            <span className="text-neutral-300">
              C#, .NET CORE, GO, REACT, NEXT.JS ENVIRONMENT VERIFIED
            </span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span>SCROLL DOWN</span>
            <span className="text-[#ccff00] font-bold">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
