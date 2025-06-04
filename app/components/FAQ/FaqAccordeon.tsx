import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = {};

export const FaqAccordeon = (props: Props) => {
  return (
    <Accordion className="mt-12" type="single" collapsible>
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="text-2xl leading-9 text-left">Чи злітає прошивка після зняття клеми акумулятора?</AccordionTrigger>
        <AccordionContent className="text-base font-avenir text-secondary-gray">Ні, всі налаштування зберігаються після зняття акумулятора.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl leading-9 text-left w-full">Чи надається гарантія на виконану роботу?</AccordionTrigger>
        <AccordionContent className="text-base font-avenir text-secondary-gray">Ні, всі налаштування зберігаються після зняття акумулятора.</AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl leading-9 text-left w-full">Чи можливий виїзд до автомобіля?</AccordionTrigger>
        <AccordionContent className="text-base font-avenir text-secondary-gray">Ні, всі налаштування зберігаються після зняття акумулятора.</AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl leading-9 text-left w-full">Як до вас потрапити — жива черга чи запис?</AccordionTrigger>
        <AccordionContent className="text-base font-avenir text-secondary-gray">Ні, всі налаштування зберігаються після зняття акумулятора.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
