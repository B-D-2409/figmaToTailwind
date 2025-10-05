"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, User, ShoppingBag } from "lucide-react";
import Button from "../shared/buttons";

const navLinks = [
    { href: "/products", label: "Продукти" },
    { href: "/blog", label: "Блог" },
    { href: "/special-request", label: "Специален Допит" },
    { href: "/partners", label: "Партньори" },
    { href: "/corporate-clients", label: "Корпоративни Клиенти" },
    { href: "/contacts", label: "Контакти" },
];

export default function Header() {
    const [search, setSearch] = useState("");
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();
    const cartCount = 0;

    const handleLinkClick = (href: string) => router.push(href);
    const handleSearch = () => {
        if (search.trim()) router.push(`/search?query=${encodeURIComponent(search)}`);
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 px-4 py-3">

                <Link href="/" className="ml-auto">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors">
                        Great.bg
                    </h1>
                </Link>
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Button
                            key={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
                        >
                            {link.label}
                        </Button>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-1"> 
                    <div className="relative w-[180px]">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            placeholder="Търси..."
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                            onClick={handleSearch}
                            className="absolute right-2 text-gray-500 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                        >
                            <Search size={18} />
                        </Button>
                    </div>

                    <Button
                        onClick={() => router.push("/cart")}
                        className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                    >
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                                {cartCount}
                            </span>
                        )}
                    </Button>

                    <Button
                        onClick={() => router.push("/profile")}
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                    >
                        <User size={24} />
                    </Button>
                </div>

                <div className="flex items-center md:hidden gap-1">
                    <div className="flex-1 max-w-[120px] relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            placeholder="Търси..."
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-full px-2 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                            onClick={handleSearch}
                            className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                        >
                            <Search size={16} />
                        </Button>
                    </div>

                    <Button
                        onClick={() => router.push("/cart")}
                        className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                    >
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                                {cartCount}
                            </span>
                        )}
                    </Button>

                    <Button
                        onClick={() => router.push("/profile")}
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors bg-transparent px-0 py-0"
                    >
                        <User size={24} />
                    </Button>

                    <Button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="text-gray-700 dark:text-gray-200 bg-transparent px-0 py-0"
                    >
                        {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {mobileMenu && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 py-3 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Button
                            key={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className="text-left text-gray-800 dark:text-gray-200 transition-colors w-full bg-transparent px-0 py-0"
                        >
                            {link.label}
                        </Button>
                    ))}
                </div>
            )}
        </header>
    );
}
