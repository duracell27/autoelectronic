import React from "react";

type Props = {};

export const DescriptionLanguageAdaptation = (props: Props) => {
  return (
    <div className="md:my-8 my-2 pb-16 rounded-2xl max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className="md:text-[48px] text-[25px] font-bold px-10 md:px-20 pt-8 pb-10 md:pt-16 md:pb-20">Що таке мовна адаптація?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 w-full px-10 md:px-20">
          {/* right Block */}
          <div className="">
            <p className="font-avenir text-base leading-7 text-secondary-gray">Мовна адаптація авто із США — це процес налаштування інформаційних та мультимедійних систем автомобіля, ввезеного з Америки, під українську або загалом європейську мову та стандарти.</p>
            <h2 className="font-avenir font-bold text-secondary-gray my-10">Зазвичай це включає:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2">
              <li>Переклад меню мультимедіа — заміна англомовного інтерфейсу на український або російський.</li>
              <li>Навігація — встановлення карт Європи замість США, оновлення програмного забезпечення.</li>
              <li>Радіо частоти — адаптація до європейського діапазону (в США інший крок частот).</li>
              <li>Одиниці виміру — зміна миль на кілометри, фаренгейтів на цельсії.</li>
              <li>Android Auto / Apple CarPlay — іноді потрібна активація або перепрошивка.</li>

            </ul>
          </div>

          {/* left Block */}
          <div className="">
            {/* <h2 className="font-avenir font-bold text-secondary-gray mb-2">Чому це зручно?</h2> */}
            <p className="font-avenir text-base leading-7 text-secondary-gray mb-9">Останнім часом на наших дорогах помітно збільшилась кількість автомобілів, привезених зі США або призначених для американського ринку.</p>
            <p className="font-avenir text-base leading-7 text-secondary-gray mb-9">Головним недоліком таких авто є специфічні прилади, які використовують іншу систему вимірювання — милі замість кілометрів, галони замість літрів, градуси за Фаренгейтом замість Цельсія. Через це важливі показники можуть бути незрозумілими або вимагати додаткового обладнання (принаймні калькулятора) й часу для перерахунку.</p>
            <p className="font-avenir text-base leading-7 text-secondary-gray mb-9">Також варто зазначити, що FM-приймачі в американських автомобілях налаштовані на крок 200 кГц, тоді як у Європі та Україні використовується крок 50 кГц. Через це виникають труднощі з прийомом радіостанцій, що транслюються на парних частотах. І звісно англійська мова</p>
          </div>
        </div>
      </div>
    </div>
  );
};
