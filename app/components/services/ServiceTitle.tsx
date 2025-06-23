import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export const ServiceTitle = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      <h1 className="text-2xl md:text-5xl font-bold">
        Налаштування, <br />
        адаптація, прошивка
        <br /> — усе тут
      </h1>
      <Link href="/services">
        <Button
          className="text-base md:text-xl font-medium w-fit my-5 px-3 py-3 md:px-8 md:py-7 rounded-full cursor-pointer hover:text-background hover:bg-foreground"
          variant={"outlineBlack"}
        >
          <div className=" flex items-center gap-1">
            більше <ChevronRight />
          </div>
        </Button>
      </Link>
    </div>
  );
};
