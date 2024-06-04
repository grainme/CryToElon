export default function Footer() {
  return (
    <div className="flex flex-col h-[10rem] bg-[#0e0e0e] rounded-t-[40px] text-white px-[4rem] py-[2rem]">
      <div className="flex h-[25rem]"></div>
      <div className="flex flex-row justify-between items-center">
        <div className="font-semibold text-[18px]">CryToElon</div>
        <div className="flex flex-row gap-10">
          <div>status</div>
          <div>terms of use</div>
          <div>legal</div>
          <div>manage cookies</div>
        </div>
        <div>CryToElon Inc. All rights reserved.</div>
      </div>
    </div>
  );
}
