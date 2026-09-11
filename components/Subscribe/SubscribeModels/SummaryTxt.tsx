import { SummaryType } from "@/types/types";

interface SummaryProps {
  summary: SummaryType;
}

export default function SummaryTxt({ summary }: SummaryProps) {
  return (
    <>
      <p className="text-[24px] leading-10 font-black">
        “I drink my coffee as{" "}
        <span className="text-[#0e8784]">
          {summary.preferences ? summary.preferences : "..."}
        </span>
        , with a{" "}
        <span className="text-[#0e8784]">
          {summary.beanType ? summary.beanType : "..."}
        </span>{" "}
        type of bean.{" "}
        <span className="text-[#0e8784]">
          {summary.quantity ? summary.quantity : "..."}
        </span>{" "}
        ground ala{" "}
        <span className="text-[#0e8784]">
          {summary.grind ? summary.grind : "..."}
        </span>
        , sent to me{" "}
        <span className="text-[#0e8784]">
          {summary.deliveries ? summary.deliveries : "..."}
        </span>
        .“
      </p>
    </>
  );
}
