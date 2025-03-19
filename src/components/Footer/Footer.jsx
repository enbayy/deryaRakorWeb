import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import BrandLinks from '../BrandLinks';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#0F172A] py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-start">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-3xl font-bold text-black dark:text-white font-inter">
                            DERYA RAKOR
                        </h2>
                        <BrandLinks />
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-inter">Ürünler</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-lg text-black dark:text-white">
                                <IoMdArrowDropright className="text-[#D22128] dark:text-[#E9C46A] mr-2" /> Hidrolik Rakorlar
                            </li>
                            <li className="flex items-center text-lg text-black dark:text-white">
                                <IoMdArrowDropright className="text-[#D22128] dark:text-[#E9C46A] mr-2" /> Endüstriyel Bağlantılar
                            </li>
                            <li className="flex items-center text-lg text-black dark:text-white">
                                <IoMdArrowDropright className="text-[#D22128] dark:text-[#E9C46A] mr-2" /> Hortum Rakorları
                            </li>
                            <li className="flex items-center text-lg text-black dark:text-white">
                                <IoMdArrowDropright className="text-[#D22128] dark:text-[#E9C46A] mr-2" /> Özel Tasarım Ürünler
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-inter">İletişim</h4>
                        <p className="text-lg text-black dark:text-white transition-all duration-300">info@deryarakor.com</p>
                        <p className="text-lg text-black dark:text-white transition-all duration-300">(0332) 502 09 36</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 font-inter">Konum Bilgileri</h3>
                        <p className="text-lg leading-relaxed text-black dark:text-white">
                            Fevziçakmak, 10670. Sk. Bayır Özel Org. San. Bölg No:31 D:31A,<br />
                            42050 Karatay/Konya
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />

                <div className="text-center -mb-8">
                    <p className="text-xl font-bold text-black dark:text-white select-none font-poppins">
                        Derya Rakor Hidrolik Rakor Mak. San. Tic. Ltd. Şti. © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;