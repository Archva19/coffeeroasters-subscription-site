import SummaryTxt from "./SummaryTxt";
import { motion } from "framer-motion";

interface SummaryType {
  preferences: string | null;
  beanType: string | null;
  quantity: string | null;
  grind: string | null;
  deliveries: string | null;
}

interface OrderSummaryWindowProps {
  setSummaryWindowVis: (value: boolean) => void;
  summary: SummaryType;
}

export default function OrderSummaryWindow({
  setSummaryWindowVis,
  summary,
}: OrderSummaryWindowProps) {
  return (
    <>
      <motion.div
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        onClick={() => setSummaryWindowVis(false)}
        className="z-9999 fixed inset-0 h-screen w-screen bg-[#000000]/50 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          onClick={(e) => e.stopPropagation()}
          className="rounded-lg bg-[#FEFCF7] w-[87.2%] max-w-135"
        >
          <div className="bg-[#2f3844] py-7 pl-6 rounded-tr-lg rounded-tl-lg md:pt-12 md:pb-10 md:pl-14">
            <p className="font-black text-[28px] leading-8 text-white md:text-[40px] md:leading-12">
              Order Summary
            </p>
          </div>
          <div className="pt-10 pb-6 px-6 flex flex-col gap-6 md:p-14 md:gap-11.75">
            <div className="text-[#83888F] flex flex-col md:gap-1.75">
              <SummaryTxt summary={summary} />
              <p className="description">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
            </div>
            <button className="md:hidden flex items-center justify-center text-[#FEFCF7] font-black text-[18px] leading-6.25 bg-[#0E8784] pt-3.75 pb-4 rounded-md">
              Checkout - $14.00 / mo
            </button>
            <div className="hidden md:flex gap-3.25 items-center">
              <p className="text-[32px] leading-9 text-[#333D4B] font-black">
                $14.00 / mo
              </p>
              <button className="flex flex-1 items-center justify-center text-[#FEFCF7] font-black text-[18px] leading-6.25 bg-[#0E8784] pt-3.75 pb-4 rounded-md hover:bg-[#66D2CF]">
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
