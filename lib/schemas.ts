export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Nuqs Test",
        description:
            "Démonstration de nuqs pour la gestion d'état dans l'URL avec Next.js",
        url: "https://nuqs-test.vercel.app",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    "https://nuqs-test.vercel.app/todos?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
        publisher: {
            "@type": "Organization",
            name: "Nuqs Test",
            url: "https://nuqs-test.vercel.app",
        },
        inLanguage: "fr-FR",
        copyrightYear: 2025,
        genre: "Technology Demo",
    };
}

export function generateWebApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Nuqs Test",
        description:
            "Application de démonstration pour nuqs - gestion d'état URL avec Next.js",
        url: "https://nuqs-test.vercel.app",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
        },
        creator: {
            "@type": "Organization",
            name: "Nuqs Test Team",
        },
        featureList: [
            "Gestion d'état dans l'URL",
            "Filtrage en temps réel",
            "Navigation type-safe",
            "URLs partageables",
            "Interface responsive",
        ],
        screenshot: [
            "https://nuqs-test.vercel.app/screenshot-wide.png",
            "https://nuqs-test.vercel.app/screenshot-narrow.png",
        ],
    };
}

export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>,
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateTodoSchema(todo: {
    id: number;
    title: string;
    completed: boolean;
}) {
    const userId = Math.ceil(todo.id / 20);

    return {
        "@context": "https://schema.org",
        "@type": "Thing",
        name: `Todo #${todo.id}`,
        description: todo.title,
        url: `https://nuqs-test.vercel.app/todos/${todo.id}`,
        identifier: todo.id.toString(),
        additionalProperty: [
            {
                "@type": "PropertyValue",
                name: "status",
                value: todo.completed ? "completed" : "pending",
            },
            {
                "@type": "PropertyValue",
                name: "userId",
                value: userId.toString(),
            },
        ],
        isPartOf: {
            "@type": "WebPage",
            name: "Todos",
            url: "https://nuqs-test.vercel.app/todos",
        },
    };
}
