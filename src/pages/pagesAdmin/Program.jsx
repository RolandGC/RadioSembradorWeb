import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export const Program = () => {
    const [programList, setProgramList] = useState([]);
    const [activeTab, setActiveTab] = useState('dv'); // 'dv' = domingo a viernes, 's' = sábado

    useEffect(() => {
        const fetchProgramData = async () => {
            const { data, error } = await supabase
                .from('programming')
                .select('*')
                .order('id', { ascending: true });

            if (error) {
                console.error('Error al cargar tabla program:', error.message);
            } else {
                setProgramList(data);
            }
        };

        fetchProgramData();
    }, []);

    const handleProgramChange = (e, index) => {
        const updated = [...programList];
        updated[index] = {
            ...updated[index],
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        };
        setProgramList(updated);
    };

    const handleProgramSubmit = async (e, item) => {
        e.preventDefault();
        const { id, ...updateFields } = item;
        const { error } = await supabase.from('programming').update(updateFields).eq('id', id);
        if (error) {
            alert(`Error al actualizar programa ID ${id}: ${error.message}`);
        } else {
            alert(`Programa ID ${id} actualizado correctamente`);
        }
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result); // contiene el base64 (data:image/jpeg;base64,...)
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageUpload = async (e, index) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const base64 = await fileToBase64(file);
            const updated = [...programList];
            updated[index] = {
                ...updated[index],
                image: base64, // guarda directamente el base64 en el campo image
            };
            setProgramList(updated);
        } catch (error) {
            alert('Error al convertir imagen a base64: ' + error.message);
        }
    };


    const diasDV = programList.filter(item => item.id < 25);
    const diasSabado = programList.filter(item => item.id >= 25);

    const renderProgramForms = (list) => (
        list.map((item, index) => (
            <form
                key={item.id}
                onSubmit={(e) => handleProgramSubmit(e, item)}
                className="mb-8 border border-gray-300 rounded-xl p-4"
            >
                <h2 className="text-lg font-semibold mb-2">Programa de: {item.timeStart}</h2>

                <label className="block mb-1">Nombre del programa:</label>
                <input
                    type="text"
                    name="name"
                    value={item.name || ''}
                    onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                    className="w-full p-2 mb-3 rounded-md border"
                />

                <label className="block mb-1">Descripción:</label>
                <textarea
                    name="description"
                    value={item.description || ''}
                    onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                    className="w-full p-2 mb-3 rounded-md border"
                    rows={3}
                />

                <label className="block mb-1">Hora de inicio:</label>
                <input
                    type="time"
                    name="timeStart"
                    value={item.timeStart || ''}
                    onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                    className="w-full p-2 mb-3 rounded-md border"
                />

                <label className="block mb-1">Hora de fin:</label>
                <input
                    type="time"
                    name="timeEnd"
                    value={item.timeEnd || ''}
                    onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                    className="w-full p-2 mb-3 rounded-md border"
                />

                <label className="block mb-1">Imagen del programa:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, programList.indexOf(item))}
                    className="w-full mb-3"
                />
                {item.image && (
                    <img src={item.image} alt="Imagen" className="w-24 h-24 object-cover rounded-md" />
                )}

                <label className="inline-flex items-center mb-2 mr-4">
                    <input
                        type="checkbox"
                        name="newProgram"
                        checked={item.newProgram}
                        onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                        className="mr-2"
                    />
                    Nuevo programa
                </label>

                <label className="inline-flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="endProgram"
                        checked={item.endProgram}
                        onChange={(e) => handleProgramChange(e, programList.indexOf(item))}
                        className="mr-2"
                    />
                    Programa por finalizar
                </label>

                <div>
                    <button
                        type="submit"
                        className="mt-4 rounded-md bg-greenSky px-4 py-2 text-white"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </form>
        ))
    );

    return (
        <div className="px-4 py-8 max-w-4xl mx-auto">
            {/* PESTAÑAS DE NAVEGACIÓN */}
            <div className="flex justify-center mb-8 space-x-4">
                <button
                    onClick={() => setActiveTab('dv')}
                    className={`px-4 py-2 rounded-t-lg font-semibold border-2 border-blue-500 ${activeTab === 'dv' ? 'bg-greenSky text-white' : 'bg-gray-200 text-black'}`}
                >
                    Domingo a Viernes
                </button>
                <button
                    onClick={() => setActiveTab('s')}
                    className={`px-4 py-2 rounded-t-lg font-semibold border-2 border-blue-500 ${activeTab === 's' ? 'bg-greenSky text-white' : 'bg-gray-200 text-black'}`}
                >
                    Sábado
                </button>
            </div>

            {/* CONTENIDO SEGÚN LA PESTAÑA */}
            <div className="space-y-20">
                {activeTab === 'dv' && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Programación Radial de Domingo a Viernes</h1>
                        {renderProgramForms(diasDV)}
                    </div>
                )}

                {activeTab === 's' && (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Programación Radial del Sábado</h1>
                        <div className="bg-yellow-50">
                            {renderProgramForms(diasSabado)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
