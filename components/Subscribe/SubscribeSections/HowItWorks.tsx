"use client";
import { motion } from "framer-motion";
import HowItWorksSection from "@/components/CommonModels/HowItWorks/HowItWorksSection";

export default function HowItWorks() {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="bg-[#293039] px-6 md:px-10 xl:w-[88.88888%] mx-auto rounded-[10px] mb-30 md:mb-36 xl:mb-42"
      >
        <HowItWorksSection bgColor={"#293039"} txtColor={"#FEFCF7"} />
      </motion.div>
    </>
  );
}
