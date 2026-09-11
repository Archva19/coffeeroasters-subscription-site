import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-6 uppercase font-barlow font-bold text-[12px] leading-3.75 tracking-[0.92px] text-[#83888F] md:flex-row md:gap-8">
        <Link className="leading-3.75 hover:text-[#FEFCF7]" href="/">
          Home
        </Link>
        <Link className="leading-3.75 hover:text-[#FEFCF7]" href="/About">
          About Us
        </Link>
        <Link className="leading-3.75 hover:text-[#FEFCF7]" href="/Subscribe">
          Create Your Plan
        </Link>
      </ul>
    </nav>
  );
}
