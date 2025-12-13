"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const occasions = [
    {
        id: 1,
        title: "Bridal",
        image: "/images/hero-bg.png", // Reuse hero
        subtitle: "For your special day",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Gifting",
        image: "/images/collection-gold.png",
        subtitle: "Timeless tokens of love",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Daily Wear",
        image: "/images/collection-diamond.png",
        subtitle: "Elegant minimalism",
        colSpan: "md:col-span-1",
    },
];

export default function OccasionJewelry() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Shop By Occasion</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Celebrate Every Moment</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[500px]">
                    {occasions.map((occasion, index) => (
                        <motion.div
                            key={occasion.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`relative rounded-lg overflow-hidden group cursor-pointer ${occasion.colSpan}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${occasion.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-secondary-gold text-xs font-bold uppercase tracking-widest mb-2 block">{occasion.subtitle}</span>
                                <h3 className="text-3xl font-serif font-bold text-white mb-4">{occasion.title}</h3>
                                <Link href="#" className="text-white border-b border-white pb-1 hover:text-secondary-gold hover:border-secondary-gold transition-colors">
                                    Explore Collection
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
