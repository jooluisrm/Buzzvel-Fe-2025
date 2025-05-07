import { Section1 } from "@/components/section1/section1";
import { Section2 } from "@/components/section2/section2";

export const Page = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Section1 />
            <Section2 />
        </div>
    );
}
export default Page;