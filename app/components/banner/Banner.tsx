import React from "react";
import { BannerHeading } from "./BannerHeading";
import { BannerImg } from "./BannerImg";
import { BannerVendors } from "./BannerVendors";

type Props = {
  scrollToConsultation: () => void;
};

export const Banner = (props: Props) => {
  return (
    <div className="px-4 max-w-7xl mx-auto h-[350px] md:h-[775px]">
      <div className="flex items-center justify-between w-full">
        <BannerHeading scrollToConsultation={props.scrollToConsultation} />
        <BannerImg />
      </div>
      
      <BannerVendors />
    </div>
  );
};
