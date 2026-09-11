export default function CreateMyPlanBtn({
  onClickFun,
}: {
  onClickFun: () => void;
}) {
  return (
    <>
      <button
        onClick={onClickFun}
        className="pt-3.75 pb-4 px-[35.5px] bg-[#0E8784] rounded-md font-black text-[18px] leading-6.25 flex items-center justify-center text-[#FEFCF7] hover:bg-[#66D2CF] cursor-pointer"
      >
        Create my plan!
      </button>
    </>
  );
}
