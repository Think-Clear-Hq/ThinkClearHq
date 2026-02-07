"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 border-b border-glass-border bg-black/50 backdrop-blur-md transform-gpu [backface-visibility:hidden]">
            <Container className="flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-heading font-bold tracking-tight hover:text-neon-green transition-colors chrome-text"
                >
                    Think Clear
                </Link>

                <nav className="flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-neon-green",
                                pathname === link.href ? "text-neon-green" : "text-gray-400"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </header>
    );
}
