import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../../assets/DeryaRakor.mp4";
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
    { id: 1, title: "HİDROLİK LİFT PARÇALARI", image: foto1, description: "Hidrolik lift sistemlerine özel parçalar." },
    { id: 2, title: "HİDROLİK SİLİNDİRLER", image: foto2, description: "Endüstriyel hidrolik silindir modelleri." },
    { id: 3, title: "HİDROLİK DEVRE BORULARI", image: foto3, description: "Hidrolik devrelerde kullanılan borular." },
    { id: 4, title: "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI", image: foto4, description: "Hidrolik ve pnömatik hortum başlıkları." },
];

const galleryImages = [slider1, slider2, slider3, slider4, slider5, slider6];

const UretimPage = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState({});

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center">
            <div className="w-full flex justify-center items-center relative">
                {!videoLoaded && (
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                        <p className="text-gray-700 font-semibold text-lg">Video yükleniyor...</p>
                    </div>
                )}
                <video
                    className={`w-full h-auto max-h-[885px] md:max-h-[650px] sm:max-h-[400px] aspect-video object-cover sm:object-contain ${videoLoaded ? "block" : "hidden"}`}
                    src={video}
                    autoPlay
                    loop
                    muted
                    onLoadedData={() => setVideoLoaded(true)}
                ></video>
            </div>

            <div className="max-w-6xl w-full px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">Üretimden Görseller</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-300">
                            {!imageLoaded[index] && (
                                <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                                    <p className="text-gray-700 font-semibold text-sm">Görsel yükleniyor...</p>
                                </div>
                            )}
                            <img
                                src={image}
                                alt={`Üretim ${index + 1}`}
                                className={`w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 ${imageLoaded[index] ? "block" : "hidden"}`}
                                onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl w-full px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 uppercase">Ürün Kategorileri</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/urunlerimiz/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, "-"))}`}
                            className="flex flex-col items-center bg-white shadow-xl rounded-xl p-6 border-2 border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl h-[320px]"
                        >
                            <div className="w-full flex-grow flex justify-center items-center">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-contain rounded-md"
                                />
                            </div>
                            <h3 className="mt-auto text-xl font-bold text-center text-gray-900 uppercase">{category.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UretimPage;