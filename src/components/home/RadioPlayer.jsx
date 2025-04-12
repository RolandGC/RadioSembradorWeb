import React, { useState, useEffect } from 'react';
//import { Minimize2 } from 'lucide-react';
import Logo1 from "/public/img/Logo1.png";

const RadioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(80);
    const [isMuted, setIsMuted] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [radioInfo, setRadioInfo] = useState({
        title: "Radio Sembrador",
        artist: "Música Cristiana",
        cover: "/public/img/Logo1.png"
    });

    // Toggle play/pause
    const togglePlay = () => {
        const audioElement = document.getElementById('radio-player');
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Handle volume change
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        const audioElement = document.getElementById('radio-player');
        audioElement.volume = newVolume / 100;
        if (newVolume === '0') {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };

    // Toggle mute
    const toggleMute = () => {
        const audioElement = document.getElementById('radio-player');
        if (isMuted) {
            audioElement.volume = volume / 100;
        } else {
            audioElement.volume = 0;
        }
        setIsMuted(!isMuted);
    };

    // Toggle minimize/maximize
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="w-full flex justify-center">
            <div className={`${isMinimized ? 'h-16 w-full sm:w-64 rounded-full' : 'w-full lg:w-1/2 xl:w-1/2 rounded-xl'} transition-all duration-300 shadow-2xl mx-auto mb-6 bg-gradient-to-br from-blue-900 to-greenSky text-white overflow-hidden border-2 border-purple-400/20 max-w-6xl`}>
                {isMinimized ? (
                    /* Minimized player */
                    <button
                        onClick={toggleMinimize}
                        className="w-full h-full flex items-center justify-center space-x-3"
                    >
                        <img
                            src={Logo1}
                            alt="Radio Sembrador"
                            className="w-10 h-10 object-contain rounded-full animate-pulse"
                        />
                        <span className="font-medium">Radio Sembrador</span>
                    </button>
                ) : (
                    /* Full player */
                    <div className="flex flex-col w-full">
                        {/* Header with station info */}
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
                                {/* <Minimize2 size={18} /> */}
                            </button>
                        </div>

                        {/* Styled iframe container with modern borders */}
                        <div className="p-2 md:p-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 m-2 md:m-3 shadow-inner rounded-xl">
                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-white/20 backdrop-blur">
                                {/* Visual indicator for "live" */}
                                <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/40 px-2 py-1 rounded-full z-10 backdrop-blur-sm border border-white/10">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs font-semibold">LIVE</span>
                                </div>

                                {/* The iframe with a relative container for styling */}
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

                        {/* Album art and now playing - responsive layout */}
                        <div className="px-4 py-2 flex items-center space-x-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-black/20 flex-shrink-0 border border-white/10">
                                
                            </div>
                            <div className="flex-1 min-w-0">
                               
                            </div>
                        </div>

                    </div>
                )}

                <style jsx>{`
            @keyframes progress {
              0% { width: 0%; }
              50% { width: 100%; }
              100% { width: 0%; }
            }
          `}</style>
            </div>
        </div>
    );
};

export default RadioPlayer;