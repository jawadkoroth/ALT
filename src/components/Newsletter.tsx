"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Icons } from "./ui/icons";

const Newsletter = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full py-12 bg-[#3a86ff]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Services Section */}
          <div className="bg-[#3a86ff]/20 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-[#3a86ff]/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {language === "ar" ? "خدماتنا" : "Our Services"}
              </h3>
              <p className="text-white/80 text-lg">
                {language === "ar"
                  ? "نقدم مجموعة شاملة من خدمات السفر والسياحة"
                  : "We offer a comprehensive range of travel and tourism services"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.ticket className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "التذاكر" : "Tickets"}
                </h4>
                <p className="text-xs text-white/90 mb-1">
                  <span className="text-[#ffde59] font-bold animate-pulse">
                    {language === "ar"
                      ? "أسعار خاصة متاحة"
                      : "Special rates available"}
                  </span>
                </p>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.briefcase className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "باقة البحث عن عمل" : "Job Hunt Package"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.mapPin className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "باقات السياحة" : "Tour Packages"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.hotel className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "حجز الفنادق" : "Hotel Booking"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.compass className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "سفاري الصحراء" : "Desert Safari"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.shield className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar"
                    ? "مساعدة التأشيرة العالمية"
                    : "Global Visa Assistance"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.users className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar"
                    ? "خدمات تأشيرة العائلة"
                    : "Family Visa Services"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.fileText className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar"
                    ? "تصديق الشهادات"
                    : "Certificate Attestation"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.mosque className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "العمرة" : "Umrah"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.building className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar"
                    ? "إعداد الترخيص وتكوين الشركة"
                    : "License Setup and Company Formation"}
                </h4>
              </div>

              <div className="p-4 bg-[#3a86ff]/30 rounded-lg border border-[#3a86ff]/40 hover:bg-[#3a86ff]/40 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                  <Icons.handshake className="h-5 w-5 text-[#3a86ff]" />
                </div>
                <h4 className="font-semibold text-white mb-1 text-base">
                  {language === "ar" ? "ترتيب الكفيل" : "Sponsor Arranging"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
