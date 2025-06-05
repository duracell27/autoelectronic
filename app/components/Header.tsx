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

export default function Header() {
  return (
    <header className="px-4 max-w-7xl mx-auto py-1 md:py-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Logo" width={75} height={75} />
          <div className="">
            <p className="text-xs uppercase leading-none font-medium">Auto</p>
            <p className="text-base leading-none uppercase font-bold">Electronic</p>
          </div>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex space-x-8 text-foreground ml-18 flex-1">
          <DropdownMenu>
            <DropdownMenuTrigger className=" hover:underline flex items-center-safe gap-2 ">
              Послуги <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/services/language">Мовна адаптація</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/carplay">Активація CarPlay</Link>
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
        <div className="hidden md:flex items-center gap-2 space-x-1 bg-foreground py-2.5 px-5 rounded-full">
          <Image src={"/images/phone.svg"} alt="Phone" width={20} height={20} />
          <a
            href="tel:0500878004"
            className="text-xl font-base bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
          >
            0500878004
          </a>
        </div>

        {/* Mobile: Burger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
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
                    <AccordionTrigger className="text-left p-0 outline-none flex items-center gap-2 [&[data-state=open]>[data-chevron]]:text-background [&&>svg:not([data-chevron])]:hidden">
                      Послуги
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col p-0 bg-foreground text-background">
                      <div className="mt-2">
                        <Link className="my-3 inline-flex" href="/services/language">
                          Мовна адаптація
                        </Link>
                        <Link className="mt-3 inline-flex" href="/services/carplay">
                          Активація CarPlay
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
                    className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
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
