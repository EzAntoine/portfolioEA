"use client";
import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-6">
      <div className="container flex flex-wrap items-center justify-between p-8">
        <div className="flex flex-wrap justify-between gap-2">
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
        <p className="text-slate-600">
          <Link href="mailto:ezequielantoine@gmail.com">
            <p className="hidden mt-2 text-slate-600 hover:text-white md:block">
              ezequielantoine@gmail.com
            </p>
          </Link>
          Ezequiel Antoine - 2024
        </p>
      </div>
    </footer>
  );
}
