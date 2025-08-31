import Image from "next/image";
import { EXPERIENCES } from "@/lib/constants";

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative min-h-screen pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32 font-mono bg-white dark:bg-zinc-900 z-10"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="p-10 border-2 border-dotted border-slate-500 rounded-sm">
                        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-12 text-center">
                            Experience
                        </h2>

                        <div className="space-y-6">
                            {EXPERIENCES.map(
                                ({ company, period, role, flower }, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"
                                    >
                                        {/* Flower */}
                                        <div className="flex justify-center md:justify-start">
                                            <Image
                                                src={flower}
                                                alt={`Flower for ${company}`}
                                                width={60}
                                                height={60}
                                                className="rounded-xl object-cover flower"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="md:col-span-3">
                                            <article className="group relative flex flex-col items-start">
                                                <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                    <span>{company}</span>
                                                    <span className="text-sm font-normal text-zinc-600 dark:text-zinc-400">
                                                        — {role}
                                                    </span>
                                                </div>
                                                <p className="relative z-10 mt-2 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                                    <span
                                                        className="absolute inset-y-0 left-0 flex items-center"
                                                        aria-hidden="true"
                                                    >
                                                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                                    </span>
                                                    {period}
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
