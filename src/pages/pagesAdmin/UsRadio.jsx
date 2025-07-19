import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export const UsRadio = () => {
    const [values, setValues] = useState({
        id: null,
        text: '',
        mision: '',
        vision: '',
        image: '', 
    });

    const [collaboratorsList, setCollaboratorsList] = useState([]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const base64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

        setValues((prev) => ({ ...prev, image: base64 }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (values.id) {
            const { id, ...dataToUpdate } = values;
            result = await supabase.from('text1').update(dataToUpdate).eq('id', id);
        } else {
            result = await supabase.from('text1').insert(values);
        }

        if (result.error) {
            alert('Error: ' + result.error.message);
        } else {
            alert('Guardado correctamente');
            if (!values.id) {
                setValues({ id: null, text: '', mision: '', vision: '' });
            }
        }
    };

    const loadExistingData = async (id) => {
        const { data } = await supabase.from('text1').select('*').eq('id', id).single();
        if (data) setValues(data);
    };

    const loadAllCollaborators = async () => {
        const { data, error } = await supabase
            .from('collaborators')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            alert('Error al cargar colaboradores: ' + error.message);
        } else {
            setCollaboratorsList(data);
        }
    };


    useEffect(() => {
        loadExistingData(1);
        loadAllCollaborators();
    }, []);

    return (
        <div className="space-y-20 px-4 py-8 max-w-4xl mx-auto">
            {/* FORMULARIO TEXT1 */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Texto Nosotros</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {['text', 'mision', 'vision'].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                {field}
                            </label>
                            <textarea
                                id={field}
                                name={field}
                                value={values[field]}
                                onChange={handleChange}
                                placeholder={`Texto de ${field}`}
                                className="block w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-gray rounded-2xl focus:ring-indigo-600 text-gray-900 shadow-sm p-2"
                                rows={4}
                            />
                            

                        </div>
                        
                    ))}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Imagen de portada "Nosotros"</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        {values.image && (
                            <img src={values.image} alt="Imagen Nosotros" className="mt-2 w-full max-h-60 object-contain rounded-md" />
                        )}
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 w-40"
                    >
                        {values.id ? 'Actualizar' : 'Guardar'}
                    </button>
                </form>
            </div>

            {/* LISTA DE COLABORADORES CON FORMULARIO INDIVIDUAL */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Colaboradores Registrados</h1>
                {collaboratorsList.length === 0 ? (
                    <p className="text-gray-500">No hay colaboradores registrados.</p>
                ) : (
                    <div className="space-y-8">
                        {collaboratorsList.map((colab) => (
                            <CollaboratorForm
                                key={colab.id}
                                data={colab}
                                onUpdated={loadAllCollaborators}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// SUBCOMPONENTE PARA FORMULARIO DE CADA COLABORADOR
const CollaboratorForm = ({ data, onUpdated }) => {
    const [form, setForm] = useState(data);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const base64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

        setForm((prev) => ({ ...prev, image: base64 }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, ...rest } = form;
        const { error } = await supabase.from('collaborators').update(rest).eq('id', id);

        if (error) {
            alert('Error al actualizar: ' + error.message);
        } else {
            alert('Actualizado correctamente');
            onUpdated(); // recarga la lista principal
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                    <input
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rol</label>
                    <input
                        type="text"
                        name="rol"
                        value={form.rol}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="active"
                        checked={form.active}
                        onChange={handleChange}
                    />
                    <label className="text-sm">Activo</label>
                </div>
            </div>

            {/* Imagen */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imagen</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {form.image && (
                    <img src={form.image} alt="Colaborador" className="mt-2 w-100 h-120 object-cover rounded-md" />
                )}
            </div>

            <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
                Actualizar
            </button>
        </form>
    );
};
