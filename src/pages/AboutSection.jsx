import React from "react";
import aboutImage from "../assets/slider13.png";
import { useNavigate } from "react-router-dom";
import logo from "../assets/deryaLogo.png";
import { useTranslation } from "react-i18next"; 

const AboutSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="container bg-white dark:bg-black py-12 sm:grid sm:place-items-center duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        <div>
          <div className="space-y-6 sm:p-16 pb-6 text-left">
            <img src={logo} alt="Derya Rakor Logo" className="w-60 h-auto" />
            <p data-aos="fade-up" className="text-lg leading-8 tracking-wide text-black dark:text-white font-poppins">
              {t("aboutDescription1")}
            </p>
            <p data-aos="fade-up" className="text-lg leading-8 tracking-wide text-black dark:text-white font-poppins">
              {t("aboutDescription2")}
            </p>

            <button
              onClick={() => navigate("/hakkimizda")}
              data-aos="fade-up"
              className="button-outline font-sans font-semibold dark:text-white"
            >
              {t("learnMore")}
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