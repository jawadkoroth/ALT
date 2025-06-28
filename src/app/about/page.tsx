"use client";

import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { LanguageProvider } from "@/components/LanguageContext";

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#3a86ff] text-white">
        <NavigationBar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About Arab Line Tours
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-white/80 mb-4">
                  Arab Line Tours was founded with a vision to provide
                  exceptional travel experiences in the UAE. Our journey began
                  with a small team of passionate travel enthusiasts who wanted
                  to showcase the beauty and culture of the United Arab Emirates
                  to visitors from around the world.
                </p>
                <p className="text-white/80">
                  Today, we have grown into a premier travel service provider,
                  offering a wide range of services including visa processing,
                  flight bookings, hotel reservations, and customized tour
                  packages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-white/80 mb-4">
                  Our mission is to create memorable travel experiences that
                  exceed our clients' expectations. We strive to provide
                  personalized service, attention to detail, and a deep
                  understanding of our clients' needs and preferences.
                </p>
                <p className="text-white/80">
                  We are committed to showcasing the rich cultural heritage,
                  modern marvels, and natural beauty of the UAE while ensuring
                  comfort, safety, and satisfaction for all our clients.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Expertise</h3>
                  <p className="text-white/80">
                    Our team consists of experienced professionals with in-depth
                    knowledge of the UAE tourism industry.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    Personalized Service
                  </h3>
                  <p className="text-white/80">
                    We tailor our services to meet the unique needs and
                    preferences of each client.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Reliability</h3>
                  <p className="text-white/80">
                    We are committed to providing reliable and consistent
                    service quality across all our offerings.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-white/80 mb-4">
                We'd love to hear from you! Feel free to reach out to us with
                any questions or inquiries.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="tel:065664256"
                  className="inline-flex items-center justify-center bg-white text-[#3a86ff] px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="mailto:info@arablinetours.com"
                  className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#3a86ff]/80 py-8">
          <div className="container mx-auto px-4">
            <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
              © {new Date().getFullYear()} Arab Line Tours. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}
