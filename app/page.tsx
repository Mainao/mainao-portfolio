import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-900 font-mono px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Header */}
            <header className="text-center mb-10 sm:mb-14 lg:mb-16">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold mb-3 text-neutral-900 dark:text-white tracking-wider">
                    Mainao
                </h1>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <h2 className="text-sm sm:text-sm md:text-base lg:text-lg text-neutral-600 dark:text-gray-300 tracking-tighter sm:tracking-tight">
                        Frontend Developer
                    </h2>
                </div>
            </header>

            {/* Icon Links */}
            <div className="grid grid-cols-2 sm:flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-14 lg:mb-20">
                {[
                    { href: "/", icon: "about.webp", label: "About" },
                    { href: "/", icon: "project.webp", label: "Projects" },
                    { href: "/", icon: "skills.webp", label: "Skills" },
                    { href: "/", icon: "contact.webp", label: "Contact" },
                ].map(({ href, icon, label }) => (
                    <Link
                        key={label}
                        href={href}
                        title={label}
                        aria-label={label}
                        className="flex flex-col items-center hover:scale-110 transition"
                    >
                        <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-1">
                            <Image
                                src={`/icons/${icon}`}
                                alt={`${label} icon`}
                                fill
                                priority
                                sizes="(max-width: 640px) 64px, (max-width: 768px) 56px, 64px"
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm text-neutral-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                            {label}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <footer className="flex items-center text-xs sm:text-sm md:text-sm text-neutral-500 dark:text-gray-400">
                <p>© 2025 — Made with</p>
                <div className="w-4 h-4 ml-2 relative">
                    <Image
                        src="/icons/heart.webp"
                        alt="Heart icon"
                        fill
                        sizes="(max-width: 640px) 16px, 20px"
                        className="object-contain"
                    />
                </div>
            </footer>
        </main>
    );
}
