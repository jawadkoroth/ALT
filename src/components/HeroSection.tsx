"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import InteractiveGlobe from "./InteractiveGlobe";
import { Mail } from "lucide-react";

interface HeroSectionProps {
  whatsappLink?: string;
  emailAddress?: string;
}

const HeroSection = ({
  whatsappLink = "https://wa.me/971507539011",
  emailAddress = "info@arablinetours.com",
}: HeroSectionProps) => {
  const { language, translate } = useLanguage();

  const handleCTAClick = () => {
    window.open(whatsappLink, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`, "_blank");
  };

  return (
    <div className="relative min-h-screen w-full bg-[#3a86ff] pt-20">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white hero-title leading-tight">
                {language === "ar" ? (
                  translate("hero.title")
                ) : (
                  <span className="block">
                    {"Discover the Beauty of UAE"
                      .split("")
                      .map((letter, index) => (
                        <span
                          key={index}
                          className="inline-block hover:text-[#ffde59] transition-colors"
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                  </span>
                )}
              </h1>
              <p className="text-xl text-white/80 mt-4 max-w-md">
                {language === "ar"
                  ? translate("hero.subtitle")
                  : "Experience luxury travel with personalized service"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCTAClick}
                className="bg-white hover:bg-white/90 text-[#3a86ff] px-8 py-6 rounded-md text-lg font-medium transition-all"
              >
                {language === "ar" ? translate("hero.cta") : "Book Your Trip"}
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg font-medium transition-all"
                onClick={() => window.open("tel:065664256")}
              >
                {language === "ar" ? translate("hero.call") : "Call Us"}
              </Button>

              {/* Single Email Us button with icon */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg font-medium transition-all"
                onClick={handleEmailClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                {language === "ar" ? translate("hero.email") : "Email Us"}
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Globe */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square bg-[#3a86ff] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <InteractiveGlobe size={400} />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/10 rounded-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3a86ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar" ? "دعم على مدار الساعة" : "24/7 Support"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? "فريق دعم متاح على مدار الساعة لمساعدتك في أي وقت"
                : "Round-the-clock customer support team available to assist you anytime"}
            </p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3a86ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar" ? "خدمة مميزة" : "Premium Service"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? "خدمة عالية الجودة مع اهتمام شخصي بكل التفاصيل"
                : "High-quality service with personalized attention to every detail"}
            </p>
          </div>

          <div className="p-6 bg-white/10 rounded-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3a86ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-1c0-1.1-.9-2-2-2H7a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3c0 .552.448 1 1 1h1v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h1z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar" ? "خدمة موثوقة" : "Trusted Service"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? "سنوات من الخبرة والثقة في تقديم أفضل الخدمات السياحية"
                : "Years of experience and trust in delivering the best travel services"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
