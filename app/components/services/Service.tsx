import React from "react";
import { ServiceTitle } from "./ServiceTitle";
import { ServiceCard } from "./ServiceCard";

type Props = {};

export const Service = (props: Props) => {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <ServiceTitle />
      </div>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          accentColor={"#45A7DE"}
          titleBold={"Активація"}
          title={"CarPlay"}
          time={"10 хвилин"}
          description={"Що таке Apple CarPlay? Apple CarPlay — це зручна технологія, яка дозволяє вам..."}
        />
        <ServiceCard
          accentColor={"#EA5F38"}
          titleBold={"Мовна адаптація "}
          title={"авто із США"}
          time={"10 хвилин"}
          description={"Мовна адаптація авто із США — це процес налаштування інформаційних та мульти..."}
        />
        <ServiceCard
          accentColor={"#6A26F1"}
          titleBold={"Обнулення блоку"}
          title={"SRS після ДТП"}
          time={"10 хвилин"}
          description={"Після аварії система безпеки автомобіля (SRS — Supplemental Restraint System, або система..."}
        />
      </div>
    </div>
  );
};
