import React from "react";
import { CooperationHeading } from "./CooperationHeading";

type Props = {};

export const Cooperation = (props: Props) => {
  return (
    <div className="md:mt-8 mt-1 rounded-2xl md:mb-8 mb-1 max-w-[1400px]  mx-auto">
      <div className="flex flex-col items-center justify-between h-auto md:h-[235px] px-2 md:px-0 w-full bg-[url('/images/cooperationBg.png')] bg-no-repeat bg-contain bg-center">
        <div className=" w-full max-w-7xl">
            <CooperationHeading />
        </div>
      </div>
    </div>
  );
};
