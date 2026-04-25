"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks, siteOwner } from "@/lib/data";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggle } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    {siteOwner.initials}
                    <span className="text-blue-600">.</span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? "text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop CTA + theme toggle */}
                <div className="hidden md:flex items-center gap-2">
                    {/* Theme toggle */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle dark mode"
                        className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-3 py-2"
                    >
                        <Download size={15} />
                        Resume
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile right side: theme toggle + hamburger */}
                <div className="md:hidden flex items-center gap-1">
                    <button
                        onClick={toggle}
                        aria-label="Toggle dark mode"
                        className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? "text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <Link
                            href="/resume"
                            className="flex-1 text-center text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Resume
                        </Link>
                        <Link
                            href="/contact"
                            className="flex-1 text-center text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
