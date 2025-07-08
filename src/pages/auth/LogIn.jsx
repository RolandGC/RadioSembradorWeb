import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

function LogIn() {
    const navigate = useNavigate();
    const { login } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        const response = await login(data, setError);

        if (response) {
            navigate('/admin/dashboard'); // acceso directo sin validar rol
        }

        setTimeout(() => {
            setError('');
        }, 3000);
    };

    return (
        <div
            className="min-h-full flex justify-center items-center mx-auto md:px-6 py-5 md:py-12 lg:px-8"
            style={{ backgroundImage: "url('/img/radio2.jpg')" }}
        >
            <div className="bg-white bg-opacity-100 ml-4 mr-4 mb-10 p-6 w-full rounded max-w-3xl font-urbanist flex flex-row justify-center space-x-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-20 w-auto"
                            src="/img/logo2.png"
                            alt="Logo"
                        />
                        <h2 className="mt-10 mb-5 text-center text-2xl font-bold leading-9 text-black font-futura">
                            Iniciar sesión
                        </h2>
                    </div>

                    {error && <p className="text-red-500 mb-3">{error}</p>}

                    <form noValidate className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* Usuario */}
                        <div>
                            <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                                Usuario
                            </label>
                            <input
                                id="user"
                                type="text"
                                {...register("user", {
                                    required: "El usuario es requerido",
                                })}
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.user && (
                                <p className="text-red-500 text-sm">{errors.user.message}</p>
                            )}
                        </div>

                        {/* Contraseña */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: "La contraseña es requerida",
                                })}
                                className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Botón */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-greenSky text-white py-2 px-4 rounded hover:bg-gray-600"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>

                    {/* <p className="mt-10 text-center text-sm text-black">
                        ¿No es un miembro?{" "}
                        <Link to="/signin" className="font-semibold text-green-500 hover:text-sky-800">
                            Registrarse
                        </Link>
                    </p> */}
                </div>

                <div className="hidden lg:block w-160">
                    <img src='/img/consola.webp' alt="" className="rounded w-100 h-100 object-cover" />
                </div>
            </div>
        </div>
    );
}

export default LogIn;
