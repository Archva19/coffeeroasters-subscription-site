export default function CollectionItemModel({
  item,
}: {
  item: {
    image: string;
    title: string;
    desc: string;
  };
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 md:w-full md:flex-row md:gap-9 xl:items-center xl:flex-col xl:gap-[71.55px]">
        <img className="w-50 md:w-63.75" src={item.image} alt="" />
        <div className="text-center gap-4 flex flex-col text-[#333D4B] max-w-70.5 md:text-left md:gap-6 md:pt-[29.55px] xl:text-center xl:max-w-63.75 xl:pt-0">
          <p className="font-black text-[24px] leading-8 opacity-100!">{item.title}</p>
          <p className="description">
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
}
