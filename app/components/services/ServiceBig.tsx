import React from "react";
import { ServiceTitle } from "./ServiceTitle";
import { ServiceCard } from "./ServiceCard";

type Props = {};

export const ServiceBig = (props: Props) => {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          accentColor={"#45A7DE"}
          titleBold={"Активація"}
          title={"CarPlay"}
          time={"10 хвилин"}
          description={"Що таке Apple CarPlay? Apple CarPlay — це зручна технологія, яка дозволяє вам..."}
          link="/services/carplay"
        />
        <ServiceCard
          accentColor={"#EA5F38"}
          titleBold={"Мовна адаптація "}
          title={"авто із США"}
          time={"10 хвилин"}
          description={"Мовна адаптація авто із США — це процес налаштування інформаційних та мульти..."}
          link="/services/language_adaptation"
        />
        <ServiceCard
          accentColor={"#6A26F1"}
          titleBold={"Обнулення блоку"}
          title={"SRS після ДТП"}
          time={"10 хвилин"}
          description={"Після аварії система безпеки автомобіля (SRS — Supplemental Restraint System, або система..."}
          link="/services/srs"
        />
      </div>
      <div className="grid mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <ServiceCard
          accentColor={"#33cc33"}
          titleBold={"Виготовлення дублікатів "}
          title={"автомобільних ключів"}
          time={"10 хвилин"}
          description={"Втратили ключ або просто хочете мати запасний? Ми швидко та професійно виготовимо дублікат..."}
          link="/services/key_duplicates"
        />
        <ServiceCard
          accentColor={"#cc0099"}
          titleBold={"Активація "}
          title={"Android Auto"}
          time={"10 хвилин"}
          description={"Android Auto — це зручна платформа від Google, яка дозволяє вам використовувати функції вашо..."}
          link="/services/android_auto"
        />
      </div>
    </div>
  );
};
