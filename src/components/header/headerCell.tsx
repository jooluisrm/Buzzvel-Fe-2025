import Image from "next/image";
import { ButtonLoginSign } from "../reuse/buttonLoginSign";
import { LiHeader } from "../reuse/li";
import { MenuCell } from "../reuse/menuCell";

export const HeaderCell = () => {
    return (
        <main className="lg:hidden flex justify-between items-center">
            <div className="flex items-center gap-[48px]">
                <span className="flex items-center gap-[1px]">
                    <Image alt="logo" src={`/assets/imgs/Group.png`} width={22} height={21} />
                    <h1 className="text-[32px] font-bold">teach</h1>
                </span>
            </div>
            <div className="">
                <MenuCell />
            </div>
        </main>
    );
}