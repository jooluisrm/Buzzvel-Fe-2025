"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Item } from "./item";

export const CarrosselItem = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        loop: false,
        rubberband: false,
        slides: {
            perView: 1.2, // Mostra 1 item e um pedaço do próximo
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: {
                    perView: 2.2,
                    spacing: 24,
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 24,
                },
            },
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider px-2">
            <div className="keen-slider__slide">
                <Item
                    name="Hellen Jummy"
                    number="1"
                    role="Financial Counselor"
                    text="Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. 
                    Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi."
                />
            </div>
            <div className="keen-slider__slide">
                <Item
                    name="Ralph Edwards"
                    number="2"
                    role="Math Teacher"
                    text="Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, 
                    nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor."/>
            </div>
            <div className="keen-slider__slide">
                <Item
                    name="Hellena John"
                    number="3"
                    role="Psychology Student"
                    text="Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. 
                    Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a."/>
            </div>
            <div className="keen-slider__slide">
                <Item
                    name="Edwards"
                    number="4"
                    role="Psychology Student"
                    text="Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. 
                    Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a."/>
            </div>
        </div>
    );
};
