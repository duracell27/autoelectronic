import React from "react";

type Props = {};

export const PartnersCooperation = (props: Props) => {
  return (
    <div className=" relative rounded-2xl max-w-[1400px] mx-auto  bg-background mt-10 py-7 md:py-14 px-6 md:px-20">
      <div className="flex flex-col items-start justify-between w-full text-2xl md:text-5xl">
        <h1 className="font-bold flex items-center gap-2 mb-3">
          <span className="-mt-3">📩</span> Зацікавлені у співпраці?{" "}
        </h1>
        <h2 className="font-normal text-xl md:text-5xl">Напишіть або зателефонуйте — підберемо зручний формат.</h2>
        <div className="mt-12">
          <a
            href="tel:+380500878004"
            className="rounded-full inline-flex items-center bg-foreground px-5 py-1 text-background font-bold"
          >
            <span className="text-[25px] md:text-[40px] font-semibold">0500878004</span>
          </a>
          <div className="text-[15px] md:text-[20px] mt-7 leading-6">
            <a href="mailto:autoelectronicua@gmail.com" className="">
              autoelectronicua@gmail.com
            </a>{" "}
            /{" "}
            <a href="https://www.instagram.com/auto_electronic_ua/" className="">
              auto_electronic_ua
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
