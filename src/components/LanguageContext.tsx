"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Default translations
const translations = {
  en: {
    // Navigation
    "nav.userAccount": "User Account",
    "nav.about": "About",
    "nav.visaServices": "Visa Services",
    "nav.ticketBooking": "Ticket Booking",

    // Hero Section
    "hero.title": "Discover the Beauty of UAE",
    "hero.subtitle": "Experience luxury travel with personalized service",
    "hero.cta": "Book Your Trip",

    // Travel Guide Section
    "guide.title": "UAE Travel Guide",
    "guide.destinations": "Popular Destinations",
    "guide.customs": "Local Customs",
    "guide.tips": "Travel Tips",
    "guide.learnMore": "Learn More",

    // Destinations
    "destinations.dubai": "Dubai",
    "destinations.abuDhabi": "Abu Dhabi",
    "destinations.sharjah": "Sharjah",
    "destinations.fujairah": "Fujairah",

    // Footer
    "footer.contactUs": "Contact Us",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
  },
  ar: {
    // Navigation
    "nav.userAccount": "حساب المستخدم",
    "nav.about": "حول",
    "nav.visaServices": "خدمات التأشيرة",
    "nav.ticketBooking": "حجز التذاكر",

    // Hero Section
    "hero.title": "اكتشف جمال الإمارات العربية المتحدة",
    "hero.subtitle": "استمتع بتجربة سفر فاخرة مع خدمة مخصصة",
    "hero.cta": "احجز رحلتك",

    // Travel Guide Section
    "guide.title": "دليل السفر للإمارات",
    "guide.destinations": "الوجهات الشهيرة",
    "guide.customs": "العادات المحلية",
    "guide.tips": "نصائح السفر",
    "guide.learnMore": "اعرف المزيد",

    // Destinations
    "destinations.dubai": "دبي",
    "destinations.abuDhabi": "أبو ظبي",
    "destinations.sharjah": "الشارقة",
    "destinations.fujairah": "الفجيرة",

    // Footer
    "footer.contactUs": "اتصل بنا",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  direction: "ltr",
  setLanguage: () => {},
  translate: () => "",
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");
  const [direction, setDirection] = useState<Direction>("ltr");

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update direction based on language
    setDirection(language === "ar" ? "rtl" : "ltr");

    // Update HTML dir attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Save language preference
    localStorage.setItem("language", language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const translate = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage: handleSetLanguage,
        translate,
      }}
    >
      <div dir={direction} className="font-sans">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
