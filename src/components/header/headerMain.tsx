import Image from "next/image";
import { LiHeader } from "../reuse/li";
import { ButtonLoginSign } from "../reuse/buttonLoginSign";

export const HeaderMain = () => {
    return (
        <header className="bg-white text-[#0F172A] container mx-auto py-[24px] px-[80px]">
            <main className="flex justify-between items-center">
                <div className="flex items-center gap-[48px]">
                    <span className="flex items-center gap-[1px]">
                        <Image alt="logo" src={`/assets/imgs/Group.png`} width={22} height={21} />
                        <h1 className="text-[32px] font-bold">teach</h1>
                    </span>
                    <nav className="list-none flex items-center gap-[48px]">
                        <LiHeader text="Products" />
                        <LiHeader text="Solutions" />
                        <LiHeader text="Pricing" />
                        <LiHeader text="Resources" last={true} />
                    </nav>
                </div>
                <div className="flex gap-4">
                    <ButtonLoginSign type="login" text="Log In" />
                    <ButtonLoginSign type="sign" text="Sign Up Now" />
                </div>
            </main>
        </header>
    );
}