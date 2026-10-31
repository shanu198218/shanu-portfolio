"use client";

import React from "react";
import { CyberNavbar } from "@/components/cyber-portfolio/navbar";
import { CyberHero } from "@/components/cyber-portfolio/hero";
import { CyberSelectedWork } from "@/components/cyber-portfolio/selected-work";
import { CyberPhilosophy } from "@/components/cyber-portfolio/philosophy";
import { CyberSkillsMatrix } from "@/components/cyber-portfolio/skills-matrix";
import { CyberTechnicalJournal } from "@/components/cyber-portfolio/technical-journal";
import { CyberContact } from "@/components/cyber-portfolio/contact";
import { CyberFooter } from "@/components/cyber-portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-[#f4f4f5] selection:bg-[#ccff00] selection:text-black">
      <CyberNavbar />
      <CyberHero />
      <CyberSelectedWork />
      <CyberPhilosophy />
      <CyberSkillsMatrix />
      <CyberTechnicalJournal />
      <CyberContact />
      <CyberFooter />
    </main>
  );
}
