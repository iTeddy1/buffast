"use client";

import { useActiveWalletChain, useSwitchActiveWalletChain } from "thirdweb/react";
import { polygon, ethereum, Chain, blast, anvil } from "thirdweb/chains";
import Image from "next/image";

const chainOptions: Chain[] = [blast, polygon, ethereum, anvil];

const ChainSwitcher = () => {
  const activeChain = useActiveWalletChain();
  const switchChain = useSwitchActiveWalletChain();

  const handleSwitch = async (chainId: number) => {
    const chain = chainOptions.find((c) => c.id === chainId);
    if (!chain) return;
    switchChain(chain);
  };

  return (
    <div className="relative flex flex-col items-center">
      <select
        value={activeChain?.id}
        onChange={(e) => handleSwitch(+e.target.value)}
        className="relative appearance-none rounded-full border-[3px] border-[#FFBC39] bg-[#291B0B] px-10 py-3 text-white shadow-[3px_3px_0px_0px_#B96024] focus:ring-0 focus:outline-none"
        name="chain-switcher"
      >
        {chainOptions.map((chain: Chain) => (
          <option key={chain.id} value={chain.id}>
            {chain.icon ? (
              <Image src={chain.icon.url} quality={60} alt={chain.rpc} className="mr-2 inline-block h-6 w-6" />
            ) : null}

            {chain.name}
          </option>
        ))}
      </select>
      <span className="absolute top-0 right-0 bottom-0 flex items-center pr-1.5 text-white">
        <Image src="/chevron-down.png" width={24} height={24} alt="down-arrow" />
      </span>
    </div>
  );
};

export default ChainSwitcher;
