"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
       title: "Sobre mi",
       path: "#about" 
    },
    {
        title: "Proyectos",
        path: "#projects" 
    },
    {
        title: "Contacto",
        path: "#contact" 
    }
]

export default function Navbar() {
    const [navbarOpen, setNavbarOpen]=useState(false);

    return (
        <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-20'>
                <Link href={'/'} className='text-2xl md:text-2xl lg:text-3xl text-white font-semibold'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500'>Ez</p>Antoine
                </Link>
                <div className='menu-mobile block md:hidden'>
                    {!navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ) : (
                        <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto" id="navbar"'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />  
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    ) 
}
