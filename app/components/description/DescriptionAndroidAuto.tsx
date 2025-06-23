import React from "react";

type Props = {};

export const DescriptionAndroidAuto = (props: Props) => {
  return (
    <div className="md:my-8 my-2 pb-16 rounded-2xl max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className="md:text-[48px] text-[25px] font-bold px-10 md:px-20 pt-8 pb-10 md:pt-16 md:pb-20">
          Що таке Android Auto?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 w-full px-10 md:px-20">
          {/* right Block */}
          <div className="">
            <p className="font-avenir text-base leading-7 text-secondary-gray">
              Android Auto — це зручна платформа від Google, яка дозволяє вам використовувати функції вашого смартфона безпечно та комфортно під час водіння. Завдяки Android Auto, ви можете керувати додатками, музикою, дзвінками та навігацією через екран мультимедійної системи вашого автомобіля.
            </p>
            <h2 className="font-avenir font-bold text-secondary-gray my-10">
              Що ви отримуєте з Android Auto:
            </h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>Навігація в реальному часі. Використовуйте улюблені додатки для карт, такі як Google Maps та Waze, які враховують затори, аварії та зміни маршруту.</li>
              <li>Управління музикою та медіа.Слухайте музику через Spotify, YouTube Music, Deezer або насолоджуйтесь подкастами, не відволікаючись від дороги.</li>
            </ul>
            
          </div>

          {/* left Block */}
          <div className="">
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2 mb-9">
              <li>Дзвінки та повідомлення — голосом. Приймайте дзвінки, надсилайте повідомлення або прослуховуйте їх, використовуючи Google Assistant, без необхідності торкатися телефону.</li>
              <li>
                Голосове керування. Скажіть "Окей, Google" і керуйте навігацією, музикою, контактами, додатками, не відриваючи рук від керма.
              </li>
              <li>Зручне підключення. Підключення через USB-кабель або бездротово (залежно від моделі вашого смартфона та мультимедійної системи авто).</li>
              <li>Сумісність. Android Auto підтримується на смартфонах з операційною системою Android 8.0 і вище та працює з більшістю сучасних мультимедійних систем автомобілів.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
