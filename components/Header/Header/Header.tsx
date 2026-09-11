"use client";

import { useEffect, useState } from "react";
import Logo from "../HeaderItems/Logo";
import MenuBtn from "../HeaderItems/MenuBtn";
import Navigation from "../HeaderItems/Navigation";
import Menu from "../HeaderItems/Menu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="z-9999 sticky top-0 bg-[#fefcf7] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-[87.2%] mx-auto py-8 md:w-[89.713541%] xl:w-[88.88888%] flex items-center justify-between md:py-10 xl:py-[43.56px]"
        >
          <Logo />
          <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Navigation />
        </motion.div>
      </header>
      <AnimatePresence>
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
