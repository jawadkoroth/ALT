"use client";

import React from "react";
import NavigationBar from "@/components/NavigationBar";
import TravelGuideSection from "@/components/TravelGuideSection";
import { LanguageProvider } from "@/components/LanguageContext";

export default function TravelGuidePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <div className="fixed w-full z-50 bg-[#3a86ff] shadow-sm py-2">
          <NavigationBar />
        </div>
        <main className="pt-24 pb-16">
          <TravelGuideSection />
        </main>

        <footer className="bg-[#3a86ff]/80 py-8">
          <div className="container mx-auto px-4">
            <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
              © {new Date().getFullYear()} Arab Line Tours. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}
