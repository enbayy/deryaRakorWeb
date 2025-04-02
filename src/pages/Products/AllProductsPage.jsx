import React, { useState } from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/hidrolikSilindirParcalari.png";
import foto2 from "../../assets/hidrolikSilindir4.png";
import foto3 from "../../assets/hidrolikDevreBorulari.jpg";
import foto4 from "../../assets/hidrolikPnomatikHortumVeBasliklari.png";
import slider1 from "../../assets/uretim1.jpg";
import slider2 from "../../assets/uretim2.jpg";
import slider3 from "../../assets/uretim3.jpg";
import slider4 from "../../assets/uretim4.jpg";
import slider5 from "../../assets/uretim5.jpg";
import slider6 from "../../assets/uretim6.jpg";
import slider7 from "../../assets/uretim7.jpg";
import slider8 from "../../assets/uretim8.jpg";
import slider9 from "../../assets/uretim9.jpg";
import slider10 from "../../assets/uretim10.jpg";
import slider11 from "../../assets/uretim11.jpg";
import slider12 from "../../assets/uretim12.jpg";
import slider13 from "../../assets/uretim13.jpg";
import slider14 from "../../assets/uretim14.jpg";
import slider15 from "../../assets/uretim15.jpg";
import slider16 from "../../assets/uretim16.jpg";
import { useTranslation } from "react-i18next";

const categories = [
    { id: 1, title: "HİDROLİK SİLİNDİR PARÇALARI", image: foto1 },
    { id: 2, title: "HİDROLİK SİLİNDİRLER", image: foto2 },
    { id: 3, title: "HİDROLİK DEVRE BORULARI", image: foto3 },
    { id: 4, title: "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI", image: foto4 },
];

const galleryImages = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12, slider13, slider14, slider15, slider16];

const UretimPage = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState({});

    return (
        <div className="container w-full min-h-screen bg-white dark:bg-black flex flex-col items-center">
            <div className="w-full px-4 py-12">
                <h2 className="text-3xl font-semibold text-center mb-10 text-black dark:text-white font-sans tracking-wide">
                    {t("productCategories")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/urunlerimiz/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, "-"))}`}
                            className="flex flex-col items-center bg-white dark:bg-black rounded-2xl py-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="w-full h-56 flex justify-center items-center overflow-hidden rounded-lg">
                                <img src={category.image} alt={category.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold text-center text-black dark:text-white uppercase font-sans">
                                {t(category.title)}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="container w-full px-4 py-12">
                <h2 className="text-3xl font-extrabold text-center mb-10 text-black dark:text-white uppercase tracking-wide">
                    {t("productionImages")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-300 cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            {!imageLoaded[index] && (
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                                    <p className="text-gray-700 font-semibold text-sm">{t("imageLoading")}</p>
                                </div>
                            )}
                            <img
                                src={image}
                                alt={`Üretim ${index + 1}`}
                                className={`w-full h-76 object-cover ${imageLoaded[index] ? "opacity-100" : "opacity-0"} transition-transform duration-300 ease-in-out group-hover:scale-105`}
                                onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-semibold text-lg">{t("viewImage")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full p-4">
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <img src={selectedImage} alt="Büyütülmüş Görsel" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UretimPage;