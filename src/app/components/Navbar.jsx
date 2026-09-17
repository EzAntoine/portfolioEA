"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navLinks = [
    { title: t.nav.about, path: "#about" },
    { title: t.nav.projects, path: "#projects" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-[#121212]">
      <div className="flex items-center px-4 py-2">
        <Link href="/" className="shrink-0 text-2xl font-semibold text-white lg:text-3xl">
          <span className="bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500 bg-clip-text text-transparent">Ez</span>
          Antoine
        </Link>

          <div className="ml-auto hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-10 text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/EzAntoine" target="_blank" aria-label="GitHub">
                <Image src={GithubIcon} alt="" title="github.com/EzAntoine" className="h-8 w-8 rounded-sm bg-white p-0.5 transition-transform hover:scale-110" />
              </Link>
              <Link href="https://linkedin.com/in/ezequielantoine" target="_blank" aria-label="LinkedIn">
                <Image src={LinkedinIcon} alt="" title="linkedin.com/in/ezequielantoine" className="h-8 w-8 rounded-sm bg-white p-0.5 transition-transform hover:scale-110" />
              </Link>
              <Link href="mailto:ezequielantoine@gmail.com" aria-label="Email">
                <Image src={MailIcon} alt="" title="ezequielantoine@gmail.com" className="h-8 w-8 rounded-sm bg-white p-0.5 transition-transform hover:scale-110" />
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label={navbarOpen ? t.nav.close : t.nav.open}
            aria-expanded={navbarOpen}
            className="ml-auto rounded border border-slate-200 p-2 text-slate-200 hover:border-white hover:text-white md:hidden"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>

          <div role="group" aria-label={t.nav.language} className="ml-3 flex shrink-0 rounded border border-slate-600 text-sm text-white md:ml-8">
            {["es", "en"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`px-2 py-1 ${language === option ? "bg-lime-600 text-black" : "hover:bg-slate-700"}`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
