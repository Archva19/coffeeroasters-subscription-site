import AnswerModel from "./AnswerModel";
import { QuestionType } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";

interface QuestionModelProps {
  id: string;
  question: QuestionType;
  handleOnClickAnswer: (answerTitle: string) => void;
  handleOnChangeVis: (status: boolean) => void;
  visibility: boolean;
  selectedAnswer: string | null;
}

export default function QuestionModel({
  id,
  question,
  handleOnClickAnswer,
  handleOnChangeVis,
  visibility,
  selectedAnswer,
}: QuestionModelProps) {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        id={id}
        className="flex flex-col gap-8 md:gap-10 xl:gap-14"
      >
        <button
          onClick={() => handleOnChangeVis(!visibility)}
          className="flex items-center justify-between"
        >
          <p className="font-black text-[24px] leading-7 text-[#83888F] md:text-[32px] md:leading-12 xl:text-[40px]">
            {question.title}
          </p>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: visibility ? 45 : 225 }}
            className="h-3 w-3 border-t-4 border-l-4 border-[#0E8784]"
          ></motion.div>
        </button>
        <AnimatePresence>
          {visibility && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className=" flex flex-col gap-4 md:flex-row md:gap-2.5  md:grid md:grid-cols-3 xl:gap-5.75"
            >
              {question.answers.map((answer, index) => {
                const isSelected = selectedAnswer === answer.title;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleOnClickAnswer(answer.title)}
                    className="rounded-lg hover:scale-105 transition-all duration-200 "
                  >
                    <AnswerModel answer={answer} isSelected={isSelected} />
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
