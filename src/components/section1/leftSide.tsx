import Image from "next/image";
import { ButtonSign } from "../reuse/buttonSign";
import { ButtonView } from "../reuse/buttonView";

export const LeftSide = () => {
    return (
        <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[32px]">
                <h1 className="text-[40px] font-bold">
                    <span className="relative inline-block custom-marker">Teach</span>{' '}
                    students worldwide
                </h1>

                <p className="text-[16px]">
                    Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt
                    viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                </p>

                <div className="flex justify-between">
                    <ButtonSign />
                    <ButtonView />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-[#475569] text-[16px]">Trusted by leading companies</h3>
                <div className="flex gap-[24px]">
                    <Image className="" alt="companies" src={`/assets/imgs/img1.png`} width={32} height={32} />
                    <Image className="" alt="companies" src={`/assets/imgs/img2.png`} width={32} height={32} />
                    <Image className="" alt="companies" src={`/assets/imgs/img3.png`} width={32} height={32} />
                    <Image className="" alt="companies" src={`/assets/imgs/img4.png`} width={32} height={32} />
                    <Image className="" alt="companies" src={`/assets/imgs/img5.png`} width={32} height={32} />
                </div>
            </div>
        </div>

    );
}