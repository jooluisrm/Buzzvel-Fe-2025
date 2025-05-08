import Image from "next/image";
import { ItemSection2 } from "../section2/itemSection2";

export const RightSide = () => {
    return (
        <>
            <div className="relative w-full flex justify-end md:hidden">
                <div className="relative">
                    <Image
                        alt="img fundo section 7"
                        src={`/assets/imgs/imgsection7.png`}
                        width={361}
                        height={421}
                        className="w-full"
                    />
                    <div className="absolute top-0 left-0 z-10">
                        <ItemSection2
                            categoy="Popular"
                            text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                            title="Design for how people think"
                        />
                    </div>
                </div>
            </div>
            
            <div className="hidden relative w-full md:flex justify-end">
                <div className="relative">
                    <Image
                        alt="img fundo section 7 pc"
                        src={`/assets/imgs/imgsection7pc.png`}
                        width={600}
                        height={479}
                        className="w-full"
                    />
                    <div className="absolute top-0 left-0 z-10">
                        <ItemSection2
                            categoy="Popular"
                            text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                            title="Design for how people think"
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
