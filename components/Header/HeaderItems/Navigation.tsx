import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="hidden md:inline-block ">
        <ul className="flex items-center gap-8.25 uppercase font-barlow font-bold text-[12px] leading-3.75 tracking-[0.92px] text-[#83888F]">
          <Link className="leading-3.75 hover:text-[#333D4B]" href="/">
            Home
          </Link>
          <Link className="leading-3.75 hover:text-[#333D4B]" href="/About">
            About Us
          </Link>
          <Link className="leading-3.75 hover:text-[#333D4B]" href="/Subscribe">
            Create Your Plan
          </Link>
        </ul>
      </nav>
    </>
  );
}
