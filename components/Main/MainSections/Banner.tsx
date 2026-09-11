"use client";
import CreateYourPlanBtn from "@/components/CommonModels/CreateYourPlanBtn/CreateYourPlanBtn";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full rounded-[10px] bg-[url('/images/Main/Banner/Mobile/bannerBgMainMobile.webp')] md:bg-[url('/images/Main/Banner/Tablet/bannerBgMainTablet.webp')] xl:bg-[url('/images/Main/Banner/Desktop/bannerBgMainDesktop.webp')] bg-no-repeat bg-cover mb-30 md:mb-50.75 xl:mb-65.5"
      >
        <div className="bg-[black]/60 rounded-[10px] md:bg-transparent w-full px-6 py-25 md:pl-14.5 md:pr-[33.8171%] md:py-26 xl:py-[116.5px]">
          <div className="text-[#FEFCF7] text-center flex flex-col items-center md:items-start md:text-left md:max-w-123.25">
            <p className="font-black text-[40px] leading-10 mb-6 md:text-[48px] md:leading-12 xl:text-[72px] xl:leading-18 xl:mb-8">
              Great coffee made simple.
            </p>
            <p className="description mb-9.75 md:mb-10 xl:mb-14">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <CreateYourPlanBtn />
          </div>
        </div>
      </motion.section>
    </>
  );
}
