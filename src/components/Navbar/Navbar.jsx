import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/derya.png";

export const MenuLinks = [
  { id: 1, name: "ANASAYFA", link: "/" },
  { id: 3, name: "ÜRÜNLER", link: "/urunlerimiz" },
  { id: 5, name: "HAKKIMIZDA", link: "/hakkimizda" },
  { id: 5, name: "İLETİŞİM", link: "/iletisim" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    navigate("/iletisim");
  };

  return (
    <header className="relative bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white z-50">
      <div className="container flex justify-between items-center py-5">
        <Link to="/">
          <img src={logo} alt="Engin Tasarım Logo" className="h-12" />
        </Link>
        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className={`relative px-4 py-2 inline-block text-lg font-semibold font-poppins transition-colors duration-300
                    ${location.pathname === link
                      ? "text-[#D22128] dark:text-[#D22128] font-semibold border-[#D22128] dark:border-[#D22128]"
                      : "text-[#1E293B] dark:text-white hover:text-[#D22128] dark:hover:text-[#D22128]"
                    }
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] 
                    before:bg-[#D22128] dark:before:bg-[#D22128] before:scale-x-0 before:origin-right 
                    before:transition before:duration-300 before:ease-in-out 
                    hover:before:scale-x-100 hover:before:origin-left
                  `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="hidden lg:block text-white bg-[#D22128] dark:bg-[#D22128] hover:bg-[#B81C22] dark:hover:bg-[#B81C22] transition-all duration-300 px-5 py-2 text-lg font-semibold font-poppins rounded-xl"
          >
            TR
          </button>
          <button
            onClick={handleClick}
            className="hidden lg:block text-white bg-[#D22128] dark:bg-[#D22128] hover:bg-[#B81C22] dark:hover:bg-[#B81C22] transition-all duration-300 px-5 py-2 text-lg font-semibold font-poppins rounded-xl"
          >
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