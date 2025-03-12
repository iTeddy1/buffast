"use client";

import CTA from "./CTA";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed z-50 w-full">
      <div className="flex items-center justify-between px-12 py-4 text-white">
        <Logo />
        <Navbar />
        <CTA />
      </div>
    </header>
  );
}
