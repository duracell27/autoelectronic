import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export const CooperationHeading = (props: Props) => {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center px-2">
      <h1 className="my-5 md:my-10 lg:my-13 xl:my-16  text-background text-[14px] md:text-[48px] lg:text-[55px] xl:text-[64px] font-normal text-left uppercase tracking-tight">
        <strong className="font-bold">Цікавить</strong> співпраця?
      </h1>
      <Button variant={'defaultWhite'} size={'lg'}>
        <div className="flex items-center gap-1 md:gap-2">
            <Link href={'/partners'}  className="">Партнерам</Link>
            <ArrowRight />
        </div>
      </Button>
    </div>
  );
};
