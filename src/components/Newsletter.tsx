"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useLanguage } from "./LanguageContext";
import { Mail, Send, CheckCircle } from "lucide-react";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  placeholderName?: string;
  placeholderEmail?: string;
}

const Newsletter = ({
  title = "Subscribe to our Newsletter",
  subtitle = "Stay updated with our latest offers and travel tips",
  buttonText = "Subscribe",
  backgroundColor = "bg-[#3a86ff]/10",
  placeholderName = "Your Name",
  placeholderEmail = "Your Email",
}: NewsletterProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate inputs
    if (!name.trim()) {
      setError(
        language === "ar" ? "الرجاء إدخال اسمك" : "Please enter your name",
      );
      setIsSubmitting(false);
      return;
    }
    if (!email.trim()) {
      setError(
        language === "ar"
          ? "الرجاء إدخال بريدك الإلكتروني"
          : "Please enter your email",
      );
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(
        language === "ar"
          ? "يرجى إدخال بريد إلكتروني صالح"
          : "Please enter a valid email address",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Subscribing with:", { name, email });
      await new Promise((r) => setTimeout(r, 1000));
      setIsSuccess(true);
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError(
        language === "ar"
          ? "فشل الاشتراك. حاول مرة أخرى لاحقًا."
          : "Failed to subscribe. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-[#3a86ff]/20 rounded-full mb-4">
              <Mail className="h-8 w-8 text-[#3a86ff]" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#3a86ff]">
              {language === "ar" ? "اشترك في نشرتنا الإخبارية" : title}
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              {language === "ar"
                ? "ابق على اطلاع بأحدث عروضنا ونصائح السفر"
                : subtitle}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {language === "ar"
                    ? "تم الاشتراك بنجاح!"
                    : "Successfully subscribed!"}
                </h3>
                <p className="text-gray-600 text-center">
                  {language === "ar"
                    ? "شكراً لك! سنرسل لك آخر العروض والأخبار قريباً."
                    : "Thank you! We'll send you our latest offers and news soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>{error}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {language === "ar" ? "الاسم" : "Name"}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={
                        language === "ar" ? "الاسم" : placeholderName
                      }
                      disabled={isSubmitting}
                      className="bg-white border-gray-300 h-12 w-full rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {language === "ar" ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        language === "ar"
                          ? "البريد الإلكتروني"
                          : placeholderEmail
                      }
                      disabled={isSubmitting}
                      className="bg-white border-gray-300 h-12 w-full rounded-md"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#3a86ff] hover:bg-[#3a86ff]/90 text-white px-8 py-3 h-12 w-full rounded-md transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-25"
                          />
                          <path
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            className="opacity-75"
                          />
                        </svg>
                        {language === "ar"
                          ? "جارٍ الاشتراك..."
                          : "Subscribing..."}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        {language === "ar" ? "اشترك" : buttonText}
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}

            <p className="text-sm text-gray-500 mt-6 text-center">
              {language === "ar"
                ? "لن نشارك بريدك الإلكتروني مع أي شخص آخر."
                : "We'll never share your email with anyone else."}
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mt-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#3a86ff] mb-4">
                {language === "ar" ? "خدماتنا" : "Our Services"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "التذاكر (أسعار خاصة متاحة)"
                    : "Tickets (Special rates available)"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar" ? "باقة البحث عن عمل" : "Job Hunt Package"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar" ? "باقات السياحة" : "Tour Packages"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar" ? "حجز الفنادق" : "Hotel Booking"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar" ? "سفاري الصحراء" : "Desert Safari"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "مساعدة التأشيرة العالمية"
                    : "Global Visa Assistance"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "خدمات تأشيرة العائلة"
                    : "Family Visa Services"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "تصديق الشهادات"
                    : "Certificate Attestation"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar" ? "العمرة" : "Umrah"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "إعداد الترخيص وتكوين الشركة"
                    : "License Setup and Company Formation"}
                </h4>
              </div>

              <div className="bg-[#3a86ff]/5 p-4 rounded-lg border border-[#3a86ff]/10">
                <h4 className="font-semibold text-[#3a86ff] mb-2">
                  {language === "ar"
                    ? "ترتيب الكفيل وغيرها"
                    : "Sponsor Arranging Etc"}
                </h4>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">
                {language === "ar"
                  ? "للاستفسار عن أي من خدماتنا، تواصل معنا الآن"
                  : "For inquiries about any of our services, contact us now"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:065664256"
                  className="inline-flex items-center justify-center bg-[#3a86ff] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3a86ff]/90 transition-colors"
                >
                  {language === "ar"
                    ? "اتصل بنا: 065664256"
                    : "Call Us: 065664256"}
                </a>
                <a
                  href="https://wa.me/971507539011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#3a86ff] text-[#3a86ff] px-6 py-3 rounded-md font-medium hover:bg-[#3a86ff]/10 transition-colors"
                >
                  {language === "ar"
                    ? "واتساب: 0507539011"
                    : "WhatsApp: 0507539011"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
