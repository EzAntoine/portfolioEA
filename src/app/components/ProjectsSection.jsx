"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    //El id mas bajo queda primero
    id: 6,
    title: "Peluqueria CH Diaz",
    description:
      "Landing page para la peluqueria CH Diaz, con información de servicios, ubicación y contacto. | 2024",
    tecnologies:
      "Next, TypeScript - Configuracion de dominio personalizado y hosting en Vercel.",
    image: "/projects/chdiazlanding.png",
    tag: ["Todos", "Profesional"],
    gitUrl: "https://github.com/EzAntoine/chdiaz-landing",
    siteUrl: "https://www.chdiazpeluqueria.com/",
  },
  {
    //El id mas bajo queda primero
    id: 5,
    title: "Java CRUD con Api Rest",
    description:
      "CRUD simple que permite operar productos, en este caso bebidas con sus respectivos precios. | 2024",
    tecnologies: "Java, Spring Boot, Hibernate, Docker, PostgreSQL, Railway.",
    image: "/projects/crudjava.jpg",
    tag: ["Todos", "Educativos"],
    gitUrl: "https://github.com/EzAntoine/java-railway-crud-apirest",
    siteUrl: "",
  },
  {
    id: 4,
    title: "ONG Vamos!!",
    description:
      "Aplicacion web para la ONG Vamos!!. Permite el registro y login de usuario para reservar de viajes taxi-aeropuerto, ofreciendo vista de viajes realizados, reservas, reseñas y modificación de perfil. Desde el lado administrador ofrece tablero para visualizar viajes reservados, pendientes y completados, listado, creacion y asignacion de conductores, permitiendo eliminar lógicamente o poner en estado de descanso, lista de usuarios (permitiendo baneos o asignación de administradores), reseñas, edición de precios, cuadros estadísticos, descarga de información en excel y mailing. | 2024",
    tecnologies:
      "JavaScript, NodeJs, React, Express, PostgreSQL, Sequelize, Firebase, Nodemailer, Postman, Chakra UI, GIT.",
    image: "/projects/vamos1.jpg",
    tag: ["Todos", "Profesional", "Educativos"],
    gitUrl: "https://github.com/VamosONG/VamosApp",
    siteUrl: "https://www.youtube.com/watch?v=SlAaNeMeo8g",
  },
  {
    id: 3,
    title: "Portfolio Personal",
    description:
      "Single page application, con mi información personal, habilidades y descripción de proyectos y cursos realizados. | 2024",
    image: "/projects/portfolio1.png",
    tecnologies: "JavaScript, NextJs, Tailwind.",
    tag: ["Todos", "Personales"],
    gitUrl: "https://github.com/EzAntoine/portfolioEA",
    siteUrl: "https://ezequielantoine.vercel.app/",
  },
  {
    id: 2,
    title: "Dogs",
    description:
      "Aplicación web que muestra diferentes razas de perros, permitiendo crear nuevas razas y almacenarlas en base de datos, búsqueda por nombre, ordenamiento de razas alfabéticamente o por peso y filtrado de razas por temperamento u origen. | 2024",
    tecnologies:
      "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
    image: "/projects/dogs1.png",
    tag: ["Todos", "Educativos"],
    gitUrl: "https://github.com/EzAntoine/ProyectoIndividual-Dogs",
    siteUrl: "",
  },
  {
    id: 1,
    title: "Rick & Morty",
    description:
      "Aplicación web que muestra personajes de la serie animada Rick and Morty, permitiendo acceso mediante usuario y contraseña, realizar búsqueda de personajes, marcar personajes favoritos, ordenar alfabéticamente y filtrar por género. | 2023",
    tecnologies:
      "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
    image: "/projects/rym2.png",
    tag: ["Todos", "Educativos"],
    gitUrl: "",
    siteUrl: "",
  },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("Todos");

  const handleTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData
    .filter((proj) => proj.tag.includes(tag))
    .sort((a, b) => b.id - a.id);

  return (
    <section id="projects">
      <div>
        <h2 className="mt-4 mb-4 text-4xl font-bold text-center text-white md:mb-12">
          Proyectos
        </h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-2 py-6 text-white">
          <ProjectTag
            onClick={handleTag}
            name="Todos"
            isSelected={tag === "Todos"}
          />
          <ProjectTag
            onClick={handleTag}
            name="Profesional"
            isSelected={tag === "Profesional"}
          />
          <ProjectTag
            onClick={handleTag}
            name="Educativos"
            isSelected={tag === "Educativos"}
          />
          <ProjectTag
            onClick={handleTag}
            name="Personales"
            isSelected={tag === "Personales"}
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tecnologies={project.tecnologies}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              siteUrl={project.siteUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
