import { innerObj } from "@/lib/db";
import Link from "next/link";
import React from "react";

type Props = {
  serviceList: innerObj[];
};

export const CasesStaticItems = (props: Props) => {
  return (
    <div className="w-full py-17">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {props.serviceList.map((service) => (
          <div key={service.id} className="mx-auto w-full">
            <div
              className="md:w-full h-[260px] md:h-[400px] border-[10px] border-[#808080] rounded-3xl  bg-cover bg-center"
              style={{ backgroundImage: `url(${service.imgUrl})` }}
            >
              <div className="flex justify-between flex-col w-full h-full">
                <p className="flex items-center gap-2 font-avenir uppercase text-background p-8 pt-6">
                  <span className="border md:w-14 w-7"></span> {service.date}
                </p>
                <div className="relative p-8 pb-6 bg-gradient-to-b from-transparent to-black/90 rounded-xl">
                  <p className="md:text-lg text-base font-semibold text-background relative z-10">
                    <Link href={service.link}>{service.description}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Carousel className="w-full md:ml-20 ml-5">
        <CarouselContent className="gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto pl-4">
              <div className="md:w-[460px] w-[260px] h-[260px] md:h-[460px] border-[10px] border-[#808080] rounded-3xl bg-[url('/images/slider1.png')] bg-cover bg-center">
                <div className="flex justify-between flex-col w-full h-full">
                  <p className="flex items-center gap-2 font-avenir uppercase text-background p-8 pt-6">
                    <span className="border md:w-14 w-7"></span> ТРАВЕНЬ 2023
                  </p>
                  <div className="relative p-8 pb-6 bg-gradient-to-b from-transparent to-black/90 rounded-xl">
                    <p className="md:text-2xl text-base font-semibold text-background relative z-10">
                      I don’t know
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </div>
  );
};
