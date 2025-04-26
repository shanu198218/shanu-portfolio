// components/pages/nav-bar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // For merging Tailwind classes (optional)

const navItems = [
  { label: "Home", href: "/home" },
  {
    label: "Linkdine",
    href: "https://www.linkedin.com/in/shamali-dilrukshi-482478225/",
  },
  { label: "GitHub", href: "https://github.com/shanu198218" },
  {
    label: "Medium",
    href: "https://www.facebook.com/share/1AFxAfKWz7/?mibextid=wwXIfr",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/60 z-50 relative">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex md:items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-black flex items-center justify-center text-white">
            <div className="w-1 h-4 bg-white rounded" />
          </div>
          <span className="text-lg font-semibold text-black">My Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-grey-deep hover:text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900">
            Contact me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <div className="relative w-64 h-full bg-white shadow-xl px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold text-black">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-800 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <Button className="w-full bg-black text-white hover:bg-gray-900">
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
