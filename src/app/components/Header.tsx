import CTA from "./CTA";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="flex items-center justify-between px-12 py-4">
      <Logo />
      <Navbar />
      <CTA />
    </section>
  );
}
