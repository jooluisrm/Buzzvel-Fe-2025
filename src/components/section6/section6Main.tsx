"use client";

import { useRef } from "react";
import { Arrow } from "./arrow";
import { CarrosselItem } from "./carrosselItem";
import { Item } from "./item";

export const Section6Main = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 300;
  }; 

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 300;
  };

    return (
        <main className="flex flex-col gap-[32px] container mx-auto py-[48px] px-[16px] lg:p-[80px]">
            <div className="lg:flex lg:justify-between lg:items-center">
                <h1 className="text-[24px] font-bold lg:text-[56px] lg:font-extrabold">What everyone says</h1>
                <div className="hidden lg:flex gap-[24px]">
                <Arrow type="left" onClick={scrollLeft} />
                <Arrow type="right" onClick={scrollRight} />
                </div>
            </div>
            <div className="w-full overflow-hidden lg:hidden cursor-pointer">
                <CarrosselItem />
            </div>
            <div
                ref={scrollRef}
                className="hidden lg:flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth lg:py-10"
            >
                <Item
                    name="Hellen Jummy"
                    number="1"
                    role="Financial Counselor"
                    text="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. 
                    Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi."
                />


                <Item
                    name="Ralph Edwards"
                    number="2"
                    role="Math Teacher"
                    text="Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, 
                    nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor."/>

                <Item
                    name="Hellena John"
                    number="3"
                    role="Psychology Student"
                    text="Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. 
                    Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a."/>

                <Item
                    name="Edwards"
                    number="4"
                    role="Psychology Student"
                    text="Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. 
                    Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a."/>
            </div>

        </main>
    );
}