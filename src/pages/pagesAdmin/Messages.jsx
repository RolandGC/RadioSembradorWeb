import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        const { data, error } = await supabase.from('contact').select('*').order('created_at', { ascending: false });

        if (error) {
            console.error('Error al obtener contactos:', error.message);
        } else {
            setContacts(data);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Mensajes de Contacto</h1>

            {loading ? (
                <p className="text-center text-gray-500">Cargando...</p>
            ) : contacts.length === 0 ? (
                <p className="text-center text-gray-500">No hay mensajes aún.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-sm">
                        <thead className="bg-gray-100 text-gray-700 text-sm">
                            <tr>
                                <th className="px-4 py-2 text-left">Nombre</th>
                                <th className="px-4 py-2 text-left">Correo</th>
                                <th className="px-4 py-2 text-left">Teléfono</th>
                                <th className="px-4 py-2 text-left">Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id} className="border-t">
                                    <td className="px-4 py-2">{contact.name}</td>
                                    <td className="px-4 py-2">{contact.mail}</td>
                                    <td className="px-4 py-2">{contact.phone}</td>
                                    <td className="px-4 py-2">{contact.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContactList;
