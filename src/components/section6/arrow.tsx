import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
    type: "left" | "right";
}

export const Arrow = ({ type }: Props) => {
    return (
        <div className="text-[#EA580C] border-[#EA580C] border-2 w-[48px] h-[48px] p-[12px] rounded-full flex justify-center items-center cursor-pointer">
            {
                type === "left" && <ArrowLeft size={32} />
            }
            {
                type === "right" && <ArrowRight size={32} /> 
            }
        </div>
    );
}