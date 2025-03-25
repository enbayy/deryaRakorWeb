import React from "react";
import aboutImage from "../assets/slider13.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="container bg-white dark:bg-dark py-12 sm:grid sm:place-items-center duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        <div>
          <div className="space-y-6 sm:p-16 pb-6 text-left">
            <h2 data-aos="fade-up" className="text-3xl font-sans font-bold text-black dark:text-white">
              Derya Hidrolik
            </h2>
            <p data-aos="fade-up" className="text-lg leading-8 tracking-wide text-black dark:text-white font-poppins">
              30 yıllık deneyimimizle sektörde kaliteyi temsil ediyoruz. Güçlü altyapımız ve yenilikçi çözümlerimizle iş ortaklarımıza değer katıyoruz.
            </p>
            <p data-aos="fade-up" className="text-lg leading-8 tracking-wide text-black dark:text-white font-poppins">
              Sektördeki uzmanlığımızla müşterilerimizin rekabet avantajı elde etmesini sağlıyor, her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.
            </p>

            <button
              onClick={() => navigate("/hakkimizda")}
              data-aos="fade-up"
              className="button-outline font-sans font-semibold dark:text-white"
            >
              Daha Fazlası
            </button>
          </div>
        </div>
        <div data-aos="slide-left" data-aos-duration="1500">
          <img
            src={aboutImage}
            alt="Derya Hidrolik"
            className="sm:scale-110 sm:translate-x-11 max-h-[350px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;