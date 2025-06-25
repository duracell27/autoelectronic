import React from "react";

type Props = {};

export const PartnersWhyUs = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full px-6 md:px-10 lg:px-20 mb-8 md:mb-16">
      <div className="text-base font-avenir text-background font-normal leading-7 flex flex-col gap-8 md:gap-2 lg:gap-0 items-start justify-between w-full">
        <div className="max-w-[90%]">
          <p >
            Ми спеціалізуємося на перекладі мовного інтерфейсу, оновленні програмного забезпечення,
            встановленні навігаційних карт та активації прихованих функцій в автомобілях. Наша мета — зробити
            авто максимально зручним і функціональним для кінцевого користувача.
          </p>
        </div>
        <div className="">
          <h2 className="font-bold mb-6">Партнерські умови:</h2>
          <p>
            – Оптові ціни та гнучка система знижок для постійних клієнтів
            <br />
            – Підтримка сервісів у всіх регіонах України та за кордоном 
            <br />
            – Можливість роботи в форматі white label (під вашим брендом)
            <br />– Швидке виконання замовлень та гарантія якості
          </p>
        </div>
        <div className="">
          <h2 className="font-bold mb-6">Чому обирають нас:</h2>
          <p>
            – Досвід роботи понад 7 років
            <br />
            – Сучасне обладнання та безпечні методи перепрошивки
            <br />
            – Робота з усіма популярними марками авто
            <br />– Якісна підтримка та результат, за який не соромно
          </p>
        </div>
      </div>
      <div className="bg-background p-6 md:p-10 rounded-3xl text-foreground font-normal">
        <h1 className="text-[25px] md:text-[36px] leading-[45px] md:leding-[65px] font-bold mb-5">Наші послуги:</h1>
        <div className="flex flex-col gap-10 items-start justify-between">
          <div className="">
            <h2 className="font-bold">✅ Переклад інтерфейсу авто</h2>
            <p>
              Зміна мови в мультимедіа, панелі приладів, системі навігації та бортовому комп’ютері
              (українська, російська, інші мови).
            </p>
          </div>
          <div className="">
            <h2 className="font-bold">✅ Оновлення програмного забезпечення</h2>
            <p>Прошивка мультимедійних систем, приладових панелей, блоків управління.</p>
          </div>
          <div className="">
            <h2 className="font-bold">✅ Активація прихованих функцій</h2>
            <p>Відкриваємо можливості, закладені виробником, але недоступні з заводу.</p>
          </div>
          <div className="">
            <h2 className="font-bold">✅ Встановлення Apple CarPlay / Android Auto</h2>
          </div>
          <div className="">
            <h2 className="font-bold">✅ Встановлення навігаційних карт</h2>
            <p>
              Актуальні карти для мультимедійних систем — офіційні оновлення або спеціальні пакети з
              локальними картами Європи, України тощо.
            </p>
          </div>
          <div className="">
            <p>
              Всі роботи виконуємо ми. Вам просто потрібно бути на зв'язку та виконувати прості завдання (такі
              як вставити юсб флешку в ноутбук або в авто і тд)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
