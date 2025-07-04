"use client";

import React, { useState, useEffect } from "react";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";

import { LanguageProvider, useLanguage } from "@/components/LanguageContext";

function HomePageContent() {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const { language } = useLanguage();

  // Handle content loading
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    return () => clearTimeout(contentTimer);
  }, []);

  // Handle animation and loading state
  useEffect(() => {
    // Only hide loading screen after content is loaded
    if (contentLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Give extra time after content loads

      return () => clearTimeout(timer);
    }
  }, [contentLoaded]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#3a86ff] flex items-center justify-center overflow-hidden z-50">
        <div className="airplane-container">
          <img
            src="/airplane.svg"
            alt="Loading"
            className="w-16 h-16 md:w-24 md:h-24 airplane-animation"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3a86ff] text-white">
      <NavigationBar />
      <main>
        <HeroSection />
        <Newsletter />
        <footer className="bg-[#3a86ff]/80 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <img
                  src="/arab-line-tours-logo.jpg"
                  alt="Arab Line Tours"
                  className="h-12 w-auto"
                />
                <p className="text-white/80 mt-2 text-sm">
                  {language === "ar"
                    ? "شريكك المميز للسفر في الإمارات"
                    : "Your premium travel partner in UAE"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-[#3a86ff] mb-3">Contact</h3>
                  <p className="text-white/80 text-sm">
                    support@arablineuae.com
                  </p>
                  <p className="text-white/80 text-sm">065664256</p>
                  <p className="text-white/80 text-sm">0507539011</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3a86ff] mb-3">Address</h3>
                  <p className="text-white/80 text-sm">
                    Maza signal, Industrial area-5
                  </p>
                  <p className="text-white/80 text-sm">
                    Sharjah, United Arab Emirates
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3a86ff] mb-3">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-[#3a86ff] hover:text-[#3a86ff]/80 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#3a86ff] hover:text-[#3a86ff]/80 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#3a86ff] hover:text-[#3a86ff]/80 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
              © {new Date().getFullYear()} Arab Line Tours. All rights
              reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}
