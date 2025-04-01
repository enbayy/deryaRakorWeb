import React, { useState } from "react";
import video from "../assets/DeryaRakor.mp4";
import slider1 from "../assets/slider7.png";
import slider2 from "../assets/slider8.png";
import slider3 from "../assets/slider9.png";
import slider4 from "../assets/slider10.png";
import slider5 from "../assets/slider11.png";
import slider6 from "../assets/slider12.png";
import slider7 from "../assets/slider1.png";
import slider8 from "../assets/slider2.png";
import slider9 from "../assets/slider3.png";
import slider10 from "../assets/slider4.png";
import slider11 from "../assets/slider5.png";
import slider12 from "../assets/slider6.png";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="bg-white dark:bg-black container w-full min-h-screen flex flex-col items-center px-4 md:px-12 lg:px-20">
            <h1 className="text-black dark:text-white text-4xl font-bold text-center mt-8">
                {t("about")}
            </h1>
            <div className="w-full max-w-6xl relative mt-8">
                {!videoLoaded && (
                    <p className="absolute inset-0 flex justify-center items-center bg-gray-200 text-gray-700 font-semibold text-lg">
                        Video yükleniyor...
                    </p>
                )}
                <video
                    className={`w-auto h-auto rounded-lg object-contain ${videoLoaded ? "block" : "hidden"}`}
                    controls
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="mt-8 text-center max-w-4xl">
                <p className="text-xl text-black dark:text-white leading-relaxed font-semibold">
                    Derya Hidrolik, 30 yılı aşkın sektörel bilgi birikimi ve tecrübesiyle hidrolik
                    silindirler, bağlantı elemanları, rakorlar ve borular üretmektedir. Yeni üretim
                    tesisimizde, 5000 m² alan üzerinde 4000 m² kapalı üretim sahamız ve 40 kişilik
                    uzman ekibimizle faaliyet göstermekteyiz.
                </p>
                <p className="text-xl text-black dark:text-white leading-relaxed mt-4 font-semibold">
                    Ürünlerimizi <a href="/"><strong className="text-[#D22128] hover:underline">Derya Rakor</strong></a> markasıyla Avrupa'nın birçok ülkesine ihraç ediyor,
                    yüksek kalite standartlarımızla sektörde fark yaratıyoruz. Gelecek hedefimiz,
                    yeni teknolojik yatırımlarla katma değeri yüksek ürünler geliştirerek global pazardaki
                    konumumuzu daha da güçlendirmektir.
                </p>
            </div>

            <div className="mt-8 text-center max-w-4xl">
                <p className="text-xl text-black dark:text-white leading-relaxed">
                    Derya Hidrolik manufactures hydraulic cylinders, connection components,
                    fittings, and feedpipes with over 30 years of industry experience and knowledge.
                    Our new production facility spans 5,000 m², including 4,000 m² of closed production
                    space, and operates with a team of 40 experts.
                </p>
                <p className="text-xl text-black dark:text-white leading-relaxed mt-4">
                    We export our products under the <a href="/"><strong className="text-[#D22128] hover:underline">Derya Rakor</strong></a> brand to many countries in
                    Europe, making a difference in the industry with our high-quality standards.
                    Our future goal is to strengthen our position in the global market by developing
                    high value-added products through new technological investments.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 max-w-6xl w-full">
                {[slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12].map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer flex items-center justify-center bg-gray-100"
                        onClick={() => setSelectedImage(image)}
                        style={{ aspectRatio: "16/9" }}
                    >
                        <img
                            src={image}
                            alt={`Galeri ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold text-lg">Görseli İncele</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
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

export default AboutPage;