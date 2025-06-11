"use client";
import React, { useRef } from "react";
import Header from "../components/Header";

import { BannerServices } from "../components/banner/BannerServices";
import { ServiceBig } from "../components/services/ServiceBig";
import { CasesLandscape } from "../components/casesLandscape/CasesLandscape";
import { Consultation } from "../components/consultation/Consultation";
import { Footer } from "../components/Footer";
import { db } from "@/lib/db";

type Props = {};

const ServicesPage = (props: Props) => {
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
    <>
      <Header />
      <BannerServices scrollToConsultation={scrollToConsultation} title={"Послуги"} />
      <div className="home-container px-2">
        <div className="home-background"></div>
        <ServiceBig />
        <CasesLandscape title="carplay" serviceList={db.carplay} />
        <div ref={consultationRef}>
          <Consultation from="сервіси" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
