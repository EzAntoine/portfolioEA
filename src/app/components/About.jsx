"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import typescriptSVG from "../../../public/tecnologiesSVG/typescript.svg";
import nodejsSVG from "../../../public/tecnologiesSVG/nodejs.svg";
import cssSVG from "../../../public/tecnologiesSVG/css.svg";
import expressSVG from "../../../public/tecnologiesSVG/Express.js.dark.svg";
import githubSVG from "../../../public/tecnologiesSVG/github.svg";
import javaSVG from "../../../public/tecnologiesSVG/java.svg";
import nextSVG from "../../../public/tecnologiesSVG/nextjs_icon_dark.svg";
import postgreSVG from "../../../public/tecnologiesSVG/postgresql.svg";
import reactSVG from "../../../public/tecnologiesSVG/react.svg";
import tailwindSVG from "../../../public/tecnologiesSVG/tailwindcss.svg";
import vercelSVG from "../../../public/tecnologiesSVG/vercel_dark.svg";
import nestSVG from "../../../public/tecnologiesSVG/nestjs.svg";
import mongoSVG from "../../../public/tecnologiesSVG/mongodb.svg";
import viteSVG from "../../../public/tecnologiesSVG/vitejs.svg";
import dockerSVG from "../../../public/tecnologiesSVG/docker.svg";
import figmaSVG from "../../../public/tecnologiesSVG/figma.svg";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center gap-4 list-none">
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={typescriptSVG}
              alt="TypeScript"
              title="TypeScript"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>TypeScript</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={reactSVG}
              alt="React"
              title="React"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>React</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={tailwindSVG}
              alt="Tailwind CSS"
              title="Tailwind CSS"
              width={70}
              height={70}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Tailwind CSS</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={figmaSVG}
              alt="Figma"
              title="Figma"
              width={40}
              height={40}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Figma</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={viteSVG}
              alt="Vite"
              title="Vite"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Vite</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={nextSVG}
              alt="Next.js"
              title="Next.js"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>NextJs</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={nodejsSVG}
              alt="Node.js"
              title="Node.js"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>NodeJs</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={expressSVG}
              alt="Express.js"
              title="Express.js"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Express</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={nestSVG}
              alt="NestJs"
              title="NestJs"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>NestJs</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={javaSVG}
              alt="Java"
              title="Java"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Java</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={dockerSVG}
              alt="Docker"
              title="Docker"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Docker</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={mongoSVG}
              alt="MongoDB"
              title="MongoDB"
              width={70}
              height={70}
              className="my-3"
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>MongoDB</p>
          </div>
        </li>

        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={postgreSVG}
              alt="PostgreSQL"
              title="PostgreSQL"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>PostgreSQL</p>
          </div>
        </li>

        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={githubSVG}
              alt="Github"
              title="Github"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Git</p>
          </div>
        </li>
        <li className="flex items-center justify-center md:w-1/6 sm:1/4">
          <div style={{ textAlign: "center" }}>
            <Image
              src={vercelSVG}
              alt="Vercel"
              title="Vercel"
              width={50}
              height={50}
              className="my-2"
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Vercel</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li className="mb-4">
          Curso Intensivo Backend con NestJS (Swagger, TypeORM, Mongoose) – Hedy
          Software | 2024
        </li>
        <li className="mb-4">
          Desarrollo Web FullStack - Henry Bootcamp | 2023-2024
        </li>
        <li className="mb-4">Argentina Programa 4.0 | 2022</li>
        <li className="mb-4">
          Desarrollo Web FullStack Java – Polo TIC Misiones | 2020/2021
        </li>
        <li className="mb-4">
          Ingeniería en Computación - Universidad Nacional del Sur -
          (Incompleto)
        </li>
      </ul>
    ),
  },
  {
    title: "Cursos",
    id: "courses",
    content: (
      <ul className="pl-2 list-disc">
        <li className="mb-4">
          Python Avanzado: Programación Orientada a Objetos (POO) - Sergie Code
          (YouTube) | 2024
        </li>
        <li className="mb-4">
          Python desde cero | Curso completo Pandas y despliegue de API REST -
          Sergie Code (YouTube) | 2024
        </li>
        <li className="mb-4">
          Hacking Ético: OF&DF 4.0 Informática (Ciberseguridad) - ExorciseThat |
          2024
        </li>
        <li className="mb-4">PHP 8 desde cero – Midulive (YouTube) | 2024</li>
        <li className="mb-4">
          JAVA desde cero | Spring Boot, Hibernate, PostgreSQL, Docker y Railway
          - Sergie Code (YouTube) | 2024
        </li>
        <li className="mb-4">Curso de Fundamentos de Python – Platzi | 2024</li>
        <li classNamse="mb-4">CSS Avanzado - Desafio Latam | 2024</li>
        <li className="mb-4">
          Diseño para programacion esencial (UX) - Linkedin | 2024
        </li>
        <li className="mb-4">
          Master en JavaScript: JS, jQuery, Angular 8, NodeJS – Udemy | 2019
        </li>
      </ul>
    ),
  },
  {
    title: "Experiencia laboral",
    id: "experience",
    content: (
      <ul className="pl-2 list-disc">
        <li className="mb-4">
          Desarrollador Fullstack - Lexy (Chile) | Dic. 2024 - Actualidad.
          <ul>
            - Frontend: Vite, React, TypeScript, Tailwind CSS, CSS Modules,
            Redux, Zustand.
          </ul>
          <ul>- Backend: Python, FastAPI, SQLAlchemy, PostgreSQL, Docker.</ul>
          <ul>- Control de versiones con Git y Github.</ul>
          <ul>- Despliegue en Vercel.</ul>
        </li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-start gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <div className="col-span-1 mt-8">
          <h2 className="mt-4 mb-4 text-4xl font-bold text-center text-white md:mb-12">
            Sobre mi
          </h2>
          <div className="col-span-1">
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
                className="text-3xl"
              >
                {" "}
                Habilidades{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experiencia laboral{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Educacion{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("courses")}
                active={tab === "courses"}
              >
                Cursos
              </TabButton>
            </div>
            <div className="mt-8">
              <h3>{TAB_DATA.find((t) => t.id === tab).content}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
