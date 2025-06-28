"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Button } from "./ui/button";

interface NavigationBarProps {
  logo?: string;
  whatsappNumber?: string;
}

const NavigationBar = ({
  logo = "/arab-line-tours-logo.jpg",
  whatsappNumber = "971507539011",
}: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, translate } = useLanguage();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectToWhatsApp = (service: string) => {
    const message = encodeURIComponent(
      `Hello, I'm interested in your ${service} services.`,
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#3a86ff] shadow-sm py-2" : "bg-transparent py-4"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-48">
            <Image
              src={logo}
              alt="Arab Line Tours"
              width={192}
              height={64}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/about" passHref>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 transition-colors"
            >
              {translate("nav.about")}
            </Button>
          </Link>
          <Link href="/travel-guide" passHref>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 transition-colors"
            >
              Travel Guide
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => redirectToWhatsApp("Visa Services")}
          >
            {translate("nav.visaServices")}
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => redirectToWhatsApp("Ticket Booking")}
          >
            {translate("nav.ticketBooking")}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="outline"
            className="flex items-center gap-1 border-white text-white hover:bg-white/10"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
            <span>{language === "en" ? "العربية" : "English"}</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3a86ff] shadow-lg absolute w-full left-0 right-0 top-full py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            <Link href="/about" passHref>
              <Button
                variant="ghost"
                className="text-white hover:text-white/80 transition-colors w-full justify-start"
              >
                {translate("nav.about")}
              </Button>
            </Link>
            <Link href="/travel-guide" passHref>
              <Button
                variant="ghost"
                className="text-white hover:text-white/80 transition-colors w-full justify-start"
              >
                Travel Guide
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 transition-colors w-full justify-start"
              onClick={() => redirectToWhatsApp("Visa Services")}
            >
              {translate("nav.visaServices")}
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 transition-colors w-full justify-start"
              onClick={() => redirectToWhatsApp("Ticket Booking")}
            >
              {translate("nav.ticketBooking")}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="outline"
              className="flex items-center gap-1 border-white text-white hover:bg-white/10 w-full justify-center"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
