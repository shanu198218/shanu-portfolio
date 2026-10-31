// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/common/Theme";

export const metadata: Metadata = {
  title: "Shamali Dilrukshi | Full-Stack Software Engineer",
  description:
    "Software Engineer with 3+ years of professional experience building full-stack web applications using C#, .NET Core, Go, React.js, Next.js, TypeScript, and JavaScript. Experienced in scalable systems, REST APIs, responsive UIs, healthcare applications, and AI-assisted development tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090b0e] text-[#e2e8f0] font-sans antialiased selection:bg-[#ccff00] selection:text-black min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
