import Banner from "../SubscribeSections/Banner";
import HowItWorks from "../SubscribeSections/HowItWorks";
import Order from "../SubscribeSections/Order";

export default function Subscribe() {
  return (
    <main className="w-full pt-2 pb-30 md:pb-36 md:pt-3.25 xl:pb-50 xl:pt-0">
      <div className="w-[87.2%] mx-auto md:w-[89.713541%] xl:w-[88.88888%] ">
        <Banner />
      </div>
      <HowItWorks />
      <div className="w-[87.2%] mx-auto md:w-[89.713541%] xl:w-[88.88888%] ">
        <Order />
      </div>
    </main>
  );
}
