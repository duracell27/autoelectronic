import { BannerService } from "@/app/components/banner/BannerService";
import { CasesLandscape } from "@/app/components/casesLandscape/CasesLandscape";
import { Consultation } from "@/app/components/consultation/Consultation";
import { Description } from "@/app/components/description/Description";
import { Footer } from "@/app/components/Footer";
import HeaderTransparent from "@/app/components/HeaderTransparent";

import React from "react";

type Props = {};

const CarplayServicePage = (props: Props) => {
  return (
    <div className="home-container px-2">
      <div className="home-background"></div>
      <HeaderTransparent />
      <div className="-mx-2">
        <BannerService title={"активація carplay"} bgName={"carplayBg"} />
      </div>
      <Description />
      <CasesLandscape title="Apple CarPlay" />
      <Consultation from="Активація CarPlay" />
      <Footer />
    </div>
  );
};

export default CarplayServicePage;
