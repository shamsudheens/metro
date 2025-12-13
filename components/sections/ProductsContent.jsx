"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiMessageCircle } from "react-icons/fi";

const allProducts = [
    // Gold Jewelry
    { id: 1, name: "Royal Gold Necklace", category: "gold", image: "/images/jewellery1.jpeg" },
    { id: 2, name: "Antique Gold Chain Set", category: "gold", image: "/images/jewellery2.jpeg" },
    { id: 3, name: "Gold Necklace with Stones", category: "gold", image: "/images/jewellery3.jpeg" },
    { id: 4, name: "Gold Bridal Chain", category: "gold", image: "/images/jewellery4.jpeg" },
    { id: 5, name: "Elegant Gold Bangle", category: "gold", image: "/images/jewellery5.jpeg" },
    { id: 6, name: "Gold Earring Ring", category: "gold", image: "/images/jewellery6.jpeg" },
    { id: 7, name: "Gold Stone Bangle", category: "gold", image: "/images/jewellery7.jpeg" },
    { id: 8, name: "Traditional Gold Bangle", category: "gold", image: "/images/jewellery8.jpeg" },
    { id: 9, name: "Elegant Gold Bangle", category: "gold", image: "/images/jewellery9.jpeg" },
    { id: 10, name: "Elegant Gold Bangle", category: "gold", image: "/images/jewellery10.jpeg" },
    { id: 11, name: "Elegant Gold Bangle", category: "gold", image: "/images/jewellery11.jpeg" },
    { id: 12, name: "Statement Gold Bangle", category: "gold", image: "/images/jewellery12.jpeg" },
    { id: 13, name: "Gold Ornament Necklace", category: "gold", image: "/images/jewellery13.jpeg" },
    { id: 14, name: "Gold Choker Necklace", category: "gold", image: "/images/jewellery14.jpeg" },
    { id: 15, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery15.jpeg" },
    { id: 16, name: "Gold Kada Bracelet", category: "gold", image: "/images/jewellery16.jpeg" },
    { id: 17, name: "Gold Locket Necklace", category: "gold", image: "/images/jewellery17.jpeg" },
    { id: 18, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery18.jpeg" },
    { id: 19, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery19.jpeg" },
    { id: 20, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery20.jpeg" },
    { id: 22, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery22.jpeg" },
    { id: 23, name: "Gold Locket Necklace ", category: "gold", image: "/images/jewllery23.jpeg" },
    { id: 24, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery24.jpeg" },
    { id: 25, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery25.jpeg" },
    { id: 26, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery26.jpeg" },
    { id: 27, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery27.jpeg" },
    { id: 28, name: "Gold Locket Necklace", category: "gold", image: "/images/jewllery28.jpeg" },
    { id: 29, name: "Gold Locket Necklace", category: "gold", image: "/images/jewellery29.jpeg" },
    { id: 30, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery30.jpeg" },
    { id: 31, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery31.jpeg" },
    { id: 32, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery32.jpeg" },
    { id: 33, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery33.jpeg" },
    { id: 34, name: "Gold Drop Necklace", category: "gold", image: "/images/jewellery34.jpeg" },
    { id: 35, name: "Gold Necklace Collection", category: "gold", image: "/images/jewellery35.jpeg" },
    { id: 36, name: "Gold Necklace Collection", category: "gold", image: "/images/jewellery36.jpeg" },
    { id: 51, name: "Gold Ring Design 1", category: "gold", image: "/images/ring1.jpeg" },
    { id: 61, name: "Gold Locket 1", category: "gold", image: "/images/locket1.jpeg" },
    { id: 62, name: "Gold Locket 2", category: "gold", image: "/images/locket2.jpeg" },
    { id: 63, name: "Gold Locket 3", category: "gold", image: "/images/locket3.jpeg" },

    // Diamond Jewelry
    { id: 21, name: "Diamond Earring Studs", category: "diamond", image: "/images/jewllery21.jpeg" },
    { id: 52, name: "Diamond Ring 1", category: "diamond", image: "/images/ring2.jpeg" },
    { id: 53, name: "Diamond Ring 2", category: "diamond", image: "/images/ring3.jpeg" },
    { id: 54, name: "Diamond Ring 3", category: "diamond", image: "/images/ring4.jpeg" },
    { id: 55, name: "Diamond Ring 4", category: "diamond", image: "/images/ring5.jpeg" },
    { id: 56, name: "Diamond Ring 5", category: "diamond", image: "/images/ring6.jpeg" },
    { id: 57, name: "Diamond Ring 6", category: "diamond", image: "/images/ring7.jpeg" },
    { id: 58, name: "Diamond Ring 7", category: "diamond", image: "/images/ring8.jpeg" },
    { id: 59, name: "Diamond Ring 8", category: "diamond", image: "/images/ring9.jpeg" },
    { id: 60, name: "Diamond Ring 9", category: "diamond", image: "/images/ring10.jpeg" },

    // Bridal Jewelry
    { id: 40, name: "Bridal Collection Set", category: "bridal", image: "/images/bridal.jpeg" },
    { id: 41, name: "Bridal Necklace Set ", category: "bridal", image: "/images/bridal1.jpeg" },
    { id: 42, name: "Bridal Bangles Set ", category: "bridal", image: "/images/bridal2.jpeg" },
    { id: 43, name: "Bridal Bangles Set ", category: "bridal", image: "/images/bridal3.jpeg" },
    { id: 44, name: "Bridal Set ", category: "bridal", image: "/images/bridal4.jpeg" },
];

export default function ProductsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredProducts = useMemo(() => {
        if (activeCategory === "all") return allProducts;
        return allProducts.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Reset to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    return (
        <>
            <div className="pt-32 pb-12 text-center bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Collection</h1>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Discover our exquisite range of handcrafted jewelry</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {["all", "gold", "diamond", "bridal"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-white text-gray-600 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-md"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Showing {currentProducts.length} of {filteredProducts.length} products
                </p>
            </div>

            <div className="container mx-auto px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="relative aspect-square bg-gray-100 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
                                <h3 className="text-lg font-serif font-bold text-primary mt-1">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === index + 1
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
