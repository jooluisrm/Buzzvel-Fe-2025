import { Item } from "./item";

export const Section6Main = () => {
    return (
        <main className="flex flex-col gap-[32px] container mx-auto py-[48px] px-[16px] lg:p-[80px]">
            <div>
                <h1 className="text-[24px] font-bold">What everyone says</h1>
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