"use client";
import MidContent from "./_components/MidContent";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(/hero-banner.png)` }}
    >
      <MidContent />
    </div>
  );
}
