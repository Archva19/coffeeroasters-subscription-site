"use client";

import WhyUsItemModel from "../MainModels/WhyUsItemModel";
import { motion } from "framer-motion";

export default function WhyUs() {
  const items = [
    {
      image: "/images/Main/WhyUs/coffee-bean.svg",
      title: "Best quality",
      desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      image: "/images/Main/WhyUs/benefits.svg",
      title: "Exclusive benefits",
      desc: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: "/images/Main/WhyUs/shipping.svg",
      title: "Free shipping",
      desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full rounded-[10px] bg-[#2C343E] relative sm:pb-92 sm:pt-14 flex flex-col justify-center items-center xl:pt-25 xl:pb-79.25 mb-179.25 md:mb-108.5 xl:mb-87.75"
      >
        <div className="w-full flex flex-col gap-6 text-[#FEFCF7] text-center max-w-135 px-6 pt-16 pb-7 sm:pb-0 md:px-0 sm:pt-0 xl:gap-8">
          <p className="text-[28px] leading-7 font-black sm:text-[32px] sm:leading-12 xl:text-[40px]">
            Why choose us?
          </p>
          <p className="description">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="bg-[#293039] w-full h-158.25 sm:hidden"></div>
        <div className="absolute  top-76.25 px-6 flex flex-col items-center gap-6 sm:top-68.75 sm:px-14.5 xl:top-86.5 xl:flex-row xl:gap-7.5">
          {items.map((item, index) => (
            <WhyUsItemModel key={index} item={item} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
