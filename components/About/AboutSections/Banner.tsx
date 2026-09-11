"use client"

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full rounded-[10px] bg-[url('/images/About/Banner/Mobile/AboutBannerBgMobile.webp')] md:bg-[url('/images/About/Banner/Tablet/AboutBannerBgTablet.webp')] xl:bg-[url('/images/About/Banner/Desktop/AboutBannerBgDesktop.webp')] bg-no-repeat bg-cover mb-30 md:mb-36 xl:mb-42"
      >
        <div className="bg-[black]/40 rounded-[10px] w-full px-6 pt-27.75 pb-21.75 md:pl-14.5 md:pr-[33.8171%] md:py-29.5 xl:pl-21.25 xl:py-34.25">
          <div className="text-[#FEFCF7] text-center flex flex-col gap-6 items-center md:items-start md:text-left md:max-w-111.25">
            <p className="font-black text-[28px] leading-7 md:text-[32p] md:leading-10 xl:text-[40px] xl:leading-12">
              About Us
            </p>
            <p className="description">
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
