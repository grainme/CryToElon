import {
  ChatCenteredDots,
  FileArrowDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="text-[25px]">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold">CryToElon</div>

        <div className="flex flex-row items-center gap-3">
          <FileArrowDown size={25} />
          <MagnifyingGlass size={25} />
          <ChatCenteredDots size={25} />
        </div>
      </div>
    </div>
  );
}
