"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderTransparent() {
  return (
    <header className="px-4 mx-auto py-1 md:py-8 bg-foreground/40 relative z-30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link href={'/'} className="flex items-center space-x-2 text-background">
          <Image src="/images/logoWhite.svg" alt="Logo" width={75} height={75} />
          <div className="">
            <p className="text-xs uppercase leading-none font-semibold">Auto</p>
            <p className="text-base leading-none uppercase font-extrabold">Electronic</p>
          </div>
        </Link>

        {/* Center: Menu */}
        <div className="hidden lg:flex space-x-8 text-background ml-18 flex-1">
          <DropdownMenu>
            <DropdownMenuTrigger className=" hover:underline cursor-pointer flex items-center-safe gap-2 ">
              Послуги <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/services/carplay" className="py-2 cursor-pointer">Активація CarPlay</Link>
              </DropdownMenuItem>
               <DropdownMenuItem>
                <Link href="/services/language_adaptation" className="py-2 cursor-pointer">Мовна адаптація</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/srs" className="py-2 cursor-pointer">Обнулення блоку SRS</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/key_duplicates" className="py-2 cursor-pointer">Виготовлення дублікатів</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/android_auto" className="py-2 cursor-pointer">Активація Android Auto</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/portfolio" className="hover:underline">
            Портфоліо
          </Link>
          <Link href="/partners" className="hover:underline">
            Партнерам
          </Link>
        </div>

        {/* Right: Phone */}
        <div className="hidden lg:flex items-center gap-2 space-x-1 bg-background py-2.5 px-5 rounded-full">
          <Image src={"/images/phone.svg"} alt="Phone" width={20} height={20} />
          <a
            href="tel:0500878004"
            className="text-xl font-base bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
          >
            0500878004
          </a>
        </div>

        {/* Mobile: Burger menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-background" />
            </SheetTrigger>

            <SheetContent side="right" className="[&>button:not(.p-2)]:hidden bg-foreground text-background">
              <SheetTitle className="flex items-center justify-end gap-2 p-2">
                <SheetClose className="text-foreground bg-background rounded-full outline-none">
                  <X className="h-8 w-8" /> {/* Хрестик */}
                </SheetClose>
              </SheetTitle>
              <nav className="flex flex-col gap-6  px-4">
                <Accordion className="border-b border-gray-700" type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="text-left p-0 outline-none cursor-pointer flex items-center gap-2 [&[data-state=open]>[data-chevron]]:text-background [&&>svg:not([data-chevron])]:hidden">
                      Послуги
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col p-0 bg-foreground text-background">
                      <div className="mt-2">
                        
                        <Link className="my-3 inline-flex" href="/services/carplay">
                          Активація CarPlay
                        </Link>
                        <Link className="my-3 inline-flex" href="/services/language_adaptation">
                          Мовна адаптація
                        </Link>
                        <Link className="my-3 inline-flex" href="/services/srs">
                          Обнулення блоку SRS
                        </Link>
                        <Link className="my-3 inline-flex" href="/services/key_duplicates">
                          Виготовлення дублікатів
                        </Link>
                        <Link className="my-3 inline-flex" href="/services/android_auto">
                          Активація Android Auto  
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link className="border-b border-gray-700" href="/portfolio">
                  Портфоліо
                </Link>
                <Link className="border-b border-gray-700" href="/partners">
                  Партнерам
                </Link>
                <div className="flex items-center space-x-1 pb-1 gap-2 border-b border-gray-700">
                  <Image src={"/images/phone.svg"} alt="Phone" width={20} height={20} />
                  <a
                    href="tel:0500878004"
                    className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
                  >
                    0500878004
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
