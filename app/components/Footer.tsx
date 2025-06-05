import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="px-4 mt-10 pb-15 max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="">
            {/* Left: Logo */}
            <div className="flex mb-7 items-center space-x-2">
              <Image src="/images/logo.svg" alt="Logo" width={75} height={75} />
              <div className="">
                <p className="text-xs uppercase leading-none font-medium">Auto</p>
                <p className="text-base leading-none uppercase font-bold">Electronic</p>
              </div>
            </div>

            <p className="max-w-[530px] text-sm font-avenir text-secondary-gray leading-6 mb-7">
              Наші фахівці пропонують комплексне обслуговування автомобілів — від прошивки до консультацій з
              експлуатації. Ви можете розраховувати на професіоналізм і підтримку на кожному етапі.
            </p>

            <ul className="flex gap-3 items-cente">
              <li className="">
                <Link
                  href="#"
                  className="bg-background flex justify-center items-center rounded-full w-9 h-9"
                >
                  <Image src={"/images/social/social1.svg"} alt="Phone" width={12} height={12} />
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="bg-background flex justify-center items-center rounded-full w-9 h-9"
                >
                  <Image src={"/images/social/social2.svg"} alt="Phone" width={18} height={14} />
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="bg-background flex justify-center items-center rounded-full w-9 h-9"
                >
                  <Image src={"/images/social/social3.svg"} alt="Phone" width={16} height={15} />
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="bg-background flex justify-center items-center rounded-full w-9 h-9"
                >
                  <Image src={"/images/social/social4.svg"} alt="Phone" width={16} height={18} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex mt-5 md:mt-0 md:gap-29 gap-5 md:justify-end justify-between">
            <div className="">
              <h2 className="text-lg font-semibold mb-10">Навігація</h2>
              <ul className="text-secondary-gray space-y-8">
                <li>
                  <Link href="#">Послуги</Link>
                </li>
                <li>
                  <Link href="#">Портфоліо</Link>
                </li>
                <li>
                  <Link href="#">Партнерам</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-lg font-semibold mb-10">Контакти</h2>
              <ul className="text-secondary-gray font-avenir text-sm space-y-8">
                <li className="flex items-center gap-2">
                  <Image src={"/images/contact/contact1.svg"} alt="Phone" width={24} height={24} />
                  <a href="tel:0500878004" className="">
                    (050) 087 80 04
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={"/images/contact/contact2.svg"} alt="Phone" width={24} height={24} />
                  <a href="mailto:info@autoelectronic.com" className="">
                    info@autoelectronic.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={"/images/contact/contact3.svg"} alt="Phone" width={24} height={24} />
                  <p>Івано-Франківськ</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
