"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function MenuBtn({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) {
  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.1 }}
              src="/icons/Header/close.svg"
              alt="Open Menu"
            />
          ) : (
            <img src="/icons/Header/sandwichMenu.svg" alt="Close Menu" />
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
