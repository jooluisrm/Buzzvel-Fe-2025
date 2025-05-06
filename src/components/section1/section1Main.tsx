import { LeftSide } from "./leftSide";
import { RightSide } from "./rightSide";

export const Section1Main = () => {
    return (
        <main className="container mx-auto py-[48px] px-4 lg:py-[24px] lg:px-[80px] flex flex-col gap-[48px]">
            <LeftSide />
            <RightSide />
        </main>
    );
}