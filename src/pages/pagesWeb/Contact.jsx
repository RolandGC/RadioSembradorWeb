import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import building from "/public/img/micro.jpg";
import { supabase } from '../../services/supabase';


function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [errores, setErrores] = useState({});

    const handleSubmitContact = async (formData) => {
        const { nombres, apellidos, email, celular, mensaje } = formData;

        try {
            const { error } = await supabase.from('contact').insert([
                {
                    name: `${nombres} ${apellidos}`,
                    mail: email,
                    phone: celular,
                    message: mensaje
                }
            ]);

            if (error) {
                console.error('Error al guardar en Supabase:', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al enviar el formulario.',
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Mensaje enviado correctamente",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        } catch (err) {
            console.error('Error inesperado:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error inesperado',
                text: 'Ocurrió un problema inesperado.',
            });
        }
    };

    return (
        <div className='bg-white border-t-2'>
            <div className="max-w-6xl w-11/12 mx-auto flex flex-col lg:flex-row lg:items-center">
                <div className="hidden lg:block pb-8 font-urbanist lg:w-full">
                    <img src={building} alt="" className="w-200 lg:w-140 lg:h-200 object-cover mx-auto rounded-xl" />
                </div>
                <form className='lg:w-full p-3 lg:p-10' noValidate onSubmit={handleSubmit(handleSubmitContact)}>
                    <div className="space-y-1 font-urbanist">
                        <div className="border-b border-gray-900/10 pb-4">
                            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-7 text-greenSky">CONTÁCTANOS</h1>
                            <p className="text-sm leading-6 text-black my-5">
                                Rellena el formulario para ponernos en contacto.
                            </p>
                            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"> {/* Adjusted gap-y */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="nombres" className="block text-sm font-bold leading-6 text-greenSky">
                                        Nombres
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <input
                                            type="text"
                                            name="nombres"
                                            id="nombres"
                                            autoComplete="nombres"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.nombres ? 'ring-red-500' : ''}`}
                                            {...register("nombres", { required: "El nombre es obligatorio", minLength: { value: 2, message: "El nombre debe tener al menos 2 caractéres" } })}
                                        />
                                        {errors.nombres && <p className="text-red-500 text-sm">{errors.nombres.message}</p>}
                                        {errores?.nombres && <p className="text-red-500 text-sm">{errores?.nombres[0]}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="apellidos" className="block text-sm font-bold leading-6 text-greenSky">
                                        Apellidos
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <input
                                            type="text"
                                            name="apellidos"
                                            id="apellidos"
                                            autoComplete="apellidos"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.apellidos ? 'ring-red-500' : ''}`}
                                            {...register("apellidos", { required: "Los apellidos son obligatorios" })}
                                        />
                                        {errors.apellidos && <p className="text-red-500 text-sm">{errors.apellidos.message}</p>}
                                        {errores?.apellidos && <p className="text-red-500 text-sm">{errores?.apellidos[0]}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-greenSky">
                                        Email
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.email ? 'ring-red-500' : ''}`}
                                            {...register("email", {
                                                required: "El email es obligatorio",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "El email no es válido"
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                        {errores?.email && <p className="text-red-500 text-sm">{errores?.email[0]}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="celular" className="block text-sm font-bold leading-6 text-greenSky">
                                        Teléfono
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <input
                                            id="celular"
                                            name="celular"
                                            type="text"
                                            autoComplete="celular"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.celular ? 'ring-red-500' : ''}`}
                                            {...register("celular", {
                                                required: "El teléfono es obligatorio",
                                                minLength: {
                                                    value: 9,
                                                    message: "El teléfono debe tener exactamente 9 cifras"
                                                },
                                                maxLength: {
                                                    value: 9,
                                                    message: "El teléfono debe tener exactamente 9 cifras"
                                                },
                                                pattern: {
                                                    value: /^\d{9}$/,
                                                    message: "El teléfono debe contener solo números y tener 9 cifras"
                                                }
                                            })}
                                        />
                                        {errors.celular && <p className="text-red-500 text-sm">{errors.celular.message}</p>}
                                        {errores?.celular && <p className="text-red-500 text-sm">{errores?.celular[0]}</p>}
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="tipo_solicitud" className="block w-full text-sm font-bold leading-6 text-greenSky">
                                        Tipo de solicitud
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <select
                                            id="tipo_solicitud"
                                            name="tipo_solicitud"
                                            autoComplete="tipo_solicitud"
                                            className={`block w-full rounded-md border-0 py-1.5 h-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.tipo_solicitud ? 'ring-red-500' : ''}`}
                                            {...register("tipo_solicitud", { required: "Seleccione un tipo de solicitud" })}
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="Consulta">Consulta</option>
                                            <option value="Reclamo">Reclamo</option>
                                            <option value="Otro motivo">Otro motivo</option>
                                        </select>
                                        {errors.tipo_solicitud && <p className="text-red-500 text-sm">{errors.tipo_solicitud.message}</p>}
                                        {errores?.tipo_solicitud && <p className="text-red-500 text-sm">{errores?.tipo_solicitud[0]}</p>}
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="ciudad" className="block text-sm font-bold leading-6 text-greenSky">
                                        Ciudad
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <input
                                            type="text"
                                            name="ciudad"
                                            id="ciudad"
                                            autoComplete="ciudad"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.ciudad ? 'ring-red-500' : ''}`}
                                            {...register("ciudad", { required: "La ciudad es obligatoria" })}
                                        />
                                        {errors.ciudad && <p className="text-red-500 text-sm">{errors.ciudad.message}</p>}
                                        {errores?.ciudad && <p className="text-red-500 text-sm">{errores?.ciudad[0]}</p>}
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="mensaje" className="block text-sm font-bold leading-6 text-greenSky">
                                        Mensaje
                                    </label>
                                    <div className="mt-1"> {/* Reduced margin-top */}
                                        <textarea
                                            cols="30" rows="3"
                                            name="mensaje"
                                            id="mensaje"
                                            autoComplete="mensaje"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${errors.mensaje ? 'ring-red-500' : ''}`}
                                            {...register("mensaje", { required: "El mensaje es obligatorio" })}
                                        ></textarea>
                                        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
                                        {errores?.mensaje && <p className="text-red-500 text-sm">{errores?.mensaje[0]}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-greenSky px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenSky w-40"
                        >
                            ENVIAR
                        </button>
                    </div>
                </form>

            </div>
        </div>

    );
}

export default Contact