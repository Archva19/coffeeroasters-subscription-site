import SummaryTxt from "./SummaryTxt";

interface SummaryType {
  preferences: string | null;
  beanType: string | null;
  quantity: string | null;
  grind: string | null;
  deliveries: string | null;
}

interface SummaryProps {
  summary: SummaryType;
}

export default function OrderSummary({ summary }: SummaryProps) {
  return (
    <>
      <div className="py-8 px-[24.5px] gap-2 bg-[#272f38] text-[#FFFFFF] rounded-lg md:py-6.75 md:px-[43.5px] xl:px-16">
        <p className="font-barlow leading-6.5 uppercase opacity-50">
          Order Summary
        </p>
        <SummaryTxt summary={summary} />
      </div>
    </>
  );
}
