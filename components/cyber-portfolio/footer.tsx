"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function CyberFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050709] border-t border-[#1a212b] py-16 md:py-20 text-neutral-300 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-10">
        {/* Top Footer Navigation & Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#18202a] gap-6">
          <div className="space-y-2">
            <div className="text-white font-extrabold tracking-widest text-base uppercase font-sans">
              M.G. SHAMALI DILRUKSHI
            </div>
            <div className="text-neutral-300 text-xs tracking-wider uppercase font-medium">
              FULL-STACK SOFTWARE ENGINEER &amp; CLOUD ARCHITECT
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href="#work"
              className="text-neutral-200 hover:text-[#ccff00] transition-colors"
            >
              [ WORK ]
            </a>
            <a
              href="#philosophy"
              className="text-neutral-200 hover:text-[#ccff00] transition-colors"
            >
              [ PHILOSOPHY ]
            </a>
            <a
              href="#skills"
              className="text-neutral-200 hover:text-[#ccff00] transition-colors"
            >
              [ SKILLS ]
            </a>
            <a
              href="#journal"
              className="text-neutral-200 hover:text-[#ccff00] transition-colors"
            >
              [ JOURNAL ]
            </a>
            <a
              href="#contact"
              className="text-neutral-200 hover:text-[#ccff00] transition-colors"
            >
              [ CONTACT ]
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#ccff00] hover:underline uppercase font-bold"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal / System Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 gap-4 font-medium">
          <div>&copy; 2025 M.G. SHAMALI DILRUKSHI. ALL RIGHTS RESERVED.</div>

          <div className="flex items-center gap-2 text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL // NEXT.JS 14 RUNTIME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
