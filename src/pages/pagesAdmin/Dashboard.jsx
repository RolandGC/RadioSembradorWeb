import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dv');
    const [valuesGeneral, setValuesGeneral] = useState({
        id: null,
        image: ''
    });

    // Cargar datos de programación y radioGeneral
    useEffect(() => {
        const fetchData = async () => {
            const { data: generalData, error: generalError } = await supabase
                .from('radio')
                .select('*')
                .eq('id', 1)
                .single();

            if (generalError) console.error('Error tabla radioGeneral:', generalError.message);
            else setValuesGeneral(generalData);
        };

        fetchData();
    }, []);

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageGeneralUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const base64 = await fileToBase64(file);
            const newValues = { ...valuesGeneral, image: base64 };
            setValuesGeneral(newValues);
        } catch (error) {
            alert('Error al convertir imagen general: ' + error.message);
        }
    };

    const handleSubmitGeneral = async (e) => {
        e.preventDefault();
        const { id, ...updateFields } = valuesGeneral;
        const { error } = await supabase.from('radio').update(updateFields).eq('id', id);
        if (error) {
            alert(`Error al actualizar radioGeneral: ${error.message}`);
        } else {
            alert('Imagen general actualizada correctamente');
        }
    };

    const handleDeleteImage = async () => {
        const { error } = await supabase
            .from('radio')
            .update({ image: '' }) // También puedes usar `null` si prefieres
            .eq('id', 1);

        if (error) {
            alert(`Error al eliminar la imagen: ${error.message}`);
        } else {
            alert('Imagen eliminada correctamente');
            setValuesGeneral(prev => ({ ...prev, image: '' })); // Limpia localmente también
        }
    };

    return (
        <div className="px-4 py-8 max-w-4xl mx-auto">
            {/* Sección para editar imagen general */}
            <div className="mb-16 border border-gray-300 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-3">Imagen de portada (radio)</h2>
                <form onSubmit={handleSubmitGeneral}>
                    <input type="file" accept="image/*" onChange={handleImageGeneralUpload} className="mb-4" />
                    {valuesGeneral.image && (
                        <img src={valuesGeneral.image} alt="Imagen" className="w-100 h-80 object-cover rounded-md mb-3" />
                    )}
                    <button
                        type="submit"
                        className="rounded-md bg-greenSky px-4 py-2 text-white"
                    >
                        Guardar Imagen General
                    </button>
                    {valuesGeneral.image && (
                        <>
                            <button
                                type="button"
                                onClick={handleDeleteImage}
                                className="rounded-md bg-red-500 text-white px-4 py-2 mb-3 ml-2"
                            >
                                Eliminar Imagen
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};
