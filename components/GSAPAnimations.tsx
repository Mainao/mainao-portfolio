"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
    useGSAP(() => {
        gsap.to(".hero-content", { opacity: 1, duration: 1 });
        gsap.to(".flower-images", { opacity: 1, duration: 1 });
        gsap.to(".flower", { rotate: 360, duration: 2 });

        document.querySelectorAll(".flower").forEach((flower) => {
            flower.addEventListener("mouseenter", () =>
                gsap.to(flower, { rotation: "+=360", duration: 1 })
            );
        });
    });

    return null;
}
