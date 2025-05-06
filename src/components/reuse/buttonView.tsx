import { CirclePlay } from "lucide-react";

export const ButtonView = () => {
    return (
        <button className={`text-[#2563EB] font-medium w-[153px] h-[48px] rounded-lg flex items-center gap-2 cursor-pointer lg:text-[20px] lg:w-[178px] lg:h-[56px]`}><CirclePlay /> Sign Up Now</button>
    );
}