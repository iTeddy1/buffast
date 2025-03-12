import Image from "next/image";
import React from "react";

export default function Mascot() {
  return (
    <div className="relative">
      <Image src={"/mascot.png"} quality={100} alt="mascot" width={650} height={650} />
      <span className="absolute right-10 bottom-[110px]">
        <Image src={"/weapons/selected4.png"} alt="mascot-weapon" width={300} height={265} />
      </span>
    </div>
  );
}
