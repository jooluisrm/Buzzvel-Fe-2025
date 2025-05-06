import Image from "next/image"
import TableFooter from "./tableFooter";
import Link from "next/link";
import { Euro, Globe, PersonStanding } from "lucide-react";

export const FooterMain = () => {
    return (
        <main className="lg:container lg:mx-auto px-4 lg:px-[80px] py-[24px]">
            <div className="flex py-[48px] flex-col lg:flex-row justify-between gap-[48px]">
                <div>
                    <div className="flex items-center gap-[1px]">
                        <Image alt="logo footer" src={`/assets/imgs/logoFooter.png`} width={22} height={21} />
                        <h1 className="text-[32px] font-bold text-white">teach</h1>
                    </div>
                </div>
                <div className="">
                    <TableFooter />
                </div>
            </div>
            <div className="flex flex-col gap-[24px] lg:flex-row lg:justify-between text-[#E2E8F0] border-t border-[#475569] pt-[24px]">
                <p>uteach @ 2023. All rights reserved.</p>
                <ul className="flex justify-between lg:gap-10">
                    <li>
                        <Link href={`#`}>Terms</Link>
                    </li>
                    <li>
                        <Link href={`#`}>Privacy</Link>
                    </li>
                    <li>
                        <Link href={`#`}>Contact</Link>
                    </li>
                    <li>
                        <Link href={`#`} className="flex gap-2"><Globe /> EN</Link>
                    </li>
                    <li>
                        <Link href={`#`} className="flex gap-2"><Euro /> EUR</Link>
                    </li>
                    <li>
                        <Link href={`#`}><PersonStanding /></Link>
                    </li>
                </ul>
            </div>
        </main>

    );
} 