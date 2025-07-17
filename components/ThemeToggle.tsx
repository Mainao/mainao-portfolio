"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <div className="absolute top-4 right-4 sm:right-6 lg:right-8">
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                }
            >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                    <Image
                        src={isDark ? "/icons/sun.webp" : "/icons/moon.webp"}
                        alt="Toggle theme"
                        fill
                        sizes="(max-width: 640px) 20px, (max-width: 768px) 24px, 28px"
                        className="object-contain"
                        priority
                    />
                </div>
            </button>
        </div>
    );
}
