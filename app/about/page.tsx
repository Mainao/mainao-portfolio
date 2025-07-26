import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-900 font-mono px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Header */}
            <header className="text-center mb-10 sm:mb-12 lg:mb-14">
                <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-2">
                    About Me
                </h1>
            </header>

            {/* Icon + Bio Section */}
            <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                    <Image
                        src="/icons/about.webp"
                        alt="About icon"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Timeline Section */}
            <section className="mt-12 w-full max-w-lg space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4"></div>
            </section>

            {/* Footer */}
            <footer className="mt-14 text-xs sm:text-sm text-neutral-500 dark:text-gray-400">
                <p>Thanks for reading 🌟</p>
            </footer>
        </main>
    );
}
