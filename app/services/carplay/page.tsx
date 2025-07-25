"use client";
import { BannerService } from "@/app/components/banner/BannerService";
import { CasesLandscape } from "@/app/components/casesLandscape/CasesLandscape";
import { Consultation } from "@/app/components/consultation/Consultation";
import { DescriptionCarplay } from "@/app/components/description/DescriptionCarplay";
import { Footer } from "@/app/components/Footer";
import HeaderTransparent from "@/app/components/HeaderTransparent";
import { db } from "@/lib/db";

import React, { useRef } from "react";

type Props = {};

const CarplayServicePage = (props: Props) => {
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
          title={"активація carplay"}
          bgName={"carplayBg"}
        />
      </div>
      <DescriptionCarplay />
      <CasesLandscape title="Активація CarPlay" serviceList={db.carplay} />
      <div ref={consultationRef}>
        <Consultation from="Активація CarPlay" />
      </div>
      <Footer />
    </div>
  );
};

export default CarplayServicePage;
