import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/ProductData";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ProductPage = () => {
    const productsToDisplay = productsData.slice(0, 9);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("urunlerimiz");
    };

    return (
        <section className="bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-12">
            <div className="container mx-auto">
                <div className="mb-8 text-center space-y-3">
                    <div className="flex justify-between">
                        <h1
                            data-aos="fade-right"
                            className="text-[#D22128] dark:text-[#E9C46A] border-l-8 border-[#D22128] dark:border-[#E9C46A] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words"
                        >
                            ÜRÜNLERİMİZ
                        </h1>
                        <button
                            data-aos="fade-left"
                            onClick={handleClick}
                            className="w-[120px] h-[40px] bg-[#D22128] dark:bg-[#E9C46A] text-white rounded-xl hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] transition mt-4"
                        >
                            HEPSİNİ GÖR
                        </button>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {productsToDisplay.map((product, index) => (
                            <Fade
                                key={product.id}
                                direction="up"
                                cascade
                                damping={0.15}
                                delay={index * 450}
                                triggerOnce
                            >
                                <ProductCard product={product} />
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;