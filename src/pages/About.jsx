import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleClick = () => {
        navigate("/iletisim");
    };

    return (
        <section
            id="about-detail"
            className="bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white py-16"
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-extrabold text-[#D22128] dark:text-[#E9C46A]">
                        Hakkımızda
                    </h1>
                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-poppins">
                        Firmamız Derya Rakor, Hidrolik Hortum Rakoru imalatı ve Hidrolik Hortumların bağlantı elemanlarına montajlanması ana faaliyet alanlarımızdır. Rakorların imalatı, günümüz teknolojisinde karşılaşılan hidrolik basınçlı sıvı iletim sistemlerine en kısa ve en etkili çözümleri sunar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-[#D22128] dark:text-[#E9C46A]" data-aos="fade-right">
                            Hortum veya Rakorlu Hortum Montajlama
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins" data-aos="fade-right">
                            Montajlama safhasında minimum enerji ile en üst düzeyde güvenli ve verimli sistemleri Tarım Makinalarına, her türlü Hidrolik kaldırma ünitelerine, düşük basınç yüksek basınç hidrolik yağ iletimlerinde güvenle kullanılır.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center" data-aos="zoom-in">Resim 1</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center" data-aos="zoom-in">Resim 2</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center" data-aos="zoom-in">Resim 3</div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex justify-center items-center" data-aos="zoom-in">Resim 4</div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={handleClick}
                        className="bg-[#D22128] dark:bg-[#E9C46A] hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] text-white px-9 py-4 rounded-xl text-lg font-semibold transition-all duration-500 hover:opacity-90"
                        data-aos="fade-up"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;