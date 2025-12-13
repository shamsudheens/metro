"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
    return (
        <section id="story" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative h-[500px]">
                        {/* Using hero-bg as placeholder for history image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center rounded-lg shadow-2xl"
                            style={{ backgroundImage: "url('/images/hero-bg.png')" }}
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block">
                            <p className="font-serif text-2xl text-primary font-bold">Est. 1998</p>
                            <p className="text-gray-500 text-sm">Over two decades of trust</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-4">Our Heritage</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Crafting Memories Since 1998</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Metro Gold & Diamonds began with a simple vision: to make luxury accessible without compromising on quality. From a humble beginning in the heart of the Gold Souk, we have grown into a trusted name across the Emirates.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our journey is defined by our commitment to our customers. We believe that jewelry is not just ornamentation, but a celebration of life's precious moments. That's why every piece in our showroom is handpicked for its beauty and purity.
                        </p>
                        <div className="flex gap-8 mt-8">
                            <div>
                                <span className="block text-3xl font-serif font-bold text-accent">10k+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
