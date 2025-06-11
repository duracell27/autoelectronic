import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  scrollToConsultation: () => void;
};

export const BannerServices = (props: Props) => {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="w-full !px-0 h-[200px] md:h-[200px]">
        <div className=" z-10 relative flex justify-start items-center md:h-[200px] h-[200px]">
          <div className="relative z-20 p-9 rounded-4xl w-full md:w-2/3">
          <div className="absolute inset-0 rounded-4xl bg-white/50 backdrop-blur-sm" />
            <div
              className="absolute inset-0 rounded-4xl"
              style={{
                backgroundImage: `url(/images/noise.png)`,
                opacity: 0.1,
              }}
            />
            
            <h1 className="relative uppercase mb-3 md:mb-0 text-[25px] md:text-[64px] leading-[28px] md:leading-[70px] text-foreground max-w-160 font-extrabold z-10">
              {props.title}
            </h1>
            <Button
              className="absolute z-10 bottom-2 left-1/2 md:left-auto -translate-x-1/2 md:-right-40 md:top-1/2 md:-translate-4"
              variant={"defaultBlack"}
              size={"lg"}
              onClick={props.scrollToConsultation}
            >
              <div className="flex items-center gap-1 md:gap-2">
                Запис в сервіс <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
