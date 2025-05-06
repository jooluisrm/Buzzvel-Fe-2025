import { ChevronDown } from "lucide-react";
import Link from "next/link";

type Props = {
    text: string;
    last?: boolean;
}

export const LiHeader = ({ text, last }: Props) => {
    if (!last) {
        return (
            <li className="text-[16px] font-semibold"><Link href={`#`}>{text}</Link></li>
        );
    } else {
        return (
            <li className="text-[16px] font-semibold"><Link href={`#`}> <span className="flex items-center gap-2">{text} <ChevronDown /></span></Link></li>
        );
    }
}