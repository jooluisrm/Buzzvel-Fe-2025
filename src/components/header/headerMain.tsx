import Image from "next/image";
import { LiHeader } from "../reuse/li";
import { ButtonLoginSign } from "../reuse/buttonLoginSign";
import { HeaderPc } from "./headerPc";
import { HeaderCell } from "./headerCell";

export const HeaderMain = () => {
    return (
        <header className="bg-white text-[#0F172A] container mx-auto p-4 lg:py-[24px]  lg:px-[80px]">
            <HeaderPc />
            <HeaderCell />
        </header>
    );
}