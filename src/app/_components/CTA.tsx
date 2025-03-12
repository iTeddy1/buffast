import React from "react";
import Button from "./Button";
import { useConnect } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "@/_lib/client";

export default function CTA() {
  const { connect, isConnecting } = useConnect();

  return (
    <div>
      <Button
        disabled={isConnecting}
        onClick={() => {
          connect(async () => {
            const metamask = createWallet("io.metamask"); // autocomplete the wallet id
            await metamask.connect({ client });
            return metamask;
          });
        }}
        className="bg-[url(/bg-button.png)] bg-cover bg-center bg-no-repeat px-6 py-3 text-base text-[#7E262F] uppercase [text-shadow:1px_2px_0px_0px_rgba(208,_134,_47,_1)]"
      >
        <span className="pb-1">Connect wallet</span>
      </Button>
    </div>
  );
}
