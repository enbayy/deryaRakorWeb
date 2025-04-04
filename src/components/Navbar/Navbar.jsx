import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/deryaLogo.png";
import { useTranslation } from "react-i18next";

export const MenuLinks = [
  { id: 1, name: "home", link: "/" },
  { id: 2, name: "production", link: "/urunlerimiz" },
  { id: 3, name: "about", link: "/hakkimizda" },
  { id: 4, name: "news", link: "/haberler" },
  { id: 5, name: "contact", link: "/iletisim" },
  { id: 6, name: "eSales", link: "/e-satis" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <header className="relative bg-[#D22128] text-white z-50">
      <div className="container flex justify-between items-center py-2">
        <Link to="/" className="bg-white rounded-full flex-shrink-0">
          <img src={logo} alt="Derya Rakor Logo" className="h-16 max-h-16 md:h-14 sm:h-12 transition-all duration-300" />
        </Link>
        <nav className="hidden lg:flex items-center gap-10 md:gap-6 sm:gap-4 transition-all duration-300">
          <ul className="flex items-center gap-10 md:gap-6 sm:gap-4">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-3 py-2 inline-block text-sm font-bold font-sans transition-colors duration-300 
                  ${location.pathname === link
                      ? "text-white border-b-2 border-white"
                      : "text-white hover:border-b-2"
                    }
                `}
                >
                  {t(name)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 md:gap-3 sm:gap-2 transition-all duration-300">
          <div
            className={`hidden lg:block cursor-pointer flex-shrink-0 transform transition-all duration-300 ${i18n.language === "tr" ? "opacity-100 scale-100" : "opacity-40 scale-90"
              }`}
            onClick={() => handleLanguageChange("tr")}
          >
            <img src="https://flagcdn.com/w80/tr.png" alt="Türk Bayrağı"
              className="w-9 h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 max-w-9 max-h-9 border-2 border-white rounded-full" />
          </div>
          <div
            className={`hidden lg:block cursor-pointer flex-shrink-0 transform transition-all duration-300 ${i18n.language === "en" ? "opacity-100 scale-100" : "opacity-40 scale-90"
              }`}
            onClick={() => handleLanguageChange("en")}
          >
            <img src="https://flagcdn.com/w80/gb.png" alt="İngiltere Bayrağı"
              className="w-9 h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 max-w-9 max-h-9 border-2 border-white rounded-full" />
          </div>
          <div className="flex-shrink-0 transform transition-all duration-300 md:scale-90 sm:scale-75">
            <DarkMode />
          </div>
          <div className="lg:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-white" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-white" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;