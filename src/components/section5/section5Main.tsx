import { Item } from "./item";

export const Section5Main = () => {
    return (
        <main className="container mx-auto flex flex-col md:flex-row md:justify-around gap-[48px] py-[48px] px-[16px] lg:p-[80px]">
            <Item h1="195" number={1} p="user countries"/>
            <Item h1="1M" number={2} p="valued teachers"/>
            <Item h1="17M" number={3} p="happy students"/>
        </main>
    );
}