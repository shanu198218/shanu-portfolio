"use client";

import { useState } from "react";
import LandingSection from "@/components/common/Loader/Landing-page";
import Navbar from "@/components/pages/nav-bar";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main>
      {!showMainContent ? (
        <LandingSection onContinue={() => setShowMainContent(true)} />
      ) : (
        <>
          <Navbar />
          {/* Add your content here */}
          <Home />
        </>
      )}
    </main>
  );
}
