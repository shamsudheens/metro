"use client";

import Link from "next/link";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Added FaWhatsapp and FaInstagram

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Metro Gold & Diamonds</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Experience the purity of gold and diamond jewelry. Handcrafted designs for every occasion.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://wa.me/919995618543" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                                <FaWhatsapp size={24} />
                            </a>
                            <a href="https://www.instagram.com/metro.goldanddiamonds/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/#collections" className="hover:text-accent transition-colors">Collections</Link></li>
                            <li><Link href="/products" className="hover:text-accent transition-colors">All Products</Link></li>
                            <li><Link href="/#bestsellers" className="hover:text-accent transition-colors">Best Sellers</Link></li>
                            <li><Link href="/#locations" className="hover:text-accent transition-colors">Store Locations</Link></li>
                            <li><Link href="/#story" className="hover:text-accent transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-accent mt-1" size={18} />
                                <a href="https://maps.app.goo.gl/vJL42dbGa84uDesP9" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                    Kunnumpuram, Fort Kochi<br />Kerala, India
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-accent mt-1" size={18} />
                                <a href="https://maps.app.goo.gl/m9czJaeGFz3EbPFy8" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                    Near Metro Station, Aluva<br />Kerala, India
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-accent" size={18} />
                                <span>+91 99956 18543</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Metro Gold & Diamonds. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ Icon, href }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
        >
            <Icon size={18} />
        </a>
    );
}
