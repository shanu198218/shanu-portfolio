"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Cpu } from "lucide-react";

export function CyberNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Colombo / Sri Lanka time (UTC+05:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "01 // WORK", href: "#work" },
    { label: "02 // PHILOSOPHY", href: "#philosophy" },
    { label: "03 // SKILLS", href: "#skills" },
    { label: "04 // JOURNAL", href: "#journal" },
    { label: "05 // CONTACT", href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#08090b]/95 backdrop-blur-md border-b border-[#1f2630]">
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Brand Identity & Availability */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 group tracking-tight"
            >
              <div className="w-2.5 h-2.5 bg-[#ccff00] rounded-none group-hover:scale-125 transition-transform" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white uppercase group-hover:text-[#ccff00] transition-colors">
                SHAMALI DILRUKSHI
              </span>
            </Link>

            {/* Availability Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#ccff00]/15 border border-[#ccff00]/50 text-[#ccff00] font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span>[ AVAILABLE FOR WORK ]</span>
            </div>

            {/* Location & Time */}
            <div className="hidden lg:flex items-center gap-2 text-neutral-300 font-mono text-xs tracking-wider border-l border-[#263140] pl-4">
              <span className="font-medium text-neutral-200">SRI LANKA</span>
              <span className="text-neutral-500">//</span>
              <span className="text-white font-semibold">
                {currentTime ? `${currentTime} UTC+5:30` : "UTC+05:30"}
              </span>
            </div>
          </div>

          {/* Center / Desktop Navigation Links - High Contrast */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-neutral-200 hover:text-[#ccff00] font-medium tracking-wider transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ccff00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Quick Action / Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/shamali_dilrukshi.pdf"
              download="Shamali_Dilrukshi_CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-[#ccff00] text-black font-mono text-xs font-bold tracking-wider transition-all duration-200 uppercase shadow-md"
            >
              <span>DOWNLOAD CV [PDF]</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2.5 text-neutral-200 hover:text-[#ccff00] border border-[#2b3748] rounded-sm focus:outline-none"
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Telemetry Sub-Bar - High Contrast */}
      <div className="border-t border-[#1a212b] bg-[#0c0f14] px-5 sm:px-8 lg:px-10 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-neutral-300 overflow-x-auto no-scrollbar gap-4 font-medium">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#ccff00] font-bold">SYS.VER</span>
            <span className="text-neutral-500">//</span>
            <span className="text-neutral-100">2.4.02</span>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Cpu className="w-3.5 h-3.5 text-[#ccff00]" />
            <span className="text-neutral-400">RUNTIME:</span>
            <span className="text-white font-medium">
              C# / .NET CORE // GO // NEXT.JS // REACT // AWS
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              <span className="text-neutral-400">SYS.STATUS:</span>
              <span className="text-[#ccff00] font-bold">OPTIMAL [100%]</span>
            </span>
            <span className="hidden sm:inline text-neutral-500">//</span>
            <span className="hidden sm:inline text-neutral-300">
              LATENCY: <span className="text-[#ccff00] font-bold">12ms</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#0a0d11] border-b border-[#1f2630] px-5 pt-5 pb-8 space-y-4 font-mono">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-xs text-neutral-100 hover:text-black hover:bg-[#ccff00] rounded-sm transition-colors flex items-center justify-between font-medium border border-transparent hover:border-[#ccff00]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1f2630] flex flex-col gap-3">
            <a
              href="/shamali_dilrukshi.pdf"
              download="Shamali_Dilrukshi_CV.pdf"
              className="w-full text-center py-3 bg-[#ccff00] text-black text-xs font-bold tracking-wider rounded-sm uppercase shadow-md"
            >
              DOWNLOAD CV [PDF] ↗
            </a>
            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 px-1">
              <span>COLOMBO, SRI LANKA</span>
              <span className="text-[#ccff00] font-semibold">
                [ OPEN FOR HIRE ]
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
