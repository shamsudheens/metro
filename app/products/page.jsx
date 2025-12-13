"use client";

import { Suspense } from "react";
import ProductsContent from "@/components/sections/ProductsContent";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <ProductsContent />
            </Suspense>
            <Footer />
        </main>
    );
}
