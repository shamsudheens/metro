"use client";

import { motion } from "framer-motion";

const uspItems = [
    {
        number: "100%",
        label: "Purity Guaranteed",
        text: "Every piece is BIS Hallmarked and IGI Certified."
    },
    {
        number: "25+",
        label: "Years Legacy",
        text: "A tradition of trust and excellence since 1998."
    },
    {
        number: "5000+",
        label: "Designs",
        text: "From traditional temple jewelry to modern chic."
    },
    {
        number: "0%",
        label: "Deduction",
        text: "On old gold exchange. Best value for your gold."
    },
];

export default function USP() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {uspItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="px-4 pt-8 md:pt-0"
                        >
                            <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">{item.number}</div>
                            <div className="text-xl font-medium mb-3">{item.label}</div>
                            <p className="text-gray-300 text-sm">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
