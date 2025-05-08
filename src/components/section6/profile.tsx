import Image from "next/image";

export const Profile = () => {
    return (
        <div className="flex items-center gap-[16px]">
            <Image alt="avatar" width={64} height={64} src={`/assets/imgs/avatar1.jpg`} className="rounded-full w-[64px] h-[64px]"/>
            <div>
                <h2 className="text-black text-[18px]">Hellen Jummy</h2>
                <span className="text-[#475569] text-[16px]">Financial Counselor</span>
            </div>
        </div>
    );
}