import Image from "next/image";
import Link from "next/link";

interface LinkProps {
  name: string;
  path: string;
  bullet: boolean;
}

const links: LinkProps[] = [
  { name: "HOME", path: "/", bullet: false },
  { name: "Donate", path: "/donate", bullet: true },
  { name: "Stake", path: "/stake", bullet: true },
  { name: "Vesting", path: "/vesting", bullet: false },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="mx-auto my-2 flex justify-center gap-4">
        {links.map((link) => (
          <li className="min-w-24 px-1.5 py-1 text-center text-xl hover:text-rose-600" key={link.name}>
            <Link className="text- flex items-center gap-2" href={link.path}>
              {link.bullet && (
                <span className="">
                  <Image src="/fire-bullet.png" width={14} height={22} alt="bullet" />
                </span>
              )}
              <span className="font-pixel">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
