import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/ProductData";

const AllProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="min-h-screen bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-16 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-7xl w-full">

                <div className="mb-8 w-full flex justify-center">
                    <input
                        type="text"
                        placeholder="Ürün Ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-lg px-5 py-3 border-2 border-[#D22128] dark:border-[#E9C46A] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#D22128] dark:focus:ring-[#E9C46A] transition-all text-lg shadow-sm bg-gray-50 dark:bg-[#1E293B]"
                    />
                </div>

                <div data-aos="fade-up" data-aos-once="true" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-lg text-gray-500 dark:text-gray-400">
                            Aramanıza uygun ürün bulunamadı.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllProductsPage;