import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider.png";
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
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <section id="about-detail" className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-[#D22128] font-sans">Hakkımızda</h1>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto font-poppins">
                        Firmamız Derya Rakor, hidrolik hortum rakoru imalatı ve hidrolik hortum montajı alanlarında
                        uzmanlaşmıştır. Kaliteli üretim anlayışımız ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde
                        güvenilir bir çözüm ortağıyız.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div data-aos="fade-right">
                        <img src={slider2} alt="Kaliteli Üretim" className="rounded-xl shadow-lg w-full" />
                    </div>
                    <div className="space-y-6" data-aos="fade-left">
                        <h2 className="text-3xl font-bold text-[#D22128] font-sans">Kaliteli Üretim & Güvenilir Hizmet</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            En son teknolojiyi kullanarak, yüksek kalite standartlarında hidrolik hortum rakorları üretiyoruz.
                            Dayanıklı ve uzun ömürlü ürünlerimizle müşteri memnuniyetini en üst seviyeye çıkarıyoruz.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-[#D22128] font-sans">Hidrolik Sistemlerde Çözüm Ortağınız</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-poppins">
                            Hidrolik sektöründeki uzman ekibimizle, müşterilerimizin ihtiyaçlarına özel çözümler sunuyoruz.
                            Güçlü mühendislik altyapımız ile inovatif ve güvenilir ürünler geliştiriyoruz.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <img src={slider1} alt="Hidrolik Sistem" className="rounded-xl shadow-lg w-full" />
                    </div>
                </div>

                <div className="w-full mb-16" data-aos="zoom-in">
                    <Slider {...sliderSettings}>
                        <div className="px-2">
                            <div className="relative">
                                <img src={slider1} alt="Üretim Alanı" className="rounded-xl w-full h-64 object-cover" />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                                    <h3 className="text-lg font-semibold">Üretim Alanı</h3>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative">
                                <img src={slider2} alt="Hidrolik Hortum" className="rounded-xl w-full h-64 object-cover" />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                                    <h3 className="text-lg font-semibold">Hidrolik Hortum</h3>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative">
                                <img src={slider1} alt="Montaj Süreci" className="rounded-xl w-full h-64 object-cover" />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                                    <h3 className="text-lg font-semibold">Montaj Süreci</h3>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="relative">
                                <img src={slider2} alt="Son Kontroller" className="rounded-xl w-full h-64 object-cover" />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
                                    <h3 className="text-lg font-semibold">Son Kontroller</h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleClick}
                        className="bg-[#D22128] hover:bg-red-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-500 shadow-md hover:scale-105"
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