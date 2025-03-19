import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgVideo from "../assets/bg.mp4";
import slider from "../assets/slider.jpg";
import slider2 from "../assets/slider2.jpg";

const Hero = () => {
  const sliderRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState({ src: bgVideo, type: "video" });
  const [isLoading, setIsLoading] = useState(true);

  const media = [
    { src: bgVideo, label: "Video", type: "video" },
    { src: slider, label: "Resim 1", type: "image" },
    { src: slider2, label: "Resim 2", type: "image" },
  ];

  const handleMediaChange = (item) => {
    setIsLoading(true);
    setSelectedMedia(item);
  };

  return (
    <section className="bg-white dark:bg-black w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-10 space-y-12 md:space-y-0 container">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 p-8 bg-white dark:bg-black rounded-lg shadow-lg">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-[#D22128] leading-tight drop-shadow-lg">
          Derya Rakor
        </h1>
        <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed">
          <span className="font-semibold text-[#D22128]">Derya Rakor</span>,
          <span className="font-semibold dark:text-white"> Hidrolik Hortum Rakor imalatı</span>
          {" "}<span className="dark:text-white">ve</span>
          <span className="font-semibold dark:text-white"> Hidrolik Hortum bağlantı elemanları montajlanması</span>
          {" "} <span className="dark:text-white">alanlarında en güvenilir çözümleri sunmaktadır.</span>
        </p>
        <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed">
          Rakor imalatçıları olarak,
          <span className="font-semibold text-[#D22128]"> hidrolik basınçlı sıvı iletim sistemlerine</span>{" "}
          en kısa ve en etkili çözümleri sağlıyoruz. Tarım makineleri, hidrolik kaldırma üniteleri ve
          düşük-yüksek basınçlı yağ iletim sistemlerinde güvenle kullanabilirsiniz.
        </p>
        <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed">
          Sektördeki tecrübemiz ve kaliteye verdiğimiz önem sayesinde, müşteri memnuniyetini
          en üst seviyede tutarak hizmet sunuyoruz. En dayanıklı ve uzun ömürlü hidrolik çözümleri
          için bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center space-y-6">
        <div className="w-full max-w-2xl h-64 md:h-96 lg:h-[28rem] flex items-center justify-center relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
              Yükleniyor...
            </div>
          )}

          {selectedMedia.type === "video" ? (
            <video
              key={selectedMedia.src}
              autoPlay
              loop
              muted
              onLoadedData={() => setIsLoading(false)}
              className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-[#D22128]"
            >
              <source src={selectedMedia.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.label}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-[#D22128]"
            />
          )}
        </div>

        <div className="w-full max-w-2xl relative">
          <Slider
            ref={sliderRef}
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            autoplay={false}
            arrows={false}
            className="w-full"
          >
            {media.map((item, index) => (
              <div key={index} className="p-2 cursor-pointer" onClick={() => handleMediaChange(item)}>
                <div className="w-full h-20 md:h-24 flex items-center justify-center text-white font-bold rounded-md shadow-md transition-all duration-300 bg-[#D22128] hover:bg-[#A91B22] relative">
                  {item.type === "video" ? (
                    <video autoPlay loop muted className="w-full h-full object-cover rounded-md">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-[#D22128] text-white p-3 rounded-full shadow-md hover:bg-[#A91B22] transition"
            >
              ◀
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="bg-[#D22128] text-white p-3 rounded-full shadow-md hover:bg-[#A91B22] transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
