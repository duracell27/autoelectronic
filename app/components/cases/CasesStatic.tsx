import React from "react";
import { CasesHeading } from "./CasesHeading";
import { CasesCarousel } from "./CasesCarousel";
import { CasesStaticItems } from "./CasesStaticItems";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { innerObj } from "@/lib/db";

type Props = {
  serviceList: innerObj[];
};

export const CasesStatic = (props: Props) => {
  return (
    <div className=" relative rounded-2xl max-w-[1400px] mx-auto  bg-[#020609]">
      <div className="flex flex-col items-center justify-between w-full">
        <CasesHeading />

        <CasesStaticItems serviceList={props.serviceList} />

        <Link href={"https://www.instagram.com/auto_electronic_ua"} className="">
          <Button className="md:py-8 py-4 rounded-3xl bg-background text-foreground hover:text-background cursor-pointer absolute b-0 left-1/2 -translate-x-1/2 md:bottom-10 bottom-5">
            <div className="flex font-bold  md:text-2xl text-base items-center md:gap-25 gap-10">
              Перейти в Instagram <Instagram className="md:size-11 size-5" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};
