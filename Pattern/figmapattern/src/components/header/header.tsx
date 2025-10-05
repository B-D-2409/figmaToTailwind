"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../shared/buttons";
import { useRouter } from "next/navigation";

const navLinks = [
    { href: "/products", label: "Продукти" },
    { href: "/blog", label: "Блог" },
    { href: "/special-request", label: "Специален Допит" },
    { href: "/partners", label: "Партньори" },
    { href: "/corporate-clients", label: "Корпоративни Клиенти" },
    { href: "/contacts", label: "Контакти" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleLinkClick = (href: string) => {
        setMenuOpen(false);
        router.push(href);
    };

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                <Link href="/">
                    <h1 className="text-2xl font-bold cursor-pointer">Figma Pattern</h1>
                </Link>

                <div className="hidden md:flex gap-2">
                    {navLinks.map((link) => (
                        <Button
                            key={link.href}
                            size="sm"
                            variant="primary"
                            radius="xl"
                            onClick={() => handleLinkClick(link.href)}
                        >
                            {link.label}
                        </Button>
                    ))}
                </div>

                <div className="md:hidden">
                    <Button size="sm" variant="primary" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "Закрий" : "Меню"}
                    </Button>
                </div>

                {menuOpen && (
                    <div className="flex flex-col gap-2 mt-2 md:hidden">
                        {navLinks.map((link) => (
                            <Button
                                key={link.href}
                                size="sm"
                                variant="primary"
                                radius="xl"
                                onClick={() => handleLinkClick(link.href)}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
