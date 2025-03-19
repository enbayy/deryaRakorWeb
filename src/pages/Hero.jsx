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
    <section className="bg-white dark:bg-black w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-4 space-y-10 md:space-y-0 container mt-[-40px]">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-6 bg-white dark:bg-black rounded-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#D22128] leading-tight">
          Derya Rakor
        </h1>
        <p className="text-lg md:text-2xl text-black dark:text-white leading-relaxed">
          Hidrolik hortum rakor imalatı ve bağlantı elemanları montajlanması konusunda uzmanız.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center space-y-6">
        <div className="w-full max-w-2xl h-64 md:h-96 lg:h-[28rem] flex items-center justify-center relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
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
                      onLoad={() => setIsLoading(false)}
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