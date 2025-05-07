// components/CarrosselSection2.tsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ItemSection2 } from "./itemSection2";

export default function CarrosselSection2() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 2.2, // Número de slides por visualização em telas grandes
            spacing: 0,   // Espaçamento entre os slides
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 3, // Ajuste para telas médias
                    spacing: 0,   // Menos espaçamento
                },
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 2.2,  // Apenas um slide por vez em telas pequenas
                    spacing: 0,   // Menos espaçamento
                },
            },
            "(max-width: 480px)": {
                slides: {
                    perView: 2.2,  // Ajuste para dispositivos ainda menores
                    spacing: 0,   // Menos espaçamento
                },
            },
        },
        rubberband: false,
    });

    return (
        <div ref={sliderRef} className="keen-slider flex-shrink-0">
            <div className="keen-slider__slide">
                <ItemSection2 categoy="Feature" title="The map of mathematics" text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
            </div>
            <div className="keen-slider__slide">
                <ItemSection2 categoy="Popular" title="Design for how people think" text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non." />
            </div>
            <div className="keen-slider__slide">
                <ItemSection2 categoy="New" title="International & commercial law" text="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui." />
            </div>
        </div>
    );
}
