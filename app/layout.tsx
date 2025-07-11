import { Header } from "@/components/layout/header";
import { Providers } from "@/features/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
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
    title: {
        default: "Nuqs Test - Gestion d'état URL avec Next.js",
        template: "%s | Nuqs Test",
    },
    description:
        "Découvrez la puissance de nuqs pour la gestion d'état dans l'URL avec Next.js. Une démonstration complète avec filtrage et navigation.",
    keywords: [
        "nuqs",
        "Next.js",
        "React",
        "URL state management",
        "TypeScript",
        "filtrage",
        "todos",
        "démo",
    ],
    authors: [{ name: "Nuqs Test" }],
    creator: "Nuqs Test",
    publisher: "Nuqs Test",
    applicationName: "Nuqs Test",
    generator: "Next.js",
    category: "Technology",
    classification: "Web Application",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://nuqs-test.vercel.app",
        siteName: "Nuqs Test",
        title: "Nuqs Test - Gestion d'état URL avec Next.js",
        description:
            "Découvrez la puissance de nuqs pour la gestion d'état dans l'URL avec Next.js. Une démonstration complète avec filtrage et navigation.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Nuqs Test - Gestion d'état URL",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nuqs Test - Gestion d'état URL avec Next.js",
        description:
            "Découvrez la puissance de nuqs pour la gestion d'état dans l'URL avec Next.js",
        images: ["/twitter-image.png"],
        creator: "@nuqs_demo",
        site: "@nuqs_demo",
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
    },
    alternates: {
        canonical: "https://nuqs-demo.vercel.app",
        languages: {
            "fr-FR": "https://nuqs-demo.vercel.app/fr",
            "en-US": "https://nuqs-demo.vercel.app/en",
        },
    },
    manifest: "/manifest.json",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#000000",
            },
        ],
    },
    appleWebApp: {
        capable: true,
        title: "Nuqs Test",
        statusBarStyle: "default",
    },
    formatDetection: {
        telephone: false,
        date: false,
        address: false,
        email: false,
        url: false,
    },
    metadataBase: new URL("https://nuqs-demo.vercel.app"),
};

export function generateViewport() {
    return {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body
                className={cn(
                    geistMono.variable,
                    geistSans.variable,
                    "antialiased h-full flex flex-col",
                )}
                suppressHydrationWarning
            >
                <Providers>
                    <Header />
                    <NuqsAdapter>
                        <main className="flex-1">{children}</main>
                    </NuqsAdapter>
                </Providers>
            </body>
        </html>
    );
}
