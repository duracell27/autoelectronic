import React from "react";
import { CasesHeading } from "./CasesHeading";
import { CasesCarousel } from "./CasesCarousel";

type Props = {};

export const Cases = (props: Props) => {
  return (
    <div className=" rounded-2xl max-w-[1400px] mx-auto  md:h-[775px] h-[600px] bg-[#020609]">
      <div className="flex flex-col items-center justify-between w-full">
        <CasesHeading />

        <CasesCarousel />
      </div>
    </div>
  );
};
