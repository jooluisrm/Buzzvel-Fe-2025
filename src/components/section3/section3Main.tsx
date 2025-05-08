import { Arrow } from "./arrow";
import { LeftSide } from "./leftSide";
import { Point } from "./point";
import { RightSide } from "./rightSide";
import { SelectPoint } from "./selectPoint";

export const Section3Main = () => {
    return (
        <main className="grid md:grid-cols-6 items-center md:py-[80px] lg:px-[80px] container mx-auto">
            <div className="hidden col-span-1 md:flex justify-start">
                <Arrow type="left" />
            </div>
            <div className="col-span-2">
                <LeftSide />
            </div>
            <div className="col-span-2 lg:relative">
                <RightSide />
            </div>
            <div className="hidden col-span-1 md:flex justify-end">
                <Arrow type="right" />
            </div>
        </main>

    );
}