import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/ProductData";

const ProductPage = () => {
    const productsToDisplay = productsData.slice(0, 9);

    return (
        <section className="bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center space-y-3">
                    <h1 
                        data-aos="fade-right" 
                        data-aos-once="true" 
                        className="text-[#D22128] dark:text-[#E9C46A] border-l-8 border-[#D22128] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words"
                    >
                        ÜRÜNLERİMİZ
                    </h1>
                </div>
                <div>
                    <div 
                        data-aos="fade-up" 
                        data-aos-once="true" 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    >
                        {productsToDisplay.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;