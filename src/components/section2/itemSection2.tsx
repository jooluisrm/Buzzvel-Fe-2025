type Props = {
    categoy: "Feature" | "Popular" | "New";
    title: string;
    text: string;
}

export const ItemSection2 = ({ categoy, title, text }: Props) => {
    return (
      <div className="bg-white max-w-[160px] min-h-[232px] p-4 rounded-xl shadow-2xl flex flex-col justify-between">
        <div>
          <div className={`inline-block py-1 px-2 rounded-lg mb-2 
            ${categoy === "Feature" && "bg-[#F3E8FF] text-[#6B21A8]"}
            ${categoy === "Popular" && "bg-[#DBEAFE] text-[#1E40AF]"}
            ${categoy === "New" && "bg-[#DCFCE7] text-[#166534]"}
          `}>
            <h2>{categoy}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-semibold">{title}</h1>
            <p className="text-[12px] text-[#475569]">{text}</p>
          </div>
        </div>
        <button className="mt-4 py-[8px] px-[12px] font-medium text-[14px] text-[#2563EB] border-2 border-[#2563EB] rounded-lg cursor-pointer">
          Take Lesson
        </button>
      </div>
    );
  };
  