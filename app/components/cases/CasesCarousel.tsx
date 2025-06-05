import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

export const CasesCarousel = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto py-17 no-scrollbar">
      <Carousel className="w-full md:ml-20 ml-5">
        <CarouselContent className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto pl-4">
              <div className="md:w-[460px] w-[260px] h-[260px] md:h-[460px] border-[10px] border-[#808080] rounded-3xl bg-[url('/images/slider1.png')] bg-cover bg-center">
                <div className="flex justify-between flex-col w-full h-full">
                  <p className="flex items-center gap-2 font-avenir uppercase text-background p-8 pt-6">
                    <span className="border md:w-14 w-7"></span> ТРАВЕНЬ 2023
                  </p>
                  <p className="md:text-2xl text-base font-semibold text-background p-8 pb-6">I don’t know</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
