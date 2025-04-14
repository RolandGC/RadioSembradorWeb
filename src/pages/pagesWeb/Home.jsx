import React, { Fragment, useState } from 'react'
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

const options = [
    { value: 'all', label: 'Todos los inmuebles' },
    { value: 'house', label: 'Casas' },
    { value: 'department', label: 'Departamentos' },
    { value: 'office', label: 'Oficinas' },
    { value: 'lot', label: 'Terrenos' },
    { value: 'rental', label: 'Locales' },
    { value: 'rental', label: 'Condominio' },
    { value: 'rental', label: 'Hotel' },
    { value: 'rental', label: 'Oportunidades' },
    { value: 'rental', label: 'Proyectos' },
    { value: 'rental', label: 'Aires' },
    { value: 'rental', label: 'Edificios' }
];

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

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

    const products = [
        {
            id: 1,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep3.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: '2 trimestre 2024',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 2,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep6.webp',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },
        {
            id: 3,
            locate: 'Lima, Lima, Miraflores',
            href: '/item',
            imageSrc: '/public/img/dep1.jpeg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 'S/. 360,000.00 ',
            ruc: 'En construcción',
            society: 'Junio 2025',
            type: 'HOTEL EN VENTA',
            area: '5,642.00 m²',
        },

    ]


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
            <main className="relative z-10 ">
                <div className="relative w-full h-160 overflow-hidden bg-cover bg-center">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={bg}
                        autoPlay
                        loop
                        muted
                    />

                    <div className="relative z-10 items-center justify-center p-2 md:p-4 h-160 w-full  bg-black bg-opacity-35">
                        <h3 className="text-[40px] font-bold  text-white  text-center p-4 pb-3 font-ubuntu  "><PrestenText1 /></h3>
                        <div className="m-14">
                            <div className="flex items-center justify-center text-white sm:w-full">
                                <form action="" className="flex">
                                    <div className="font-normal flex items-center justify-center gap-x-2 bg-white font-ubuntu  rounded-sm">

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

                <div className='bg-gray-100'>
                    <div className='bg-gray-100'>
                        <div className='mt-10'>
                            <Cards3 />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center mt-10'>
                            <a href="/nosotros">
                                <button className='inset-0 flex justify-center items-center border border-gray-400 p-2 font-urbanist hover:bg-gray-400 hover:text-white'>
                                    Nosotros
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* <div className='mt-10'>
                <Flyer />
            </div> */}
                    {/* <Loading /> */}
                    <div className='my-20'>
                        {/* <Cards1 /> */}
                        <br className='m-4' />
                        <div className='p-8 slider-container '>
                    <h2 className="text-[45px] font-bold  text-gray-700 text-center p-4 font-ubuntu ">Galeria de imagenes</h2>
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

                <div>
                    <ImageGallery/>
                </div>

                <div>
                    <Sponsors/>
                </div>

                        {/* <div className='m-4'>
                    <div className=" pt-8">
                        <h4 className="text-[45px] font-bold  text-gray-700 text-center p-4 font-ubuntu ">Integrado con inteligencia artificial</h4>
                    </div>
                    <div className="mx-auto max-w-7xl  px-6 lg:px-8 m-3">
                        <ul role="list" className="grid gap-8 md:gap-6  md:grid-cols-3 lg:gap-8 border-gray-300">
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm leading-6 text-gray-700 font-ubuntu ">Navega por nuestra página web inteligente, donde la IA anticipa tus necesidades.</p>
                                    </div>
                                    <a href="/ia/inicioia" className='rounded-full px-3 py-[13px] bg-greenSky'>
                                        <FaArrowRight className='h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm font-semibold leading-6 text-gray-700 font-ubuntu ">Experimenta la diferencia con nuestra página web, potenciada por inteligencia artificial.</p>
                                    </div>
                                    <a href="/ia/inicioia" className='rounded-full px-3 py-[13px] bg-greenSky'>
                                        <FaArrowRight className=' h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full m-3' />
                                    </a>
                                </div>
                            </li>
                            <li className='max-w-[450px] mx-auto md:w-auto'>
                                <div className="flex p-5 md:p-4 md:pr-1 lg:p-5 items-center gap-x-1 border border-gray-400 bg-white shadow-md">
                                    <div >
                                        <p className="text-sm font-semibold leading-6 text-gray-700 font-ubuntu ">Explora un nuevo nivel de interactividad con nuestra página web impulsada por IA.</p>
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
                    {/* <div>
                <div className="">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-[45px] font-bold  text-gray-700 text-center p-4 font-ubuntu ">Más propiedades</h2>
                        <div className='justify-end border-gray-500'>
                            <div className=" inset-0 flex items-center justify-end text-white ">
                                <form action="" className="flex">
                                    <div className="font-urbanist flex items-center justify-center rounded-t bg-white m-2">
                                        <button className=" border border-gray-600 hover:bg-greenSky hover:text-white text-gray-600  py-2 px-4 ">
                                            En construcción
                                        </button>
                                        <button className="border border-gray-600 hover:bg-greenSky hover:text-white text-gray-600  py-2 px-4  ml-2">
                                            En planos
                                        </button>
                                        <button className="border border-gray-600 hover:bg-greenSky hover:text-white text-gray-600 py-2 px-4 ml-2">
                                            Entrega inmediata
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div> */}

                    <div className="">
                        <div className="" >
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home