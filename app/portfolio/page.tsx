'use client';
import React, { useRef } from "react";
import Header from "../components/Header";
import { BannerServices } from "../components/banner/BannerServices";
import { CasesStatic } from "../components/cases/CasesStatic";
import { Consultation } from "../components/consultation/Consultation";
import { Footer } from "../components/Footer";
import { db } from "@/lib/db";

type Props = {};

const PortfolioPage = (props: Props) => {
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
      <BannerServices scrollToConsultation={scrollToConsultation} title={"Портфоліо"} />
      <div className="home-container px-2">
        <div className="home-background"></div>
        <div className="py-7">
          <CasesStatic serviceList={db.portfolio}/>
          <div ref={consultationRef}>

          <Consultation from="Портфоліо" />
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
