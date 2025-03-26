import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/deryaLogo.png";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";

export const MenuLinks = [
  { id: 1, name: "home", link: "/" },   
  { id: 2, name: "production", link: "/urunlerimiz" }, 
  { id: 3, name: "about", link: "/hakkimizda" }, 
  { id: 4, name: "contact", link: "/iletisim" },
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
    <header className="relative bg-white dark:bg-black text-black dark:text-white z-50">
      <div className="container flex justify-between items-center py-2">
        <Link to="/">
          <img src={logo} alt="Derya Rakor Logo" className="h-16" />
        </Link>
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-4 py-2 inline-block text-lg font-bold font-sans transition-colors duration-300 
                    ${location.pathname === link
                      ? "text-[#D22128] font-bold font-sans border-b-2 border-[#D22128]"
                      : "text-[#1E293B] dark:text-white hover:text-[#D22128] font-sans"
                    }
                  `}
                >
                  {t(name)} 
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div
            className={`hidden lg:block cursor-pointer ${i18n.language === "tr" ? "opacity-100 scale-110" : "opacity-50"}`}
            onClick={() => handleLanguageChange("tr")}
          >
            <Flag code="TR" alt="Türk Bayrağı" className="w-8 h-8" />
          </div>
          <div
            className={`hidden lg:block cursor-pointer ${i18n.language === "en" ? "opacity-100 scale-110" : "opacity-50"}`}
            onClick={() => handleLanguageChange("en")}
          >
            <Flag code="GB" alt="İngiltere Bayrağı" className="w-8 h-8" />
          </div>
          <DarkMode />
          <div className="lg:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;