import React from "react";

type Props = {};

export const Description = (props: Props) => {
  return (
    <div className="md:my-8 my-2 pb-16 rounded-2xl max-w-[1400px] mx-auto bg-background">
      <div className="flex flex-col items-start justify-between w-full">
        <h1 className="md:text-[48px] text-[25px] font-semibold px-10 md:px-20 pt-8 pb-10 md:pt-16 md:pb-20">Що таке Apple CarPlay?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 w-full px-10 md:px-20">
          <div className="">
            <p className="font-avenir text-base leading-7 text-secondary-gray">Apple CarPlay — це зручна технологія, яка дозволяє вам користуватись функціями iPhone прямо через екран вашого автомобіля. Завдяки CarPlay, ви можете керувати навігацією, слухати музику, спілкуватись по телефону чи через повідомлення — і все це без необхідності відволікатись від дороги.</p>
            <h2 className="font-avenir font-semibold text-secondary-gray my-10">Основні можливості CarPlay:</h2>
            <ul className="font-avenir text-base leading-7 text-secondary-gray list-disc list-outside space-y-2">
              <li>Навігація: Користуйтесь Apple Maps, Google Maps або Waze з голосовими підказками прямо на екрані авто.</li>
              <li>Музика та аудіо: Слухайте улюблені треки, подкасти чи аудіокниги через Apple Music, Spotify та інші додатки.</li>
              <li>Зв'язок: Надсилайте повідомлення, приймайте дзвінки або відповідайте на них — легко та безпечно за допомогою голосового асистента Siri</li>
              <li>Голосове керування: Просто скажіть “Привіт, Siri” і керуйте функціями без рук.</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-avenir font-semibold text-secondary-gray mb-2">Чому це зручно?</h2>
            <p className="font-avenir text-base leading-7 text-secondary-gray mb-9">CarPlay створений для того, щоб водіння стало комфортнішим і безпечнішим. Весь інтерфейс адаптований під використання в авто — великі кнопки, мінімум тексту, голосові команди та швидкий доступ до потрібних функцій.</p>
            <p className="font-avenir text-base leading-7 text-secondary-gray">CarPlay підтримується більшістю сучасних автомобілів. Достатньо під’єднати ваш iPhone за допомогою кабелю або бездротово (залежно від моделі авто), і ви готові в дорогу!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
