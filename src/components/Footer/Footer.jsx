import React from "react";
import { SiFacebook, SiLinkedin, SiInstagram, SiTwitter } from "react-icons/si";
import logo from "../../assets/deryaLogo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-white dark:bg-black py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-start">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="Derya Rakor Logo" className="w-48 h-auto" />
                        <div className="flex space-x-4 mt-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <SiFacebook className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white hover:text-[#D22128] transition-colors" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <SiLinkedin className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white hover:text-[#D22128] transition-colors" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <SiInstagram className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white hover:text-[#D22128] transition-colors" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <SiTwitter className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white hover:text-[#D22128] transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">
                            {t("products")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/urunlerimiz/hi̇droli̇k-li̇ft-parçalari" className="text-lg text-black dark:text-white font-sans hover:text-[#D22128] transition-colors font-semibold">
                                    {t("HİDROLİK LİFT PARÇALARI")}
                                </a>
                            </li>
                            <li>
                                <a href="/urunlerimiz/hi̇droli̇k-si̇li̇ndi̇rler" className="text-lg text-black dark:text-white font-sans hover:text-[#D22128] transition-colors font-semibold">
                                    {t("HİDROLİK SİLİNDİRLER")}
                                </a>
                            </li>
                            <li>
                                <a href="/urunlerimiz/hi̇droli̇k-devre-borulari" className="text-lg text-black dark:text-white font-sans hover:text-[#D22128] transition-colors font-semibold">
                                    {t("HİDROLİK DEVRE BORULARI")}
                                </a>
                            </li>
                            <li>
                                <a href="/urunlerimiz/hi̇droli̇k-pnömati̇k-hortum-ve-başliklari" className="text-lg text-black dark:text-white font-sans hover:text-[#D22128] transition-colors font-semibold">
                                    {t("HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">{t("contact")}</h4>
                        <p className="text-lg text-black dark:text-white font-sans font-semibold">info@deryarakor.com</p>
                        <p className="text-lg text-black dark:text-white font-sans font-semibold">(0332) 502 09 36</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-black dark:text-white mb-4 font-sans">{t("location")}</h3>
                        <p className="text-lg leading-relaxed text-black dark:text-white font-sans font-semibold">
                            Fevziçakmak, 10670. Sk. Bayır Özel Org. San. Bölg No:31 D:31A,<br />
                            42050 Karatay/Konya
                        </p>
                    </div>
                </div>

                <hr className="border-black my-8 dark:border-[#F9FAFB]" />

                <div className="text-center -mb-8">
                    <p className="text-xl font-semibold text-black dark:text-white font-sans">
                        {t('footer_info')}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;