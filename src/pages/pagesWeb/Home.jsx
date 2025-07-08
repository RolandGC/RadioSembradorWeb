import React, { Fragment, useState, useEffect } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MdExpandCircleDown } from "react-icons/md";
import Cards1 from '../../components/home/cards/Cards1';
import Cards2 from '../../components/home/cards/Cards2';
import Cards3 from '../../components/home/cards/Cards3';
import ItemSell from '../../components/items/ItemSell';
import ItemSellOk from '../../components/items/ItemSellOk';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '/video/introRadio.mp4'
import Flyer from '../../components/home/flyers/Flyer';
import PrestenText1 from '../../components/home/PrestenText';
import Loading from '../../components/compGeneral/Loading';
import { Selector } from '@rewind-ui/core';
import ImageGallery from '../../components/properties/ImageGallery';
import Sponsors from '../../components/home/Sponsors';
import { supabase } from '../../services/supabase';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    )
}

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const [programmingData, setProgrammingData] = useState(null);
    const [radioInfo, setRadioInfo] = useState(null);



    const fetchRadioGeneral = async () => {
        const { data, error } = await supabase
            .from('radio') // ← Asegúrate de usar 'radio' si es la tabla correcta
            .select('*')
            .eq('id', 1)
            .single();

        if (error) {
            console.error('Error al obtener radioGeneral:', error.message);
        } else {
            setRadioInfo(data);
        }
    };


    useEffect(() => {
        fetchRadioGeneral();
    }, []);


    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const [inputValue1] = useState('');
    const [inputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <main className="relative z-10 bg-gray-200">
                <div className="relative w-full h-160 overflow-hidden bg-cover bg-center">
                    {radioInfo?.image?.startsWith('data:image') ? (
                        <img
                            src={radioInfo?.image}
                            alt="Imagen destacada"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    ) : (
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={bg}
                            autoPlay
                            loop
                            muted
                        />
                    )}

                    <div className="relative z-10 items-center justify-center p-2 md:p-4 h-160 w-full  bg-black bg-opacity-35">
                        <h3 className="text-[40px] font-bold  text-white  text-center p-4 pb-3 font-futura  "><PrestenText1 /></h3>
                        <div className="m-14">
                            <div className="flex items-center justify-center text-white sm:w-full">
                                <form action="" className="flex">
                                    <div className="font-normal flex items-center justify-center gap-x-2 bg-white font-futura  rounded-sm">

                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className='m-8 flex-1'>
                            <div className='flex justify-center'>
                                <h6 className="text-sm text-white font-urbanist font-bold">Ver más</h6>
                            </div>
                            <div className="flex justify-center items-center animate-ping m-4">
                                <MdExpandCircleDown className="text-white w-full h-8" />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>

                <div className='bg-gray-200'>
                    <div className='mt-10'>
                        <Cards3 />
                    </div>
                    {/* <div className='mt-10'>
                <Flyer />
            </div> */}
                    <div className='my-20'>
                        {/* <Cards1 /> */}
                        <br className='m-4' />
                        <div className='p-8 slider-container '>
                            {/* <h2 className="text-[45px] font-bold  text-gray-700 text-center p-4 font-futura ">Galeria de imagenes</h2> */}
                            {/* <Slider {...settings}>
                        <div>
                            <h1> <ItemSellOk /></h1>
                        </div>
                        <div>
                            <h2><ItemSellOk /></h2>
                        </div>
                        <div>
                            <h4><ItemSellOk /></h4>
                        </div>
                        <div>
                            <h5><ItemSellOk /></h5>
                        </div>
                    </Slider> */}
                        </div>

                        {/* <div>
                            <ImageGallery />
                        </div> */}
                        <br className='' />
                        <br className='' />
                        <br className='' />
                        <br className='' />
                        <br className='' />
                        <div className='lg:mx-10 rounded-2xl sm:mx-5'>
                            <Sponsors />
                        </div>

                        {/* <div className='m-4'>
                    <div className=" pt-8">
                        <h4 className="text-[45px] font-bold  text-gray-700 text-center p-4 font-futura ">Integrado con inteligencia artificial</h4>
                    </div>
                    <div className="mx-auto max-w-7xl  px-6 lg:px-8 m-3">
                        <ul role="list" className="grid gap-8 md:gap-6  md:grid-cols-3 lg:gap-8 border-gray-300">
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm leading-6 text-gray-700 font-futura ">Navega por nuestra página web inteligente, donde la IA anticipa tus necesidades.</p>
                                    </div>
                                    <a href="/ia/inicioia" className='rounded-full px-3 py-[13px] bg-greenSky'>
                                        <FaArrowRight className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm font-semibold leading-6 text-gray-700 font-futura ">Experimenta la diferencia con nuestra página web, potenciada por inteligencia artificial.</p>
                                    </div>
                                    <a href="/ia/inicioia" className='rounded-full px-3 py-[13px] bg-greenSky'>
                                        <FaArrowRight className=' h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm font-semibold leading-6 text-gray-700 font-futura ">Explora un nuevo nivel de interactividad con nuestra página web impulsada por IA.</p>
                                    </div>
                                    <a href="/ia/inicioia" className='rounded-full px-3 py-[13px] bg-greenSky'>
                                        <FaArrowRight className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
                    </div>
                    <br className='' />

                    <div className="w-full max-w-6xl mx-auto p-4">
                        <h2 className=" font-bold mb-4 text-center text-[45px] font-bold  text-gray-700 text-center p-4 font-futura">Dónde estamos</h2>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                title="Ubicación de la radio"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2778.9070992776137!2d-70.25022655099288!3d-18.034884773828963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1744680317739!5m2!1ses-419!2spe"
                                width="100%"
                                height="500"
                                style={{ border: 2 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <br className='' />
            </main>
        </>
    )
}

export default Home