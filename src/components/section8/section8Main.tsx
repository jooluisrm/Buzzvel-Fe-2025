import Image from "next/image";
import { ButtonSign } from "../reuse/buttonSign";
import { Infos } from "./infos";

export const Section8Main = () => {
    return (
        <main className="p-4 lg:px-0 lg:py-[80px]">
            <div className="flex flex-col gap-[32px] justify-center items-center lg:flex-row lg:justify-between">
                <Image alt="img 1 section 8" src={`/assets/imgs/Cards Round.png`} width={361} height={167} className="lg:hidden"/>
                <Image alt="img 1 section 8 pc" src={`/assets/imgs/Cards Roundpc.png`} width={467} height={636} className="hidden lg:flex"/>
                <Infos />
                <Image alt="img 2 section 8" src={`/assets/imgs/Cards Round2.png`} width={352} height={195} className="lg:hidden"/>
                <Image alt="img 2 section 8 pc" src={`/assets/imgs/Cards Round2pc.png`} width={480} height={598} className="hidden lg:flex"/>
            </div>
        </main>
    );
}