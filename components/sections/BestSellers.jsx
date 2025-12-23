"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

const products = [
    {
        id: 1,
        name: "Royal Necklace with Stones",
        image: "/images/jewellery3.jpeg",
        category: "Gold",
    },
    {
        id: 2,
        name: "Solitaire Diamond Ring",
        image: "/images/ring2.jpeg",
        category: "Diamond",
    },
    {
        id: 3,
        name: "Elegant Gold Bangles",
        image: "/images/jewellery9.jpeg",
        category: "Gold",
    },
    {
        id: 4,
        name: " Diamond Ring with Stone",
        image: "/images/ring5.jpeg",
        category: "Diamond",
    },
];

export default function BestSellers() {
    return (
        <section id="bestsellers" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Trending</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Best Sellers</h2>
                    </div>
                    <Link href="/products" className="hidden md:block text-primary font-medium hover:text-accent transition-colors">View All Products &rarr;</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                                    <a
                                        href={`https://wa.me/919995618543?text=I am interested in ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2 bg-white/90 backdrop-blur-sm text-primary text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors shadow-lg"
                                    >
                                        <FiMessageCircle size={16} /> Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</span>
                                <h3 className="text-lg font-serif font-bold text-primary mt-1 truncate">{product.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10 md:hidden">
                    <Link href="/products" className="text-primary font-medium hover:text-accent transition-colors">View All Products &rarr;</Link>
                </div>
            </div>
        </section>
    );
}
