import React from "react";
import { MenuLinks } from "./Navbar";
import { HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 z-20 h-screen w-[75%] bg-[#D22128] text-white px-8 pb-6 pt-16 shadow-md rounded-r-xl 
      transition-all duration-300 flex flex-col justify-between ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-sans">{t('menu')}</h2>
          <HiX size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block font-sans font-semibold" onClick={toggleMenu}>
                  {t(name)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="pb-6 flex justify-center gap-4">
        <div
          className={`cursor-pointer ${i18n.language === "tr" ? "opacity-100 scale-110 border-b-2 border-white" : "opacity-50"}`}
          onClick={() => handleLanguageChange("tr")}
        >
          <img
            src="https://flagcdn.com/w80/tr.png"
            alt="Türk Bayrağı"
            className="w-10 h-10 md:w-8 md:h-8 sm:w-7 sm:h-7 max-w-10 max-h-10 border-2 border-white rounded-full"
          />
        </div>
        <div
          className={`cursor-pointer ${i18n.language === "en" ? "opacity-100 scale-110 border-b-2 border-white" : "opacity-50"}`}
          onClick={() => handleLanguageChange("en")}
        >
          <img
            src="https://flagcdn.com/w80/gb.png"
            alt="İngiltere Bayrağı"
            className="w-10 h-10 md:w-8 md:h-8 sm:w-7 sm:h-7 max-w-10 max-h-10 border-2 border-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;