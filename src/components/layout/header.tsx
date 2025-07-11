import Link from "next/link";
import { ModeToggle } from "../theme/themeModeToggle";

const Links = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/todos",
        label: "Todos",
    },
];

export function Header() {
    return (
        <header className="flex items-center justify-between py-2 px-4 border-b border-accent">
            <Link href="/" className="text-2xl font-bold">
                <h1>Nuqs Test</h1>
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    {Links.map((link, i) => (
                        <li key={i}>
                            <Link href={link.href} className="hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <ModeToggle />
        </header>
    );
}
