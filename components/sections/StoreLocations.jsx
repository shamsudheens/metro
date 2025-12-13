"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone } from "react-icons/fi";

const locations = [
    {
        city: "Fort Kochi",
        address: "Kunnumpuram, Fort Kochi, Kerala",
        phone: "+91 99956 18543",
        mapLink: "https://maps.app.goo.gl/vJL42dbGa84uDesP9"
    },
    {
        city: "Aluva",
        address: "Near Metro Station, Aluva, Kerala",
        phone: "+91 99956 18543",
        mapLink: "https://maps.app.goo.gl/m9czJaeGFz3EbPFy8"
    },
];

export default function StoreLocations() {
    return (
        <section id="locations" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Visit Us</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Our Showrooms</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-accent shadow-sm">
                                <FiMapPin size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-2">{loc.city}</h3>
                            <p className="text-gray-500 mb-4">{loc.address}</p>
                            <p className="text-primary font-medium flex items-center justify-center gap-2">
                                <FiPhone size={16} /> {loc.phone}
                            </p>
                            <a
                                href={loc.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 text-sm text-accent uppercase font-bold tracking-wider hover:text-primary transition-colors"
                            >
                                Get Directions
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
