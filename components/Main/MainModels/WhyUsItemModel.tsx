import React from "react";

export default function WhyUsItemModel({
  item,
}: {
  item: { image: string; title: string; desc: string };
}) {
  return (
    <>
      <div className="w-full rounded-lg bg-[#0E8784] px-[33.5px] pt-18 pb-12.75 flex flex-col items-center gap-14 sm:flex-row sm:gap-[55.5px] sm:py-10.25 sm:pl-17.5 sm:pr-12 xl:pt-18 xl:pb-12 xl:px-12 xl:flex-col xl:gap-14 xl:max-w-87.5 xl:h-95.5 xl:justify-between">
        <img className="w-18 sm:w-13.75 xl:w-18" src={item.image} alt="" />
        <div className="flex flex-col gap-6 items-center text-center text-[#FEFCF7] sm:text-left sm:items-start sm:gap-4 xl:gap-6 xl:text-center xl:items-center">
          <p className="font-black text-[24px] leading-8">
            {item.title}
          </p>
          <p className="description opacity-100!">
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
}
