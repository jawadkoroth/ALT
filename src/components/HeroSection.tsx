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
  whatsappLink = "https://wa.me/971501234567",
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {language === "ar"
                  ? translate("hero.title")
                  : "Discover the Beauty of UAE"}
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
                onClick={() => window.open("tel:+971501234567")}
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

            <div className="flex items-center space-x-4">
              <div className="h-1 w-20 bg-[#3a86ff]"></div>
              <p className="text-white/70">Premium Travel Services</p>
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar"
                ? translate("features.visaServices")
                : "Visa Services"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? translate("features.visaDescription")
                : "Fast and reliable visa processing for UAE and GCC countries."}
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
                <path d="M3 7h18"></path>
                <path d="M19 7v14H5V7"></path>
                <path d="M3 7l2-4h14l2 4"></path>
                <path d="M8 11h8"></path>
                <path d="M8 15h8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar"
                ? translate("features.ticketBooking")
                : "Ticket Booking"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? translate("features.ticketDescription")
                : "Seamless flight and hotel bookings at competitive prices."}
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m4.9 4.9 14.2 14.2"></path>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m2 12 2 0"></path>
                <path d="m20 12 2 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {language === "ar"
                ? translate("features.tourPackages")
                : "Tour Packages"}
            </h3>
            <p className="text-white/80">
              {language === "ar"
                ? translate("features.tourDescription")
                : "Customized tour packages for individuals and groups."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
