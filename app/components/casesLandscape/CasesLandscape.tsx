import React from "react";
import { CasesHeadingLandscape } from "./CasesHeadingLandscape";
import { CasesCarouselLandscape } from "./CasesCarouselLandscape";
import { innerObj } from "@/lib/db";

type Props = {
  title: string;
  serviceList: innerObj[];
};

export const CasesLandscape = (props: Props) => {
  return (
    <div className=" rounded-2xl max-w-[1400px] mx-auto  md:h-[520px] h-[350px] bg-[#020609]">
      <div className="flex flex-col items-center justify-between w-full">
        <CasesHeadingLandscape title={props.title} />

        <CasesCarouselLandscape serviceList={props.serviceList} />
      </div>
    </div>
  );
};
