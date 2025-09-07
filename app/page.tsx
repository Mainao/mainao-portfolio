"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

        document.querySelectorAll(".flower").forEach((flower) => {
            flower.addEventListener("mouseenter", () =>
                gsap.to(flower, { rotation: "+=360", duration: 1 })
            );
            flower.addEventListener("mouseout", () =>
                gsap.to(flower, { rotation: "-=360", duration: 1 })
            );
        });

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
    });

    return (
        <>
            <div className="fixed top-4 right-4 sm:right-6 lg:right-8 z-100">
                <ThemeToggle />
            </div>

            <Hero />
            <div className="h-screen" />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}
