import React from "react";
import video from "../assets/deryaRakor.mp4";
import slider1 from "../assets/slider4.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider5.png";
import slider5 from "../assets/slider6.png";

const AboutPage = () => {
    return (
        <div className="container w-full min-h-screen flex flex-col items-center px-4 md:px-12 lg:px-20">
            <h1 className="text-4xl font-bold text-center mt-8 mb-6">Hakkımızda</h1>

            <p className="text-lg text-gray-700 text-center max-w-4xl leading-relaxed">
                Derya Hidrolik, 30 yılı aşkın sektörel bilgi birikimi ve tecrübesiyle hidrolik
                silindirler, bağlantı elemanları, rakorlar ve borular üretmektedir. Yeni üretim
                tesisimizde, 5000 m2 alan üzerinde 4000 m2 kapalı üretim sahamız ve 40 kişilik
                uzman ekibimizle faaliyet göstermekteyiz.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-4xl leading-relaxed mt-4">
                Ürünlerimizi <strong>Derya Rakor</strong> markasıyla Avrupa'nın birçok ülkesine ihraç ediyor,
                yüksek kalite standartlarımızla sektörde fark yaratıyoruz. Gelecek hedefimiz,
                yeni teknolojik yatırımlarla katma değeri yüksek ürünler geliştirerek global pazardaki
                konumumuzu daha da güçlendirmektir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 max-w-6xl w-full">
                {[slider1, slider2, slider3, slider4, slider5].map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-300">
                        <img
                            src={image}
                            alt={`Galeri ${index + 1}`}
                            className="w-full h-[250px] md:h-[300px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            <div className="w-full max-w-6xl mt-10">
                <video className="w-full h-auto rounded-lg shadow-lg object-cover" style={{ aspectRatio: "16/9" }} controls>
                    <source src={video} type="video/mp4" />a
                </video>
            </div>
        </div>
    );
};

export default AboutPage;