import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3 } from "react-icons/hi"

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-0 left-0 w-[full] xs:w-full z-50 bg-[#000000b2] backdrop-blur-sm">
      <div className="hidden md:flex py-3 gap-10 justify-center items-center">
        <HashLink smooth to="/#home" className="text-white relative group">
          {t("navbar.home")}
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
        </HashLink>
        <HashLink smooth to="/#about" className="text-white relative group">
          {t("navbar.about")}
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
        </HashLink>
        <HashLink smooth to="/#projects" className="text-white relative group">
          {t("navbar.projects")}
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
        </HashLink>
        <HashLink smooth to="/#contact" className="text-white relative group">
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

      <div className="flex md:hidden justify-between items-center px-4 py-3">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="text-white text-2xl"
        >
          {isDrawerOpen ? <HiMenuAlt3 /> : <HiMenuAlt3 />}
        </button>
        <a href="DiegoGCv_2024.pdf" target="_blank" rel="noopener noreferrer">
          <button className="text-white border px-2 py-1 rounded-lg">
            {t("navbar.download")}
          </button>
        </a>
      </div>

      {isDrawerOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-[#000000b2] backdrop-blur-sm p-5 flex flex-col pt-10 gap-4 z-40">
          <HashLink
            smooth
            to="/#home"
            className="text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            {t("navbar.home")}
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            {t("navbar.about")}
          </HashLink>
          <HashLink
            smooth
            to="/#projects"
            className="text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            {t("navbar.projects")}
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="text-white"
            onClick={() => setIsDrawerOpen(false)}
          >
            {t("navbar.contact")}
          </HashLink>
          <div className="text-white flex gap-2">
            <button onClick={() => changeLanguage("en")}>EN</button>
            <p className="select-none">/</p>
            <button onClick={() => changeLanguage("es")}>ES</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
