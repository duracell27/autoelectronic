import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

export const CasesCarouselLandscape = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto md:py-17 py-8 no-scrollbar">
      <Carousel className="w-full md:ml-20 ml-5">
        <CarouselContent className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto pl-4">
              <div className="md:w-[445px] w-[260px] h-[160px] md:h-[235px] border-[10px] border-[#808080] rounded-3xl bg-[url('/images/slider1.png')] bg-cover bg-center">
                <div className="flex justify-between flex-col w-full h-full">
                  <p className="flex items-center gap-2 font-avenir uppercase text-background p-6 pt-3">
                    <span className="border md:w-14 w-7"></span> ТРАВЕНЬ 2023
                  </p>
                  <div className="relative p-6 pb-3 bg-gradient-to-b from-transparent to-black/90 rounded-xl">
                    <p className="md:text-xl text-base font-semibold text-background relative z-10">
                      I don’t know
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
