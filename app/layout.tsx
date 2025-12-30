import { Provider } from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mainao.vercel.app"),

    title: "Mainao — Frontend Developer",
    description: "Mainao's Portfolio",

    openGraph: {
        title: "Mainao — Frontend Developer",
        description: "Mainao’s portfolio",
        images: [
            {
                url: "/icons/flower1.webp",
                width: 1200,
                height: 630,
                alt: "Mainao Portfolio Preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        images: ["/icons/flower1.webp"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
