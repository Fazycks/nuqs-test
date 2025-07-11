import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { SelectTodoState } from "./selectTodoState";
import { SelectTodoUserId } from "./selectTodoUserId";
import { fetchTodos } from "./todos.action";

export const metadata: Metadata = {
    title: "Liste des Todos",
    description:
        "Explorez la liste complète des tâches avec filtrage en temps réel. Démonstration de nuqs pour la gestion d'état URL avec Next.js.",
    keywords: [
        "todos",
        "tâches",
        "filtrage",
        "nuqs",
        "gestion d'état",
        "Next.js",
        "React",
    ],
    openGraph: {
        title: "Todos - Nuqs Test",
        description:
            "Liste des tâches avec filtrage en temps réel utilisant nuqs",
        url: "https://nuqs-test.vercel.app/todos",
        type: "website",
        images: [
            {
                url: "/og-todos.png",
                width: 1200,
                height: 630,
                alt: "Liste des todos avec filtrage nuqs",
            },
        ],
    },
    twitter: {
        title: "Todos - Nuqs Test",
        description:
            "Liste des tâches avec filtrage en temps réel utilisant nuqs",
        images: ["/twitter-todos.png"],
    },
    alternates: {
        canonical: "https://nuqs-test.vercel.app/todos",
    },
};

export default async function TodosPage(propos: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const searchParams = await propos.searchParams;
    const { state, userId } = searchParams;

    const todos = await fetchTodos({
        completed:
            state === "true" ? true : state === "false" ? false : undefined,
        userId: userId && userId !== "all" ? parseInt(userId) : undefined,
    });

    const completedCount = todos.filter((todo) => todo.completed).length;
    const totalCount = todos.length;

    // Données structurées pour le breadcrumb
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Accueil", url: "https://nuqs-test.vercel.app" },
        { name: "Todos", url: "https://nuqs-test.vercel.app/todos" },
    ]);

    // Schema pour la liste des todos
    const todoListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Liste des Todos",
        description: "Liste complète des tâches avec filtrage en temps réel",
        numberOfItems: totalCount,
        itemListElement: todos.slice(0, 10).map((todo, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: todo.title,
            url: `https://nuqs-test.vercel.app/todos/${todo.id}`,
            additionalProperty: {
                "@type": "PropertyValue",
                name: "status",
                value: todo.completed ? "completed" : "pending",
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(todoListSchema),
                }}
            />
            <div className="container mx-auto p-6 space-y-8">
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Todos
                            </h1>
                            <p className="text-muted-foreground mt-1">
                                Gérez et filtrez vos tâches avec nuqs
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <SelectTodoState />
                            <SelectTodoUserId />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                            Total: {totalCount}
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                            Complétées: {completedCount}
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1 text-sm">
                            En cours: {totalCount - completedCount}
                        </Badge>
                    </div>
                </div>

                {todos.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {todos.map((todo) => (
                            <Card
                                key={todo.id}
                                className="group hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary"
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            {todo.completed ? (
                                                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            ) : (
                                                <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                            )}
                                            <Badge
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                #{todo.id}
                                            </Badge>
                                        </div>
                                        <Badge
                                            variant={
                                                todo.completed
                                                    ? "default"
                                                    : "outline"
                                            }
                                            className={`text-xs ${
                                                todo.completed
                                                    ? "bg-green-500/10 text-green-700 border-green-200"
                                                    : ""
                                            }`}
                                        >
                                            {todo.completed
                                                ? "Terminé"
                                                : "En cours"}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                                        {todo.title}
                                    </CardTitle>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">
                                            User ID: {Math.ceil(todo.id / 20)}
                                        </span>
                                        <Link
                                            href={`/todos/${todo.id}`}
                                            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                                        >
                                            Voir détails
                                            <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <Card className="text-center py-12">
                        <CardContent>
                            <div className="space-y-4">
                                <Circle className="h-16 w-16 text-muted-foreground/30 mx-auto" />
                                <div>
                                    <CardTitle className="text-xl text-muted-foreground">
                                        Aucune tâche trouvée
                                    </CardTitle>
                                    <CardDescription className="mt-2">
                                        Essayez de modifier vos filtres pour
                                        voir plus de résultats
                                    </CardDescription>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="text-center text-sm text-muted-foreground border-t pt-6">
                    <p>
                        Filtres appliqués via nuqs - L'URL est synchronisée avec
                        l'état de filtrage
                    </p>
                </div>
            </div>
        </>
    );
}
