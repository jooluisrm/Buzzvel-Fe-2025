import Image from "next/image";

type Props = {
    number: string;
    name: string;
    role: string;
}

export const Profile = ({ name, number, role }: Props) => {
    return (
        <div className="flex items-center gap-[16px]">
            <Image alt="avatar" width={64} height={64} src={`/assets/imgs/avatar${number}.jpg`} className="rounded-full w-[64px] h-[64px]" />
            <div>
                <h2 className="text-black text-[18px]">{name}</h2>
                <span className="text-[#475569] text-[16px]">{role}</span>
            </div>
        </div>
    );
}