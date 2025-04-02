import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const newsDetails = {
  "hydraulic-cylinders": {
    title: "hydraulicCylinders",
    images: ["/images/hidrolik-silindir1.jpg", "/images/hidrolik-silindir2.jpg", "/images/hidrolik-silindir3.jpg", "/images/hidrolik-silindir4.jpg"],
    content: "hydraulicCylindersContent",
  },
  "hydraulic-cylinder-parts": {
    title: "hydraulicCylinderParts",
    images: ["/images/silindir-parca1.jpg", "/images/silindir-parca2.jpg", "/images/silindir-parca3.jpg", "/images/silindir-parca4.jpg"],
    content: "hydraulicCylinderPartsContent",
  },
  "hydraulic-pumps": {
    title: "hydraulicPumps",
    images: ["/images/hidrolik-pompa1.jpg", "/images/hidrolik-pompa2.jpg", "/images/hidrolik-pompa3.jpg", "/images/hidrolik-pompa4.jpg"],
    content: "hydraulicPumpsContent",
  },
  "hydraulic-valves": {
    title: "hydraulicValves",
    images: ["/images/hidrolik-valf1.jpg", "/images/hidrolik-valf2.jpg", "/images/hidrolik-valf3.jpg", "/images/hidrolik-valf4.jpg"],
    content: "hydraulicValvesContent",
  },
  "hydraulic-hoses": {
    title: "hydraulicHoses",
    images: ["/images/hidrolik-hortum1.jpg", "/images/hidrolik-hortum2.jpg", "/images/hidrolik-hortum3.jpg", "/images/hidrolik-hortum4.jpg"],
    content: "hydraulicHosesContent",
  },
  "hydraulic-filters": {
    title: "hydraulicFilters",
    images: ["/images/hidrolik-filtre1.jpg", "/images/hidrolik-filtre2.jpg", "/images/hidrolik-filtre3.jpg", "/images/hidrolik-filtre4.jpg"],
    content: "hydraulicFiltersContent",
  },
};

const NewsDetail = () => {
  const { title } = useParams();
  const { t } = useTranslation();
  const news = newsDetails[title];

  if (!news) {
    return <div className="text-center text-red-500 text-2xl">{t("newsNotFound")}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6 font-sans">{t(news.title)}</h1>
      <p className="text-base text-gray-700 dark:text-white text-center mb-8 font-poppins">{t(news.content)}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {news.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${t(news.title)} - ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md transform transition hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;