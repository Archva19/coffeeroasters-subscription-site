import Banner from "../MainSections/Banner";
import Collection from "../MainSections/Collection";
import HowItWorks from "../MainSections/HowItWorks";
import WhyUs from "../MainSections/WhyUs";

export default function Main() {
  return (
    <>
      <main className="w-[87.2%] mx-auto md:w-[89.713541%] xl:w-[88.88888%] pt-2 pb-30 md:pb-36 md:pt-3.25 xl:pb-50 xl:pt-0">
        <Banner />
        <Collection />
        <WhyUs />
        <HowItWorks />
      </main>
    </>
  );
}
