"use client";
import MidContent from "./components/MidContent";

export default function Home() {
  return (
    <div
      className="h-[120dvh] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(/hero-banner.png)` }}
    >
      <MidContent />
    </div>
  );
}
