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
    "hero.call": "Call Us",
    "hero.email": "Email Us",

    // Travel Guide Section
    "guide.title": "UAE Travel Guide",
    "guide.subtitle":
      "Discover the beauty and wonders of the United Arab Emirates",
    "guide.destinations": "Popular Destinations",
    "guide.customs": "Local Customs",
    "guide.tips": "Travel Tips",
    "guide.learnMore": "Learn More",
    "guide.destination": "Destination",
    "guide.localCustom": "Local Custom",
    "guide.travelTip": "Travel Tip",

    // Destinations
    "destinations.dubai": "Dubai - City of Gold",
    "destinations.abuDhabi": "Abu Dhabi - Cultural Capital",
    "destinations.sharjah": "Sharjah - Cultural Hub",
    "destinations.fujairah": "Fujairah - Eastern Coast",

    // Features
    "features.visaServices": "Visa Services",
    "features.visaDescription":
      "Fast and reliable visa processing for UAE and GCC countries.",
    "features.ticketBooking": "Ticket Booking",
    "features.ticketDescription":
      "Seamless flight and hotel bookings at competitive prices.",
    "features.tourPackages": "Tour Packages",
    "features.tourDescription":
      "Customized tour packages for individuals and groups.",

    // Newsletter
    "newsletter.title": "Subscribe to our Newsletter",
    "newsletter.subtitle":
      "Stay updated with our latest offers and travel tips",
    "newsletter.button": "Subscribe",
    "newsletter.name": "Your Name",
    "newsletter.email": "Your Email",
    "newsletter.success": "Successfully subscribed!",
    "newsletter.privacy": "We'll never share your email with anyone else.",
    "newsletter.submitting": "Subscribing...",

    // Footer
    "footer.contactUs": "Contact Us",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.address": "Address",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
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
    "hero.call": "اتصل بنا",
    "hero.email": "راسلنا",

    // Travel Guide Section
    "guide.title": "دليل السفر للإمارات",
    "guide.subtitle": "اكتشف جمال وعجائب دولة الإمارات العربية المتحدة",
    "guide.destinations": "الوجهات الشهيرة",
    "guide.customs": "العادات المحلية",
    "guide.tips": "نصائح السفر",
    "guide.learnMore": "اعرف المزيد",
    "guide.destination": "وجهة",
    "guide.localCustom": "عادات محلية",
    "guide.travelTip": "نصيحة سفر",

    // Destinations
    "destinations.dubai": "دبي - مدينة الذهب",
    "destinations.abuDhabi": "أبو ظبي - العاصمة الثقافية",
    "destinations.sharjah": "الشارقة - مركز ثقافي",
    "destinations.fujairah": "الفجيرة - الساحل الشرقي",

    // Features
    "features.visaServices": "خدمات التأشيرة",
    "features.visaDescription":
      "معالجة سريعة وموثوقة للتأشيرات للإمارات ودول مجلس التعاون الخليجي.",
    "features.ticketBooking": "حجز التذاكر",
    "features.ticketDescription":
      "حجوزات سلسة للطيران والفنادق بأسعار تنافسية.",
    "features.tourPackages": "باقات السياحة",
    "features.tourDescription": "باقات سياحية مخصصة للأفراد والمجموعات.",

    // Newsletter
    "newsletter.title": "اشترك في نشرتنا الإخبارية",
    "newsletter.subtitle": "ابق على اطلاع بأحدث عروضنا ونصائح السفر",
    "newsletter.button": "اشترك",
    "newsletter.name": "الاسم",
    "newsletter.email": "البريد الإلكتروني",
    "newsletter.success": "تم الاشتراك بنجاح!",
    "newsletter.privacy": "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
    "newsletter.submitting": "جارٍ الاشتراك...",

    // Footer
    "footer.contactUs": "اتصل بنا",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",
    "footer.address": "العنوان",
    "footer.followUs": "تابعنا",
    "footer.rights": "جميع الحقوق محفوظة.",
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
