import { QuestionType } from "@/types/types";

interface OrderNavigationProps {
  questions: QuestionType[];
  handleOnChangeVis: (questionIndex: number, status: boolean) => void;
}

export default function OrderNavigation({
  questions,
  handleOnChangeVis,
}: OrderNavigationProps) {
  const scrollToQuestion = (index: number) => {
    handleOnChangeVis(index, true);

    setTimeout(() => {
      const element = document.getElementById(`question-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  };

  return (
    <>
      <div className="hidden sticky xl:flex flex-col w-63.75 gap-6 shrink-0 top-35">
        {questions.map((q, index) => (
          <button
            key={index}
            onClick={() => scrollToQuestion(index)}
            className="flex items-center gap-[28.5px] pb-6 border-b border-[#83888F] group cursor-pointer"
          >
            <span className="text-[#83888F] font-black text-[24px] leading-8 opacity-50 group-hover:opacity-80">
              0{index + 1}
            </span>
            <p className="text-[#333D4B] font-black text-[24px] leading-8 opacity-50 group-hover:opacity-80">
              {q.key}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}
