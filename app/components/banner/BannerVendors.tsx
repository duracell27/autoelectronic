import Image from "next/image";
import React from "react";

type Props = {};

export const BannerVendors = (props: Props) => {
  return (
    <div className="flex items-center flex-wrap gap:6 md:gap-14 mt-8 md:-mt-10">
      <p className="text-xs font-semibold mb-2 md:mb-0">
        Працюємо з усіма <br /> популярними марками авто
      </p>
      <ul className="flex gap-7 items-center">
        <li>
          <Image src={"/images/vendors/1.png"} alt="logo" width={33} height={33} />
        </li>
         <li>
          <Image src={"/images/vendors/2.png"} alt="logo" width={33} height={33} />
        </li>
         <li>
          <Image src={"/images/vendors/3.png"} alt="logo" width={33} height={33} />
        </li>
         <li>
          <Image src={"/images/vendors/4.png"} alt="logo" width={33} height={33} />
        </li>
         <li>
          <Image src={"/images/vendors/5.png"} alt="logo" width={33} height={33} />
        </li>
         <li>
          <Image src={"/images/vendors/6.png"} alt="logo" width={33} height={33} />
        </li>
      </ul>
    </div>
  );
};
