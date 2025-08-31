import Image from "next/image";
import { FLOWERS } from "@/lib/constants";

export default function Hero() {
    return (
        <section
            id="hero"
            className="fixed inset-0 flex flex-col items-center justify-center bg-white text-neutral-900 font-mono px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100 z-0"
        >
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 hero-content opacity-0">
                <h1 className="text-4xl md:text-5xl font-semibold mb-3 text-neutral-900 dark:text-white tracking-wider">
                    Hi! I&apos;m Mainao
                </h1>
                <h2 className="text-lg font-semibold text-neutral-600 dark:text-gray-300">
                    Frontend Developer
                </h2>
                <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-[#f5d6ba]">
                    Welcome to my cozy corner on the internet
                </p>
            </div>

            {/* Flowers */}
            <div className="flex flex-wrap justify-center -mx-1 -my-1 mb-8 flower-images opacity-0">
                {FLOWERS.map((src, index) => (
                    <div key={index} className="p-1">
                        <Image
                            src={src}
                            alt={`Flower ${index + 1}`}
                            width={90}
                            height={90}
                            className="rounded-xl object-cover flower"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
