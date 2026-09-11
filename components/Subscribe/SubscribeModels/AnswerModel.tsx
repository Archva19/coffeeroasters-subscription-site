import { AnswerType } from "@/types/types";

interface AnswerModelProps {
  answer: AnswerType;
  isSelected: boolean;
}

export default function AnswerModel({ answer, isSelected }: AnswerModelProps) {
  return (
    <>
      <div
        className={`rounded-lg py-6 px-6.25 flex flex-col gap-2 md:gap-6 md:h-62.5 md:pt-8 md:px-[25.5px] items-start text-left xl:px-7 min-[1440px]:w-57 ${isSelected ? "bg-[#0E8784] text-white" : "bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA] "}`}
      >
        <p className="font-black text-[24px] leading-8">{answer.title}</p>
        <p className="font-barlow leading-6.5">{answer.desc}</p>
      </div>
    </>
  );
}
