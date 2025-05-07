import { ArrowBigRight, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const LeftSide = () => {
    return (
        <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-bold">
                    An <span className="relative inline-block custom-marker">all-in-one</span>{' '} app that makes it easier
                </h1>
                <p className="text-[16px]">
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                    Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                </p>
            </div>
            <ul className="text-[20px] flex flex-col gap-[16px]">
                <li className="flex gap-2"><span><Check size={24}/></span>Est et in pharetra magna adipiscing ornare aliquam.</li>
                <li className="flex gap-2"><span><Check size={24}/></span>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                <li className="flex gap-2"><span><Check size={24}/></span>Ullamcorper ornare in et egestas dolor orci.</li>
            </ul>

            <button className="text-[16px] text-[#2563EB] font-medium"><Link href={`#`} className="flex gap-2">Find more about the app <ArrowRight /></Link></button>
        </div>
    );
}