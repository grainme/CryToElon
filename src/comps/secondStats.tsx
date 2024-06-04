import { DataTableDemo } from "./dataTable";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SecondStats() {
  return (
    <div className="text-[18px] h-[60rem] flex flex-col mt-[4rem] gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-[37px] font-semibold">
            Today's Cryptocurrency Prices by CryToElon
          </div>
          <div className="text-[17px] opacity-60">
            The global crypto market cap is{" "}
            <span className="text-green-500 font-bold">$2.58T</span>, a{" "}
            <span className="text-red-500 font-bold">0.20%</span> decrease over
            the last decade.{" "}
            <span className="underline cursor-pointer hover:no-underline">
              Read More
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch />
          <Label className="text-[17px]">Highlights</Label>
        </div>
      </div>
      <DataTableDemo />
    </div>
  );
}
