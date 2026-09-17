"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSection() {
  const { language, t } = useLanguage();
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-9 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500">
              {t.hero.greeting}{" "}
            </span>
            <br></br>
            <TypeAnimation
              key={language}
              sequence={[
                "Ezequiel Antoine",
                1000,
                t.hero.role,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h1>
          <p className="text-[#6c7175] text-base sm:text-lg mb-6 lg:text-xl">
            {t.hero.intro}
          </p>
          <Link
            href="/CV_Ezequiel_Antoine.pdf"
            download
            target="_blank"
            className="flex flex-wrap justify-between"
          >
            <button className="px-1 py-1 w-full sm:w-fit rounded-sm mr-4 bg-transparent font-semibold bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500 hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-sm px-5 py-1">
                {t.hero.cv}
              </span>
            </button>
          </Link>
          <div className="container md:hidden p-1 flex flex-wrap items-center mt-4">
            <div className="flex flex-wrap gap-2 justify-center w-full">
              <div className="flex flex-row ">
                <Link href="https://github.com/EzAntoine" target="_blank">
                  <Image
                    src={GithubIcon}
                    alt="Github"
                    title="github.com/EzAntoine"
                    className="p-0.5 w-10 h-10 rounded-sm bg-white mr-3 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </Link>
                <Link
                  href="https://linkedin.com/in/ezequielantoine"
                  target="_blank"
                >
                  <Image
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    title="linkedin.com/in/ezequielantoine"
                    className="p-0.5 w-10 h-10 rounded-sm bg-white mr-1 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div>
                <Link href="mailto:ezequielantoine@gmail.com">
                  <Image
                    src={MailIcon}
                    alt="Email"
                    title="ezequielantoine@gmail.com"
                    className="p-0.5 w-10 h-10 rounded-sm bg-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
