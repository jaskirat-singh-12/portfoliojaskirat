import React, { useContext, useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { assets } from "../assets/assets";
import themeContext from './Theme'  ;

function Navbar() {
  const onButtonClick = () => {
    fetch(assets.jaskirat).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "portfoliosrcassetsJaskirat.pdf";
        alink.click();
      });
    });
  };

  const t = useContext(themeContext)
  const switchToDarkTheme = () => {
    if (t.theme == 'dark') {
      t.setTheme('light') 
    } else {
      t.setTheme('dark')
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(t.theme);
  }, [t.theme]);

  return (
    <div>
      <nav className="py-10 flex justify-between dark:bg-gray-900">
        <h1 className="text-2xl ml-5 font-bold dark:text-white">Jaskirat</h1>
        <ul className="flex items-center dark:text-white">
          <li>
            <BsFillMoonStarsFill
              onClick={switchToDarkTheme}
              className="text-xl cursor-pointer"
            />
          </li>
          <li>
            <button
              className="text-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-white py-2 px-5 ml-8 mr-6 rounded-md"
              onClick={onButtonClick}
            >
              Resume{" "}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
