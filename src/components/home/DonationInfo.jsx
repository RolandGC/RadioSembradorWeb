import React from 'react';

const DonationInfo = () => {
    return (
        <div className="w-80 max-w-lg bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Aportar mi ofrenda</h2>

            <div className="space-y-5 w-full">
                {/* Yape */}
                {/* <div className="flex items-center bg-white rounded-xl shadow-md border border-purple-300 p-4 gap-4 hover:shadow-lg transition-all duration-300">
                    <img
                        src="/img/yape.jpg"
                        alt="Yape Logo"
                        className="w-12 h-12 object-contain rounded-xl"
                    />
                    <div>
                        <p className="text-sm text-gray-600 font-medium">Número Yape:</p>
                        <p className="text-lg font-semibold text-purple-700">928 565 807</p>
                    </div>
                </div> */}

                {/* Scotiabank */}
                <div className="flex items-center bg-white rounded-xl shadow-md border border-red-300 p-4 gap-2 hover:shadow-lg transition-all duration-300">
                    <img
                        src="/img/scotiabank.png"
                        alt="Scotiabank Logo"
                        className="w-12 h-12 object-contain rounded-xl"
                    />
                    <div>
                        <p className="text-sm text-gray-600 font-medium">Scotiabank en soles:</p>
                        <p className="text-sm font-semibold text-red-600">cuenta: 740-7250724</p>
                        <p className="text-[10px] font-semibold text-red-600">cci: 009-417-207407250724-70</p>
                    </div>
                </div>
                <div className="flex items-center bg-white rounded-xl shadow-md border border-red-300 p-4 gap-2 hover:shadow-lg transition-all duration-300">
                    <img
                        src="/img/scotiabank.png"
                        alt="Scotiabank Logo"
                        className="w-12 h-12 object-contain rounded-xl"
                    />
                    <div>
                        <p className="text-sm text-gray-600 font-medium">Scotiabank en dólares:</p>
                        <p className="text-sm font-semibold text-red-600">cuenta: 740-7217134</p>
                        <p className="text-[10px] font-semibold text-red-600">cci: 009-417-217407217134-72</p>
                    </div>
                </div>

                {/* BCP */}
                {/* <div className="flex items-center bg-white rounded-xl shadow-md border border-blue-300 p-4 gap-4 hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_Banco_de_Credito_BCP.svg/2560px-Logo_Banco_de_Credito_BCP.svg.png"
                        alt="BCP Logo"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <p className="text-sm text-gray-600 font-medium">Cuenta BCP:</p>
                        <p className="text-lg font-semibold text-blue-600">32327793293</p>
                    </div>
                </div> */}
            </div>

            <p className="text-sm text-gray-500 mt-6">¡Tu aporte es muy importante para nosotros!</p>
        </div>
    );
};

export default DonationInfo;
