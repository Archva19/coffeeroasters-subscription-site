import Link from "next/link";

export default function CreateYourPlanBtn() {
  return (
    <>
      <Link href = "/Subscribe" className="pt-3.75 pb-4 px-7.75 bg-[#0E8784] rounded-md font-black text-[18px] leading-6.25 flex items-center justify-center text-[#FEFCF7] hover:bg-[#66D2CF]">
        Create your plan
      </Link>
    </>
  );
}
