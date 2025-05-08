import { Side1 } from "./side1";
import { Side2 } from "./side2";

export const Section4Main = () => {
    return (
        <main className="container mx-auto py-[48px] px-[16px] lg:py-[80px] lg:px-[80px] flex flex-col gap-[32px] md:grid md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-2">
                <Side1 />
            </div>
            <div className="order-2 md:order-1">
                <Side2 />
            </div>
        </main>

    );
}