import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
    type: "left" | "right";
    onClick?: () => void;
  };
  
  export const Arrow = ({ type, onClick }: Props) => (
    <div
      onClick={onClick}
      className="text-[#EA580C] border-[#EA580C] border-2 w-[48px] h-[48px] p-[12px] rounded-full flex justify-center items-center cursor-pointer transition"
    >
      {type === "left" ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
    </div>
  );
  