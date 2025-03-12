import Image from "next/image";
import React from "react";

export default function Mascot() {
  return (
    <div className="relative mt-10 lg:m-0">
      <Image src={"/mascot.png"} quality={100} alt="mascot" width={650} height={650} />
      <span className="absolute right-0 bottom-[50px]">
        <Image src={"/weapons/selected4.png"} alt="mascot-weapon" width={300} height={265} />
      </span>
    </div>
  );
}
