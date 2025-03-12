import React from "react";
import Button from "./Button";

export default function CTA() {
  return (
    <div>
      <Button className="rounded-full bg-[url(/bg-button.png)] bg-cover bg-center bg-no-repeat px-4 py-2 text-base text-[#7E262F] uppercase [text-shadow:1px_2px_0px_0px_rgba(208,_134,_47,_1)]">
        Connect wallet
      </Button>
    </div>
  );
}
