import Image from "next/image";
import { ButtonSign } from "../reuse/buttonSign";
import { Infos } from "./infos";

export const Section8Main = () => {
    return (
        <main className="p-4">
            <div className="flex flex-col gap-[32px] justify-center items-center">
                <Image alt="img 1 section 8" src={`/assets/imgs/Cards Round.png`} width={361} height={167} />
                <Infos />
                <Image alt="img 2 section 8" src={`/assets/imgs/Cards Round2.png`} width={352} height={195}/>
            </div>
        </main>
    );
}