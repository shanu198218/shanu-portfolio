"use client";

import React from "react";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";

export function CyberTechnicalJournal() {
  const articles = [
    {
      vol: "VOL. 01",
      title: "REST API Service",
      description:
        "Comprehensive architectural breakdown of RESTful protocol principles, request/response models, and production error handling.",
      platform: "MEDIUM",
      url: "https://mgshamalidilrukshi.medium.com/rest-api-service-40122b6a730b",
    },
    {
      vol: "VOL. 02",
      title: "React JS: Core Principles & Base Architecture",
      description:
        "Deep dive into virtual DOM diffing, reconciliation mechanics, component lifecycle hooks, and performant state management.",
      platform: "MEDIUM",
      url: "https://mgshamalidilrukshi.medium.com/react-js-f442e4f8908",
    },
    {
      vol: "VOL. 03",
      title:
        "Cookies vs. Local Storage in Next.js: Which is Best for Your Website?",
      description:
        "Architecture analysis of client vs server authentication tokens: secure HTTP-only cookies versus browser localStorage tradeoffs.",
      platform: "LINKEDIN",
      url: "https://www.linkedin.com/pulse/cookies-vs-local-storage-nextjs-which-best-your-shamali-dilrukshi-dcplf/?trackingId=za2RMUj6SZeMzMEDOWmNCQ%3D%3D",
    },
    {
      vol: "VOL. 04",
      title: "Application Frameworks: Architectural Comparative Study",
      description:
        "Comparing modern progressive web frameworks with actionable metrics on client load, server render overhead, and maintainability.",
      platform: "MEDIUM",
      url: "https://mgshamalidilrukshi.medium.com/application-frameworks-a779704df848",
    },
  ];

  return (
    <section
      id="journal"
      className="py-20 sm:py-24 md:py-32 border-b border-[#1f2630] bg-[#08090b]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 md:mb-16 border-b border-[#1f2630] gap-6">
          <div>
            <div className="font-mono text-xs text-[#ccff00] mb-3 tracking-wider flex items-center gap-2">
              <span className="font-semibold">
                04 // PUBLICATIONS &amp; WRITING
              </span>
              <span className="text-neutral-500">{"//"}</span>
              <span className="text-neutral-300">CODIFIED METHODS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              TECHNICAL JOURNAL
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-300 max-w-md leading-relaxed uppercase">
            READ ARTICLES WRITTEN ON ARCHITECTURE, STATE, PERFORMANCE &amp;
            FRAMEWORKS. LINKED DIRECTLY TO MEDIUM &amp; LINKEDIN.
          </p>
        </div>

        {/* Article Rows List */}
        <div className="space-y-5 md:space-y-6">
          {articles.map((art) => (
            <a
              key={art.vol}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/70 hover:bg-[#121820] transition-all rounded-sm p-6 sm:p-7 md:p-8 corner-decor group shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Volume badge */}
                <div className="lg:col-span-2 font-mono text-xs text-[#ccff00] flex items-center gap-2">
                  <span className="font-extrabold text-sm">{art.vol}</span>
                  <span className="text-neutral-600">{"//"}</span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-8 space-y-2">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
                    <span>{art.title}</span>
                  </h3>
                  <p className="text-sm text-neutral-200 font-normal leading-relaxed">
                    {art.description}
                  </p>
                </div>

                {/* Platform & Read action */}
                <div className="lg:col-span-2 flex items-center justify-start lg:justify-end gap-3 font-mono text-xs pt-3 lg:pt-0 border-t lg:border-t-0 border-[#1c2430]">
                  <span className="px-2.5 py-1 bg-[#141a24] border border-[#283547] text-neutral-200 text-[11px] uppercase rounded-sm font-medium">
                    {art.platform}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white group-hover:text-[#ccff00] font-bold text-xs uppercase transition-colors">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
