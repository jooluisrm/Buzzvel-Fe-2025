type Props = {
    type: "login" | "sign";
    text: string;
}

export const ButtonLoginSign = ({ type, text }: Props) => {
    return (
        <button className={`text-[16px] p-[12px] w-[153px] h-[48px] rounded-md font-semibold cursor-pointer ${type === "login" ? 'border-0 text-end' : 'border-2'}`}>
            {text}
        </button>
    );
}