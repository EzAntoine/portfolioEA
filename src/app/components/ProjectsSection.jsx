import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Portfolio Personal",
        description: "Single page application, con mi información personal, habilidades y descripción de proyectos y cursos realizados.",
        image: '../../../public/projects/portfolio1.png',
        tecnologies: "JavaScript, NextJs, Tailwind.",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "ONG Vamos!!",
        description: "Aplicacion web para la ONG Peruana Vamos!!. Permite el registro y login de usuario para realizar reservas de viajes taxi-aeropuerto, ofreciendo vista de viajes realizados, reservas, realizar reseñas y modificación de perfil. Desde el lado administrador ofrece un tablero para visualizar viajes (reservados, pendientes y completados), asignacion de chofer, lista de conductores (permitiendo eliminar lógicamente o poner en estado de descanso), lista de usuarios (permitiendo baneos o asignación de administradores), reseñas, edición de valores de viaje, cuadros estadísticos, descarga de información en excel, mailing y creación de nuevos conductores.",
        tecnologies: "JavaScript, NodeJs, React, Express, PostgreSQL, Sequelize, Postman, Firebase, Chakra UI, GIT.",
        image: '../../../public/projects/vamos1.png',
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Dogs",
        description: "Aplicación web que muestra diferentes razas de perros, permitiendo crear nuevas razas y almacenarlas en base de datos, búsqueda por nombre, ordenamiento de razas alfabéticamente o por peso y filtrado de razas por temperamento u origen.",
        tecnologies: "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
        image: '../../../public/projects/dogs1.png',
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Rick & Morty",
        description: "Aplicación web que muestra personajes de la serie animada Rick and Morty, permitiendo acceso mediante usuario y contraseña, realizar búsqueda de personajes, marcar personajes favoritos, ordenar alfabéticamente y filtrar por género.",
        tecnologies: "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
        image: '../../../public/projects/rym2.png',
        tag: ["All", "Web"],
    }
]


export default function ProjectsSection() {
  return (
    <div>
      <h2>Proyectos</h2>
    </div>
  )
}
