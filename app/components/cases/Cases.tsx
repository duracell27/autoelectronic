import React from "react";
import { CasesHeading } from "./CasesHeading";
import { CasesCarousel } from "./CasesCarousel";
import { innerObj } from "@/lib/db";

type Props = {
  serviceList: innerObj[];
};

export const Cases = (props: Props) => {
  return (
    <div className=" rounded-2xl max-w-[1400px] mx-auto  bg-[#020609]">
      <div className="flex flex-col items-center justify-between w-full">
        <CasesHeading />

        <CasesCarousel serviceList={props.serviceList} />
      </div>
    </div>
  );
};
