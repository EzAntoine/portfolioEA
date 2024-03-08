"use client";
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

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
  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={'/'} className='text-2xl md:text-2xl lg:text-3xl text-white font-semibold'>
                <p className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500'>Ez</p>Antoine
            </Link>
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
    </nav>
  )
}
