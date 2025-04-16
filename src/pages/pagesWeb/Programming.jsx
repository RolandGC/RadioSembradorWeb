
import { useEffect, useState } from 'react';
import logo2 from "/public/img/building.jpg";

export default function Programming() {
    const diasSemana = [
        { dia: "Lunes", fecha: "14 ABR" },
        { dia: "Martes", fecha: "15 ABR" },
        { dia: "Miércoles", fecha: "16 ABR" },
        { dia: "Jueves", fecha: "17 ABR" },
        { dia: "Viernes", fecha: "18 ABR" },
        { dia: "Sábado", fecha: "19 ABR" },
        { dia: "Domingo", fecha: "20 ABR" },
    ];

    const [diaSeleccionado, setDiaSeleccionado] = useState(0);
    const [horaActual, setHoraActual] = useState(null);

    useEffect(() => {
        // Obtener hora actual en la zona horaria de Perú
        const fecha = new Date().toLocaleString("en-US", { timeZone: "America/Lima" });
        const hora = new Date(fecha).getHours();
        setHoraActual(hora);
    }, []);

    const programacion = {
        0: [ // Lunes
            { hora: "00:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "01:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "02:00", nombre: "CONTEXTO BIBLICO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "03:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "04:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "05:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "06:00", nombre: "CLASIFICACION A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "07:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "08:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "09:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "10:00", nombre: "IGLESIA EVANGELIA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "11:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "12:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "13:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "14:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "15:00", nombre: "CONTEXTO BIBLIBO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "16:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "17:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "18:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "19:00", nombre: "CLASIFICACIÓN A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "20:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "21:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "22:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "23:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },

        ],
        1: [ // Martes
            { hora: "00:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "01:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "02:00", nombre: "CONTEXTO BIBLICO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "03:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "04:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "05:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "06:00", nombre: "CLASIFICACION A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "07:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "08:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "09:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "10:00", nombre: "IGLESIA EVANGELIA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "11:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "12:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "13:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "14:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "15:00", nombre: "CONTEXTO BIBLIBO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "16:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "17:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "18:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "19:00", nombre: "CLASIFICACIÓN A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "20:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "21:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "22:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "23:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
        ],
        // Programación para los demás días...
        2: [ // Miércoles
            { hora: "00:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "01:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "02:00", nombre: "CONTEXTO BIBLICO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "03:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "04:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "05:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "06:00", nombre: "CLASIFICACION A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "07:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "08:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "09:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "10:00", nombre: "IGLESIA EVANGELIA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "11:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "12:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "13:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "14:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "15:00", nombre: "CONTEXTO BIBLIBO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "16:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "17:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "18:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "19:00", nombre: "CLASIFICACIÓN A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "20:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "21:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "22:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "23:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
        ],
        3: [ // Jueves
            { hora: "00:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "01:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "02:00", nombre: "CONTEXTO BIBLICO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "03:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "04:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "05:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "06:00", nombre: "CLASIFICACION A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "07:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "08:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "09:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "10:00", nombre: "IGLESIA EVANGELIA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "11:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "12:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "13:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "14:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "15:00", nombre: "CONTEXTO BIBLIBO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "16:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "17:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "18:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "19:00", nombre: "CLASIFICACIÓN A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "20:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "21:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "22:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "23:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
        ],
        4: [ // Viernes
            { hora: "00:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "01:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "02:00", nombre: "CONTEXTO BIBLICO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "03:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "04:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "05:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "06:00", nombre: "CLASIFICACION A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "07:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "08:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "09:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "10:00", nombre: "IGLESIA EVANGELIA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "11:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "12:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "13:00", nombre: "CORRER PARA GANAR", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "14:00", nombre: "AVIVA NUESTROS CORAZONES", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "15:00", nombre: "CONTEXTO BIBLIBO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "16:00", nombre: "IGLESIA EVANGELICA DE LA GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "17:00", nombre: "MINISTERIO EN CONTACTO", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "18:00", nombre: "CHARLES SPURGEON", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "19:00", nombre: "CLASIFICACIÓN A", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "20:00", nombre: "PALABRAS DE GRACIA", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "21:00", nombre: "CRIANZA REVERENTE", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "22:00", nombre: "GRACIA A VOSOTROS", locutor: "", imagen: "/img/logoVertical.png" },
            { hora: "23:00", nombre: "EL FARO DE REDENCION", locutor: "", imagen: "/img/logoVertical.png" },
        ],
        5: [ // Sábado
            { hora: "00:00", nombre: "MÚSICA DE ADORACIÓN", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "ESCUELA SABÁTICA", locutor: "Pastor Mateo", imagen: "/api/placeholder/80/80" },
        ],
        6: [ // Domingo
            { hora: "00:00", nombre: "AMANECER DEL DOMINGO", locutor: "Pastor Marcos", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "HISTORIAS BÍBLICAS", locutor: "Hermano Lucas", imagen: "/api/placeholder/80/80" },
        ],
    };

    const esProgramaActual = (horaProgramada) => {
        if (horaActual === null) return false;
        const horaDelPrograma = parseInt(horaProgramada.split(":")[0]);
        return horaDelPrograma === horaActual;
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-greenSky">PROGRAMACIÓN</h1>
                <h2 className="text-xl text-gray-600">Radio Sembrador</h2>
            </div>

            {/* Barra de navegación de días */}
            <div className="flex overflow-x-auto mb-8">
                {diasSemana.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setDiaSeleccionado(index)}
                        className={`flex-1 text-center py-3 px-4 cursor-pointer transition-colors ${diaSeleccionado === index
                            ? 'bg-greenSky text-white relative'
                            : 'bg-gray-700 text-white'
                            }`}
                    >
                        <div className="font-semibold">{item.dia}</div>
                        <div className="text-sm">{item.fecha}</div>
                        {diaSeleccionado === index && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-greenSky border-l-transparent border-r-transparent"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Programas del día */}
            <div className="space-y-4">
                {programacion[diaSeleccionado].map((programa, index) => {
                    const actual = esProgramaActual(programa.hora);
                    return (
                        <div
                            key={index}
                            className={`rounded shadow-sm overflow-hidden transition-all duration-300 ${actual ? 'bg-green-100 border-l-4 border-greenSky' : 'bg-white'
                                }`}
                        >
                            <div className="flex items-center p-4">
                                <div className="flex-shrink-0 rounded-full overflow-hidden">
                                    <img src={programa.imagen} alt={programa.nombre} className="w-20 h-20 object-cover" />
                                </div>
                                <div className="ml-6 flex-grow">
                                    <h3 className={`text-xl font-bold uppercase ${actual ? 'text-greenSky' : ''}`}>
                                        {programa.nombre}
                                    </h3>
                                    <p className="text-gray-600">{programa.locutor}</p>
                                </div>
                                <div className="text-gray-300 text-5xl font-light">
                                    {programa.hora}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
