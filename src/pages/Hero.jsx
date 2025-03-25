import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider13.png";
import slider2 from "../assets/slider7.png";
import slider3 from "../assets/slider8.png";

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
    slider1, slider2, slider3
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-10 relative px-4">
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
              <div key={index} className="flex justify-center items-center">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full sm:h-[450px] md:h-[600px] object-contain"
                />
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