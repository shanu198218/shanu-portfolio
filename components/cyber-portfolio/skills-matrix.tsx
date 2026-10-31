"use client";

import React from "react";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  CheckCircle2,
  Sparkles,
  Cpu,
} from "lucide-react";

export function CyberSkillsMatrix() {
  const skillCategories = [
    {
      id: "01",
      title: "FRONTEND ARCHITECTURE",
      icon: Layout,
      desc: "Responsive user interfaces, component-driven architecture, server-side rendering, bundle efficiency, and accessible design systems.",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "shadcn/ui",
        "Responsive UI/UX",
      ],
    },
    {
      id: "02",
      title: "BACKEND & SYSTEMS ARCHITECTURE",
      icon: Server,
      desc: "High-performance backend systems, scalable microservices, REST APIs, enterprise .NET runtimes, and concurrent Go services.",
      skills: [
        "C#",
        ".NET Core",
        "Go (Golang)",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Prisma ORM",
        "GraphQL",
        "JWT Authentication",
      ],
    },
    {
      id: "03",
      title: "DATA SYSTEMS",
      icon: Database,
      desc: "Relational database schemas, NoSQL document stores, clean data modeling, and real-time state synchronization.",
      skills: [
        "PostgreSQL",
        "Firebase Firestore",
        "MongoDB",
        "MySQL",
        "PHPMyAdmin",
        "Prisma Schema",
      ],
    },
    {
      id: "04",
      title: "CLOUD & INFRASTRUCTURE",
      icon: Cloud,
      desc: "Production deployment pipelines, serverless architectures, containerization, asset CDNs, and modern hosting environments.",
      skills: [
        "AWS (EC2, S3, IAM)",
        "Docker",
        "Vercel Edge",
        "Netlify",
        "CI/CD Workflows",
        "Git & GitHub",
      ],
    },
  ];

  const methodologies = [
    "OpenAI Codex",
    "Claude AI",
    "Kiro AI",
    "Requirements Analysis",
    "Solution Design",
    "Debugging & Refactoring",
    "Automated Testing",
    "SDLC Practices",
    "Agile / Scrum",
    "Postman / Insomnia",
    "VS Code",
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 md:py-32 border-b border-[#1f2630] bg-[#08090b]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 md:mb-16 border-b border-[#1f2630] gap-6">
          <div>
            <div className="font-mono text-xs text-[#ccff00] mb-3 tracking-wider flex items-center gap-2">
              <span className="font-semibold">
                03 // TAXONOMY &amp; CAPABILITIES
              </span>
              <span className="text-neutral-500">//</span>
              <span className="text-neutral-300">
                CORE STACK &amp; METHODOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              SKILLS MATRIX
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-300 max-w-md leading-relaxed uppercase">
            C#, .NET CORE, GO, REACT, NEXT.JS // SCALABLE SYSTEMS, REST APIS
            &amp; AI-ASSISTED DEVELOPMENT TOOLS.
          </p>
        </div>

        {/* 4 Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 sm:p-8 flex flex-col justify-between corner-decor group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1c2532]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-[#161d27] border border-[#293648] flex items-center justify-center text-[#ccff00]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans font-extrabold text-white text-base sm:text-lg tracking-tight uppercase group-hover:text-[#ccff00] transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-neutral-400 font-bold">
                      [ {cat.id} ]
                    </span>
                  </div>

                  <p className="text-sm text-neutral-200 font-normal leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                {/* Tech Pills - High Contrast */}
                <div className="flex flex-wrap gap-2.5 pt-3 border-t border-[#1a232f]">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-100 font-mono text-xs tracking-wide rounded-sm transition-colors flex items-center gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 5th Card: Tooling, SDLC & AI Tools (Wide card) */}
        <div className="bg-[#0e1217] border border-[#232d3b] hover:border-[#ccff00]/60 transition-all rounded-sm p-6 sm:p-8 corner-decor group shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-5 border-b border-[#1c2532] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#161d27] border border-[#293648] flex items-center justify-center text-[#ccff00]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-extrabold text-white text-base sm:text-lg tracking-tight uppercase group-hover:text-[#ccff00] transition-colors">
                AI-ASSISTED DEVELOPMENT, SDLC PRACTICES &amp; TESTING
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-400 font-bold">
              [ 05 ]
            </span>
          </div>

          <p className="text-sm text-neutral-200 font-normal leading-relaxed mb-5">
            Strong background in requirements analysis, solution design,
            debugging, refactoring, testing, deployment, and SDLC practices.
            Experienced in leveraging AI-assisted development tools (OpenAI
            Codex, Claude, Kiro AI) to accelerate delivery and elevate code
            quality.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-3 border-t border-[#1a232f]">
            {methodologies.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 bg-[#141a24] hover:bg-[#1a2330] hover:border-[#ccff00]/60 border border-[#283547] text-neutral-100 font-mono text-xs tracking-wide rounded-sm transition-colors flex items-center gap-2 font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
