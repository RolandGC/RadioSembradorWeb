import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import auspiciador1 from '/public/img/mission-logo.png';
import auspiciador2 from '/public/img/logAsoc.png';
import auspiciador3 from '/public/img/seb-logo.png';
import auspiciador4 from '/public/img/consola.webp';

const Sponsors = () => {
    const auspiciadores = [
        { nombre: 'Auspiciador 1', logo: auspiciador1, link: 'https://www.auspiciador1.com' },
        { nombre: 'Auspiciador 2', logo: auspiciador2, link: 'https://www.auspiciador2.com' },
        { nombre: 'Auspiciador 3', logo: auspiciador3, link: 'https://www.auspiciador3.com' },
        //{ nombre: 'Auspiciador 4', logo: auspiciador4, link: 'https://www.auspiciador4.com' },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % auspiciadores.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [auspiciadores.length]);

    const currentSponsor = auspiciadores[index];

    return (
        <div className="bg-black/50 backdrop-blur-sm py-12 bg-gradient-to-br from-blue-900 to-greenSky text-white overflow-hidden rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="font-extrabold tracking-tight sm:text-4xl lg:text-[50px] font-bold text-center p-4 font-futura">Nuestros Auspiciadores</h2>
                    <p className="mt-2 text-lg text-white/70">Gracias a quienes hacen posible nuestra transmisión.</p>
                </div>

                <div className="flex justify-center items-center h-[300px] relative">
                    <AnimatePresence mode="wait">
                        <motion.a
                            key={currentSponsor.nombre}
                            href={currentSponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="w-[620px] h-[360px] bg-white/5 hover:bg-white/10 rounded-lg shadow-md flex items-center justify-center p-4 absolute"
                        >
                            <img
                                src={currentSponsor.logo}
                                alt={`Logo de ${currentSponsor.nombre}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.a>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
