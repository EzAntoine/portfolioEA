"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Portfolio Personal",
        description: "Single page application, con mi información personal, habilidades y descripción de proyectos y cursos realizados.",
        image: '/projects/portfolio1.png',
        tecnologies: "JavaScript, NextJs, Tailwind.",
        tag: ["All", "Web"],
        gitUrl:'',
        siteUrl:''
    },
    {
        id: 2,
        title: "ONG Vamos!!",
        description: "Aplicacion web para la ONG Peruana Vamos!!. Permite el registro y login de usuario para realizar reservas de viajes taxi-aeropuerto, ofreciendo vista de viajes realizados, reservas, realizar reseñas y modificación de perfil. Desde el lado administrador ofrece un tablero para visualizar viajes (reservados, pendientes y completados), asignacion de chofer, lista de conductores (permitiendo eliminar lógicamente o poner en estado de descanso), lista de usuarios (permitiendo baneos o asignación de administradores), reseñas, edición de valores de viaje, cuadros estadísticos, descarga de información en excel, mailing y creación de nuevos conductores.",
        tecnologies: "JavaScript, NodeJs, React, Express, PostgreSQL, Sequelize, Postman, Firebase, Chakra UI, GIT.",
        image: '/projects/vamos1.jpg',
        tag: ["All", "Web"],
        gitUrl:'',
        siteUrl:''
    },
    {
        id: 3,
        title: "Dogs",
        description: "Aplicación web que muestra diferentes razas de perros, permitiendo crear nuevas razas y almacenarlas en base de datos, búsqueda por nombre, ordenamiento de razas alfabéticamente o por peso y filtrado de razas por temperamento u origen.",
        tecnologies: "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
        image: '/projects/dogs1.png',
        tag: ["All", "Web"],
        gitUrl:'',
        siteUrl:''
    },
    {
        id: 4,
        title: "Rick & Morty",
        description: "Aplicación web que muestra personajes de la serie animada Rick and Morty, permitiendo acceso mediante usuario y contraseña, realizar búsqueda de personajes, marcar personajes favoritos, ordenar alfabéticamente y filtrar por género.",
        tecnologies: "JavaScript, NodeJs, React, Redux, Express, PostgreSQL, Sequelize, CSS, Postman, GIT.",
        image: '/projects/rym2.png',
        tag: ["All", "Web"],
        gitUrl:'',
        siteUrl:''
    }
]


export default function ProjectsSection() {
    const [tag,setTag] = useState("All");

    const handleTag = (newTag)=>{
        setTag(newTag)
    }

  return (
    <div>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>Proyectos</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
            onClick={handleTag} 
            name="All" 
            isSelected={tag === "All"}
        />
        <ProjectTag 
            onClick={handleTag} 
            name="Web" 
            isSelected={tag === "Web"}
        />
        {/* <button className='rounded-sm border-2 border-lime-500 px-3 py-2 text-xl cursor-pointer'>Todos</button>
        <button className='rounded-sm border-2 border-slate-600 hover:border-white px-3 py-2 text-xl cursor-pointer'>Web</button> */}
      </div>
      <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
        {projectsData.map((project)=> (
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
  )
}
