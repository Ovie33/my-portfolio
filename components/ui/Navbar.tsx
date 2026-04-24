"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteOwner } from "@/lib/data";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-extrabold text-xl tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
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
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors px-3 py-2"
                    >
                        <Download size={15} />
                        Resume
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-slate-100 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                        <a
                            href={siteOwner.cvUrl}
                            download
                            className="flex-1 text-center text-sm font-semibold text-slate-700 border border-slate-200 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors"
                        >
                            Resume
                        </a>
                        <Link
                            href="/contact"
                            className="flex-1 text-center text-sm font-semibold text-white bg-slate-900 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
