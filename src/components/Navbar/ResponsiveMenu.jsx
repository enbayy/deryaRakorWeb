import React from "react";
import { MenuLinks } from "./Navbar";
import { HiX } from "react-icons/hi";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 z-20 h-screen w-[75%] bg-white dark:bg-black 
      dark:text-white text-black px-8 pb-6 pt-16 shadow-md rounded-r-xl 
      transition-all duration-300 flex flex-col justify-between ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Menü</h2>
          <HiX size={30} className="cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block" onClick={toggleMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="pb-6 flex justify-center gap-4">
        <button
          className="text-white bg-[#D22128] dark:bg-[#D22128] hover:bg-[#B81C22] dark:hover:bg-[#B81C22] transition-all duration-300 px-5 py-2 text-lg font-semibold font-poppins rounded-xl"
        >
          TR
        </button>
        <button
          className="text-white bg-[#D22128] dark:bg-[#D22128] hover:bg-[#B81C22] dark:hover:bg-[#B81C22] transition-all duration-300 px-5 py-2 text-lg font-semibold font-poppins rounded-xl"
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;