"use client";

import React from "react";
import { Cloud, CheckCircle, Database, ShieldCheck, Cpu } from "lucide-react";

export function CyberPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-20 sm:py-24 md:py-32 border-b border-[#1f2630] bg-[#08090b] bg-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================
              LEFT COLUMN: EDITORIAL QUOTE & PRINCIPLES
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="font-mono text-xs text-[#ccff00] mb-4 tracking-wider flex items-center gap-2">
                <span className="font-semibold">
                  02 // PHILOSOPHY &amp; ETHOS
                </span>
                <span className="text-neutral-500">{"//"}</span>
                <span className="text-neutral-300">
                  ARCHITECTURAL STATEMENT
                </span>
              </div>

              {/* Large Editorial Serif Quote */}
              <blockquote className="text-2xl sm:text-3xl md:text-[34px] font-serif italic text-white font-normal leading-[1.35] tracking-normal mb-8">
                &ldquo;Software architecture as structural integrity &mdash;
                balancing performant client state with resilient cloud
                runtimes.&rdquo;
              </blockquote>
            </div>

            {/* Principles Box - High Contrast */}
            <div className="p-6 bg-[#0e1217] border border-[#232d3b] rounded-sm font-mono text-xs space-y-4 shadow-xl">
              <div className="text-xs text-[#ccff00] font-bold tracking-wider uppercase flex items-center gap-2 pb-3 border-b border-[#1c2532]">
                <Cpu className="w-4 h-4 text-[#ccff00]" />
                <span>FOUNDATIONAL METRICS &amp; STANDARDS:</span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  CLIENT LATENCY:
                </span>
                <span className="text-[#ccff00] font-bold">
                  0.8 SEC / FCP OPTIMIZED
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  STATE ARCHITECTURE:
                </span>
                <span className="text-white font-semibold">
                  IMMUTABLE CLIENT CACHE
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  CLOUD INFRASTRUCTURE:
                </span>
                <span className="text-white font-semibold">
                  DISTRIBUTED AWS RESILIENCY
                </span>
              </div>
              <div className="flex justify-between items-center text-neutral-100">
                <span className="text-neutral-400 uppercase text-[11px] font-medium">
                  AUDIT SCORE:
                </span>
                <span className="text-[#ccff00] font-bold">
                  98+ LIGHTHOUSE BENCHMARK
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: ESSAY & CERTIFICATIONS
             ======================================================== */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="font-mono text-xs text-[#ccff00] mb-4 tracking-wider font-semibold">
                {"// ARCHITECTURE & ENGINEERING PHILOSOPHY"}
              </div>

              {/* High Contrast Narrative */}
              <div className="space-y-5 text-base sm:text-lg text-neutral-100 font-normal leading-relaxed">
                <p>
                  I approach full-stack software development with the rigor of
                  systems architecture: every line must serve a clear purpose
                  across client and cloud runtimes. With 3+ years of
                  professional experience building scalable frontend and backend
                  systems, REST APIs, responsive user interfaces, and healthcare
                  applications, my focus centers on creating robust, resilient
                  software that scales effortlessly.
                </p>
                <p>
                  Specialized in modern full-stack ecosystems (
                  <strong className="text-white font-semibold">
                    C#, .NET Core, Go, React.js, Next.js, TypeScript, JavaScript
                  </strong>
                  ) backed by disciplined SDLC practices, comprehensive testing,
                  and refactoring. Leveraging modern AI-assisted development
                  tools (
                  <strong className="text-white font-semibold">
                    OpenAI Codex, Claude, Kiro AI
                  </strong>
                  ) to maximize engineering velocity and maintain rigorous code
                  quality.
                </p>
              </div>
            </div>

            {/* Certifications Grid (2 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-[#1f2630]">
              {/* Card 1: AWS Certified */}
              <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-colors p-6 rounded-sm flex flex-col justify-between corner-decor group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-sm bg-[#ff9900]/15 border border-[#ff9900]/40 flex items-center justify-center text-[#ff9900]">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[#ccff00] font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white uppercase font-sans tracking-tight mb-2 group-hover:text-[#ccff00] transition-colors">
                    AWS Certified
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
                    Cloud infrastructure architecture, EC2 deployment, S3
                    storage, IAM security policies, and serverless compute
                    primitives.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#1b232e] font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                  VALIDATED CLOUD ARCHITECT
                </div>
              </div>

              {/* Card 2: GraphQL Certified */}
              <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-colors p-6 rounded-sm flex flex-col justify-between corner-decor group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-sm bg-[#e535ab]/15 border border-[#e535ab]/40 flex items-center justify-center text-[#e535ab]">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[#ccff00] font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>VERIFIED</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-white uppercase font-sans tracking-tight mb-2 group-hover:text-[#ccff00] transition-colors">
                    GraphQL Certified
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
                    Advanced schema design, query optimization, resolver
                    engineering, and real-time subscription mechanisms.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#1b232e] font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-medium">
                  VALIDATED DATA ARCHITECT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
