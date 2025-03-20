import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../../data/ProductData";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ProductPage = () => {
    const productsToDisplay = productsData.slice(0, 8);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("urunlerimiz");
    };

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto">
                <div className="mb-8 text-center space-y-3">
                    <div className="flex justify-between">
                        <h1
                            data-aos="fade-right"
                            data-aos-once="true"
                            className="text-[#D22128] border-l-8 border-[#D22128] py-2 pl-2 flex relative text-2xl sm:text-3xl md:text-4xl font-semibold break-words font-sans"
                        >
                            ÜRÜNLERİMİZ
                        </h1>
                        <button
                            data-aos="fade-left"
                            data-aos-once="true"
                            onClick={handleClick}
                            className="bg-[#D22128] dark:hover:bg-red-400 text-white rounded-xl hover:bg-black transition mt-4 px-5 py-2 font-sans font-semibold"
                        >
                            Hepsini Gör
                        </button>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {productsToDisplay.map((product, index) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;