import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
    text: string;
}

export const LinkBlue = ({ text }: Props) => {
    return (
        <button className="text-[16px] font-medium lg:text-[20px]">
            <Link href={`#`} className="flex flex-row gap-3 text-[#2563EB] items-center">{text} <ArrowRight /></Link>
        </button>
    );
}