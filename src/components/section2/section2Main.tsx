import { LeftSide } from "./leftSide";
import { RightSide } from "./rightSide";

export const Section2Main = () => {
    return (
        <main className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:container lg:mx-auto lg:py-[80px] lg:px-[80px]">
            <LeftSide />
            <RightSide />
        </main>
    );
}