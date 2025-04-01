import React from "react";
import { useParams } from "react-router-dom";

const newsDetails = {
  "teknoloji-haberleri": {
    title: "Teknoloji Haberleri",
    images: ["/images/haber1.jpg", "/images/haber2.jpg", "/images/haber3.jpg", "/images/extra-tech.jpg"],
    content: "Teknoloji dünyasındaki son gelişmeler, yapay zeka, yazılım ve donanım haberleri burada!",
  },
  "sağlık-ve-yaşam": {
    title: "Sağlık ve Yaşam",
    images: ["/images/haber4.jpg", "/images/haber5.jpg", "/images/haber6.jpg", "/images/extra-health.jpg"],
    content: "Sağlıklı yaşam için beslenme, egzersiz ve tıbbi gelişmeler hakkında bilgi alın.",
  },
  "ekonomi-gündemi": {
    title: "Ekonomi Gündemi",
    images: ["/images/haber7.jpg", "/images/haber8.jpg", "/images/haber9.jpg", "/images/extra-economy.jpg"],
    content: "Döviz kurları, borsa analizleri ve finansal gelişmelerin detayları burada.",
  },
};

const NewsDetail = () => {
  const { title } = useParams();
  const news = newsDetails[title];

  if (!news) {
    return <div className="text-center text-red-500 text-2xl">Haber bulunamadı!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{news.title}</h1>
      <p className="text-lg text-gray-700 text-center mb-8">{news.content}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {news.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Detay Görsel ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md transform transition hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;