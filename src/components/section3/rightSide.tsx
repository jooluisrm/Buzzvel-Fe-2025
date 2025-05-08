import Image from "next/image";

export const RightSide = () => {
    return (
        <>
            <div className="w-full flex justify-center lg:hidden">
                <Image alt="img left" src={`/assets/imgs/Col.png`} width={361} height={294} className="transform translate-y-10 md:translate-y-0 w-full" />
            </div>
            <div className="hidden lg:flex lg:items-center relative">
                <Image
                    alt="img left pc"
                    src="/assets/imgs/Colpc.png"
                    width={528}
                    height={415}
                    className="absolute"
                />
            </div>
        </>

    );
}