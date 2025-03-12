import Image from "next/image";
import Link from "next/link";
// import { pixel } from "../styles/fonts";

const links = [
  { name: "HOME", path: "/", bullet: false },
  { name: "Donate", path: "/donate", bullet: true },
  { name: "Stake", path: "/stake", bullet: true },
  { name: "Vesting", path: "/vesting", bullet: false },
];

export default function Navbar() {
  return (
    <>
      <ul className="mx-auto my-2 flex justify-center gap-4">
        {links.map((link) => (
          <li className="min-w-24 px-1.5 py-1 text-center text-xl hover:text-rose-600" key={link.name}>
            <Link className="text-stroke flex items-center gap-2" href={link.path}>
              {link.bullet && (
                <span className="">
                  <Image src="/fire-bullet.png" width={14} height={22} alt="bullet" />
                </span>
              )}
              <span
              // className={pixel.className}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
