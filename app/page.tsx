import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-900 font-mono px-6">
            {/* Header */}
            <header className="text-center mb-20">
                <h1 className="text-3xl md:text-4xl font-bold">Mainao</h1>
                <div className="flex">
                    <h2 className="text-sm text-neutral-500 mt-2">
                        Frontend Developer
                    </h2>
                    <img
                        src="/icons/star.png"
                        alt="Star icon"
                        className="w-8 h-8"
                    />
                </div>
            </header>

            {/* Icon Links */}
            <div className="flex gap-10 md:gap-14">
                {[
                    { href: "/", icon: "about.png", label: "About" },
                    {
                        href: "/",
                        icon: "project.png",
                        label: "Projects",
                    },
                    { href: "/", icon: "skills.png", label: "Skills" },
                    { href: "/", icon: "contact.png", label: "Contact" },
                ].map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        title={label}
                        aria-label={label}
                        className="flex flex-col items-center hover:scale-110 transition"
                    >
                        <Image
                            src={`/icons/${icon}`}
                            width={64}
                            height={64}
                            className="w-16 h-16 mb-1 object-contain"
                            alt={`${label} icon`}
                        />
                        <p className="text-sm text-neutral-700 text-center">
                            {label}
                        </p>
                    </a>
                ))}
            </div>

            {/* Footer */}
            <footer className="flex items-center mt-20 text-xs text-neutral-400">
                <p>© 2025 — made with </p>
                <img
                    src="/icons/heart.png"
                    alt="Heart icon"
                    className="w-4 h-4 ml-2"
                />
            </footer>
        </main>
    );
}
