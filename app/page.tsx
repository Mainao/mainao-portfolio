// app/page.tsx  ✅ SERVER COMPONENT
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {
    return (
        <>
            <div className="fixed top-4 right-4 sm:right-6 lg:right-8 z-100">
                <ThemeToggle />
            </div>

            <GSAPAnimations />
            <Hero />
            <div className="h-screen" />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}
