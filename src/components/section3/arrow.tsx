import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    type: "left" | "right";
}

export const Arrow = ({ type }: Props) => {
    switch (type) {
        case "left": {
            return (
                <ChevronLeft size={50} className="text-white cursor-pointer"/>
            );
            break;
        }
        case "right": {
            return (
                <ChevronRight size={50} className="text-[#0F172A] cursor-pointer"/>
            );
            break;
        }
    }

}