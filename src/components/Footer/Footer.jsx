import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import BrandLinks from '../BrandLinks';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-start">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-bold text-black dark:text-white font-sans">
                            DERYA RAKOR
                        </h2>
                        <BrandLinks />
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">
                            Ürünler
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center text-lg text-black dark:text-white font-sans hover:text-[#D22128] dark:hover:text-gray-300 transition-colors"
                                >
                                    Hidrolik Rakorlar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center text-lg text-black dark:text-white font-sans hover:text-[#D22128] dark:hover:text-gray-300 transition-colors"
                                >
                                    Endüstriyel Bağlantılar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center text-lg text-black dark:text-white font-sans hover:text-[#D22128] dark:hover:text-gray-300 transition-colors"
                                >
                                    Hortum Rakorları
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex items-center text-lg text-black dark:text-white font-sans hover:text-[#D22128] dark:hover:text-gray-300 transition-colors"
                                >
                                    Özel Tasarım Ürünler
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">İletişim</h4>
                        <p className="text-lg text-black dark:text-white transition-all duration-300 font-sans">info@deryarakor.com</p>
                        <p className="text-lg text-black dark:text-white transition-all duration-300 font-sans">(0332) 502 09 36</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">Konum Bilgileri</h3>
                        <p className="text-lg leading-relaxed text-black dark:text-white font-sans">
                            Fevziçakmak, 10670. Sk. Bayır Özel Org. San. Bölg No:31 D:31A,<br />
                            42050 Karatay/Konya
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />

                <div className="text-center -mb-8">
                    <p className="text-xl font-semibold text-black dark:text-white select-none font-sans">
                        Derya Rakor Hidrolik Rakor Mak. San. Tic. Ltd. Şti. © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;