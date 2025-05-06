import Image from "next/image";

export const RightSide = () => {
    return (
        <div className="flex justify-center">
            <Image className="lg:hidden" alt="GROUP 50" src={`/assets/imgs/Group 50.png`} width={361} height={329}/>
            <Image className="hidden lg:flex" alt="GROUP 50pc" src={`/assets/imgs/Group 50pc.png`} width={624} height={544}/>
        </div>
    );
}