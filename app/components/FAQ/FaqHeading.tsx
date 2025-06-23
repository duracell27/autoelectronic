import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const FaqHeading = (props: Props) => {
  return (
    <div className="w-full max-w-7xl px-2 md:px-0">
      <h1 className="mt-15 mb-8 text-foreground text-[40px] font-normal text-left uppercase tracking-tight">
        <strong className="font-bold">
          Поширені
          <br /> питання
        </strong>{" "}
        / FAQ
      </h1>
      <p className="font-avenir max-w-[530px] text-base text-secondary-gray leading-7">
        Тут ви знайдете відповіді на найпоширеніші запитання щодо наших послуг, гарантій, особливостей роботи
        та організації прийому. Якщо не знайшли потрібної інформації — звертайтеся за телефоном, ми завжди
        раді допомогти!
      </p>

      <div className="mt-12 items-center gap-2 text-xl font-base bg-transparent py-2.5 border border-foreground px-5 rounded-full inline-flex">
        <Image src={"/images/phoneBlack.png"} alt="Phone" className="mt-2" width={20} height={20} />
        <a
          href="tel:0500878004"
          className=""
        >
          0500878004
        </a>
      </div>
    </div>
  );
};
