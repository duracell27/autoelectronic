"use client";
import React, { useRef } from "react";
import Header from "../components/Header";
import { BannerServices } from "../components/banner/BannerServices";
import { CasesStatic } from "../components/cases/CasesStatic";
import { Consultation } from "../components/consultation/Consultation";
import { Footer } from "../components/Footer";
import { db } from "@/lib/db";
import { Partners } from "../components/partners/Partners";
import { PartnersCooperation } from "../components/partners/PartnersCooperation";

type Props = {};

const PartnerPage = (props: Props) => {
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
      <BannerServices
        scrollToConsultation={scrollToConsultation}
        title={"Співпраця"}
        titleSmall=" з нашою компанією"
        isPartners={true}
        buttonName={`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Контакти\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}
      />
      <div className="home-container px-2">
        <div className="home-background"></div>
        <div className="py-7">
          <Partners />
          <div ref={consultationRef}>
            <PartnersCooperation/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PartnerPage;
