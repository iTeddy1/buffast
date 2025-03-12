import Link from "next/link";
import React from "react";
import Mascot from "./Mascot";
import ChooseWeapon from "./ChooseWeapon";
import Button from "./Button";

export default function MidContent() {
  return (
    <section>
      <div className="relative mx-12 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-between lg:px-0">
        <div className="ml-12 max-w-2xl text-center sm:text-left">
          <h1 className="font-upheaval text-3xl font-extrabold text-[#F7ECDD] drop-shadow-[4px_4px_0_rgba(95,38,0)] sm:text-5xl">
            THE FIRST
            <strong className="block font-extrabold text-[#FFBC39]"> OMNICHAIN LAUNCHPAD </strong>
          </h1>

          <p className="mt-4 max-w-lg text-[#F7ECDD] sm:text-xl/relaxed">
            Launch your projects swiftly and securely on Axelar infrastructure
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-center">
            <Link
              href="#"
              className="flex min-h-full items-center justify-between bg-[url(/bg-button-apply.png)] bg-contain bg-center bg-no-repeat"
            >
              <Button className="h-full w-full px-10 py-2 text-4xl [text-shadow:1px_2px_0px_0px_rgba(208,_134,_47,_1)]">
                <span className="pb-2">APPLY </span>
              </Button>
            </Link>

            <Link
              href="#"
              className="flex min-h-full items-center justify-between bg-[url(/bg-button-buyBuff.png)] bg-contain bg-center bg-no-repeat"
            >
              <Button className="mb-2 h-full w-full px-10 py-2 text-4xl [text-shadow:1px_2px_0px_0px_rgba(208,_134,_47,_1)]">
                <span className="">Buy $BUFFAST </span>
              </Button>
            </Link>
          </div>
        </div>
        <Mascot />
        <ChooseWeapon />
      </div>
    </section>
  );
}
