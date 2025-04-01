import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const newsData = [
  { id: 1, titleKey: "techNews", images: ["/images/haber1.jpg", "/images/haber2.jpg", "/images/haber3.jpg"] },
  { id: 2, titleKey: "healthNews", images: ["/images/haber4.jpg", "/images/haber5.jpg", "/images/haber6.jpg"] },
  { id: 3, titleKey: "economyNews", images: ["/images/haber7.jpg", "/images/haber8.jpg", "/images/haber9.jpg"] },
];

const News = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {newsData.map((news) => {
        const formattedTitle = t(news.titleKey).toLowerCase().replace(/\s+/g, "-");

        return (
          <div key={news.id} className="mb-12">
            <h2
              className="text-3xl font-bold text-center mb-6 text-gray-800 cursor-pointer hover:text-blue-600 transition"
              onClick={() => navigate(`/news/${formattedTitle}`)}
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
                onClick={() => navigate(`/news/${formattedTitle}`)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
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