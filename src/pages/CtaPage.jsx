import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#D22128] mb-6 tracking-wide font-sans">
                    Güçlü ve Dayanıklı Hidrolik Ürünler!
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-poppins">
                    **Yüksek kalite standartlarımız** ve **güvenilir hidrolik sistemlerimiz** ile sektörün en iyilerini sunuyoruz.
                    Güçlü ve dayanıklı ürünlerimizle projelerinizi ileriye taşıyın! **Şimdi ürünlerimizi keşfedin.**
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate("/urunlerimiz")}
                        className="bg-[#D22128] hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 font-sans"
                    >
                        Ürünleri İncele
                    </button>
                    <button
                        onClick={() => navigate("/iletisim")}
                        className="bg-transparent border border-gray-400 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 font-sans"
                    >
                        İletişime Geç
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;