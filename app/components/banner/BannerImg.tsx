import Image from "next/image";
import React from "react";

type Props = {};

export const BannerImg = (props: Props) => {
  return (
    <div className="hidden md:block">
      <Image src={"/images/bannerBg.png"} alt="banner" width={600} height={600} />
    </div>
  );
};
