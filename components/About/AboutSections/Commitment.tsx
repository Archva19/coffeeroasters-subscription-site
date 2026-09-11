"use client";
import { motion } from "framer-motion";

export default function Commitment() {
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col gap-12 items-center md:flex-row md:justify-between md:gap-17.25 xl:gap-31.25 xl:px-21.25 mb-49.5 md:mb-76 xl:mb-64"
      >
        <img
          className="w-81.75 h-100 rounded-[10px] md:w-70.25 md:h-117.5 object-cover xl:w-111.25 xl:h-130"
          src="/images/About/Commitment/commitment.webp"
          alt=""
        />
        <div className="flex flex-col gap-7.5 items-center text-center text-[#333D4B] md:items-start md:text-left">
          <p className="font-black text-[32px] leading-12 xl:text-[40px]">
            Our commitment
          </p>
          <p className="description">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </motion.section>
    </>
  );
}
