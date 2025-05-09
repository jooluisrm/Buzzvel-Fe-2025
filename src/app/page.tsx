"use client"

import { Section1 } from "@/components/section1/section1";
import { Section2 } from "@/components/section2/section2";
import { Section3 } from "@/components/section3/section3";
import { Section4 } from "@/components/section4/section4";
import { Section5 } from "@/components/section5/section5";
import { Section6 } from "@/components/section6/section6";
import { Section7 } from "@/components/section7/section7";
import { Section8 } from "@/components/section8/section8";
import { Section9 } from "@/components/section9/section9";



import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Page = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".scroll-reveal2", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll2",
                markers: false,
                start: "top 520px",
                end: "bottom 900px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal3", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll3",
                markers: false,
                start: "top 520px",
                end: "bottom 700px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal4", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll4",
                markers: false,
                start: "top 520px",
                end: "bottom 900px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal5", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll5",
                markers: false,
                start: "top 520px",
                end: "bottom 600px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal6", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll6",
                markers: false,
                start: "top 520px",
                end: "bottom 900px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal7", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll7",
                markers: false,
                start: "top 520px",
                end: "bottom 700px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal8", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll8",
                markers: false,
                start: "top 520px",
                end: "bottom 900px",
                scrub: true
            }
        });
        gsap.to(".scroll-reveal9", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".area-scroll9",
                markers: false,
                start: "top 520px",
                end: "bottom 750px",
                scrub: true
            }
        });

        return () => {
            gsap.killTweensOf(".scroll-reveal2");
            gsap.killTweensOf(".scroll-reveal3");
            gsap.killTweensOf(".scroll-reveal4");
            gsap.killTweensOf(".scroll-reveal5");
            gsap.killTweensOf(".scroll-reveal6");
            gsap.killTweensOf(".scroll-reveal7");
            gsap.killTweensOf(".scroll-reveal8");
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen ">

            <Section1 />

            <div className="area-scroll2">
                <div className="scroll-reveal2 opacity-0 translate-x-[1000px]">
                    <Section2 />
                </div>
            </div>

            <div className="area-scroll3">
                <div className="scroll-reveal3 opacity-0 translate-x-[-1000px]">
                    <Section3 />
                </div>
            </div>

            <div className="area-scroll4">
                <div className="scroll-reveal4 opacity-0 translate-x-[1000px]">
                    <Section4 />
                </div>
            </div>
            
            <div className="area-scroll5">
                <div className="scroll-reveal5 opacity-0 translate-x-[-1000px]">
                    <Section5 />
                </div>
            </div>

            <div className="area-scroll6">
                <div className="scroll-reveal6 opacity-0 translate-x-[1000px]">
                    <Section6 />
                </div>
            </div>

            <div className="area-scroll7">
                <div className="scroll-reveal7 opacity-0 translate-x-[-1000px]">
                    <Section7 />
                </div>
            </div>

            <div className="area-scroll8">
                <div className="scroll-reveal8 opacity-0 translate-x-[1000px]">
                    <Section8 />
                </div>
            </div>

            <div className="area-scroll9">
                <div className="scroll-reveal9 opacity-0 translate-x-[-1000px]">
                    <Section9 />
                </div>
            </div>
            
        </div>
    );
}
export default Page;