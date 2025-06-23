import React from "react";

type Props = {};

export const DescriptionKeyDuplicates = (props: Props) => {
  return (
    <div className="md:my-8 my-2 pb-16 rounded-2xl max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className="md:text-[48px] text-[25px] font-bold px-10 md:px-20 pt-8 pb-10 md:pt-16 md:pb-20">Виготовлення дублікатів 
автомобільних ключів</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 w-full px-10 md:px-20">
          {/* right Block */}
          <div className="">
            <p className="font-avenir text-base leading-7 text-secondary-gray">Втратили ключ або просто хочете мати запасний? Ми швидко та професійно виготовимо дублікат ключа для вашого авто — незалежно від марки, моделі чи року випуску.</p>
            <h2 className="font-avenir font-bold text-secondary-gray my-10">Наші послуги:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2">
              <li>Прописування ключа в систему вашого авто. — для більшості</li>
              <li>Програмування ключів — синхронізація з охоронною системою автомобіля.</li>
              <li>Виготовлення ключів з дистанційним управлінням — відкривання/закривання авто, запуск двигуна.</li>
              <li>Аварійне відновлення ключа — якщо всі ключі втрачені.</li>
            </ul>
          </div>

          {/* left Block */}
          <div className="">
            <h2 className="font-avenir font-bold text-secondary-gray mb-2">Чому обирають нас:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>Сучасне обладнання для прописування ключа в систему вашого авто.</li>
              <li>Працюємо з усіма популярними марками авто.</li>
              <li>Швидке виготовлення — в більшості випадків протягом 30–60 хвилин.</li>
              <li>Гарантія на всі ключі та послуги.</li>
            </ul>
            <p className="font-avenir text-base leading-7 text-secondary-gray mb-9">Не відкладайте на потім — запасний ключ може стати в пригоді у найнеочікуваніший момент. Звертайтеся вже сьогодні!</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
