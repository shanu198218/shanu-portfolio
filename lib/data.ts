import morning from "@/public/projects/the-morning.png";
import aruna from "@/public/projects/aruna.png";
import thamilan from "@/public/projects/thamilan.png";
import Impacnet from "@/public/projects/impacnet.png";

export const images = [
  "/tech-stacks/aws.jpg",
  "/tech-stacks/shadcn.png",
  "/tech-stacks/nextjs.png",
  "/tech-stacks/nestjs.png",
  "/tech-stacks/docker.png",
  "/tech-stacks/firebase.png",
  "/tech-stacks/graphql.png",
  "/tech-stacks/nodejs.png",
  "/tech-stacks/netlify.png",
  "/tech-stacks/tailwindcss.png",
  "/tech-stacks/shadcnui.jpg",
];

export const projects = [
  {
    title: "The Morning",
    description:
      "Contributed to The Morning, a modern news platform, by implementing dynamic routing, Firebase integration, and responsive UI with Tailwind CSS and Vercel deployment. Focused on performance, scalability, and mobile optimization.",
    image: morning,
    link: "https://www.themorning.lk/",
  },
  {
    title: "MedNext Products",
    description:
      "MedNext Clinical is an AI-powered browser-based specialist suite designed for paperless medical consultations, digital notes, and complete patient history with intelligent AI scribing.",
    image: "/projects/mednext-products.png",
    link: "https://www.mednext.com.au/features/clinical",
  },
  {
    title: "AI Fraud Email Detector",
    description:
      "A full-stack web app that detects potentially fraudulent emails in real-time using OpenAI via RapidAPI, built with Next.js, Node.js, Express, Prisma, PostgreSQL, and secure JWT authentication with daily scan limits.",
    image: "/projects/impacnet.png",
    link: "https://github.com/shanu198218/open-ai-email-scam-detector-frontend",
  },
  {
    title: "ImpacNet – Social Media Platform",
    description:
      "Mobile-responsive platform for global idea sharing with user/org accounts, posts, events, and petitions. Built with GraphQL, microservices, AWS, and a Next.js + Tailwind frontend.",
    image: Impacnet,
    link: "https://github.com/shanu198218",
  },
  {
    title: "The Aruna",
    description:
      "Contributed to The Aruna.LK, a modern Sinhala news platform, by implementing dynamic routing, Firebase integration, and responsive UI with Tailwind CSS and Vercel deployment.",
    image: aruna,
    link: "https://www.aruna.lk/",
  },
  {
    title: "Thamilan",
    description:
      "Contributed to Thamilan, a modern Tamil news platform, by implementing dynamic routing, Firebase integration, and responsive UI with Tailwind CSS and Vercel deployment.",
    image: thamilan,
    link: "https://www.thamilan.lk/",
  },
];
