import { ArrowRight, PlaneTakeoff } from "lucide-react";
import Link from "next/link";
import { LinkBlue } from "../reuse/linkBlue";

export const Side1 = () => {
    return (
        <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[15px]">
                <h1 className="text-[24px] font-bold lg:text-[56px] lg:font-extrabold leading-tight">
                    Meet internatio
                    <span className="relative inline-block">
                        <PlaneTakeoff size={40} className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-6 text-[#FACC15]" />
                        <PlaneTakeoff size={30} className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-6 text-[#FACC15]" />
                        na
                    </span>
                    l students & teachers
                </h1>


                <p className="text-[16px] lg:text-[20px]">
                    Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
                    Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
                </p>
            </div>
            <LinkBlue text="Explore teachers and students"/>
        </div>
    );
}