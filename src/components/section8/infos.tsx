import { ButtonSign } from "../reuse/buttonSign";

export const Infos = () => {
    return (
        <div className="flex flex-col gap-[24px] justify-center items-center text-center">
            <h1 className="text-[24px] font-bold lg:text-[56px] lg:font-extrabold">Join a world of learning</h1>
            <p className="text-[16px] lg:text-[20px]">
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                Risus elit et fringilla habitant ut facilisi.
            </p>
            <ButtonSign />
        </div>
    );
} 