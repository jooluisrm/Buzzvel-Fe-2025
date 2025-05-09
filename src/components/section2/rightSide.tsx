import Image from "next/image";
import { ItemSection2 } from "./itemSection2";
import CarrosselSection2 from "./CarrosselSection2";

export const RightSide = () => {
    return (
        <>
            <div className="relative w-fit h-fit md:hidden">
                <Image
                    alt="fundo"
                    src={"/assets/imgs/Blob.png"}
                    width={397}
                    height={336}
                    className="absolute left-0 -z-10"
                    style={{ left: 0 }}
                />
                <Image
                    alt="desktop"
                    src={"/assets/imgs/Desktop.png"}
                    width={348}
                    height={275}
                    className="relative z-10 md:mx-auto" // Centraliza horizontalmente
                />
                <div className="max-w-[1020px] overflow-hidden mx-auto">
                    <CarrosselSection2 />
                </div>
            </div>

            <div className="hidden md:flex md:flex-col">
                <Image
                    alt="fundo"
                    src={"/assets/imgs/Blobpc.png"}
                    width={506}
                    height={448}
                    className="absolute -z-10 lg:translate-x-[-50px] xl:translate-x-[-100px]"
                />

                <Image
                    alt="pontinhado"
                    src={"/assets/imgs/icons.png"}
                    width={139}
                    height={582}
                    className="absolute -z-9 lg:translate-x-[-90px] xl:translate-x-[-100px]"
                />


                <Image
                    alt="desktop"
                    src={"/assets/imgs/Desktoppc.png"}
                    width={691}
                    height={391}
                    className="relative z-10"
                />

                <div className="flex gap-5">
                    <ItemSection2 categoy="Feature" title="The map of mathematics" text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
                    <ItemSection2 categoy="Popular" title="Design for how people think" text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non." />
                    <ItemSection2 categoy="New" title="International & commercial law" text="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui." />
                </div>
            </div>
        </>
    );
};
