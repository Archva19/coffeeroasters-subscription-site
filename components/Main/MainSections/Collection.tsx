"use client"

import CollectionItemModel from "@/components/Main/MainModels/CollectionItemModel";
import { motion } from "framer-motion";

export default function Collection() {
  const collection = [
    {
      image: "/images/Main/Collection/CommonImages/GranEspresso.webp",
      title: "Gran Espresso",
      desc: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      image: "/images/Main/Collection/CommonImages/Planalto.webp",
      title: "Planalto",
      desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
      image: "/images/Main/Collection/CommonImages/Piccollo.webp",
      title: "Piccollo",
      desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    },
    {
      image: "/images/Main/Collection/CommonImages/Danche.webp",
      title: "Danche",
      desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];
  return (
    <>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full flex flex-col items-center gap-3.25 text-center relative mb-30 md:mb-36 xl:mb-50"
      >
        <img
          className="mask-gradient-to-b md:hidden"
          src="images/Main/Collection/Mobile/ourCollectionMobile.svg"
          alt=""
        />
        <img
          className="mask-gradient-to-b absolute -top-10 hidden md:inline-block xl:hidden"
          src="images/Main/Collection/Tablet/ourCollectionTablet.svg"
          alt=""
        />
        <img
          className="mask-gradient-to-b absolute -top-16 hidden xl:inline-block"
          src="images/Main/Collection/Desktop/ourCollectionDesktop.svg"
          alt=""
        />
        <div className="z-10 flex flex-col items-center gap-12 md:px-[8.417997%] md:gap-8 xl:px-[6.640625%] xl:flex-row xl:gap-7.5 xl:justify-between">
          {collection.map((item, index) => (
            <CollectionItemModel key={index} item={item} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
