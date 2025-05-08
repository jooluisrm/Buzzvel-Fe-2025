import Image from "next/image";

export const Side2 = () => {
    return (
        <>
            <div className="flex justify-center lg:hidden">
                <Image alt="img side2" src={`/assets/imgs/Colsection4.png`} width={361} height={309} className="w-full" />
            </div>
            <div className="hidden lg:flex justify-center">
                <Image alt="img side2" src={`/assets/imgs/Colsection4pc.png`} width={600} height={651} className="w-full" />
            </div>
        </>
    );
}