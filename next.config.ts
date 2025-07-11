import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Configuration SEO et Performance
    trailingSlash: false,
    poweredByHeader: false,

    // Headers de sécurité et SEO
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    // Sécurité
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    // Performance
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    // SEO
                    {
                        key: "X-Robots-Tag",
                        value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
                    },
                ],
            },
            // Headers spécifiques pour les images
            {
                source: "/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            // Headers pour les fichiers statiques
            {
                source: "/(.*)\\.(js|css|woff|woff2|ttf|eot)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Optimisation des images
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Configuration experimentale pour de meilleures performances
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default nextConfig;
