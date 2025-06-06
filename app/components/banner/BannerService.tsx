import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  bgName: string;
};

export const BannerService = (props: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(/images/service/${props.bgName}.png)` }}
      className="w-full !px-0 h-[400px] md:h-[775px] -mt-[139px] bg-no-repeat bg-cover bg-center"
    >
      <div className="p-9 z-10 relative flex justify-start items-center md:h-[775px] h-[500px]">
        <div className="relative z-20 p-9 rounded-4xl w-full md:w-1/2">
          <div
            className="absolute inset-0 rounded-4xl"
            style={{
              backgroundImage: `url(/images/noise.png)`,
              opacity: 0.4,
            }}
          />
          <div
            className="absolute inset-0 bg-white rounded-4xl"
            style={{
              opacity: 0.5,
            }}
          />
          <h1 className="relative uppercase mb-3 md:mb-0 text-[25px] md:text-[64px] leading-[28px] md:leading-[70px] text-background max-w-150 font-extrabold z-10">
            {props.title}
          </h1>
          <Button
            className="absolute z-10 bottom-2 left-1/2 md:left-auto -translate-x-1/2 md:-right-20 md:top-1/2 md:-translate-4"
            variant={"defaultWhite"}
            size={"lg"}
          >
            <div className="flex items-center gap-1 md:gap-2">
              Запис в сервіс <ArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
