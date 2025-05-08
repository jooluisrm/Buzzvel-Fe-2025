import Image from "next/image";

type Props = {
    number: 1 | 2 | 3;
    h1: string;
    p: string;
}

export const Item = ({ number, h1, p }: Props) => {
    return (
        <div className="flex flex-col gap-0 justify-center items-center text-center text-[#FACC15]">
            <Image alt="Img section 5" src={`/assets/imgs/Icon${number}section5.png`} width={64} height={64}/>
            <h1 className="font-extrabold text-[48px] lg:text-[72px]">{h1}</h1>
            <p className="text-[16px] lg:text-[24px]">{p}</p>
        </div>
    );
}