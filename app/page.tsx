import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-full bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Nuqs Demo
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                        Découvrez la puissance de nuqs pour la gestion d'état
                        dans l'URL avec Next.js
                    </p>
                </div>

                <Card className="border-2 border-primary/10 shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">
                            Gestion d'État URL
                        </CardTitle>
                        <CardDescription className="text-lg">
                            Explorez comment nuqs synchronise l'état de votre
                            application avec l'URL
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 text-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Filtrage et recherche en temps réel</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>URLs partageables et bookmarkables</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Navigation browser native</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Type-safe avec TypeScript</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button asChild size="lg" className="flex-1">
                                <Link href="/todos">Voir la démo Todo</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="flex-1"
                            >
                                <Link
                                    href="https://nuqs.47ng.com"
                                    target="_blank"
                                >
                                    Documentation
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center text-sm text-muted-foreground">
                    <p>
                        Construit avec{" "}
                        <span className="font-semibold text-foreground">
                            Next.js
                        </span>
                        ,{" "}
                        <span className="font-semibold text-foreground">
                            nuqs
                        </span>{" "}
                        et{" "}
                        <span className="font-semibold text-foreground">
                            Tailwind CSS
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
