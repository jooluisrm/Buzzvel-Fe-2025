import { LeftSide } from "./leftSide";
import { RightSide } from "./rightSide";

export const Section2Main = () => {
    return (
        <main className="flex flex-col md:grid md:grid-cols-2 md:items-center md:container md:mx-auto md:py-[80px] lg:px-[80px]">
            <LeftSide />
            <RightSide />
        </main>
    );
}