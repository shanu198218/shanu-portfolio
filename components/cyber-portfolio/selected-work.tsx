"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Globe,
  Code,
  ShieldCheck,
  Search,
  Key,
  Calendar,
  Database,
  Cpu,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function CyberSelectedWork() {
  return (
    <section
      id="work"
      className="py-20 sm:py-24 md:py-32 border-b border-[#1f2630] bg-[#08090b]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 md:mb-16 border-b border-[#1f2630] gap-6">
          <div>
            <div className="font-mono text-xs text-[#ccff00] mb-3 tracking-wider flex items-center gap-2">
              <span className="font-semibold">
                01 // PRODUCTION WORK &amp; ARCHITECTURE
              </span>
              <span className="text-neutral-600">{"//"}</span>
              <span className="text-neutral-300">06 PROJECTS DISPLAYED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              SELECTED WORK
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-300 max-w-md leading-relaxed uppercase">
            ENGINEERED SOLUTIONS SPANNING ENTERPRISE WEB APPS, HEALTHCARE AI
            SUITES, AND CLOUD SECURITY SYSTEMS.
          </p>
        </div>

        {/* ========================================================
            CARD 1: THE MORNING (Featured Hero Split Card)
           ======================================================== */}
        <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all duration-300 rounded-sm p-6 sm:p-8 md:p-10 lg:p-12 mb-10 md:mb-14 corner-decor group shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Project Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-3">
                  <span className="tracking-wider uppercase font-semibold">
                    FEATURED PRODUCTION // NEWS PLATFORM
                  </span>
                  <span className="text-neutral-400 font-bold">
                    [ 01 // 06 ]
                  </span>
                </div>

                <a
                  href="https://www.themorning.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group-hover:text-[#ccff00] transition-colors"
                >
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-4 flex items-center gap-2">
                    <span>THE MORNING</span>
                    <ArrowUpRight className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                  </h3>
                </a>

                <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed">
                  Contributed to{" "}
                  <strong className="text-white font-semibold">
                    The Morning
                  </strong>
                  , an extreme high-frequency production news platform.
                  Implemented dynamic routing, Firebase integration, and a
                  responsive UI engineered with Tailwind CSS and Next.js for
                  instant mobile loads and scalable content distribution.
                </p>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "NEXT.JS",
                  "FIREBASE",
                  "TAILWIND CSS",
                  "VERCEL",
                  "HIGH-CONCURRENCY",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#141a24] border border-[#2b3748] text-neutral-200 font-mono text-xs tracking-wider uppercase rounded-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status and Direct Action Link */}
              <div className="pt-6 border-t border-[#1c2430] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-xs text-[#ccff00]">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
                  <span className="tracking-wider font-semibold">
                    STATUS: PRODUCTION ACTIVE
                  </span>
                </div>

                <a
                  href="https://www.themorning.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-[#ccff00] font-bold text-xs tracking-wider rounded-sm transition-all uppercase shadow-md"
                >
                  <span>LAUNCH LIVE SITE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Clickable Browser Frame Mockup */}
            <div className="lg:col-span-7">
              <a
                href="https://www.themorning.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#12161c] border border-[#263242] hover:border-[#ccff00]/60 rounded-sm overflow-hidden shadow-2xl transition-all duration-300 group/browser relative"
              >
                <div className="bg-[#181f2a] px-4 py-3 border-b border-[#263242] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <div className="bg-[#0b0e12] px-4 py-1.5 rounded-sm text-xs font-mono text-neutral-300 border border-[#263242] flex items-center gap-2 max-w-sm w-full justify-center group-hover/browser:border-[#ccff00]/40 transition-colors">
                    <Globe className="w-3.5 h-3.5 text-[#ccff00]" />
                    <span className="truncate">https://www.themorning.lk</span>
                  </div>
                  <div className="text-xs font-mono text-[#ccff00] font-semibold flex items-center gap-1">
                    <span>LIVE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090b0e]">
                  <Image
                    src="/projects/the-morning.png"
                    alt="The Morning News Platform"
                    fill
                    className="object-cover object-top group-hover/browser:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/browser:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/browser:opacity-100 transition-opacity px-4 py-2 bg-black/80 text-[#ccff00] border border-[#ccff00] font-mono text-xs font-bold tracking-wider rounded-sm flex items-center gap-2">
                      <span>OPEN LIVE SITE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            2-COLUMN GRID: MEDNEXT PRODUCTS & AI FRAUD EMAIL DETECTOR
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-14">
          {/* Project 2: MEDNEXT PRODUCTS */}
          <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 sm:p-8 flex flex-col justify-between corner-decor group shadow-xl">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-2.5">
                <span className="tracking-wider uppercase font-semibold">
                  HEALTHCARE SUITE // CLINICAL AI
                </span>
                <span className="text-neutral-400 font-bold">[ 02 // 06 ]</span>
              </div>

              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group-hover:text-[#ccff00] transition-colors"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-sans mb-3 flex items-center gap-2">
                  <span>MEDNEXT PRODUCTS</span>
                  <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                </h3>
              </a>

              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed mb-5">
                <strong className="text-white font-semibold">
                  MedNext Clinical
                </strong>{" "}
                is a browser-based clinical system designed for specialists who
                want to run their consulting suites smarter, faster, and without
                paper. Features AI-powered consultations, digital clinical
                notes, and complete patient history, with built-in AI scribing
                that drastically cuts documentation time across mobile, tablet,
                and desktop.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "NEXT.JS",
                  "AI SCRIBING",
                  "CLINICAL SUITE",
                  "TAILWIND CSS",
                  "RESPONSIVE",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#141a24] border border-[#2b3748] text-neutral-200 font-mono text-xs tracking-wider uppercase rounded-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Clickable Browser Frame with uploaded screenshot */}
            <div>
              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#12161c] border border-[#263242] hover:border-[#ccff00]/60 rounded-sm overflow-hidden mb-4 group/screen transition-colors relative"
              >
                <div className="bg-[#181f2a] px-3.5 py-2 border-b border-[#263242] flex items-center justify-between text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    <span className="ml-2 font-medium text-[11px]">
                      MEDNEXT_CLINICAL // SUITE
                    </span>
                  </div>
                  <span className="text-[#ccff00] font-semibold text-[11px]">
                    AI_SCRIBE
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090b0e]">
                  <Image
                    src="/projects/mednext-products.png"
                    alt="MedNext Clinical Specialist Suite"
                    fill
                    className="object-cover object-top group-hover/screen:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/screen:bg-black/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/screen:opacity-100 transition-opacity px-3.5 py-1.5 bg-black/80 text-[#ccff00] border border-[#ccff00] font-mono text-xs font-bold rounded-sm flex items-center gap-1.5">
                      <span>EXPLORE MEDNEXT SUITE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>

              <div className="pt-4 border-t border-[#1c2430] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400 font-medium">
                  HEALTHCARE PLATFORM
                </span>
                <a
                  href="https://github.com/shanu198218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a24] hover:bg-[#ccff00] hover:text-black text-[#ccff00] border border-[#2b3748] rounded-sm transition-all font-bold"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>VIEW CASE REPO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: AI FRAUD EMAIL DETECTOR */}
          <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 sm:p-8 flex flex-col justify-between corner-decor group shadow-xl">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-2.5">
                <span className="tracking-wider uppercase font-semibold">
                  AI SECURITY // FRAUD DETECTION
                </span>
                <span className="text-neutral-400 font-bold">[ 03 // 06 ]</span>
              </div>

              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group-hover:text-[#ccff00] transition-colors"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-sans mb-3 flex items-center gap-2">
                  <span>AI FRAUD EMAIL DETECTOR</span>
                  <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                </h3>
              </a>

              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed mb-4">
                A full-stack web app that detects potentially fraudulent emails
                in real-time using OpenAI via RapidAPI, built with Next.js,
                Node.js, Express, Prisma, and secure user authentication.
              </p>

              {/* Feature Highlights Box */}
              <div className="bg-[#12171f] border border-[#232d3b] p-3.5 rounded-sm space-y-2 font-mono text-xs text-neutral-300 mb-5">
                <div className="flex items-start gap-2">
                  <Search className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">
                      Real-time Scam Detection:
                    </strong>{" "}
                    RapidAPI &amp; GPT-4 threat analysis.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Key className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">JWT Auth:</strong> Gated
                    access ensuring only authenticated scans.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Daily Limits:</strong>{" "}
                    Rate-limiting protection preventing abuse.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Prisma ORM:</strong> Clean
                    schema with PostgreSQL relational store.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "NEXT.JS",
                  "NODE.JS",
                  "EXPRESS",
                  "PRISMA",
                  "POSTGRESQL",
                  "GPT-4",
                  "JWT",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#141a24] border border-[#2b3748] text-neutral-200 font-mono text-xs tracking-wider uppercase rounded-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Security Terminal Viewport */}
            <div>
              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#12161c] border border-[#263242] hover:border-[#ccff00]/60 rounded-sm overflow-hidden mb-4 group/screen transition-colors relative"
              >
                <div className="bg-[#181f2a] px-3.5 py-2 border-b border-[#263242] flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="font-medium">EMAIL_SECURITY_SCANNER_V1</span>
                  <span className="text-[#ccff00] font-semibold">
                    GPT4_RAPIDAPI
                  </span>
                </div>

                <div className="p-4 bg-[#0a0d11] font-mono text-xs space-y-2 border-b border-[#1c2430]">
                  <div className="flex items-center justify-between text-neutral-400 text-[11px]">
                    <span>ANALYZING INCOMING PAYLOAD...</span>
                    <span className="text-[#ccff00] flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#141a22] border border-[#232f3e] rounded-xs text-neutral-200 text-[11px] leading-relaxed">
                    <p className="text-neutral-400">
                      $ scan --engine gpt-4 --auth jwt_verified
                    </p>
                    <p className="text-[#ccff00] mt-1 font-semibold">
                      ✓ Zero Phishing Vectors Detected (Risk Score: 0.02)
                    </p>
                    <p className="text-neutral-300 text-[10px] mt-0.5">
                      DB Sync: Prisma ORM &rarr; PostgreSQL (Audit Log Saved)
                    </p>
                  </div>
                </div>
              </a>

              <div className="pt-4 border-t border-[#1c2430] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400 font-medium">
                  FULL-STACK APP
                </span>
                <a
                  href="https://github.com/shanu198218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a24] hover:bg-[#ccff00] hover:text-black text-[#ccff00] border border-[#2b3748] rounded-sm transition-all font-bold"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            3-COLUMN ROW: IMPACNET, THE ARUNA, THAMILAN
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 4: IMPACNET */}
          <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 flex flex-col justify-between corner-decor group shadow-lg">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-2.5">
                <span className="uppercase font-semibold">SOCIAL ADVOCACY</span>
                <span className="text-neutral-400 font-bold">[ 04 // 06 ]</span>
              </div>

              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group-hover:text-[#ccff00] transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-sans mb-3 flex items-center gap-1.5">
                  <span>IMPACNET</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                </h3>
              </a>

              <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed mb-5">
                Mobile-responsive platform for cause advocacy, petitions, and
                community organization. Engineered with GraphQL, microservices,
                AWS infrastructure, and a Next.js frontend.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-xs">
                {["REACT.JS", "GRAPHQL", "AWS CLOUD", "TAILWIND"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#141a24] border border-[#2b3748] text-neutral-200 uppercase rounded-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1c2430] flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-400 font-medium">AWS DEPLOYED</span>
              <a
                href="https://github.com/shanu198218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a24] hover:bg-[#ccff00] hover:text-black text-[#ccff00] border border-[#2b3748] rounded-sm transition-all font-bold"
              >
                <Code className="w-3.5 h-3.5" />
                <span>VIEW REPO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 5: THE ARUNA */}
          <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 flex flex-col justify-between corner-decor group shadow-lg">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-2.5">
                <span className="uppercase font-semibold">
                  SINHALA NEWS PORTAL
                </span>
                <span className="text-neutral-400 font-bold">[ 05 // 06 ]</span>
              </div>

              <a
                href="https://www.aruna.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group-hover:text-[#ccff00] transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-sans mb-3 flex items-center gap-1.5">
                  <span>THE ARUNA</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                </h3>
              </a>

              <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed mb-5">
                Contributed to The Aruna.LK, a high-frequency Sinhala news
                platform. Implemented dynamic routing, Firebase data store, and
                SSR for sub-second mobile readership.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-xs">
                {["NEXT.JS", "FIREBASE", "TAILWIND", "VERCEL"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#141a24] border border-[#2b3748] text-neutral-200 uppercase rounded-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1c2430] flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-400 font-medium">LIVE PORTAL</span>
              <a
                href="https://www.aruna.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a24] hover:bg-[#ccff00] hover:text-black text-[#ccff00] border border-[#2b3748] rounded-sm transition-all font-bold"
              >
                <span>VISIT SITE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 6: THAMILAN */}
          <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 flex flex-col justify-between corner-decor group shadow-lg">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#ccff00] mb-2.5">
                <span className="uppercase font-semibold">
                  TAMIL NEWS PLATFORM
                </span>
                <span className="text-neutral-400 font-bold">[ 06 // 06 ]</span>
              </div>

              <a
                href="https://www.thamilan.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group-hover:text-[#ccff00] transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-sans mb-3 flex items-center gap-1.5">
                  <span>THAMILAN</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#ccff00]" />
                </h3>
              </a>

              <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed mb-5">
                Modern Tamil news platform engineered with dynamic routing,
                Firebase synchronisation, and edge-cached pages for instant
                reader loads across devices.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-xs">
                {["NEXT.JS", "FIREBASE", "TAILWIND"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#141a24] border border-[#2b3748] text-neutral-200 uppercase rounded-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1c2430] flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-400 font-medium">PRODUCTION</span>
              <a
                href="https://www.thamilan.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a24] hover:bg-[#ccff00] hover:text-black text-[#ccff00] border border-[#2b3748] rounded-sm transition-all font-bold"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
