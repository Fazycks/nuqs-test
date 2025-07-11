import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                {/* 404 Icon */}
                <div className="space-y-4">
                    <div className="text-8xl font-bold text-primary/20">
                        404
                    </div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Page non trouvée
                    </h1>
                    <p className="text-muted-foreground">
                        Désolé, la page que vous recherchez n'existe pas ou a
                        été déplacée.
                    </p>
                </div>

                {/* Actions Card */}
                <Card className="border-primary/10">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center justify-center gap-2">
                            <Search className="h-5 w-5" />
                            Que souhaitez-vous faire ?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-col gap-3">
                            <Button asChild className="w-full">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <Home className="h-4 w-4" />
                                    Retour à l'accueil
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full"
                            >
                                <Link
                                    href="/todos"
                                    className="flex items-center gap-2"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Voir les todos
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Help Text */}
                <div className="text-sm text-muted-foreground">
                    <p>
                        Si vous pensez qu'il s'agit d'une erreur, vous pouvez{" "}
                        <Link href="/" className="text-primary hover:underline">
                            retourner à l'accueil
                        </Link>{" "}
                        et naviguer à partir de là.
                    </p>
                </div>
            </div>
        </div>
    );
}
