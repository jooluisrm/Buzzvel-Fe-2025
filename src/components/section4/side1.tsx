import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Side1 = () => {
    return (
        <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[15px]">
                <h1 className="text-[24px] font-bold">
                    Meet internatio<span>na</span>l students & teachers
                </h1>
                <p className="text-[16px]">
                    Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
                    Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
                </p>
            </div>
            <button className="text-[16px] font-medium"><Link href={`#`} className="flex flex-row gap-3 text-[#2563EB]">Explore teachers and students <ArrowRight /></Link></button>
        </div>
    );
}