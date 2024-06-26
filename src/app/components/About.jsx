"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import javascriptSVG from "../../../public/tecnologiesSVG/javascript.svg";
import nodejsSVG from "../../../public/tecnologiesSVG/nodejs.svg";
import cssSVG from "../../../public/tecnologiesSVG/css.svg";
import expressSVG from "../../../public/tecnologiesSVG/Express.js.dark.svg";
import firebaseSVG from "../../../public/tecnologiesSVG/firebase.svg";
import githubSVG from "../../../public/tecnologiesSVG/github.svg";
import htmlSVG from "../../../public/tecnologiesSVG/html5.svg";
import javaSVG from "../../../public/tecnologiesSVG/java.svg";
import nextSVG from "../../../public/tecnologiesSVG/nextjs_icon_dark.svg";
import postgreSVG from "../../../public/tecnologiesSVG/postgresql.svg";
import reactSVG from "../../../public/tecnologiesSVG/react.svg";
import reduxSVG from "../../../public/tecnologiesSVG/redux.svg";
import postmanSVG from "../../../public/tecnologiesSVG/postman.svg";
import sequelizeSVG from "../../../public/tecnologiesSVG/sequelize.svg";
import tailwindSVG from "../../../public/tecnologiesSVG/tailwindcss.svg";
import springSVG from "../../../public/tecnologiesSVG/spring.svg";
import hibernateSVG from "../../../public/tecnologiesSVG/Hibernate.svg";
import dockerSVG from "../../../public/tecnologiesSVG/docker.svg";
import railwaySVG from "../../../public/tecnologiesSVG/Railway_dark.svg";
import vercelSVG from "../../../public/tecnologiesSVG/vercel_dark.svg";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-none flex flex-wrap justify-center gap-4">
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={javascriptSVG}
              alt="JavaScript"
              title="JavaScript"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>JavaScript</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={reduxSVG}
              alt="Redux"
              title="Redux"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Redux</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={sequelizeSVG}
              alt="Sequelize"
              title="Sequelize"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Sequelize</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={springSVG}
              alt="Spring Boot"
              title="Spring Boot"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Spring Boot</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={hibernateSVG}
              alt="Hibernate"
              title="Hibernate"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Hibernate</p>
          </div>
        </li>

        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={firebaseSVG}
              alt="Firebase"
              title="Firebase"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Firebase</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={vercelSVG}
              alt="Vercel"
              title="Vercel"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Vercel</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={railwaySVG}
              alt="Railway"
              title="Railway"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Railway</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={postmanSVG}
              alt="Postman"
              title="Postman"
              width={60}
              height={60}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>Postman</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image
              src={htmlSVG}
              alt="HTML"
              title="HTML"
              width={50}
              height={50}
            />
            <p style={{ fontSize: "0.8em", margin: "0" }}>HTML</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
          <div style={{ textAlign: "center" }}>
            <Image src={cssSVG} alt="CSS" title="CSS" width={50} height={50} />
            <p style={{ fontSize: "0.8em", margin: "0" }}>CSS</p>
          </div>
        </li>
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
        <li className="md:w-1/6 sm:1/4 flex justify-center items-center">
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
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
        <li className="mb-4">
          PHP 8 desde cero – Midulive (YouTube) | 2024 (En curso)
        </li>
        <li className="mb-4">
          JAVA desde cero | Curso con Spring Boot, Hibernate, PostgreSQL, Docker
          y Railway - Sergie Code | 2024.
        </li>
        <li className="mb-4">Curso de Fundamentos de Python – Platzi | 2024</li>
        <li className="mb-4">CSS Avanzado - Desafio Latam | 2024</li>
        <li className="mb-4">
          Diseño para programacion esencial (UX) - Linkedin | 2024
        </li>
        <li className="mb-4">
          Master en JavaScript: JS, jQuery, Angular 8, NodeJS – Udemy | 2019
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
      <div className="md:grid md:grid-cols-1 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image/> 

        <div className="col-span-1 mt-8">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre mi</h2>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            Desarrollador web FullStack Junior, con experiencia en JavaScript,
            Node.js, React, NextJs, Java, Express, PostgreSQL, Sequelize,
            Tailwind y CSS.
            <br />
            Me gusta mucho aprender, por lo que estoy constantemente ampliando
            mis conocimientos.
          </p>
        </div> */}
        <div className="col-span-1 mt-8">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">
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
