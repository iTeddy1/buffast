import React from "react";
import { useState } from "react";
import Image from "next/image";

const weapons = [
  {
    name: "weapon1",
    image: "/weapons/weapon1.png",
    rotate: 0,
  },
  {
    name: "weapon2",
    image: "/weapons/weapon2.png",
    rotate: 0,
  },
  {
    name: "weapon3",
    image: "/weapons/weapon3.png",
    rotate: 0,
  },
  {
    name: "weapon4",
    image: "/weapons/weapon4.png",
    rotate: 55.27,
  },
];

export default function ChooseWeapon() {
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);
  return (
    <div>
      <ul className="mx-4 flex flex-col items-center gap-8">
        {weapons.map((weapon) => (
          <li
            className="relative border-[3.14px] border-[#E2791A] bg-[#FDC840] shadow-[2.1px_2.1px_0px_0px_rgba(205,_203,_184,_0.25)]"
            key={weapon.name}
          >
            <span onClick={() => setSelectedWeapon(weapon)}>
              <Image
                src={weapon.image}
                height={weapon == selectedWeapon ? 90 : 60}
                width={weapon == selectedWeapon ? 90 : 60}
                alt={weapon.name}
                style={{ transform: `rotate(${weapon.rotate}deg)` }}
              />
            </span>
            {weapon == selectedWeapon && (
              <span className="absolute inset-0 -top-[2.4px] -left-[2.4px] size-[94.8px]">
                <Image src="/weapons/select.svg" className="object-cover" height={94.8} width={94.8} alt="select" />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
