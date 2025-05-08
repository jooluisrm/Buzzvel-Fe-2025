import { Profile } from "./profile";

type Props = {
    text: string;
    number: string;
    name: string;
    role: string;
}

export const Item = ({text, name, number, role}: Props) => {
    return (
        <div className="bg-white shadow-xl min-w-[309px] min-h-[323px] lg:min-w-[412px] lg:min-h-[305px] p-4 lg:p-[32px] rounded-xl flex flex-col justify-between">
            <p className="text-[18px] text-black">
                {text}
            </p>
            <div>
                <Profile name={name} number={number} role={role}/>
            </div>
        </div>
    );
}