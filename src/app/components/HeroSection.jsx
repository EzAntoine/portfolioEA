"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import MailIcon from "../../../public/mail.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-9 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500'>
                         Hola! Soy{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Ezequiel Antoine',
                            1000, 
                            'Desarrollador FullStack',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={1}
                    />
                </h1>
                <p className='text-[#6c7175] text-base sm:text-lg mb-6 lg:text-xl'>
                    Una persona versátil y apasionada, con experiencia laboral en diversos rubros, explorando diferentes industrias y roles, lo que me ha permitido desarrollar perspectiva y habilidad para adaptarme rápidamente a nuevos desafíos, siempre desde el compromiso y la empatía. 
                    Como desarrollador, combino mis hobbies y vivencias en otros campos con mi capacidad para pensar fuera de la caja para crear soluciones con la idea de ser lo mas simples y efectivas posibles. 
                </p>
                <Link 
                    href="/CV_Ezequiel_Antoine.pdf" download
                    target="_blank"
                    className='flex flex-wrap justify-between'>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-sm mr-4 bg-transparent font-semibold bg-gradient-to-br from-green-500 via-lime-500 to-yellow-500 hover:bg-slate-800 text-white border border-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-sm px-5 py-1'>
                            Descargar CV
                        </span>
                    </button>
                </Link>
                <div className="container md:hidden p-1 flex flex-wrap items-center">         
                    <div className="flex flex-wrap gap-2 justify-center w-full">
                        <div className='flex flex-row '>
                            <Link href="github.com/EzAntoine">
                                <Image src={GithubIcon} alt="Github" title='github.com/EzAntoine' className='p-0.5 w-10 h-10 rounded-sm bg-white mr-3 transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                            </Link>
                            <Link href="linkedin.com/in/ezequielantoine">
                                <Image src={LinkedinIcon} alt="LinkedIn" title='linkedin.com/in/ezequielantoine' className='p-0.5 w-10 h-10 rounded-sm bg-white mr-1 transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                            </Link>
                        </div>
                        <div>
                            <Link href="mailto:ezequielantoine@gmail.com">
                                <Image src={MailIcon} alt="Email" title='ezequielantoine@gmail.com' className='p-0.5 w-10 h-10 rounded-sm bg-white transform hover:scale-110 transition-transform duration-300 ease-in-out'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </section>
  )
}
