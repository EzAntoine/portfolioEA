"use client"
import React from 'react'
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-6">
      <div className="container p-8 flex flex-wrap items-center justify-between">
            {/* <span>
                <p className='inline text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500'>Ez</p>Antoine
            </span>    */}         
            <div className="flex flex-wrap gap-2">
                <Link href="github.com/EzAntoine">
                    <Image src={GithubIcon} alt="Github Icon" className='p-0.5 w-10 h-10 rounded-sm bg-white mr-3'/>
                </Link>
                <Link href="linkedin.com/in/ezequielantoine">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" className='p-0.5 w-10 h-10 rounded-sm bg-white mr-3'/>
                </Link>
                <Link href="ezequielantoine@gmail.com">
                    <p className="text-slate-600 mt-2 hover:text-white">ezequielantoine@gmail.com</p>
                </Link>
            </div>
            <p className="text-slate-600">Ezequiel Antoine - 2024</p>
      </div>
    </footer>
  )
}
