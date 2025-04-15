import { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
//import scotiabank from '/public/img/scotiabank.png'
import scotiabank from '/public/img/scotiabank.png'; 
import bcp from '/public/img/bcp.jpg'; 
import Interbank from '/public/img/interbank.png'; 
import BBVA from '/public/img/bbva.png'; 
import yapeLogo from '/public/img/yape.jpg';
import plinLogo from '/public/img/plin.jpg';

export default function DonacionComponent() {
    const [activeTab, setActiveTab] = useState('bancos');
    const [copiedAccount, setCopiedAccount] = useState(null);

    const bancos = [
        {
            nombre: 'Scotiabank',
            cuenta: '**** **** ****',
            cci: '**** **** ****',
            logo: scotiabank,
        },
        // {
        //     nombre: 'BCP',
        //     cuenta: '3243243243',
        //     cci: '123242442',
        //     logo: bcp,
        // },
        // {
        //     nombre: 'Interbank',
        //     cuenta: '243242444',
        //     cci: '3243243243',
        //     logo: Interbank
        // },
        // {
        //     nombre: 'BBVA',
        //     cuenta: '0011-0057-0000123456',
        //     cci: '011-057-000000123456-78',
        //     logo: BBVA 
        // }
    ];

    const metodosMoviles = [
        {
            nombre: 'Yape',
            cuenta: '928 565 807',
            logo: yapeLogo,
            qr: '/api/placeholder/200/200',
            color: 'bg-purple-500/20'
        },
        {
            nombre: 'Plin',
            cuenta: '928 565 807',
            logo: plinLogo,
            qr: '/api/placeholder/200/200',
            color: 'bg-green-500/20'
        }
    ];

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(id);
        setTimeout(() => setCopiedAccount(null), 2000);
    };

    return (
        <div className="max-w-3xl mx-auto m-8 bg-gray-200 p-6 rounded-xl bg-gradient-to-br from-blue-900 to-cyan-700 text-white overflow-hidden border-2 border-purple-400/20 shadow-xl">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <Heart className="text-red-400 w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Apoya a Radio Sembrador</h2>
                <p className="text-lg opacity-90">Tu generosidad nos ayuda a seguir compartiendo la Palabra de Dios</p>
            </div>

            <div className="bg-white/10 rounded-lg p-1 mb-8">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('bancos')}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'bancos' ? 'bg-white/20 text-white shadow-lg' : 'text-white/70 hover:bg-white/5'}`}
                    >
                        Transferencia Bancaria
                    </button>
                    <button
                        onClick={() => setActiveTab('movil')}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'movil' ? 'bg-white/20 text-white shadow-lg' : 'text-white/70 hover:bg-white/5'}`}
                    >
                        Yape / Plin
                    </button>
                    <button
                        onClick={() => setActiveTab('proposito')}
                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === 'proposito' ? 'bg-white/20 text-white shadow-lg' : 'text-white/70 hover:bg-white/5'}`}
                    >
                        Propósito
                    </button>
                </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                {activeTab === 'bancos' && (
                    <div className="space-y-6">
                        <p className="text-center mb-6">Selecciona uno de nuestros bancos para realizar tu donación mediante transferencia:</p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {bancos.map((banco, index) => (
                                <div key={index} className="bg-white/10 rounded-lg p-4 transition-all hover:bg-white/15">
                                    <div className="flex items-center mb-4">
                                        <div className="w-36 h-36 bg-white/80 flex items-center justify-center rounded-xl mr-3">
                                            <img src={banco.logo} alt={`Logo de ${banco.nombre}`} className="max-h-30 rounded-xl" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{banco.nombre}</h3>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs text-white/70 mb-1">Número de Cuenta:</div>
                                            <div className="flex items-center justify-between bg-white/5 rounded-md p-2">
                                                <div className="font-mono">{banco.cuenta}</div>
                                                <button
                                                    onClick={() => copyToClipboard(banco.cuenta, `${banco.nombre}-cuenta`)}
                                                    className="text-white/70 hover:text-white"
                                                >
                                                    {copiedAccount === `${banco.nombre}-cuenta` ? <Check size={18} /> : <Copy size={18} />}
                                                </button>
                                            </div>
                                        </div>

                                        {banco.cci && (
                                            <div>
                                                <div className="text-xs text-white/70 mb-1">CCI:</div>
                                                <div className="flex items-center justify-between bg-white/5 rounded-md p-2">
                                                    <div className="font-mono">{banco.cci}</div>
                                                    <button
                                                        onClick={() => copyToClipboard(banco.cci, `${banco.nombre}-cci`)}
                                                        className="text-white/70 hover:text-white"
                                                    >
                                                        {copiedAccount === `${banco.nombre}-cci` ? <Check size={18} /> : <Copy size={18} />}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'movil' && (
                    <div>
                        <p className="text-center mb-6">Realiza tu donación de manera rápida y sencilla mediante estas aplicaciones:</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {metodosMoviles.map((metodo, index) => (
                                <div key={index} className="text-center bg-white/10 rounded-lg p-5 flex flex-col items-center">
                                    <div className={`${metodo.color} rounded-full w-36 h-36 mb-4 flex items-center justify-center rounded-xl`}>
                                        <img src={metodo.logo} alt={`Logo ${metodo.nombre}`} className="w-36 h-36 rounded-xl" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3">{metodo.nombre}</h3>

                                    <div className="inline-flex items-center justify-center bg-white/10 rounded-md px-4 py-2 mb-4">
                                        <div className="font-mono mr-2">{metodo.cuenta}</div>
                                        <button
                                            onClick={() => copyToClipboard(metodo.cuenta, `${metodo.nombre}-numero`)}
                                            className="text-white/70 hover:text-white"
                                        >
                                            {copiedAccount === `${metodo.nombre}-numero` ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>

                                    <div className="mt-2 mb-3">
                                        <div className="text-sm text-white/80 mb-2">Escanea este código QR:</div>
                                        <img src={metodo.qr} alt={`QR ${metodo.nombre}`} className="w-32 h-32 mx-auto bg-white p-1 rounded-lg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'proposito' && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-2">¿Por qué donar a Radio Sembrador?</h3>
                        <p>Tu contribución ayuda a que sigamos llevando el mensaje de esperanza a miles de personas. Con tu apoyo podemos:</p>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-white/10 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Mejorar nuestra tecnología</h4>
                                <p className="text-sm text-white/80">Mantener y actualizar equipos para una transmisión de calidad</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Ampliar nuestra cobertura</h4>
                                <p className="text-sm text-white/80">Llegar a más comunidades con el mensaje del evangelio</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Crear nuevos programas</h4>
                                <p className="text-sm text-white/80">Desarrollar contenido relevante para diferentes audiencias</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Apoyar a nuestro equipo</h4>
                                <p className="text-sm text-white/80">Sostener a quienes trabajan con dedicación en este ministerio</p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <p className="italic">"Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." - 2 Corintios 9:7</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center text-white/70 text-sm">
                <p>Para más información sobre donaciones, contáctanos al: <span className="text-white">info@radiosembrador.org</span></p>
            </div>
        </div>
    );
}