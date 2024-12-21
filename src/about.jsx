import React from "react";
import foto from "./assets/foto1.png";
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import { useTranslation } from "react-i18next";

function About() {
  const {t} = useTranslation()
  return (
    <div id="about" className="flex flex-col  sm:gap-20 xl:gap-20 md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-center items-center py-20 mt-40">
      <article className="flex flex-col xl:w-[700px] lg:w-[700px] md:w-[500px] sm:w-[400px]">
        <h1 className="text-white font-russo  text-3xl p-2">{t("about.title")}</h1>
        <p className="text-white text-sm border border-1 rounded-lg leading-7 p-10 w-full">
        {t("about.description")}
        </p>
      </article>
      <div className="flex flex-col  justify-center items-center gap-4 sm:w-5/12 md:w-6/12 xl:w-[300px]">
        <img
          className="rounded-full w-64 h-64 object-cover"
          src={foto}
          alt="foto para portafolio"
        />
        <div className="flex gap-4">
          <a href="https://github.com/MrLechoza" target="_blank" rel="noopener noreferrer" className=" w-8 h-8 sm:w-6 object-cover sm:h-6 hover:-translate-y-1 ease-in-out duration-300 transform">
            <img src={github} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/gelvis-diego/" target="_blank" rel="noopener noreferrer" className=" w-8 h-8 sm:w-6 object-cover sm:h-6 hover:-translate-y-1 ease-in-out duration-300 transform">
            <img src={linkedin} alt="Linkedin icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
