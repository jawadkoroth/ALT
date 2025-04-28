"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useLanguage } from "./LanguageContext";

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
      setError(language === "ar" ? "الرجاء إدخال اسمك" : "Please enter your name");
      setIsSubmitting(false);
      return;
    }
    if (!email.trim()) {
      setError(language === "ar" ? "الرجاء إدخال بريدك الإلكتروني" : "Please enter your email");
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(language === "ar" ? "يرجى إدخال بريد إلكتروني صالح" : "Please enter a valid email address");
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
      setError(language === "ar"
        ? "فشل الاشتراك. حاول مرة أخرى لاحقًا."
        : "Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#3a86ff]">
            {language === "ar" ? "اشترك في نشرتنا الإخبارية" : title}
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            {language === "ar"
              ? "ابق على اطلاع بأحدث عروضنا ونصائح السفر"
              : subtitle}
          </p>

          {isSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {language === "ar" ? "تم الاشتراك بنجاح!" : "Successfully subscribed!"}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={
                    language === "ar"
                      ? "الاسم"
                      : placeholderName
                  }
                  disabled={isSubmitting}
                  className="bg-white border-gray-300 h-12"
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    language === "ar"
                      ? "البريد الإلكتروني"
                      : placeholderEmail
                  }
                  disabled={isSubmitting}
                  className="bg-white border-gray-300 h-12"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3a86ff] hover:bg-[#3a86ff]/90 text-white px-8 py-3 h-12 w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                    </svg>
                    {language === "ar" ? "جارٍ الاشتراك..." : "Subscribing..."}
                  </span>
                ) : (
                  language === "ar" ? "اشترك" : buttonText
                )}
              </Button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-4">
            {language === "ar"
              ? "لن نشارك بريدك الإلكتروني مع أي شخص آخر."
              : "We'll never share your email with anyone else."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
