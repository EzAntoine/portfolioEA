"use client"
import React from 'react'
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-6">
      <div className="container p-8 flex flex-wrap items-center justify-between">         
            <div className="flex flex-wrap gap-2 justify-between">
                <div className='flex flex-row'>
                    <Link href="github.com/EzAntoine">
                        <Image src={GithubIcon} alt="Github" className='p-0.5 w-10 h-10 rounded-sm bg-white mr-3 transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                    </Link>
                    <Link href="linkedin.com/in/ezequielantoine">
                        <Image src={LinkedinIcon} alt="LinkedIn" className='p-0.5 w-10 h-10 rounded-sm bg-white mr-1 transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                    </Link>
                </div>
                <div>
                    <Link href="ezequielantoine@gmail.com" className='flex flex-row'>
                        <Image src={MailIcon} alt="Email" className='p-0.5 w-10 h-10 rounded-sm bg-white mr-3 transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                        <p className="text-slate-600 mt-2 hover:text-white hidden md:block">ezequielantoine@gmail.com</p>
                    </Link>
                </div>
            </div>
            <p className="text-slate-600">Ezequiel Antoine - 2024</p>
      </div>
    </footer>
  )
}
