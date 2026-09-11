export default function HowItWorksItemModel({
  item,
  txtColor,
}: {
  item: { num: string; title: string; desc: string };
  txtColor: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-6 items-center md:items-start md:text-left md:gap-10.5 md:max-w-72 xl:gap-9.5">
        <p className="font-black text-[72px] leading-18 text-[#FDD6BA]">{item.num}</p>
        <div className="flex flex-col gap-6 items-center text-center md:gap-9.5 md:text-left md:items-start xl:gap-10.5" style={{ color: txtColor }}>
          <p className="font-black text-[28px] leading-8 xl:text-[32px] xl:leading-9 md:max-w-40">{item.title}</p>
          <p className="description xl:max-w-71.25">{item.desc}</p>
        </div>
      </div>
    </>
  );
}
