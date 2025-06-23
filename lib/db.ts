export type db = {
  language: innerObj[];
  carplay: innerObj[];
  key: innerObj[];
  srs: innerObj[];
  android: innerObj[];
  home: innerObj[];
  portfolio: innerObj[];
};
export type innerObj = {
  id: number;
  date: string;
  description: string;
  imgUrl: string;
  link: string;
};

export const db: db = {
  language: [
    {
      id: 1,
      date: "Квітень 2025",
      description: "Переклад мови на мультимедіа та панелі приладів",
      imgUrl: "/images/service/language/1.jpg",
      link: "https://www.instagram.com/p/DIvtVUpNEdK/?img_index=1",
    },
    {
      id: 2,
      date: "Квітень 2025",
      description: "Переклад мови та встановлення карт навігації",
      imgUrl: "/images/service/language/2.jpg",
      link: "https://www.instagram.com/p/DH8oZFPNWre/?img_index=1",
    },
    {
      id: 3,
      date: "Лютий 2025",
      description: "Переклад мови та встановлення метричної системи",
      imgUrl: "/images/service/language/3.jpg",
      link: "https://www.instagram.com/p/DGQhbgDtUhK/?img_index=1",
    },
  ],
  carplay: [
    {
      id: 4,
      date: "Березень 2025",
      description: "Активація CarPlay",
      imgUrl: "/images/service/carplay/1.jpg",
      link: "https://www.instagram.com/p/DHTgHAnNEIE/?img_index=1",
    },
    {
      id: 5,
      date: "Квітень 2024",
      description: "Audi A7 2015 активація функцій CarPlay",
      imgUrl: "/images/service/carplay/2.jpg",
      link: "https://www.instagram.com/p/C5OCjgxN55A",
    },
    {
      id: 6,
      date: "Лютий 2023",
      description: "Активація CarPlay Lexus",
      imgUrl: "/images/service/carplay/3.jpg",
      link: "https://www.instagram.com/p/Coz7j4fN-0Z/?img_index=1",
    },
  ],
  key: [
    {
      id: 7,
      date: "Січень 2025",
      description: "Виготовлення дублікату ключа",
      imgUrl: "/images/service/key/1.png",
      link: "https://www.instagram.com/p/DFNkGPAN7X9",
    },
    {
      id: 8,
      date: "Лютий 2025",
      description: "Виготовлення дублікату ключа",
      imgUrl: "/images/service/key/2.png",
      link: "https://www.instagram.com/p/DFIOzfON0rf",
    },
    {
      id: 9,
      date: "Грудень 2024",
      description: "Виготовлення дублікату ключа",
      imgUrl: "/images/service/key/3.jpg",
      link: "https://www.instagram.com/p/DDE2QoRtmsN/?img_index=1",
    },
  ],
  srs: [
    {
      id: 10,
      date: "Грудень 2024",
      description: "Обнулення блоку Airbag",
      imgUrl: "/images/service/srs/1.png",
      link: "https://www.instagram.com/p/DDFUwy5N98d",
    },
    {
      id: 11,
      date: "Березень 2023",
      description: "Обнулення блоків SRS(airbag) Tesla",
      imgUrl: "/images/service/srs/2.jpg",
      link: "https://www.instagram.com/p/CqbIzY0Nlqp/",
    },
  ],
  android: [
    {
      id: 21,
      date: "Грудень 2024",
      description: "Активація Android Auto",
      imgUrl: "/images/service/android/1.jpg",
      link: "https://www.instagram.com/auto_electronic_ua/",
    },
    {
      id: 22,
      date: "Березень 2023",
      description: "Активація Android Auto",
      imgUrl: "/images/service/android/2.jpg",
      link: "https://www.instagram.com/auto_electronic_ua/",
    },
  ],
  home: [
    {
      id: 12,
      date: "Квітень 2025",
      description: "Переклад мови на мультимедіа та панелі приладів",
      imgUrl: "/images/service/language/1.jpg",
      link: "https://www.instagram.com/p/DIvtVUpNEdK/?img_index=1",
    },
    {
      id: 13,
      date: "Грудень 2024",
      description: "Виготовлення дублікату ключа",
      imgUrl: "/images/service/key/3.jpg",
      link: "https://www.instagram.com/p/DDE2QoRtmsN/?img_index=1",
    },
    {
      id: 14,
      date: "Лютий 2023",
      description: "Активація CarPlay Lexus",
      imgUrl: "/images/service/carplay/3.jpg",
      link: "https://www.instagram.com/p/Coz7j4fN-0Z/?img_index=1",
    },
  ],
  portfolio: [
    {
      id: 15,
      date: "Квітень 2025",
      description: "Переклад мови на мультимедіа та панелі приладів",
      imgUrl: "/images/service/language/1.jpg",
      link: "https://www.instagram.com/p/DIvtVUpNEdK/?img_index=1",
    },
    {
      id: 16,
      date: "Грудень 2024",
      description: "Виготовлення дублікату ключа",
      imgUrl: "/images/service/key/3.jpg",
      link: "https://www.instagram.com/p/DDE2QoRtmsN/?img_index=1",
    },
    {
      id: 17,
      date: "Лютий 2023",
      description: "Активація CarPlay Lexus",
      imgUrl: "/images/service/carplay/3.jpg",
      link: "https://www.instagram.com/p/Coz7j4fN-0Z/?img_index=1",
    },
    {
      id: 18,
      date: "Квітень 2025",
      description: "Переклад мови та встановлення карт навігації",
      imgUrl: "/images/service/language/2.jpg",
      link: "https://www.instagram.com/p/DH8oZFPNWre/?img_index=1",
    },
    {
      id: 19,
      date: "Березень 2025",
      description: "Активація CarPlay",
      imgUrl: "/images/service/carplay/1.jpg",
      link: "https://www.instagram.com/p/DHTgHAnNEIE/?img_index=1",
    },
    {
      id: 20,
      date: "Грудень 2024",
      description: "Обнулення блоку Airbag",
      imgUrl: "/images/service/srs/1.png",
      link: "https://www.instagram.com/p/DDFUwy5N98d",
    },
  ],
};
