import React, { useState, useRef, useEffect } from 'react';
import Logo1 from "/public/img/logoVertical.png";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

const RadioPlayer = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 230 });
    const playerRef = useRef(null);
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    // MOUSE EVENTS
    const handleMouseDown = (e) => {
        dragging.current = true;
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (dragging.current) {
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        }
    };

    const handleMouseUp = () => {
        dragging.current = false;
    };

    // TOUCH EVENTS
    const handleTouchStart = (e) => {
        dragging.current = true;
        const touch = e.touches[0];
        offset.current = {
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        };
    };

    const handleTouchMove = (e) => {
        if (dragging.current) {
            const touch = e.touches[0];
            setPosition({
                x: touch.clientX - offset.current.x,
                y: touch.clientY - offset.current.y,
            });
        }
    };

    const handleTouchEnd = () => {
        dragging.current = false;
    };

    useEffect(() => {
        // Desktop
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        // Mobile
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div
            ref={playerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="z-50 cursor-move touch-none"
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: isMinimized ? 'auto' : '90%',
                maxWidth: isMinimized ? '400px' : '600px',
            }}
        >
            <div className={`${isMinimized ? 'h-20 w-full rounded-full' : 'w-full rounded-xl'} transition-all duration-300 shadow-2xl bg-gradient-to-br from-blue-900 to-greenSky text-white overflow-hidden border-2 border-purple-400/20`}>
                {isMinimized ? (
                    <div className="w-full flex items-center justify-between px-4 py-2">
                        <div className="flex items-center space-x-3">
                            <img
                                src={Logo1}
                                alt="Radio Sembrador"
                                className="w-10 h-10 object-contain rounded-full animate-pulse"
                            />
                            <span className={`font-medium ${isMinimized ? 'text-[8px]' : 'text-base'}`}>
                                Radio Sembrador
                            </span>
                        </div>
                        <audio
                            id="stream"
                            controls
                            preload="none"
                            className="w-[200px] sm:w-[300px]"
                        >
                            <source src="https://conectperu.com/8554/stream" type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        <button
                            onClick={toggleMinimize}
                            className="ml-4 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        >
                            <FiMaximize2 className='text-xl' />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between p-3 bg-black/30 backdrop-blur-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center p-1 border border-white/10">
                                    <img
                                        src={Logo1}
                                        alt="Radio logo"
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold truncate">Radio Sembrador</h3>
                                    <p className="text-xs md:text-sm text-gray-300">En vivo</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleMinimize}
                                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            >
                                <FiMinimize2 className='text-2xl' />
                            </button>
                        </div>

                        <div className="p-2 md:p-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 m-2 md:m-3 shadow-inner rounded-xl">
                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-white/20 backdrop-blur">
                                <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/40 px-2 py-1 rounded-full z-10 backdrop-blur-sm border border-white/10">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-semibold">En vivo</span>
                                </div>
                                <div className="relative w-full bg-black/20 overflow-hidden rounded-lg">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
                                    <iframe
                                        src="https://conectperu.com/cp/widgets/player/single/?p=8554"
                                        height="110"
                                        width="100%"
                                        scrolling="no"
                                        className="border-0 relative z-0"
                                        id="radio-player"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RadioPlayer;
