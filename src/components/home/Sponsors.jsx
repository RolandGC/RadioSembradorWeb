import React from 'react';
//import Image from 'next/image'; // Si estás usando Next.js para optimización de imágenes
// Si no estás usando Next.js, puedes usar la etiqueta <img> normal

// Importa tus imágenes de auspiciadores
import auspiciador1 from '/public/img/logoBaptisMission.png';
import auspiciador2 from '/public/img/consola.webp';
import auspiciador3 from '/public/img/consola.webp';
import auspiciador4 from '/public/img/consola.webp';
// ... importa más imágenes según sea necesario

const Sponsors = () => {
    const auspiciadores = [
        {
            nombre: 'Auspiciador 1',
            logo: auspiciador1,
            link: 'https://www.auspiciador1.com'
        },
        {
            nombre: 'Auspiciador 2',
            logo: auspiciador2,
            link: 'https://www.auspiciador2.com'
        },
        {
            nombre: 'Auspiciador 3',
            logo: auspiciador3,
            link: 'https://www.auspiciador3.com'
        },
        {
            nombre: 'Auspiciador 4',
            logo: auspiciador4,
            link: 'https://www.auspiciador4.com'
        },
        // ... añade más auspiciadores aquí
    ];

    return (
        <div className="bg-black/50 backdrop-blur-sm py-12 bg-gradient-to-br from-blue-900 to-greenSky text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Nuestros Auspiciadores</h2>
                    <p className="mt-2 text-lg text-white/70">Gracias a quienes hacen posible nuestra transmisión.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
                    {auspiciadores.map((auspiciador, index) => (
                        <a
                            key={index}
                            href={auspiciador.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md"
                        >
                            {/* Si estás usando Next.js para optimización de imágenes */}
                            {typeof auspiciador.logo === 'object' && auspiciador.logo !== null && auspiciador.logo.src ? (
                                <div className="relative w-320 h-160 md:w-140 md:h-120">
                                    <img
                                        src={auspiciador.logo}
                                        alt={`Logo de ${auspiciador.nombre}`}
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                // Si no estás usando Next.js o la importación directa no funciona
                                <img
                                    src={auspiciador.logo}
                                    alt={`Logo de ${auspiciador.nombre}`}
                                    className="max-w-320 max-h-160 md:max-w-100 md:max-h-80 object-contain"
                                />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;