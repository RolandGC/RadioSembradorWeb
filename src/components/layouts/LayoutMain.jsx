import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io"
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLogin } from "react-icons/md"
import { BiSolidChat } from "react-icons/bi"
import { FaPlus } from "react-icons/fa6";
import { SiWechat } from "react-icons/si";
import { FaDonate } from "react-icons/fa";
import ChatBot from '../compGeneral/ChatBot';
import Loading from '../compGeneral/Loading';
import { Dropdown, Button, Avatar } from '@rewind-ui/core'
import logo2 from '/public/img/logo2.png'

import useUser from '../../hooks/useUser';
import RadioPlayer from '../home/RadioPlayer';
import DonationInfo from '../home/DonationInfo';

const links = [
    {
        link: "/",
        text: "Inicio",
        id: 1,
    },
    {
        link: "/programming",
        text: "Programación",
        id: 3,
    },
    {
        link: "/nosotros",
        text: "Nosotros",
        id: 2,
    },
    {
        link: "/contacto",
        text: "Contacto",
        id: 5,
    },
    {
        link: "/donar",
        text: "Donar",
        id: 4,
    },
    
];

const LayoutMain = () => {

    const { isAuth, logout } = useUser()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
    const [isLoading, setIsLoading] = useState(true);
    // const [isOpen, setIsOpen] = useState(false);


    const handleResize = () => {
        setIsLgScreen(window.innerWidth >= 1024);
    };

    // setTimeout(() => {
    //     setIsLoading(false)
    // }, 300);

    window.addEventListener('resize', handleResize);

    const [windowDimension, setWindowDimension] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    });


    const signOff = async () => {
        await logout()
    }

    const [chatBot, setChatBot] = useState(false);
    const toggleChatbot = () => {
        setChatBot(!chatBot);
    };

    return (
        <>
                <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-5 md:px-0 bg-[#66524c]">
                    <div className="flex items-center justify-center lg:justify-start pl-0  w-full h-[70px]">
                    <Link
                        to="/"
                        className="text-white flex justify-start items-center lg:pl-8 font-semibold text-xl h-[70px] pr-16 group hover:bg-gray-200"
                    >
                        <img
                            src={logo2}
                            alt="Logo"
                            width="100"
                            height="40"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </Link>
                        <div
                            className={`absolute ${isMenuOpen ? 'flex' : 'hidden'} h-screen z-30 bg-black bg-opacity-75 top-0 bottom-0 left-0 flex lg:flex right-0 justify-center items-center gap-5  font-bold p-3 lg:p-0 lg:static lg:bg-transparent lg:h-auto`}
                        >
                            {
                                isMenuOpen ? (
                                    <button
                                        onClick={() => setIsMenuOpen(false)} className='bg-red-600 absolute top-5 right-5 rounded-full transition-colors duration-300 hover:bg-red-800  p-3'
                                    >
                                        <AiOutlineClose className='text-white text-2xl font-bold' />
                                    </button>
                                ) : null
                            }
                            <div className='flex flex-col gap-10 lg:gap-5 lg:flex-row '>
                                {links.map(link => (
                                    <Link
                                        to={link.link}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white font-futura text-3xl lg:text-gray-700 font-bold lg:text-[20px] transition duration-300 ease-in-out transform hover:scale-110 hover:text-greenSky relative group"
                                        key={link.id}
                                    >
                                        <span className="relative z-10">{link.text}</span>
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-greenSky transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                ))}
                            </div>
                        </div>
                        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <AiOutlineClose className="text-[35px] text-gray-500" /> : <AiOutlineMenu className="text-[35px] text-gray-500" />}
                        </button>
                    </div>
                </div>

                <main className="bg-gray-200 pt-[70px] ">
                    <RadioPlayer />
                    <Outlet />
                </main>

                <footer className="bg-black/50 backdrop-blur-sm  py-8  bg-gradient-to-br from-blue-900 to-greenSky text-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    {/* <Radio className="w-6 h-6 text-yellow-400" /> */}
                                    <h3 className="text-xl font-bold">Radio Sembrador</h3>
                                </div>
                                <p className="text-white text-sm"> Somos una Emisora Cristiana comprometida con la labor evangelizadora en el pueblo de Tacna. La radio tiene la misión de difundir el mensaje de salvación y restauración a través de cada programa, música y mensaje que se transmite Desde Tacna – Peru.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Enlaces</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-yellow-400 transition">Inicio</a></li>
                                    <li><a href="#" className="hover:text-yellow-400 transition">Programas</a></li>
                                    <li><a href="#" className="hover:text-yellow-400 transition">Noticias</a></li>
                                    <li><a href="#" className="hover:text-yellow-400 transition">Eventos</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Contacto</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li>radiosembrador.info@gmail.com</li>
                                    <li>(052) 578721</li>
                                    <li>GAL, Tacna - Perú</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Síguenos</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/radiosembrador.pe" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="https://wa.me/51984715530" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                                        <FaWhatsapp className="text-2xl" />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white text-sm">
                            <p>© Copyright Radio Sembrador 2025.</p>
                        </div>
                    </div>
                </footer>
                <div className='fixed bottom-3 right-3 z-50' >
                    <button className='bg-greenSky p-5 rounded-full text-white text-4xl animate-pulse' onClick={toggleChatbot}>
                        <FaDonate />
                    </button>

                    <div className={`bg-gray-200 right-3  transition-transform duration-300 absolute top-[-410px] p-0 text-gray-600 shadow-lg ${chatBot ? 'translate-x-0' : 'translate-x-[500px]'}`}>
                        {/* <ChatBot /> */}
                        <DonationInfo />
                    </div>
                </div>
        </>
    )
}
export default LayoutMain


