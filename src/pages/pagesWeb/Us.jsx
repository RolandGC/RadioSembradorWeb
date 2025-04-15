import React, { useEffect, useState } from 'react'
import { TbDeviceIpadSearch } from "react-icons/tb"
import { SlRocket } from "react-icons/sl"
import { FaHouseUser } from "react-icons/fa"
import consola from '/public/img/consola.webp';
import { GiBullseye } from "react-icons/gi";

const Us = () => {

    const properties = [
        {
            id: 1,
            href: '/item',
            imageSrc: '/public/img/daniel.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            title: 'Adminstrador',
            name: 'Julio Mamani',
            buttonColor: 'bg-red-500'
        },
        {
            id: 2,
            href: '/item',
            imageSrc: '/public/img/back.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            title: 'Coordinador',
            name: 'Javier alanoca',
            buttonColor: 'bg-red-500'
        },
    ]
    return (
        <div className='sm:px-4 lg:px-6 rounded-xl' >
            <h1 className='text-[40px] font-bold font-futura text-center'>Nosotros</h1>
            <div>
                <div>
                    <section
                        className="relative bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
                        style={{ backgroundImage: `url(${consola})` }}
                    >
                        {/* Overlay oscuro fijo, sin romper en móviles */}
                        <div className="absolute inset-0 bg-black/15 bg-gradient-to-r from-black/70 to-black/30 rounded-xl"></div>

                        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                            <div className="max-w-xl text-center sm:text-left font-futura">
                                <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                                    Somos
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                                    Somos una Emisora Cristiana comprometida con la labor evangelizadora en el pueblo de Tacna. La radio tiene la misión de difundir el mensaje de salvación y restauración a través de cada programa, música y mensaje que se transmite desde Tacna – Peru.
                                </p>
                            </div>
                        </div>
                    </section>


                </div>
                <br />
                <br />
                <div className="max-w-5xl mx-auto w-11/12">
                    <ul role="list" className="grid gap-10 sm:grid-cols-2 md:gap-10">
                        <li className="transition-transform duration-300 hover:scale-[1.03]">
                            <div className="flex items-center gap-x-4 md:gap-x-6 border border-gray-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl p-5 transition-all duration-300">
                                <div className="rounded-full p-4 bg-gradient-to-tr from-greenSky to-green-300 shadow-md">
                                    <GiBullseye className="text-white text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-futura">Misión</h3>
                                    <p className="text-base font-urbanist text-gray-600 mt-2">
                                        Somos sembradores de la palabra.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="transition-transform duration-300 hover:scale-[1.03]">
                            <div className="flex items-center gap-x-4 md:gap-x-6 border border-gray-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl p-5 transition-all duration-300">
                                <div className="rounded-full p-4 bg-gradient-to-tr from-yellow to-purple-400 shadow-md">
                                    <SlRocket className="text-white text-4xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-futura">Visión</h3>
                                    <p className="text-base font-urbanist text-gray-600 mt-2">
                                        Ser una Radio que dé gloria a Dios.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <br className='' />
                {/* <div className='m-4'>
                    <h1 className='font-futura font-bold text-center text-3xl'>Nuestros equipo</h1>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 rounded-md ">
                        {properties.map((product) => (
                            <div key={product.id} className="group relative shadow-lg">
                                <div className=''>
                                    <div className="w-full overflow-hidden  bg-gray-200 lg:h-80 sm:h-60 ">
                                        <a href={product.href}>
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center md:h-auto md:w-full lg:h-full lg:w-full  inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                            />

                                        </a>
                                    </div>
                                </div>
                                <div className='bg-white p-2 font-urbanist'>
                                    <div className="mt-3 ">
                                        <div className='ml-3 text-center'>
                                            <div>
                                                <p className="text-sm justify-center font-medium text-gray-700 mb-2 ">{product.title}</p>
                                            </div>
                                            <div className='flex justify-center'>
                                                <p className='text-[20px] text- text-center font-bold'> {product.name}</p>
                                            </div>
                                            <h3 className="text-sm text-gray-600 flex">
                                                {product.locate}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Us