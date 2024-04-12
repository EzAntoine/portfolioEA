"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import Image from "next/image";

const navLinks = [
  {
    title: "Sobre mi",
    path: "#about",
  },
  {
    title: "Proyectos",
    path: "#projects",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl lg:text-3xl text-white font-semibold"
        >
          <p className="inline text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500">
            Ez
          </p>
          Antoine
        </Link>
        <div className="menu-mobile block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto" id="navbar"'>
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <div className="container p-1 flex flex-wrap items-center">
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
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
