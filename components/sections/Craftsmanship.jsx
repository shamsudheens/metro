"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Craftsmanship() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-4">Our Promise</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                            Master Craftsmanship & Uncompromised Purity
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Behind every Metro masterpiece is the touch of a master artisan. We combine centuries-old traditional techniques with modern precision to create jewelry that isn't just an accessory, but an heirlooom.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We promise 100% transparency in pricing and purity. Watch your jewelry being tested on our advanced Karatmeters for complete peace of mind.
                        </p>

                        <Link
                            href="#story"
                            className="inline-flex items-center px-8 py-3 bg-primary text-white font-bold tracking-widest uppercase hover:bg-accent hover:text-primary transition-all duration-300"
                        >
                            Read Our Story <FiArrowRight className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                            {/* Use the generated image here */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/artisan-craft.png')" }}
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-gold/20 -z-10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 -z-10 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
