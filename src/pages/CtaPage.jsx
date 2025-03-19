import React from "react";
import { motion } from "framer-motion";

const CtaPage = () => {
    return (
        <div className="grid place-content-center bg-white dark:bg-[#0F172A] px-6 py-8 text-yellow-50">
            <h1 className="max-w-2xl text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug">
                <div className="flex items-center">
                    <p className="text-4xl sm:text-6xl lg:text-7xl tracking-widest font-sans leading-tight text-[#E76F51] dark:text-[#E9C46A] drop-shadow-xl uppercase">
                        GÜÇLÜ VE DAYANIKLI BAĞLANTILAR!
                    </p>
                </div>
                <span className="text-black text-xl sm:text-2xl lg:text-3xl relative font-poppins font-semibold tracking-wider">
                    Endüstriyel bağlantı çözümleriyle {''}
                    <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute -left-2 -right-0 -top-8 bottom-0 translate-y-1"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{
                                duration: 1.25,
                                ease: "easeInOut",
                            }}
                            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                            stroke="#fbff27"
                            strokeWidth="3"
                        />
                    </svg>
                </span>
                <span className="text-black text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold tracking-wider">
                    işletmenizi en yüksek verime taşıyoruz. <br />
                </span>
                <span className="text-white text-lg sm:text-xl lg:text-2xl font-poppins font-medium tracking-wider">
                    Kaliteli rakor ve hidrolik sistemleriyle fark yaratın!
                </span>
            </h1>
            <div className="mt-10 flex justify-center">
                <a
                    href="/iletisim"
                    className="relative px-10 py-5 text-lg sm:text-xl font-bold tracking-wide rounded-tl-3xl rounded-br-3xl bg-[#E76F51] dark:bg-[#E9C46A] duration-200 hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] font-poppins text-center"
                >
                    TEKLİF AL
                </a>
            </div>
        </div>
    );
};

export default CtaPage;