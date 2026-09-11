"use client";
import { motion } from "framer-motion";
import HeadquarterModel from "../AboutModels/HeadquarterModel";

export default function Headquarters() {
  const Headquarters = [
    {
      icon: "/icons/About/UK.svg",
      title: "United Kingdom",
      info1: "68  Asfordby Rd",
      info2: "Alcaston",
      info3: "SY6 1YA",
      info4: "+44 1241 918425",
    },
    {
      icon: "/icons/About/Canada.svg",
      title: "Canada",
      info1: "1528  Eglinton Avenue",
      info2: "Toronto",
      info3: "Ontario M4P 1A6",
      info4: "+1 416 485 2997",
    },
    {
      icon: "/icons/About/Australia.svg",
      title: "Australia",
      info1: "36 Swanston Street",
      info2: "Kewell",
      info3: "Victoria",
      info4: "+61 4 9928 3629",
    },
  ];
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col gap-18 items-center md:items-start md:gap-18 xl:px-21.25"
      >
        <p className="text-[#83888F] font-black text-[24px] leading-8">
          Our headquarters
        </p>
        <div className="w-full flex flex-col gap-20 md:flex-row md:text-left md:items-start md:gap-25 xl:gap-45 ">
          {Headquarters.map((item, index) => (
            <HeadquarterModel key={index} item={item} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
