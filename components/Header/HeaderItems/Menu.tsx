import Link from "next/link";
import { motion } from "framer-motion";

export default function Menu({
  setIsMenuOpen,
}: {
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden fixed inset-0  pt-22.5 w-full h-full  text-[#333D4B] font-black text-[24px] bg-linear-to-t from-[#FEFCF7]/50.5 via-[#fefcf6] to-[#fefcf6]"
      >
        <ul className="flex flex-col gap-8 items-center pt-10">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="leading-8"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="leading-8"
            href="/About"
          >
            About Us
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="leading-8"
            href="/Subscribe"
          >
            Create Your Plan
          </Link>
        </ul>
      </motion.nav>
    </>
  );
}
