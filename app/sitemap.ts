import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nuqs-demo.vercel.app";
    const currentDate = new Date();

    // Pages statiques
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/todos`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    // Générer les pages dynamiques des todos (1-50) - réduit pour éviter les problèmes de build
    const todoPages: MetadataRoute.Sitemap = Array.from(
        { length: 50 },
        (_, i) => ({
            url: `${baseUrl}/todos/${i + 1}`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }),
    );

    // Pages de filtrage populaires
    const filterPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/todos?state=true`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/todos?state=false`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    return [...staticPages, ...todoPages, ...filterPages];
}
