import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/deryaLogo.png";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 2, name: "ÜRETİM", link: "/urunlerimiz" },
  { id: 3, name: "HAKKIMIZDA", link: "/hakkimizda" },
  { id: 4, name: "İLETİŞİM", link: "/iletisim" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] 
                    before:bg-[#D22128] dark:before:bg-[#D22128] before:scale-x-0 before:origin-right 
                    before:transition before:duration-300 before:ease-in-out 
                    hover:before:scale-x-100 hover:before:origin-left font-sans
                  `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-white bg-[#D22128] hover:bg-black dark:hover:bg-red-400 transition-all duration-300 px-5 py-2 text-lg font-semibold rounded-xl">
            TR
          </button>
          <button className="hidden lg:block text-white bg-[#D22128] hover:bg-black dark:hover:bg-red-400 transition-all duration-300 px-5 py-2 text-lg font-semibold rounded-xl">
            EN
          </button>
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