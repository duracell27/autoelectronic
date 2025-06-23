import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  accentColor: string;
  titleBold: string;
  title: string;
  time: string;
  description: string;
  link: string;
};

export const ServiceCard = (props: Props) => {
  return (
    <div className="bg-background rounded-2xl p-8 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="rounded-full w-4 h-4" style={{ backgroundColor: props.accentColor }}></div>
        <p className="text-sm font-avenir font-semibold text-secondary-gray">{props.time}</p>
      </div>
      <div className="flex flex-1 flex-wrap mb-14">
        <h1 className="text-2xl font-bold mr-1">{props.titleBold}</h1>
        <h2 className="text-2xl font-base ">{props.title}</h2>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <p className="max-w-[220px] font-avenir text-sm text-secondary-gray">{props.description}</p>
        <Link href={props.link}>
          <Button
            
            className="text-base cursor-pointer hover:text-background hover:bg-foreground md:text-2xl px-3 py-3 md:px-8 md:py-7 rounded-full"
            variant={"outlineBlack"}
          >
            <div className="">
              <ArrowRight style={{ width: "24px", height: "24px" }} />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};
