"use client";
import { BannerService } from "@/app/components/banner/BannerService";
import { CasesLandscape } from "@/app/components/casesLandscape/CasesLandscape";
import { Consultation } from "@/app/components/consultation/Consultation";
import { DescriptionSrs } from "@/app/components/description/DescriptionSrs";

import { Footer } from "@/app/components/Footer";
import HeaderTransparent from "@/app/components/HeaderTransparent";
import { db } from "@/lib/db";

import React, { useRef } from "react";

type Props = {};

const LanguageAdaptationServicePage = (props: Props) => {
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
      <HeaderTransparent />
      <div className="-mx-2">
        <BannerService
          scrollToConsultation={scrollToConsultation}
          title={"обнулення блоку srs"}
          bgName={"srsBg"}
        />
      </div>
      <DescriptionSrs />
      <CasesLandscape title="Обнулення блоку SRS" serviceList={db.srs} />
      <div ref={consultationRef}>
        <Consultation from="Обнулення блоку SRS" />
      </div>
      <Footer />
    </div>
  );
};

export default LanguageAdaptationServicePage;
