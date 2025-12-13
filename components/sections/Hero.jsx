"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h2 className="text-secondary-gold text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-medium">
                        Timeless Elegance
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Metro Gold & Diamonds
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto">
                        Experience the purity of unparalleled craftsmanship.
                        Adorning generations with trust and brilliance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="#collections"
                            className="px-8 py-4 bg-secondary-gold text-primary font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 min-w-[200px]"
                        >
                            Explore Collection
                        </Link>
                        <Link
                            href="#locations"
                            className="px-8 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300 min-w-[200px]"
                        >
                            Visit Showroom
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70"
            >
                <span className="text-xs uppercase tracking-widest mb-2 block">Scroll</span>
                <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
            </motion.div>
        </section>
    );
}
