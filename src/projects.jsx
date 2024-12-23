import login from "./assets/login.png";
import Notas from "./assets/notas.png";
import Calculadora from "./assets/calculadora.png";
import { useState, useEffect } from "react";
import django from "./assets/django.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import python from "./assets/python.svg";
import javascript from "./assets/javascript.svg";
import vite from "./assets/vite.svg";
import css from "./assets/css.svg";
import github from "./assets/github.svg";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState({
    title: t("proyects.school"),
    description: t("proyects.school-d"),
    image: login,
    icon: [python, django, javascript, react, tailwind, vite],
    github: "https://github.com/MrLechoza/School-Site.V2",
  });

  const projects = [
    {
      title: t("proyects.school"),
      description: t("proyects.school-d"),
      image: login,
      icon: [python, django, javascript, react, tailwind],
      github: "https://github.com/MrLechoza/School-Site.V2",
    },
    {
      title: t("proyects.notes"),
      description: t("proyects.notes-d"),
      image: Notas,
      icon: [react, javascript, tailwind],
      github: "https://github.com/MrLechoza/Proyectos",
    },
    {
      title: t("proyects.calculator"),
      description: t("proyects.calculator-d"),
      image: Calculadora,
      icon: [react, javascript, css],
      github: "https://github.com/MrLechoza/Proyectos-2-Calculadora",
    },
  ];

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    setSelectedProject({
      title: t("proyects.school"),
      description: t("proyects.school-d"),
      image: login,
      icon: [python, django, javascript, react, tailwind, vite],
      github: "https://github.com/MrLechoza/School-Site.V2",
    });
  }, [t]);

  return (
    <div id="projects" className="flex flex-col max-w-[1150px] mx-auto py-20">
      <h1 className="text-white font-russo text-3xl px-12">
        {t("proyects.proy")}
      </h1>
      <div className="flex flex-wrap gap-10 2xl:flex-nowrap xl:flex-nowrap xs:mx-10 justify-center items-center mt-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative cursor-pointer group hover:-translate-y-2 transform ease-in-out duration-300 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]"
            onClick={() => handleSelectProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-[160px] object-cover"
            />
            <div className="absolute rounded-lg inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white font-russo text-lg">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-8 border rounded-lg md:mx-10 md:flex-row sm:mx-10 xs:mx-10">
        <div className="flex flex-col p-10 w-full md:w-[650px]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-russo text-white">
              {selectedProject.title}
            </h2>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-6 object-cover sm:h-6 hover:-translate-y-1 ease-in-out duration-300 transform"
            >
              <img src={github} alt="Github icon" />
            </a>
          </div>
          <p className="text-white text-xs leading-5 w-full mt-3">
            {selectedProject.description}
          </p>

          <div>
            <h2 className="font-russo text-sm mt-3 text-white">
              {t("proyects.skills")}
            </h2>
            <div className="flex gap-4 mt-4">
              {selectedProject.icon.map((icon, index) => (
                <div key={index}>
                  <img
                    src={icon}
                    alt={`${selectedProject.title} icon`}
                    className="w-6 h-6 object-contain flex"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full md:w-[500px] object-fill rounded-tr-md rounded-br-md"
        />
      </div>
    </div>
  );
}

export default Projects;
