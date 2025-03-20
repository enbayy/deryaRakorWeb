import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "../assets/slider.png";
import slider2 from "../assets/slider.jpg";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleClick = () => {
        navigate("/iletisim");
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section id="about-detail" className="bg-white dark:bg-black text-[#1E293B] dark:text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-[#D22128] font-sans">Hakkımızda</h1>
                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-poppins">
                        Firmamız Derya Rakor, Hidrolik Hortum Rakoru imalatı ve Hidrolik Hortumların bağlantı elemanlarına montajlanması ana faaliyet alanlarımızdır.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div data-aos="fade-right">
                        <img src={slider2} alt="Kaliteli Üretim" className="rounded-xl shadow-lg w-full" />
                    </div>
                    <div className="space-y-6" data-aos="fade-left">
                        <h2 className="text-3xl font-bold text-[#D22128] font-sans">Kaliteli Üretim ve Güvenilir Hizmet</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            Üretim sürecimizde en yüksek kalite standartlarını sağlamak için en son teknolojiyi kullanıyoruz. Güvenilir ve dayanıklı hidrolik hortum rakorları ile müşterilerimize en iyi hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-[#D22128] font-sans">Hidrolik Sistemlerde Çözüm Ortağınız</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            Hidrolik sistemlerde uzmanlaşmış ekibimizle, müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz. Dayanıklı ve uzun ömürlü ürünlerimizle sektörde güvenilir bir partneriz.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <img src={slider} alt="Hidrolik Sistem" className="rounded-xl shadow-lg w-full" />
                    </div>
                </div>

                <div className="w-full mb-20" data-aos="zoom-in">
                    <Slider {...sliderSettings}>
                        <div className="px-2">
                            <img src={slider} alt="Üretim Alanı" className="rounded-xl w-full h-64 object-cover" />
                        </div>
                        <div className="px-2">
                            <img src={slider2} alt="Hidrolik Hortum" className="rounded-xl w-full h-64 object-cover" />
                        </div>
                        <div className="px-2">
                            <img src={slider} alt="Montaj Süreci" className="rounded-xl w-full h-64 object-cover" />
                        </div>
                        <div className="px-2">
                            <img src={slider2} alt="Son Kontroller" className="rounded-xl w-full h-64 object-cover" />
                        </div>
                    </Slider>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleClick}
                        className="bg-[#D22128] hover:bg-red-400 text-white px-5 py-2 rounded-xl text-lg font-semibold transition-all duration-500 hover:opacity-90 font-sans"
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