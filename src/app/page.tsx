import { Section1 } from "@/components/section1/section1";
import { Section2 } from "@/components/section2/section2";
import { Section3 } from "@/components/section3/section3";
import { Section4 } from "@/components/section4/section4";
import { Section5 } from "@/components/section5/section5";
import { Section9 } from "@/components/section9/section9";

export const Page = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Section1 />
            <Section2 /> 
            <Section3 />
            <Section4 />
            <Section5 />
            <Section9 />
        </div>
    );
}
export default Page;