import React, { useState } from "react";
import { MenuLinks } from "./Navbar";
import { HiX } from "react-icons/hi";
import Flag from "react-world-flags";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 z-20 h-screen w-[75%] bg-white dark:bg-black 
      dark:text-white text-black px-8 pb-6 pt-16 shadow-md rounded-r-xl 
      transition-all duration-300 flex flex-col justify-between ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-sans">Menü</h2>
          <HiX size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block font-sans font-semibold" onClick={toggleMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="pb-6 flex justify-center gap-4">
        <div
          className={`cursor-pointer ${selectedLanguage === "TR" ? "scale-125" : ""}`}
          onClick={() => handleLanguageChange("TR")}
        >
          <Flag code="TR" alt="Türk Bayrağı" className="w-8 h-8" />
        </div>
        <div
          className={`cursor-pointer ${selectedLanguage === "GB" ? "scale-125" : ""}`}
          onClick={() => handleLanguageChange("GB")}
        >
          <Flag code="GB" alt="İngiltere Bayrağı" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;