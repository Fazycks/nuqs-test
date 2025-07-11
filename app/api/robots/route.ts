import { NextResponse } from "next/server";

export async function GET() {
    const robotsTxt = `# Robots.txt pour Nuqs Test
User-agent: *
Allow: /

# Pages principales
Allow: /
Allow: /todos
Allow: /todos/*

# Sitemap
Sitemap: ${
        process.env.NEXT_PUBLIC_BASE_URL || "https://nuqs-test.vercel.app"
    }/sitemap.xml

# Crawl-delay pour éviter la surcharge
Crawl-delay: 1

# Directives spécifiques pour les moteurs de recherche
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

# Bloquer les bots malveillants
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;

    return new NextResponse(robotsTxt, {
        headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
