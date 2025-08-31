import Image from "next/image";
import { FLOWERS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="font-mono bg-[#FFFCF8] dark:bg-zinc-900 pt-12 pb-16 overflow-hidden">
            <div className="flex justify-center items-center text-xs sm:text-sm md:text-sm text-neutral-500 dark:text-gray-400">
                <p>© 2025 — Mainao. Made with</p>
                <div className="w-4 h-4 ml-2 relative">
                    <Image
                        src="/icons/heart.webp"
                        alt="Heart icon"
                        fill
                        sizes="(max-width: 640px) 16px, 20px"
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6 opacity-80">
                {FLOWERS.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt="flower"
                        width={36}
                        height={36}
                    />
                ))}
            </div>
        </footer>
    );
}
