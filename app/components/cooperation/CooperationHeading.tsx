import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

export const CooperationHeading = (props: Props) => {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center px-1">
      <h1 className="my-5 md:my-16  text-background text-[14px] md:text-[64px] font-light text-left uppercase tracking-tight">
        <strong className="font-semibold">Цікавить</strong> співпраця?
      </h1>
      <Button variant={'defaultWhite'} size={'lg'}>
        <div className="flex items-center gap-1 md:gap-2">
            <span className="">Партнерам</span>
            <ArrowRight />
        </div>
      </Button>
    </div>
  );
};
