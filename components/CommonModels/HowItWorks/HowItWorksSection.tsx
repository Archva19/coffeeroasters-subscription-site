import HowItWorksDeco from "./HowItWorksDeco";
import HowItWorksItemModel from "./HowItWorksItemModel";

export default function HowItWorksSection({ bgColor, txtColor }: { bgColor: string, txtColor:string }) {
  const items = [
    {
      num: "01",
      title: "Pick your coffee",
      desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      num: "02",
      title: "Choose the frequency",
      desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      num: "03",
      title: "Receive and enjoy!",
      desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col rounded-[10px] pt-20 pb-19.75 md:gap-12 md:pt-10 md:pb-11 xl:pt-20 xl:pb-16 xl:px-21.25 xl:gap-16.75"
        style={{ backgroundColor: bgColor }}
      >
        <HowItWorksDeco />
        <div className="flex flex-col items-center gap-14 md:grid md:grid-cols-3 md:items-start md:gap-2.5 xl:gap-23.75">
          {items.map((item, index) => (
            <HowItWorksItemModel key={index} item={item} txtColor={txtColor} />
          ))}
        </div>
      </div>
    </>
  );
}
