"use client";

import { motion } from "framer-motion";
import { FiAward, FiShield, FiCheckCircle } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

const features = [
    {
        id: 1,
        icon: <FiAward size={40} />,
        title: "BIS Hallmarked",
        description: "100% Certified Gold with HUID for purity assurance.",
    },
    {
        id: 2,
        icon: <IoDiamondOutline size={40} />,
        title: "Certified Diamonds",
        description: "Every diamond comes with IGI/GIA certification.",
    },
    {
        id: 3,
        icon: <FiShield size={40} />,
        title: "Lifetime Exchange",
        description: "Transparent policies with 100% buyback guarantee.",
    },
    {
        id: 4,
        icon: <FiCheckCircle size={40} />,
        title: "Legacy of Trust",
        description: "Over 25 years of excellence in jewelry craftsmanship.",
    },
];

export default function BrandTrust() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">The Metro Promise</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group p-8 border border-gray-100 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center bg-gray-50/50"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center text-secondary-gold shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-primary mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
