"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
    useGSAP(() => {
        gsap.to(".hero-content", {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        });
        gsap.to(".flower-images", {
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        });
        gsap.to(".flower", { rotate: 360, duration: 2, ease: "power2.inOut" });
        gsap.to("#hero", {
            scrollTrigger: {
                trigger: "#experience",
                start: "top bottom",
                end: "top bottom-=400",
                scrub: true,
            },
            opacity: 0,
            ease: "power1.out",
        });

        document.querySelectorAll(".flower").forEach((flower) => {
            flower.addEventListener("mouseenter", () =>
                gsap.to(flower, { rotation: "+=360", duration: 1 })
            );
        });
    });

    return null;
}
