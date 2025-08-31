import Image from "next/image";
import { CONTACTS } from "@/lib/constants";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative font-mono py-20 bg-[#FEFAF0] dark:bg-zinc-900"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-12">
                    Say Hello
                </h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {CONTACTS.map(({ src, alt, label, link, size }) => (
                        <a
                            key={alt}
                            href={link}
                            target="_blank"
                            className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform"
                        >
                            <div className="w-24 h-24 relative">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className={`object-contain ${size}`}
                                />
                            </div>
                            <span className="font-medium text-lg">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
