import { Arrow } from "./arrow";
import { LeftSide } from "./leftSide";
import { Point } from "./point";
import { RightSide } from "./rightSide";
import { SelectPoint } from "./selectPoint";

export const Section3Main = () => {
    return (
        <main className="md:flex md:justify-between gap-10 items-center md:py-[80px] lg:px-[80px] container mx-auto">

            <div className="hidden md:flex md:justify-start">
                <Arrow type="left" />
            </div>



            <LeftSide />


            <RightSide />

            <div className="hidden md:flex md:justify-end">
                <Arrow type="right" />
            </div>


        </main>

    );
}