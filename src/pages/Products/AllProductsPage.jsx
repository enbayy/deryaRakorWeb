import React, { useState } from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/hidrolikLiftParca.png";
import foto2 from "../../assets/hidrolikSilindir.png";
import foto3 from "../../assets/hidrolikDevreBoruları.png";
import foto4 from "../../assets/hortumBasliklari.png";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import slider6 from "../../assets/slider6.png";

const categories = [
    { id: 1, title: "HİDROLİK LİFT PARÇALARI", image: foto1 },
    { id: 2, title: "HİDROLİK SİLİNDİRLER", image: foto2 },
    { id: 3, title: "HİDROLİK DEVRE BORULARI", image: foto3 },
    { id: 4, title: "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI", image: foto4 },
];

const galleryImages = [slider1, slider2, slider3, slider4, slider5, slider6];

const UretimPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState({});

    return (
        <div className="container w-full min-h-screen bg-white dark:bg-black flex flex-col items-center">
            <div className="w-full px-4 py-12">
                <h2 className="text-4xl font-semibold text-center mb-10 text-black dark:text-white font-sans tracking-wide">
                    ÜRÜN KATEGORİLERİ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/urunlerimiz/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, "-"))}`}
                            className="flex flex-col items-center bg-white dark:bg-black shadow-xl rounded-2xl p-6 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="w-full h-56 flex justify-center items-center overflow-hidden rounded-lg">
                                <img src={category.image} alt={category.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-center text-black dark:text-white  uppercase">{category.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="container w-full px-4 py-12">
                <h2 className="text-4xl font-extrabold text-center mb-10 text-black dark:text-white uppercase tracking-wide">
                    Üretimden Görseller
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
                                    <p className="text-gray-700 font-semibold text-sm">Görsel yükleniyor...</p>
                                </div>
                            )}
                            <img
                                src={image}
                                alt={`Üretim ${index + 1}`}
                                className={`w-full h-76 object-cover ${imageLoaded[index] ? "opacity-100" : "opacity-0"} transition-transform duration-300 ease-in-out group-hover:scale-105`}
                                onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-semibold text-lg">Görseli İncele</p>
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