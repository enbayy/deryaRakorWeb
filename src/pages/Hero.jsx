import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/hero1.png";
import slider2 from "../assets/hero2.jpg";
import slider3 from "../assets/hero3.jpg";
import slider4 from "../assets/hero4.jpg";
import slider5 from "../assets/hero5.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots",
  };

  const text = "Gücünüze Yön Verir";
  const text2 = "Directs Your Power";

  const sliderImages = [
    slider1, slider2, slider3, slider4, slider5
  ];

  return (
    <div className="mx-auto flex flex-col justify-center items-center py-10 relative">
      <div className="text-center mb-10">
        {[text, text2].map((line, idx) => (
          <p key={idx} className="text-5xl md:text-7xl font-semibold text-[#D22128] font-stainy flex justify-center">
            {line.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5, type: "spring", stiffness: 120 }}
                className={char === " " ? "mx-2" : ""}
              >
                {char}
              </motion.span>
            ))}
          </p>
        ))}
      </div>

      <div data-aos="fade-left" data-aos-delay="200" className="w-full">
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {sliderImages.map((img, index) => (
              <div key={index} className="flex justify-center items-center w-full">
                <div className="w-full aspect-[16/9]">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .custom-dots {
          position: static !important;
          display: flex !important;
          justify-content: center;
          gap: 10px;
          margin-top: 20px; /* Noktaları aşağı taşır */
        }
            
        .slick-slider *:focus {
          outline: none !important;
        }
            
        .custom-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ccc;
          transition: all 0.3s ease-in-out;
        }
            
        .custom-dot:hover {
          background-color: #D22128;
          transform: scale(1.2);
        }
            
        .slick-active .custom-dot {
          background-color: #D22128;
          transform: scale(1.3);
        }
        `}
      </style>
    </div>
  );
};

export default Hero;