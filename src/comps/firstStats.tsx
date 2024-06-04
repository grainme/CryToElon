import { TrendUp } from "@phosphor-icons/react";
import VolumeWeightedAveragePriceChart from "./PriceChart";

export default function FirstStats() {
  return (
    <div className="text-[18px] h-[30rem] mt-[2rem] w-full flex flex-row gap-3 justify-between">
      <div className="border-2 p-2 min-w-[40rem] h-full">
        <div className="flex flex-col gap-4 h-[8rem]">
          <div className="flex flex-col text-[19px]">
            <div className="font-medium">The Volume Weighted Average Price</div>
            <div className="text-[14px] opacity-60 font-light">
              The Volume Weighted Average Price (VWAP) for Ethereum & BTC on a
              min-to-min basis
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="font-normal text-[15px] opacity-70">
                Max Value Bitcoin
              </div>
              <div className="font-semibold text-[24px]">13655.</div>
            </div>
            <div>
              <div className="font-normal text-[15px] opacity-70">
                Min Value Bitcoin
              </div>
              <div className="font-semibold text-[24px]">8.3489</div>
            </div>
            <div>
              <div className="font-normal text-[15px] opacity-70">
                Max Value Ethereum
              </div>
              <div className="font-semibold text-[24px]">2367.0</div>
            </div>
            <div>
              <div className="font-normal text-[15px] opacity-70">
                Min Value Ethereum
              </div>
              <div className="font-semibold text-[24px]">2349.1</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20rem]">
          <VolumeWeightedAveragePriceChart />
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-2">
        <div className="flex flex-row w-full h-full gap-2">
          <div className="border-2 w-full h-full">
            <div className="w-full h-full flex flex-col px-6 py-3 ">
              <div className="flex flex-row w-full h-fit justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-[30px] font-bold">2351.6$</div>
                  <div>
                    <TrendUp size={32} color="#6a994e" />
                  </div>
                </div>
                <div className="opacity-40 text-[18px] font-medium">+/-1%</div>
              </div>
              <div className="text-[15px] opacity-45">
                The highest USD price for BTC
              </div>
            </div>
            <div></div>
          </div>
          <div className="border-2 w-full h-full">
            <div className="w-full h-full flex flex-col px-6 py-3 ">
              <div className="flex flex-row w-full h-fit justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-[30px] font-bold">2351.6$</div>
                  <div>
                    <TrendUp size={32} color="#6a994e" />
                  </div>
                </div>
                <div className="opacity-40 text-[18px] font-medium">+/-1%</div>
              </div>
              <div className="text-[15px] opacity-45">
                The highest USD price for ETH
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-2 h-full w-full"></div>
      </div>
    </div>
  );
}
