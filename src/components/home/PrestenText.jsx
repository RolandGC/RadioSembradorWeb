import React, { useState, useEffect } from 'react';

function PrestenText() {
    const textArray = [
        'Buena Música',
        'Sana doctrina',
        'Buena señal',
        'Compartir el Evangelio',
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isAnimating) {
            timeout = setTimeout(() => {
                setIsAnimating(true);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            }, 4000); // Cambiar de texto cada 3 segundos
        }

        return () => clearTimeout(timeout);
    }, [currentTextIndex, textArray.length, isAnimating]);

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);
            }, 3000); // Duración de la animación de 1 segundo

            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);
    return (
        <div>
            <div className=" z-10 font-ubuntu  md:text-[55px] sm:text-[40px] py-8 flex flex-col items-center justify-start  h-full text-white">
                <p className='flex flex-col items-start justify-start text-[15px] font-urbanist italic no-underline'>
                    Nuestro enfoque es en:
                </p>
                <div
                    className={`overflow-hidden transition-all duration-1000 font-ubuntu  ${isAnimating
                        ? 'translate-y-full opacity-0'
                        : currentTextIndex !== null
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-full opacity-0'
                        }`}
                >
                    <p>{textArray[currentTextIndex]}</p>
                </div>
            </div>
        </div>
    )
}

export default PrestenText