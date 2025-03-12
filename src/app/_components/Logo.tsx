import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="text-2xl">BUFFAST</h1>
      </div>
    </>
  );
}
