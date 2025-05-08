import { Point } from "./point";
import { SelectPoint } from "./selectPoint";

export const LeftSide = () => {
    return (
        <div className="container mx-auto pt-[48px] md:pt-0 px-4 lg:px-[80px] flex flex-col gap-[48px]">
            <p className="text-[18px] lg:text-[24px]">
                Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in.
                Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
            </p>
            <div>
                <p className="text-[18px] lg:text-[24px]">
                    Marie Poirot,
                </p>
                <span className="text-[18px] font-medium lg:text-[24px]">Bigapp</span>
            </div>
            <div className="flex gap-2">
                <SelectPoint />
                <Point />
                <Point />
                <Point />
                <Point />
            </div>
        </div>
    );
}