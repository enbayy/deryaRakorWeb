import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/ProductData";
import { Fade } from "react-awesome-reveal";

const extraCategories = ["Soket", "Somun", "Rakor"];

const categories = [
    "Tümü",
    ...new Set(
        productsData
            .map((product) => product.category)
            .filter((category) => category && category.trim() !== "")
    ),
    ...extraCategories,
];

const AllProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tümü");

    const filteredProducts = productsData.filter((product) => {
        const matchesCategory =
            selectedCategory === "Tümü" ||
            product.category === selectedCategory ||
            (extraCategories.includes(selectedCategory) &&
                product.title.toLowerCase().includes(selectedCategory.toLowerCase()));

        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8 px-4">
                    <h2 className="text-2xl font-semibold font-sans">Ürün Kataloğu</h2>
                    <a
                        href="/katalog.pdf"
                        download
                        className="px-5 py-2 text-lg rounded-lg transition-all shadow-sm bg-[#D22128] text-white hover:bg-black dark:hover:bg-red-400 font-sans"
                    >
                        Kataloğu İndir
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 text-lg rounded-lg border-2 transition-all shadow-sm 
                            ${selectedCategory === category
                                    ? "bg-[#D22128] text-white border-[#D22128]"
                                    : "bg-gray-50 dark:bg-black border-gray-300 dark:border-gray-600 text-black dark:text-white"
                                } hover:bg-[#D22128] hover:text-white`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mb-8 w-full flex justify-center">
                    <input
                        type="text"
                        placeholder="Ürün Ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-lg px-5 py-3 border-2 border-[#D22128] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#D22128] transition-all text-lg shadow-sm bg-gray-50 dark:bg-black"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <Fade
                                key={product.id}
                                direction="up"
                                cascade
                                damping={0.15}
                                delay={index * 150}
                                triggerOnce
                            >
                                <ProductCard product={product} />
                            </Fade>
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