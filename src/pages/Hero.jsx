import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgVideo from "../assets/bg.mp4";
import videoThumbnail from "../assets/slider.png";
import slider from "../assets/slider.jpg";
import slider2 from "../assets/slider2.jpg";

const Hero = () => {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState({ src: bgVideo, type: "video" });
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const media = [
    { src: bgVideo, label: "Video", type: "video", thumbnail: videoThumbnail },
    { src: slider, label: "Resim 1", type: "image" },
    { src: slider2, label: "Resim 2", type: "image" },
  ];

  const handleMediaChange = (item) => {
    setIsLoading(true);
    setSelectedMedia(item);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <section className="bg-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-10 space-y-12 md:space-y-0 container relative overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 p-8 bg-opacity-90 bg-white dark:bg-black rounded-lg lg:mb-16 relative z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-[#D22128] leading-tight drop-shadow-lg relative">
          Derya Rakor
          <span className="absolute -top-4 -right-6 text-3xl animate-spin">🔩</span>
        </h1>

        <div className="h-1 w-28 bg-[#D22128] rounded-full"></div>

        <p className="text-xl md:text-2xl text-black leading-relaxed">
          <span className="font-semibold text-[#D22128]">Derya Rakor</span>,
          <span className="font-semibold"> Hidrolik Hortum Rakor imalatı</span> ve
          <span className="font-semibold"> Hidrolik Hortum bağlantı elemanları montajlanması</span>
          {" "} alanlarında <span className="text-[#D22128] font-semibold">en güvenilir</span> çözümleri sunmaktadır.
        </p>

        <ul className="text-lg md:text-xl text-black space-y-2">
          <li>✅ Kaliteli ve Dayanıklı Ürünler</li>
          <li>✅ Hidrolik Sistemlerde Uzmanlık</li>
          <li>✅ 10+ Yıllık Deneyim</li>
        </ul>

        <div className="flex space-x-4 mt-6">
          <button className="bg-[#D22128] hover:bg-[#A91B22] text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-110">
            Ürünleri İncele
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-110">
            Bize Ulaşın
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center space-y-6 relative z-10">
        <div className="w-full max-w-2xl h-64 md:h-96 lg:h-[28rem] flex items-center justify-center relative border-4 border-[#D22128] rounded-xl shadow-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
              Yükleniyor...
            </div>
          )}
          {selectedMedia.type === "video" ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                key={selectedMedia.src}
                onLoadedData={() => setIsLoading(false)}
                className="w-full h-full object-cover"
                controls={false}
              >
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
              <button
                onClick={togglePlay}
                className="absolute bottom-4 left-4 bg-[#D22128] text-white p-4 rounded-full shadow-md hover:bg-[#A91B22] transition"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
            </div>
          ) : (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.label}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <Slider ref={sliderRef} {...sliderSettings} className="w-full max-w-2xl">
          {media.map((item, index) => (
            <div key={index} className="p-2 cursor-pointer" onClick={() => handleMediaChange(item)}>
              <div className="w-full h-20 md:h-24 flex items-center justify-center bg-[#D22128] hover:bg-[#A91B22] rounded-md shadow-md transition-all duration-300">
                {item.type === "video" ? (
                  <img src={item.thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover rounded-md" />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;