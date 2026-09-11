"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full rounded-[10px] bg-[url('/images/Subscribe/Banner/Mobile/SubscribeBannerBgMobile.webp')] md:bg-[url('/images/Subscribe/Banner/Tablet/SubscribeBannerBgTablet.webp')] xl:bg-[url('/images/Subscribe/Banner/Desktop/SubscribeBannerBgDesktop.webp')] bg-no-repeat bg-cover mb-30 md:mb-36 xl:mb-42"
    >
      <div className="bg-[black]/40 rounded-[10px] w-full px-6 pt-25.25 pb-34 md:pl-14.5 md:pr-[33.8171%] md:py-[126.5px] xl:pl-21.25 xl:py-33.5 md:bg-transparent">
        <div className="text-[#FEFCF7] text-center flex flex-col gap-5.5 items-center md:items-start md:gap-6 md:text-left md:max-w-111.25 xl:gap-8">
          <p className="font-black text-[40px] leading-10 md:text-[48px] md:leading-12 xl:text-[72px] xl:leading-18">
            Create a plan
          </p>
          <p className="description">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
