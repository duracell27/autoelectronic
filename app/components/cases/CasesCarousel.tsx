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

export const CasesCarousel = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto py-17 no-scrollbar">
      <Carousel className="w-full md:ml-20 ml-5">
        <CarouselContent className="gap-4">
          {props.serviceList.map((service) => (
            <CarouselItem key={service.id} className="basis-auto pl-4">
              <div
                className="md:w-[460px] w-[260px] h-[260px] md:h-[460px] border-[10px] border-[#808080] rounded-3xl  bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imgUrl})` }}
              >
                <div className="flex justify-between flex-col w-full h-full">
                  <p className="flex items-center gap-2 font-avenir uppercase text-background p-8 pt-6">
                    <span className="border md:w-14 w-7"></span> {service.date}
                  </p>
                  <div className="relative p-8 pb-6 bg-gradient-to-b from-transparent to-black/90 rounded-xl">
                    <p className="md:text-lg text-base font-bold text-background relative z-10">
                      <Link href={service.link}>{service.description}</Link>
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
