import Image from "next/image";
import { ItemSection2 } from "./itemSection2";

export const RightSide = () => {
    return (
        <div className="relative w-fit h-fit">
            {/* Fundo atrás e colado à esquerda da tela */}
            <Image
                alt="fundo"
                src={"/assets/imgs/Blob.png"}
                width={397}
                height={336}
                className="absolute left-0 -z-10"
                style={{ left: 0 }}
            />

            {/* Imagem do desktop por cima */}
            <Image
                alt="desktop"
                src={"/assets/imgs/Desktop.png"}
                width={348}
                height={275}
                className="relative z-10"
            />
            <div className="flex gap-5">
                <ItemSection2 categoy="Feature" title="The map of mathematics" text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."/>
                <ItemSection2 categoy="Popular" title="Design for how people think" text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."/>
                <ItemSection2 categoy="New" title="International & commercial law" text="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."/>
            </div>
        </div>
    );
};
