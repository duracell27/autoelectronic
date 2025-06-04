import React from "react";
import { CooperationHeading } from "./CooperationHeading";

type Props = {};

export const Cooperation = (props: Props) => {
  return (
    <div className="mt-8 rounded-2xl mb-8 max-w-[1400px]  mx-auto">
      <div className="flex flex-col items-center justify-between h-[235px] w-full bg-[url('/images/cooperationBg.png')] bg-contain bg-center">
        <div className=" w-full max-w-7xl">
            <CooperationHeading />
        </div>
      </div>
    </div>
  );
};
