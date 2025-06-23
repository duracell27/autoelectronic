import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { innerObj } from "@/lib/db";
import Link from "next/link";

type Props = {
  serviceList: innerObj[];
};

export const CasesCarouselLandscape = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto md:py-17 py-8 no-scrollbar">
      <Carousel className="w-full md:ml-20 ml-5">
        <CarouselContent className="gap-4">
          {props.serviceList.map((service) => (
            <CarouselItem key={service.id} className="basis-auto pl-4">
              <div className="md:w-[445px] w-[260px] h-[160px] md:h-[235px] border-[10px] border-[#808080] rounded-3xl bg-cover bg-center" style={{backgroundImage: `url(${service.imgUrl})`}}>
                <div className="flex justify-between flex-col w-full h-full">
                  <p className="flex items-center gap-2 font-avenir uppercase text-background p-6 pt-3">
                    <span className="border md:w-14 w-7"></span> {service.date}
                  </p>
                  <div className="relative p-6 pb-3 bg-gradient-to-b from-transparent to-black/90 rounded-xl">
                    <p className="md:text-lg text-base font-bold text-background relative z-10">
                      <Link href={service.link}>
                      {service.description}
                      </Link>
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
