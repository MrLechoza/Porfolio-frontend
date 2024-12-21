import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex py-3 bg-[#000000b2] gap-10 justify-center items-center backdrop-blur-sm">
      <HashLink
        smooth
        to="/#home"
        className="text-white relative group"
      >
        {t("navbar.home")}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      </HashLink>
      <HashLink
        smooth
        to="/#about"
        className="text-white relative group"
      >
        {t("navbar.about")}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      </HashLink>
      <HashLink
        smooth
        to="/#projects"
        className="text-white relative group"
      >
        {t("navbar.projects")}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      </HashLink>
      <HashLink
        smooth
        to="/#contact"
        className="text-white relative group"
      >
        {t("navbar.contact")}
        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
      </HashLink>
      <a href="DiegoGCv_2024.pdf" target="_blank" rel="noopener noreferrer">
        <button className="text-white border px-2 py-1 rounded-lg hover:-translate-y-1 ease-in-out transform duration-300">
          {t("navbar.download")}
        </button>
      </a>
      <div className="text-white flex gap-2">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <p className="select-none">/</p>
        <button onClick={() => changeLanguage("es")}>ES</button>
      </div>
    </div>
  );
}

export default Navbar;
