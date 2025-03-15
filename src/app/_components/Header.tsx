import ChainSwitcher from "./ChainSwitcher";
import ConnectWalletButton from "./ConnectWalletButton";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed z-50 w-full">
      <div className="flex items-center justify-between px-12 py-4 text-white">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-4">
          <ChainSwitcher />
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
