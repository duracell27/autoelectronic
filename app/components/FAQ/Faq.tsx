import React from "react";
import { FaqHeading } from "./FaqHeading";
import { FaqAccordeon } from "./FaqAccordeon";

type Props = {};

export const Faq = (props: Props) => {
  return (
    <div className="mt-8 rounded-2xl mb-8 pb-16 max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-20 w-full max-w-7xl">
          <FaqHeading />
          <FaqAccordeon/>
        </div>
      </div>
    </div>
  );
};
