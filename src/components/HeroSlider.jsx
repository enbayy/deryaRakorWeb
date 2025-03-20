import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/slider.jpg";
import image2 from "../assets/slider2.jpg";

const HeroSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-20">
            <div className="container mx-auto px-6 lg:px-12 space-y-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <img src={image1} alt="Derya Rakor Güvenilir Çözümler" className="rounded-xl shadow-lg w-full" />
                    </div>
                    <div data-aos="fade-left" className="space-y-6">
                        <h1 className="text-5xl font-bold text-[#D22128] leading-tight font-sans">
                            Güvenilir ve Dayanıklı Rakor Sistemleri
                        </h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            Derya Rakor olarak, yüksek mukavemetli ve uzun ömürlü rakor çözümleri sunuyoruz.
                            Endüstriyel tesisat ve otomasyon sistemlerinde maksimum güvenlik sağlıyoruz.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right" className="space-y-6">
                        <h1 className="text-5xl font-bold text-[#D22128] leading-tight font-sans">
                            Sektörün Lider Rakor Çözümleri
                        </h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            Yenilikçi üretim teknolojilerimiz ve hassas işçilikle üretilen rakor sistemlerimiz,
                            sanayi ve altyapı projelerinde güvenle kullanılmaktadır. Derya Rakor kalitesi ile
                            uzun ömürlü bağlantılar elde edin.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <img src={image2} alt="Derya Rakor Teknolojisi" className="rounded-xl shadow-lg w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;