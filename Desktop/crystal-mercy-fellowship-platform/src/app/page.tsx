"use client";
import { FirstTopNav } from "./components/TopNav";
import { FocusDescription } from "@/app/components/FocusDescription";
import { Testimonials } from "./components/Testimonials";
import { LandingPage } from "./components/LandingPage";
import { AboutUs } from "./components/AboutUs";
import { FooterLinks } from "./components/Footer";
import { ContactUs } from "./components/ContactUs";

export default function Pages() {
  return (
    <div className="flex flex-col">
      <FirstTopNav />

      {/* Main Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-hero-pattern bg-cover bg-center">
        <LandingPage />
      </div>

      {/* Focus Description Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 rounded-2xl">
          <FocusDescription />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AboutUs />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-accent-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-10 bg-accent-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
          <ContactUs />
        </div>
      </section>

      {/* Footer Section */}
      <FooterLinks />
    </div>
  );
}
