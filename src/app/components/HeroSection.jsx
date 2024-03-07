import React from 'react'

export default function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Mi portfolio
                </h1>
                <p className='text-[#6c7175] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sunt ducimus natus ullam omnis iusto? Non atque quas, tenetur explicabo ut modi nihil inventore ipsum accusamus odit dicta iste rem.
                </p>
                <div>
                    <button className='px-6 py3 w-full sm:w-fit rounded-sm mr-4 bg-lime-300 font-semibold hover:bg-slate-800 hover:text-white text-black border border-white mt-4'>Contacto</button>
                    <button className='px-6 py3 w-full sm:w-fit rounded-sm mr-4 bg-transparent font-semibold hover:bg-slate-800 text-white border border-white mt-4'>Descargar CV</button>
                </div>
            </div>
            {/* <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-lime-300 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative'>
                    <h1 className='text-[#2a2c2e] mb-5 text-4xl lg:text-6xl font-extrabold absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                        {'</>'}
                    </h1>
                </div>
            </div> */}
        </div>
    </section>
  )
}
