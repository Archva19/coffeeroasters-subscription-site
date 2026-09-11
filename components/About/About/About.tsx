import React from "react";
import Banner from "../AboutSections/Banner";
import Commitment from "../AboutSections/Commitment";
import Quality from "../AboutSections/Quality";
import Headquarters from "../AboutSections/Headquarters";

export default function About() {
  return (
    <>
      <main className="w-[87.2%] mx-auto md:w-[89.713541%] xl:w-[88.88888%] pt-2 pb-30 md:pb-36 md:pt-3.25 xl:pb-50 xl:pt-0">
        <Banner />
        <Commitment />
        <Quality />
        <Headquarters/>
      </main>
    </>
  );
}
