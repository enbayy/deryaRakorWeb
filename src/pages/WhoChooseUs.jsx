import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/deryaLogo.png";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stats = [
    { value: 30, label: "yearsOfExperience", suffix: "+", tr: "Yıllık Deneyim" },
    { value: 4000, label: "closedProductionArea", suffix: "m²", tr: "Kapalı Üretim Alanı" },
    { value: 100, label: "customerSatisfaction", suffix: "%", tr: "Müşteri Memnuniyeti" },
    { value: 40, label: "experiencedEmployees", suffix: "+", tr: "Deneyimli Çalışanlar" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 100;
          const intervalTime = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCounts(stats.map(stat => Math.round((stat.value / steps) * currentStep)));
            if (currentStep === steps) clearInterval(interval);
          }, intervalTime);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="container bg-white dark:bg-black py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto text-center">
        <Link to="/" className="bg-white rounded-full">
          <img src={logo} alt="Derya Rakor Logo" className="w-60 h-auto" />
        </Link>
        <p className="text-black dark:text-white text-base leading-relaxed font-poppins mt-8">
          {t("whyChooseUsDescription")}
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-[#D22128] font-sans">
              {counts[index]}{stat.suffix}
            </h3>
            <p className="text-gray-800 mt-3 text-base font-poppins">
              {t(stat.label)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#D22128] font-sans">
          {t("qualityAndReliability")}
        </h3>
        <p className="text-black dark:text-white mt-5 text-base leading-relaxed font-poppins">
          {t("companyDescription")}
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/iletisim")}
          className="rounded-md border-2 border-[#D22128] hover:bg-[#D22128]/80 hover:text-black dark:text-white duration-500 py-2 px-6 text-[#D22128] tracking-wider font-sans font-semibold"
        >
          {t("contactUs")}
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;