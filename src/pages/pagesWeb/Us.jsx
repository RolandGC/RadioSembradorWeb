import React, { useEffect, useState } from 'react';
import { GiBullseye } from "react-icons/gi";
import { SlRocket } from "react-icons/sl";
import consola from '/public/img/consola.webp';
import { supabase } from '../../services/supabase';

const Us = () => {
    const [products, setProducts] = useState([]);
    const [collaborators, setCollaborators] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const { data: textData, error: textError } = await supabase.from('text1').select('*');
        const { data: collabData, error: collabError } = await supabase
            .from('collaborators')
            .select('*')
            .eq('active', true);

        if (textError || collabError) {
            console.error('Error al obtener datos:', textError || collabError);
        } else {
            setProducts(textData);
            setCollaborators(collabData.sort((a, b) => a.id - b.id));        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const record = products.find(p => p.id === 1);

    return (
        <div className='sm:px-4 lg:px-6 rounded-xl'>
            <h1 className='text-[40px] font-bold font-futura text-center'>Nosotros</h1>

            {/* Sección de bienvenida */}
            <section
                className="relative bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${record?.image || consola})` }}
            >
                <div className="absolute inset-0 bg-black/15 bg-gradient-to-r from-black/70 to-black/30 rounded-xl"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left font-futura">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">Somos</h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                            {record?.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <div className="max-w-5xl mx-auto w-11/12 my-12">
                <ul className="grid gap-10 sm:grid-cols-2 md:gap-10">
                    <li className="transition-transform duration-300 hover:scale-[1.03]">
                        <div className="flex items-center gap-x-4 md:gap-x-6 border border-gray-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl p-5">
                            <div className="rounded-full p-4 bg-gradient-to-tr from-greenSky to-green-300 shadow-md">
                                <GiBullseye className="text-white text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 font-futura">Misión</h3>
                                <p className="text-base font-urbanist text-gray-600 mt-2">{record?.mision}</p>
                            </div>
                        </div>
                    </li>

                    <li className="transition-transform duration-300 hover:scale-[1.03]">
                        <div className="flex items-center gap-x-4 md:gap-x-6 border border-gray-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl p-5">
                            <div className="rounded-full p-4 bg-gradient-to-tr from-yellow to-purple-400 shadow-md">
                                <SlRocket className="text-white text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 font-futura">Visión</h3>
                                <p className="text-base font-urbanist text-gray-600 mt-2">{record?.vision}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Sección Nuestro Equipo */}
            <div className='py-20 px-4'>
                <h2 className='text-4xl font-bold text-center font-futura mb-12'>Nuestro equipo</h2>

                <div
                    className={`mx-auto max-w-screen-xl gap-10 ${collaborators.length <= 3
                            ? 'flex flex-wrap justify-center'
                            : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                        }`}
                >
                    {collaborators.map(collab => (
                        <div
                            key={collab.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 w-[270px]"
                        >
                            <div className="h-64 w-full bg-gray-200">
                                {collab.image ? (
                                    <img
                                        src={collab.image}
                                        alt={`${collab.name} ${collab.lastname}`}
                                        className="h-full w-full object-cover object-center"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-gray-400">Sin imagen</div>
                                )}
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-xl font-semibold text-gray-900">{collab.name} {collab.lastname}</p>
                                <p className="text-sm text-gray-600 mt-1">{collab.rol}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Us;
