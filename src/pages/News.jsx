import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const newsData = [
  { id: 1, titleKey: "hydraulic-cylinders", images: ["/images/hidrolik-silindir1.jpg", "/images/hidrolik-silindir2.jpg", "/images/hidrolik-silindir3.jpg"] },
  { id: 2, titleKey: "hydraulic-cylinder-parts", images: ["/images/silindir-parca1.jpg", "/images/silindir-parca2.jpg", "/images/silindir-parca3.jpg"] },
  { id: 3, titleKey: "hydraulic-pumps", images: ["/images/hidrolik-pompa1.jpg", "/images/hidrolik-pompa2.jpg", "/images/hidrolik-pompa3.jpg"] },
  { id: 4, titleKey: "hydraulic-valves", images: ["/images/hidrolik-valf1.jpg", "/images/hidrolik-valf2.jpg", "/images/hidrolik-valf3.jpg"] },
  { id: 5, titleKey: "hydraulic-hoses", images: ["/images/hidrolik-hortum1.jpg", "/images/hidrolik-hortum2.jpg", "/images/hidrolik-hortum3.jpg"] },
  { id: 6, titleKey: "hydraulic-filters", images: ["/images/hidrolik-filtre1.jpg", "/images/hidrolik-filtre2.jpg", "/images/hidrolik-filtre3.jpg"] },
];

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formatTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {newsData.map((news) => {
        const formattedTitle = formatTitle(t(news.titleKey));

        return (
          <div key={news.id} className="mb-12">
            <h2
              className="text-2xl font-bold text-center mb-6 text-black dark:text-white transition"
              onClick={() => navigate(`/haberler/${formattedTitle}`)}
            >
              {t(news.titleKey)}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {news.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${t(news.titleKey)} - ${index + 1}`}
                  className="w-96 h-64 object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => navigate(`/haberler/${news.titleKey}`)}
                className="bg-[#D22128] text-white px-4 py-2 rounded-lg text-base font-semibold shadow-md hover:bg-red-700 transition"
              >
                {t("readMore")}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;