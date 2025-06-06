import React from "react";

type Props = {
  title: string;
};

export const CasesHeadingLandscape = (props: Props) => {
  return (
    <h1 className="md:mt-20 mt-10 text-background px-5 md:px-0 text-[18px] md:text-[40px] font-light text-center uppercase tracking-tight">
      <strong className="font-semibold"> Останні роботи за тегом </strong> # {props.title}
    </h1>
  );
};
