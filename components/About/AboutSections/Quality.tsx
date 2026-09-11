"use client";
import { motion } from "framer-motion";

export default function Quality() {
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full rounded-lg bg-[#293039] pt-35.5 pb-15.25 px-6 flex flex-col items-center md:pt-56 md:pb-16.75 md:px-18.5 xl:pt-22 xl:pb-44 xl:pl-21.25 xl:pr-0 xl:items-start mb-30 md:mb-36 xl:mb-42"
      >
        <img
          className="absolute object-cover w-69.75 h-39 -top-19.5 rounded-lg md:w-143.25 md:h-80 md:-top-40 xl:hidden"
          src="/images/About/Quality/quality.webp"
          alt=""
        />
        <img
          className="absolute rounded-lg xl:right-21.25 xl:-top-22 hidden xl:inline-block"
          src="/images/About/Quality/qualityDesktop.webp"
          alt=""
        />
        <div className="flex flex-col gap-6 items-center justify-center text-center text-[#FEFCF7] xl:gap-8 xl:text-left xl:items-start xl:max-w-135">
          <p className="font-black text-[28px] leading-7 md:text-[32px] md:leading-12 xl:text-[40px]">
            Uncompromising quality
          </p>
          <p className="description">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </motion.section>
    </>
  );
}
