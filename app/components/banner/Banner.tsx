import React from "react";
import { BannerHeading } from "./BannerHeading";
import { BannerImg } from "./BannerImg";
import { BannerVendors } from "./BannerVendors";

type Props = {};

export const Banner = (props: Props) => {
  return (
    <div className="px-4 max-w-7xl mx-auto h-[775px]">
      <div className="flex items-center justify-between w-full">
        <BannerHeading />
        <BannerImg />
      </div>
      
      <BannerVendors />
    </div>
  );
};
