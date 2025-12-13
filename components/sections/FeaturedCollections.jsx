"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const collections = [
    {
        id: 1,
        title: "Gold Jewelry",
        image: "/images/hero-bg.png",
        link: "/products?category=gold",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Diamond Collection",
        image: "/images/collection-diamond.png",
        link: "/products?category=diamond",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Bridal Trends",
        image: "/images/collection-gold.png",
        link: "/products?category=bridal",
        colSpan: "md:col-span-3", // Make it full width or adjust based on layout preference
    },
];

export default function FeaturedCollections() {
    return (
        <section id="collections" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Discover</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Featured Collections</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our wide range of handcrafted jewelry, designed to make every moment specific.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative group overflow-hidden rounded-lg cursor-pointer ${collection.colSpan}`}
                        >
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${collection.isPlatinum ? 'grayscale' : ''}`}
                                style={{ backgroundImage: `url(${collection.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-serif font-bold text-white mb-2">{collection.title}</h3>
                                <Link
                                    href={collection.link}
                                    className="inline-flex items-center text-secondary-gold font-medium uppercase tracking-wider text-sm hover:text-white transition-colors"
                                >
                                    Shop Now <FiArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
