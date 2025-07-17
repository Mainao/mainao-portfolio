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
                <div className="relative w-8 h-8">
                    <Image
                        src={isDark ? "/icons/sun.webp" : "/icons/moon.webp"}
                        alt="Toggle theme"
                        fill
                        sizes="32px"
                        className="object-contain"
                        priority
                    />
                </div>
            </button>
        </div>
    );
}
