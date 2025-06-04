import React from "react";
import { ConsultationHeading } from "./ConsultationHeading";
import { ConsultationForm } from "./ConsultationForm";

type Props = {};

export const Consultation = (props: Props) => {
  return (
    <div className="mt-8 rounded-2xl mb-8 max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-center justify-between w-full">
        <ConsultationHeading/>
        <ConsultationForm/>
      </div>
    </div>
  );
};
