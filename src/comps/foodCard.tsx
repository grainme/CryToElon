import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";

export default function FoodCard(props: {
  addToCart: MouseEventHandler<HTMLButtonElement> | undefined;
  srcImage: string | undefined;
  name: string;
  foodDescription: string;
  price: string;
  stock: string;
  category: string;
}) {
  return (
    <div className="flex flex-col px-3 pb-6 pt-3 w-[20rem] h-[25rem] bg-[#f4f4efd1] gap-2 rounded-lg">
      <div className="bg-black h-3/4 overflow-hidden flex justify-center items-center">
        <img src={props.srcImage} className="w-full h-full object-cover"></img>
      </div>
      <div className="flex flex-col justify-between h-2/4">
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-[20px]">{props.name}</div>
          <div className="text-[14px] opacity-80 mb-5">{props.foodDescription}</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#ff6d4ce4] tracking-tight font-bold text-[23px]">
            {props.price}MAD
          </div>
          <div className="text-[14px] font-medium opacity-45">
            {props.stock} items stock
          </div>

          <Button className="bg-[#ff6d4ce4]" onClick={props.addToCart}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
