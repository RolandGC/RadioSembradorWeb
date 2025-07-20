import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export const GiveAdmin = () => {
    const [giveList, setGiveList] = useState([]);
    const [values, setValues] = useState({
        id: null,
        text: '',
        mision: '',
        vision: '',
    });

    const [valuesGive, setValuesGive] = useState({
        id: null,
        text: '',
        nameBank: '',
        code: '',
        externalCode: '',
        viewBank: false,
        viewYape: false,
    });

    useEffect(() => {
        const fetchGiveData = async () => {
            const { data, error } = await supabase.from('give').select('*');
            if (error) {
                console.error('Error al cargar tabla give:', error.message);
            } else {
                setGiveList(data);
            }
        };

        fetchGiveData();
    }, []);



    const handleGiveChange = (e, index) => {
        const updated = [...giveList];
        updated[index] = {
            ...updated[index],
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        };
        setGiveList(updated);
    };

    const handleGiveSubmit = async (e, item) => {
        e.preventDefault();
        const { id, ...updateFields } = item;
        const { error } = await supabase.from('give').update(updateFields).eq('id', id);
        if (error) {
            alert(`Error al actualizar ID ${id}: ` + error.message);
        } else {
            alert(`Registro ID ${id} actualizado`);
        }
    };

    const loadExistingData = async (id) => {
        const { data, error } = await supabase.from('text1').select('*').eq('id', id).single();
        if (data) setValues(data);
    };

    const loadExistingDataGive = async (id) => {
        const { data, error } = await supabase.from('give').select('*').eq('id', id).single();
        if (data) setValuesGive(data);
    };

    useEffect(() => {
        loadExistingData(1);
        loadExistingDataGive(1);
    }, []);

    return (
        <div className="space-y-20 px-4 py-8 max-w-4xl mx-auto">
            {/* FORMULARIO GIVE */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Datos de Donaciones (Give)</h1>
                {giveList.map((item, index) => (
                    <form
                        key={item.id}
                        onSubmit={(e) => handleGiveSubmit(e, item)}
                        className="mb-8 border border-gray-300 rounded-xl p-4"
                    >
                        <h2 className="text-lg font-semibold mb-2">Cuenta ID: {item.id}</h2>

                        <label className="block mb-1">Texto:</label>
                        <input
                            type="text"
                            name="text"
                            value={item.text || ''}
                            onChange={(e) => handleGiveChange(e, index)}
                            className="w-full p-2 mb-3 rounded-md border"
                        />

                        <label className="block mb-1">Banco:</label>
                        <input
                            type="text"
                            name="nameBank"
                            value={item.nameBank || ''}
                            onChange={(e) => handleGiveChange(e, index)}
                            className="w-full p-2 mb-3 rounded-md border"
                        />

                        <label className="block mb-1">Código Cuenta:</label>
                        <input
                            type="text"
                            name="code"
                            value={item.code || ''}
                            onChange={(e) => handleGiveChange(e, index)}
                            className="w-full p-2 mb-3 rounded-md border"
                        />

                        <label className="block mb-1">CCI:</label>
                        <input
                            type="text"
                            name="externalCode"
                            value={item.externalCode || ''}
                            onChange={(e) => handleGiveChange(e, index)}
                            className="w-full p-2 mb-3 rounded-md border"
                        />

                        <label className="inline-flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="viewBank"
                                checked={item.viewBank}
                                onChange={(e) => handleGiveChange(e, index)}
                                className="mr-2"
                            />
                            Mostrar en sección de bancos
                        </label>
                        <br />

                        {/* <label className="inline-flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="viewYape"
                                checked={item.viewYape}
                                onChange={(e) => handleGiveChange(e, index)}
                                className="mr-2"
                            />
                            Mostrar en sección de Yape
                        </label> */}

                        <div>
                            <button
                                type="submit"
                                className="mt-4 rounded-md bg-greenSky px-4 py-2 text-white"
                            >
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                ))}
            </div>
        </div>
    );
};
