"use client";
import { db } from "@/lib/db";
import { Banner } from "./components/banner/Banner";
import { Cases } from "./components/cases/Cases";
import { Consultation } from "./components/consultation/Consultation";
import { Cooperation } from "./components/cooperation/Cooperation";
import { Faq } from "./components/FAQ/Faq";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Service } from "./components/services/Service";
import { useRef } from "react";

export default function Home() {
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    requestAnimationFrame(() => {
      consultationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };
  return (
    <div className="home-container px-2">
      <div className="home-background"></div>
      <Header />
      <Banner scrollToConsultation={scrollToConsultation} />
      <Service />
      <Cases serviceList={db.home} />
      <div ref={consultationRef} className="scroll-mt-24">
        <Consultation from="Головна" />
      </div>
      <Faq />
      <Cooperation />
      <Footer />
    </div>
  );
}
