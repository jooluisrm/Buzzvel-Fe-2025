import { Arrow } from "./arrow";
import { Item } from "./item";

export const Section6Main = () => {
    return (
        <main className="flex flex-col gap-[32px] container mx-auto py-[48px] px-[16px] lg:p-[80px]">
            <div className="lg:flex lg:justify-between lg:items-center">
                <h1 className="text-[24px] font-bold lg:text-[56px] lg:font-extrabold">What everyone says</h1>
                <div className="hidden lg:flex gap-[24px]">
                    <Arrow type="left"/>
                    <Arrow type="right" />
                </div>
            </div>
            <div className="w-full flex gap-5">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </main>
    );
}