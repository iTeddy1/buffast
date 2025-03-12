"use client";
import Header from "./components/Header";
import MidContent from "./components/MidContent";

export default function Home() {
  return (
    <div
      className="h-[200dvh] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(/hero-banner.png)` }}
    >
      <Header />
      <MidContent />
    </div>
  );
}
