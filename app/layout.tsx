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
    title: "Mainao — Frontend Developer",
    description: "Mainao's Portfolio",
    icons: {
        icon: "/icons/flower1.webp",
    },
    openGraph: {
        title: "Mainao — Frontend Developer",
        description: "Mainao’s portfolio",
        url: "https://mainao.vercel.app",
        siteName: "Mainao's Portfolio",
        images: [
            {
                url: "/icons/flower1.webp",
                width: 1200,
                height: 630,
                alt: "Mainao Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mainao — Frontend Developer",
        description: "Mainao’s Portfolio",
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
