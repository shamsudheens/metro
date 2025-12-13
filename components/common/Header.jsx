"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isProductsPage = pathname === "/products";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Collections", href: "/#collections" },
        { name: "Best Sellers", href: "/#bestsellers" },
        { name: "Products", href: "/products" },
        { name: "Locations", href: "/#locations" },
        { name: "About", href: "/#story" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isProductsPage
                ? "bg-primary/60 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center h-12 md:h-20 w-auto"
                >
                    <img
                        src="/images/logo.png"
                        alt="Metro Gold Logo"
                        className="h-full w-20 md:w-28 object-cover bg-transparent"
                        draggable={false}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide transition-colors uppercase text-white hover:text-accent drop-shadow-lg"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://www.instagram.com/metro.goldanddiamonds/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#E1306C] transition-colors p-2"
                        aria-label="Instagram"
                    >
                        <FiInstagram size={24} />
                    </a>
                    <a
                        href="https://wa.me/919995618543?text=Hello! I would like to know more about your jewelry collection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#25D366] transition-colors p-2"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden transition-colors text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
