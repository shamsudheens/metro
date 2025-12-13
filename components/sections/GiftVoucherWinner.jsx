"use client";

import { motion } from "framer-motion";
import { FiGift, FiAward } from "react-icons/fi";

export default function GiftVoucherWinner() {
    return (
        <section className="py-20 bg-gradient-to-br from-accent/10 via-white to-primary/5 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-accent/20 px-6 py-2 rounded-full mb-4"
                    >
                        <FiGift className="text-accent" size={20} />
                        <span className="text-accent text-sm font-bold uppercase tracking-widest">Special Announcement</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        Gift Voucher Winner! 🎉
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Celebrating our valued customers with exclusive rewards
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
                            <img
                                src="/images/giftvoucherwinner.jpeg"
                                alt="Gift Voucher Winner"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                Winner 🏆
                            </div>
                        </div>
                        {/* Decorative corner */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-accent/10">
                            <div className="flex items-center gap-3 mb-4">
                                <FiAward className="text-accent" size={32} />
                                <h3 className="text-2xl font-serif font-bold text-primary">
                                    Congratulations!
                                </h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our first <span className="font-bold text-accent">Gift Coupon</span> has been handed over today to our beloved customer <span className="font-bold text-primary">Mr. Sibi Joseph!</span> 🛍️✨
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Thank you for your continued support 💛
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stay tuned — more surprises are on the way! 🎁
                            </p>

                            <div className="pt-6 border-t border-accent/20">
                                <p className="text-primary font-bold text-lg flex items-center gap-2">
                                    <span className="text-accent">—</span>
                                    METRO GOLD AND DIAMONDS
                                    <span className="text-accent">💎</span>
                                </p>
                            </div>
                        </div>

                        {/* Call to action */}
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-xl border border-accent/20">
                            <p className="text-sm text-gray-600 text-center">
                                <span className="font-bold text-primary">Want to be our next winner?</span><br />
                                Visit our showroom and explore exclusive offers!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
