import React from "react";
import { PartnersHeading } from "./PartnersHeading";
import { PartnersWhyUs } from "./PartnersWhyUs";

type Props = {};

export const Partners = (props: Props) => {
  return (
    <div className=" relative rounded-2xl max-w-[1400px] mx-auto  bg-[#020609]">
      <div className="flex flex-col items-center justify-between w-full">
        <PartnersHeading/> 
        <PartnersWhyUs/>
      </div>
    </div>
  );
};
