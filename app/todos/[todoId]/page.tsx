import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Circle, User } from "lucide-react";
import Link from "next/link";
import { fetchTodoById } from "../todos.action";

export default async function TodoPage(props: {
    params: Promise<{ todoId: number }>;
}) {
    const params = await props.params;
    const todo = await fetchTodoById(params.todoId);
    const userId = Math.ceil(todo.id / 20);

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            {/* Navigation */}
            <div className="mb-6">
                <Button variant="ghost" asChild className="pl-0">
                    <Link href="/todos" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Retour aux todos
                    </Link>
                </Button>
            </div>

            {/* Hero Section */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-sm">
                                Todo #{todo.id}
                            </Badge>
                            <Badge
                                variant={todo.completed ? "default" : "outline"}
                                className={`${
                                    todo.completed
                                        ? "bg-green-500/10 text-green-700 border-green-200"
                                        : ""
                                }`}
                            >
                                {todo.completed ? "Terminé" : "En cours"}
                            </Badge>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            Détails de la tâche
                        </h1>
                        <p className="text-muted-foreground">
                            Consultez les informations complètes de cette tâche
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Todo Details Card */}
                    <div className="lg:col-span-2">
                        <Card className="border-l-4 border-l-primary/20">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    {todo.completed ? (
                                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    ) : (
                                        <Circle className="h-6 w-6 text-muted-foreground" />
                                    )}
                                    <div>
                                        <CardTitle className="text-xl">
                                            Titre de la tâche
                                        </CardTitle>
                                        <CardDescription>
                                            Description complète de cette tâche
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <p className="text-lg leading-relaxed">
                                        {todo.title}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>Statut:</span>
                                        <Badge
                                            variant={
                                                todo.completed
                                                    ? "default"
                                                    : "outline"
                                            }
                                            className={`${
                                                todo.completed
                                                    ? "bg-green-500/10 text-green-700 border-green-200"
                                                    : ""
                                            }`}
                                        >
                                            {todo.completed
                                                ? "Complétée"
                                                : "Non complétée"}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* User Info Card */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Utilisateur
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        ID Utilisateur
                                    </span>
                                    <Badge variant="outline">{userId}</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Nom
                                    </span>
                                    <span className="text-sm font-medium">
                                        User {userId}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Meta Info Card */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">
                                    Informations
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        ID de la tâche
                                    </span>
                                    <Badge variant="secondary">
                                        #{todo.id}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Progression
                                    </span>
                                    <span className="text-sm font-medium">
                                        {todo.completed ? "100%" : "0%"}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">
                                        Source
                                    </span>
                                    <span className="text-sm font-medium">
                                        JSONPlaceholder
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Actions */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">
                                    Actions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full"
                                >
                                    <Link href={`/todos?userId=${userId}`}>
                                        Voir tous les todos de cet utilisateur
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full"
                                >
                                    <Link
                                        href={`/todos?state=${todo.completed}`}
                                    >
                                        Voir les todos{" "}
                                        {todo.completed
                                            ? "terminés"
                                            : "en cours"}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-6">
                <p>
                    Cette page utilise des paramètres d'URL dynamiques avec
                    Next.js
                </p>
            </div>
        </div>
    );
}
