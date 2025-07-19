import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export default function Programming() {
    const [diasSemana, setDiasSemana] = useState([]);
    const [diaSeleccionado, setDiaSeleccionado] = useState(0);
    const [horaActual, setHoraActual] = useState(null);
    const [programmingData, setProgrammingData] = useState([]);
    const [diaActual, setDiaActual] = useState(null);

    // Generar días y seleccionar el día actual automáticamente
    useEffect(() => {
        const formatterDia = new Intl.DateTimeFormat('es-PE', { weekday: 'long', timeZone: 'America/Lima' });
        const formatterFecha = new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', timeZone: 'America/Lima' });

        const base = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Lima' }));
        const hoyIndex = base.getDay(); // 0 = domingo ... 6 = sábado

        setDiaActual(hoyIndex);         // <--- AÑADIDO
        setDiaSeleccionado(hoyIndex);   // <--- YA EXISTÍA

        // Generar 7 días desde domingo a sábado (0 a 6)
        const dias = Array.from({ length: 7 }).map((_, i) => {
            const date = new Date(base);
            const diff = i - hoyIndex;
            date.setDate(base.getDate() + diff);

            const diaTexto = formatterDia.format(date);
            const fechaTexto = formatterFecha.format(date).toUpperCase().replace('.', '');
            return {
                dia: diaTexto.charAt(0).toUpperCase() + diaTexto.slice(1),
                fecha: fechaTexto,
            };
        });

        setDiasSemana(dias);
    }, []);

    useEffect(() => {
        const fecha = new Date().toLocaleString("en-US", { timeZone: "America/Lima" });
        const hora = new Date(fecha).getHours();
        setHoraActual(hora);
    }, []);

    const fetchProgramming = async () => {
        const { data, error } = await supabase
            .from('programming')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            console.error('Error al obtener programación:', error.message);
        } else {
            setProgrammingData(data);
        }
    };

    useEffect(() => {
        fetchProgramming();
    }, []);

    const groupedByDay = {
        0: programmingData.filter(p => p.id < 25), // domingo
        1: programmingData.filter(p => p.id < 25), // lunes
        2: programmingData.filter(p => p.id < 25), // martes
        3: programmingData.filter(p => p.id < 25), // miércoles
        4: programmingData.filter(p => p.id < 25), // jueves
        5: programmingData.filter(p => p.id < 25), // viernes
        6: programmingData.filter(p => p.id >= 25), // sábado
    };


    const esProgramaActual = (horaProgramada) => {
        if (horaActual === null || diaSeleccionado !== diaActual) return false;
        const horaDelPrograma = parseInt(horaProgramada.split(":")[0]);
        return horaDelPrograma === horaActual;
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-greenSky">PROGRAMACIÓN</h1>
                <h2 className="text-xl text-gray-600">Radio Sembrador</h2>
            </div>

            {/* Navegación de días */}
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

            {/* Lista de programas */}
            <div className="space-y-4">
                {(groupedByDay[diaSeleccionado] || []).map((programa, index) => {
                    const actual = esProgramaActual(programa.timeStart);
                    return (
                        <div
                            key={programa.id || index}
                            className={`rounded shadow-sm overflow-hidden transition-all duration-300 ${actual ? 'bg-green-100 border-l-4 border-greenSky' : 'bg-white'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
                                <div className="flex-shrink-0 w-full md:w-auto rounded-md overflow-hidden">
                                    <img
                                        src={programa.image || "/img/logoVertical.png"}
                                        alt={programa.name}
                                        className="w-full md:w-20 h-40 md:h-20 object-cover rounded"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className={`text-xl font-bold uppercase ${actual ? 'text-greenSky' : ''}`}>
                                        {programa.name}
                                    </h3>
                                    <p className="text-gray-600">{programa.description || ''}</p>

                                    {programa.textTemp && (
                                        <div className="w-full md:w-40 bg-green-200 p-2 mt-2 text-sm rounded-md">
                                            {programa.textTemp}
                                        </div>
                                    )}
                                </div>
                                {/* {programa.newProgram && (
                                    <div className='w-40 bg-green-200 p-3 m-1 text-sm rounded-md'>
                                        Nuevo programa
                                    </div>
                                )} */}
                                <div className="text-gray-300 text-5xl font-light ml-auto whitespace-nowrap">
                                    {programa.timeStart}
                                    {programa.timeEnd?.trim() && ` - ${programa.timeEnd}`}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
