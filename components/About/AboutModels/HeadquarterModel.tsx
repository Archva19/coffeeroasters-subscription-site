export default function HeadquarterModel({
  item,
}: {
  item: {
    icon: string;
    title: string;
    info1: string;
    info2: string;
    info3: string;
    info4: string;
  };
}) {
  return (
    <>
      <div className = "flex flex-col gap-[47.93px] items-center md:items-start md:gap-[48.93px] xl:gap-[45.93px]">
        <img src={item.icon} alt="" />
        <div className = "flex flex-col gap-5.5 items-center text-center text-[#333D4B] md:gap-5.25 md:items-start md:text-left xl:gap-6">
            <p className = "font-black text-[28px] leading-9 md:text-[24px] xl:text-[32px]">{item.title}</p>
            <div className = "flex flex-col items-center leading-6.5 md:items-start">
                <p>{item.info1}</p>
                <p>{item.info2}</p>
                <p>{item.info3}</p>
                <p>{item.info4}</p>
            </div>
        </div>
      </div>
    </>
  );
}
