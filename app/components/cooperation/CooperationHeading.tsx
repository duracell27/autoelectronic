import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

export const CooperationHeading = (props: Props) => {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center">
      <h1 className="my-16 text-background text-[64px] font-light text-left uppercase tracking-tight">
        <strong className="font-semibold">Цікавить</strong> співпраця?
      </h1>
      <Button variant={'defaultWhite'} size={'lg'}>
        <div className="flex items-center gap-2">
            <span>Партнерам</span>
            <ArrowRight />
        </div>
      </Button>
    </div>
  );
};
