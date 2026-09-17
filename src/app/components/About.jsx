"use client";

import { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "../i18n/LanguageContext";
import typescriptSVG from "../../../public/tecnologiesSVG/typescript.svg";
import nodejsSVG from "../../../public/tecnologiesSVG/nodejs.svg";
import githubSVG from "../../../public/tecnologiesSVG/github.svg";
import nextSVG from "../../../public/tecnologiesSVG/nextjs_icon_dark.svg";
import postgreSVG from "../../../public/tecnologiesSVG/postgresql.svg";
import reactSVG from "../../../public/tecnologiesSVG/react.svg";
import tailwindSVG from "../../../public/tecnologiesSVG/tailwindcss.svg";
import vercelSVG from "../../../public/tecnologiesSVG/vercel_dark.svg";
import nestSVG from "../../../public/tecnologiesSVG/nestjs.svg";
import mongoSVG from "../../../public/tecnologiesSVG/mongodb.svg";
import pythonSVG from "../../../public/tecnologiesSVG/python.svg";
import dockerSVG from "../../../public/tecnologiesSVG/docker.svg";
import figmaSVG from "../../../public/tecnologiesSVG/figma.svg";

const skills = [
  ["TypeScript", typescriptSVG, 60], ["React", reactSVG, 60],
  ["Tailwind CSS", tailwindSVG, 70], ["Figma", figmaSVG, 40],
  ["Next.js", nextSVG, 60], ["Python", pythonSVG, 60],
  ["Node.js", nodejsSVG, 60], ["NestJS", nestSVG, 60],
  ["Docker", dockerSVG, 50], ["MongoDB", mongoSVG, 70],
  ["PostgreSQL", postgreSVG, 60], ["Git", githubSVG, 60],
  ["Vercel", vercelSVG, 50],
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const { t } = useLanguage();
  const labels = t.about;

  return (
    <section className="text-white" id="about">
      <div className="items-start gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <div className="col-span-1 mt-8">
          <h2 className="mt-4 mb-4 text-4xl font-bold text-center text-white md:mb-12">{labels.title}</h2>
          <div className="flex flex-row mt-8">
            {["skills", "experience", "education", "courses"].map((id) => (
              <TabButton key={id} selectTab={() => setTab(id)} active={tab === id}>
                {labels[id]}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {tab === "skills" ? (
              <ul className="flex flex-wrap justify-center gap-4 list-none">
                {skills.map(([name, icon, width]) => (
                  <li key={name} className="flex items-center justify-center md:w-1/6 sm:w-1/4">
                    <div className="text-center">
                      <Image src={icon} alt={name} title={name} width={width} height={60} className="mx-auto" />
                      <p className="text-xs">{name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : tab === "experience" ? (
              <ul className="pl-2 list-disc">
                <li className="mb-4">
                  {labels.experienceItems[0]}
                  {labels.experienceItems.slice(1).map((item) => (
                    <div key={item}>- {item}</div>
                  ))}
                </li>
              </ul>
            ) : (
              <ul className="pl-2 list-disc">
                {(tab === "courses" ? labels.courseItems : labels.educationItems).map((item) => (
                  <li key={item} className="mb-4">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
