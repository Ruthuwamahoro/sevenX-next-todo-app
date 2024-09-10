"use client"
import Image from "next/image";
import { FirstTopNav } from "./components/TopNav";
import { FocusDescription } from '@/app/components/FocusDescription'
import { AboutUs } from "./components/AboutUs";
import { LandingPage } from "./components/LandingPage";
import {Testimonials } from "./components/Testimonials";


export default function Home() {
  return (
    <div>
        <div className="flex flex-col">
          <FirstTopNav />
          <div className="flex flex-col items-center justify-center h-screen">
            <LandingPage />
          </div>
            <FocusDescription />
        </div>
        <AboutUs />
        <div>
        <Testimonials />
        </div>
    </div>
  );
}
