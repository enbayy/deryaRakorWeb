import React from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/hidrolikLiftParca.png";
import foto2 from "../../assets/hidrolikSilindir.png";
import foto3 from "../../assets/hidrolikDevreBoruları.png";
import foto4 from "../../assets/hortumBasliklari.png";
import { useTranslation } from "react-i18next";

const categories = [
    { id: 1, title: "hidrolik_lift_parcalari", image: foto1 },
    { id: 2, title: "hidrolik_silindirler", image: foto2 },
    { id: 3, title: "hidrolik_devre_borulari", image: foto3 },
    { id: 4, title: "hidrolik_pnomatik_hortum_ve_basliklari", image: foto4 },
];

const ProductsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container w-full bg-white dark:bg-black flex flex-col items-center">
            <div className=" w-full px-4 py-12">
                <h2 data-aos="fade-left" className="text-4xl font-semibold text-center mb-10 text-black dark:text-white font-sans tracking-wide">
                    {t("productCategories")}
                </h2>
                <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/urunlerimiz/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, "-"))}`}
                            className="flex flex-col items-center bg-white dark:bg-black shadow-xl rounded-2xl p-6 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="w-full h-56 flex justify-center items-center overflow-hidden rounded-lg">
                                <img src={category.image} alt={category.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-center text-black dark:text-white uppercase">
                                {t(category.title)}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;