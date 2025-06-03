import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

export const BannerHeading = (props: Props) => {
  return (
    <div>
      <div className="mb-5 mt-4 md:mt-0 md:mb-12">
        <p className="text-xs md:text-base mb-1 md:mb-3">
          Мовна адаптація та
          <br />
          встановлення навігації для автомобільної{" "}
        </p>
        <p className="text-xl md:text-6xl font-extrabold ">Електроніки</p>
      </div>
      <div className=" flex flex-wrap items-center gap-2 md:gap-6">
        <Button className="text-base md:text-xl font-normal px-3 py-3  md:px-8 md:py-7 rounded-full group">
          Запис в сервіс{" "}
          <Image
            className="ml-6 group-hover:ml-12 transition-all duration-300"
            src={"/images/arrow-right.svg"}
            alt="arrow"
            width={24}
            height={24}
          />{" "}
        </Button>
        <Button
          className="text-base md:text-xl font-normal  px-3 py-3 md:px-8 md:py-7 rounded-full"
          variant={"outline"}
        >
          {" "}
          <Image src={"/images/notif.png"} alt="notif" width={20} height={20} /> Консультація
        </Button>
      </div>
    </div>
  );
};
