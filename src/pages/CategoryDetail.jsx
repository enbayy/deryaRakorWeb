import React, { useState } from "react";
import { useParams } from "react-router-dom";
import foto1 from "../assets/hidrolikSilindirParcalari.png";
import foto2 from "../assets/hidrolikSilindir4.png";
import foto3 from "../assets/hidrolikDevreBorulari.jpg";
import foto4 from "../assets/hidrolikPnomatikHortumVeBasliklari.jpg";
import hidrolikDevreBorulari from "../data/hidrolikDevreBorulari";
import hidrolikSilindirParcalari from "../data/hidrolikSilindirParcalari";
import hidrolikSilindirler from "../data/hidrolikSilindirler";
import hidrolikPnomatikHortumVeBasliklari from "../data/hidrolikPnomatikHortumVeBasliklari";
import { useTranslation } from "react-i18next";

const categories = [
    { title: "HİDROLİK SİLİNDİR PARÇALARI", image: foto1, products: hidrolikSilindirParcalari },
    { title: "HİDROLİK SİLİNDİRLER", image: foto2, products: hidrolikSilindirler },
    { title: "HİDROLİK DEVRE BORULARI", image: foto3, products: hidrolikDevreBorulari },
    { title: "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI", image: foto4, products: hidrolikPnomatikHortumVeBasliklari },
];

const normalizeTitle = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c");
};

const CategoryDetail = () => {
    const { title } = useParams();
    const formattedTitle = normalizeTitle(title);
    const category = categories.find(cat => normalizeTitle(cat.title) === formattedTitle);
    const { t } = useTranslation();

    const [selectedImage, setSelectedImage] = useState(null);

    if (!category) {
        return <h2 className="text-center text-red-600 text-3xl mt-10">Kategori Bulunamadı</h2>;
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
            <div className="max-w-4xl w-full px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 uppercase font-sans">
                    {t(category.title)}
                </h2>

                <p className="text-lg text-gray-700 mt-4 text-center font-poppins">{t("desc")}</p>

                {category.products.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.products.map((product) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-lg flex flex-col items-center w-full cursor-pointer group"
                                onClick={() => setSelectedImage(product.image)}
                            >
                                <div className="w-full h-68 flex items-center justify-center relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-semibold">{t("viewImage")}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative p-4 max-w-4xl w-full">
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img src={selectedImage} alt="Büyütülmüş Görsel" className="w-full max-h-[80vh] object-contain rounded-md" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryDetail;