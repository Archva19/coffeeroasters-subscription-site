"use client";

import { motion } from "framer-motion";
import HowItWorksSection from "../../CommonModels/HowItWorks/HowItWorksSection";
import CreateYourPlanBtn from "@/components/CommonModels/CreateYourPlanBtn/CreateYourPlanBtn";

export default function HowItWorks() {
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full flex flex-col items-center md:items-start"
      >
        <p className="font-black text-[24px] leading-8 text-[#83888F] xl:pl-21.25">
          How it works
        </p>
        <HowItWorksSection bgColor={"#fefcf7"} txtColor={"#333D4B"} />
        <div className="xl:pl-21.25">
          <CreateYourPlanBtn />
        </div>
      </motion.section>
    </>
  );
}
