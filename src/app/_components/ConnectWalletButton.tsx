import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/_lib/client";

export default function ConnectWalletButton() {
  return (
    <div>
      <ConnectButton
        theme="light"
        connectButton={{
          label: "Connect wallet",
          style: {
            borderRadius: "22px",
            padding: "6px 12px",
            fontSize: "1rem",
            color: "#7E262F",
            backgroundImage: "url(/bg-button.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            textShadow: "1px 2px 0px 0px rgba(208, 134, 47, 1)",
          },
        }}
        client={client}
      />
    </div>
  );
}
