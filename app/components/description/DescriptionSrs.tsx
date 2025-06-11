import React from "react";

type Props = {};

export const DescriptionSrs = (props: Props) => {
  return (
    <div className="md:my-8 my-2 pb-16 rounded-2xl max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className="md:text-[48px] text-[25px] font-semibold px-10 md:px-20 pt-8 pb-10 md:pt-16 md:pb-20">
          Обнулення блоку SRS після ДТП
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 w-full px-10 md:px-20">
          {/* right Block */}
          <div className="">
            <p className="font-avenir text-base leading-7 text-secondary-gray">
              Після аварії система безпеки автомобіля (SRS — Supplemental Restraint System, або система
              додаткового захисту, зокрема подушки безпеки) фіксує спрацювання та зберігає помилки у
              спеціальному блоці управління.
            </p>
            <h2 className="font-avenir font-semibold text-secondary-gray my-10">
              Це призводить до того, що:
            </h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>На панелі приладів постійно горить індикатор airbag (подушка безпеки)</li>
              <li>Система SRS може бути заблокована і не спрацює при наступному зіткненні.</li>
            </ul>
            <p className="font-avenir text-base leading-7 text-secondary-gray">
              Щоб відновити роботу системи безпеки, потрібно очистити (обнулити) блок SRS, видаливши
              інформацію про ДТП.
            </p>
          </div>

          {/* left Block */}
          <div className="">
            <h2 className="font-avenir font-semibold text-secondary-gray mb-2">Це дозволяє:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>Повністю відновити функціональність подушок безпеки</li>
              <li>
                Зекономити кошти — не потрібно купувати новий блок SRS, який може коштувати кілька сотень
                доларів
              </li>
              <li>Зняти помилки та погасити індикатор airbag</li>
            </ul>
            <h2 className="font-avenir font-semibold text-secondary-gray mb-2">Це дозволяє:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>Діагностика системи SRS і зчитування помилок</li>
              <li>Видалення "crash data" — інформації про спрацювання</li>
              <li>Перевірка коректної роботи після обнулення</li>
            </ul>
            <h2 className="font-avenir font-semibold text-secondary-gray mb-2">
              Гарантія на виконану роботу
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
