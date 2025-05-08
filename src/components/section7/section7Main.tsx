import { LeftSide } from "./leftSide";
import { RightSide } from "./rightSide";

export const Section7Main = () => {
    return (
        <main className="md:flex md:items-center md:container md:mx-auto lg:p-[80px]">
            <LeftSide />
            <RightSide />
        </main>
    );
}