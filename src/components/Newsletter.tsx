"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useLanguage } from "./LanguageContext";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholderName?: string;
  placeholderEmail?: string;
}

const Newsletter = ({
  title = "Subscribe to Our Newsletter",
  subtitle = "Stay updated with our latest offers and travel tips",
  buttonText = "Subscribe",
  placeholderName = "Your Name",
  placeholderEmail = "Your Email",
}: NewsletterProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // This is a placeholder for future backend integration
      // In the future, this will connect to AWS RDS or another backend service
      console.log("Submitted:", { name, email });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Thank you for subscribing!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 bg-[#2a76ef] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "ar" ? "اشترك في نشرتنا الإخبارية" : title}
          </h2>
          <p className="text-lg mb-8 text-white/80">
            {language === "ar"
              ? "ابق على اطلاع بأحدث عروضنا ونصائح السفر"
              : subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === "ar" ? "اسمك" : placeholderName}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  language === "ar" ? "بريدك الإلكتروني" : placeholderEmail
                }
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-white text-[#3a86ff] hover:bg-white/90 font-medium"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#3a86ff]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : language === "ar" ? (
                "اشترك"
              ) : (
                buttonText
              )}
            </Button>
          </form>

          {message && (
            <div className="mt-4 p-3 bg-white/10 rounded-md">{message}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
