import { useState } from 'react';
import logo2 from "/public/img/building.jpg"

export default function Programming() {
    const diasSemana = [
        { dia: "Lunes", fecha: "07 ABR" },
        { dia: "Martes", fecha: "08 ABR" },
        { dia: "Miércoles", fecha: "09 ABR" },
        { dia: "Jueves", fecha: "10 ABR" },
        { dia: "Viernes", fecha: "11 ABR" },
        { dia: "Sábado", fecha: "12 ABR" },
        { dia: "Domingo", fecha: "13 ABR" },
    ];

    const [diaSeleccionado, setDiaSeleccionado] = useState(0);

    const programacion = {
        0: [ // Lunes
            {
            hora: "00:00", nombre: "AMANECER CON CRISTO", locutor: "Pastor Samuel", imagen: "/public/img/logo2.png" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: {logo2}},
            { hora: "03:00", nombre: "LA PALABRA HOY", locutor: "Hermana María", imagen: {logo2} },
        ],
        1: [ // Martes
            { hora: "00:00", nombre: "REFLEXIONES", locutor: "Pastor Juan", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "ESTUDIO BÍBLICO", locutor: "Pastor Pedro", imagen: "/api/placeholder/80/80" },
        ],
        // Programación para los demás días...
        2: [ // Miércoles
            { hora: "00:00", nombre: "ALABANZAS", locutor: "Grupo Adoración", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "TESTIMONIOS", locutor: "Invitados", imagen: "/api/placeholder/80/80" },
        ],
        3: [ // Jueves
            { hora: "00:00", nombre: "MADRUGADA CON DIOS", locutor: "Pastor José", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "MENSAJES DE FE", locutor: "Hermana Lucía", imagen: "/api/placeholder/80/80" },
        ],
        4: [ // Viernes
            { hora: "00:00", nombre: "ALABANZAS NOCTURNAS", locutor: "Coro Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "01:00", nombre: "MÚSICA CONTINUA", locutor: "Radio Sembrador", imagen: "/api/placeholder/80/80" },
            { hora: "03:00", nombre: "PREPARANDO EL SÁBADO", locutor: "Pastor David", imagen: "/api/placeholder/80/80" },
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
                {programacion[diaSeleccionado].map((programa, index) => (
                    <div key={index} className="bg-white rounded shadow-sm overflow-hidden">
                        <div className="flex items-center p-4">
                            <div className="flex-shrink-0 rounded-full overflow-hidden">
                                <img src={programa.imagen} alt={programa.nombre} className="w-20 h-20 object-cover" />
                            </div>
                            <div className="ml-6 flex-grow">
                                <h3 className="text-xl font-bold uppercase">{programa.nombre}</h3>
                                <p className="text-gray-600">{programa.locutor}</p>
                            </div>
                            <div className="text-gray-300 text-5xl font-light">
                                {programa.hora}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}