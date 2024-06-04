export default function SubHeader() {
  return (
    <div className="text-[18px] mt-[5rem] flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="font-semibold text-[23px]">Time to invest?</div>
        <div>Your crypto dashboard.</div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-col h-full justify-center">
          <div className="text-[14px] opacity-40">Current Date</div>
          <div className="text-[18px]">May 11,2024</div>
        </div>
        <div className="bg-blue-500 cursor-pointer text-white flex justify-center items-center px-4 rounded-lg h-[80%]">Export CSV</div>
      </div>
    </div>
  );
}
