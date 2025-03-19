import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
      )}
    </>
  );
};

export default DarkMode;