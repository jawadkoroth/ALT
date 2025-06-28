"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Icons } from "./ui/icons";

const Newsletter = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full py-16 bg-[#3a86ff]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Services Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#3a86ff] mb-4">
                {language === "ar" ? "خدماتنا" : "Our Services"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.plane className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "التذاكر" : "Tickets"}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="text-red-600 font-bold animate-pulse">
                    {language === "ar"
                      ? "أسعار خاصة متاحة"
                      : "Special rates available"}
                  </span>
                </p>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.briefcase className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "باقة البحث عن عمل" : "Job Hunt Package"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.mapPin className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "باقات السياحة" : "Tour Packages"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.hotel className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "حجز الفنادق" : "Hotel Booking"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.compass className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "سفاري الصحراء" : "Desert Safari"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar"
                    ? "مساعدة التأشيرة العالمية"
                    : "Global Visa Assistance"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar"
                    ? "خدمات تأشيرة العائلة"
                    : "Family Visa Services"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.fileText className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar"
                    ? "تصديق الشهادات"
                    : "Certificate Attestation"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar" ? "العمرة" : "Umrah"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.building className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
                  {language === "ar"
                    ? "إعداد الترخيص وتكوين الشركة"
                    : "License Setup and Company Formation"}
                </h4>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-[#3a86ff]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#3a86ff] rounded-full flex items-center justify-center mb-4">
                  <Icons.handshake className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#3a86ff] mb-2 text-lg">
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
