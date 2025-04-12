import React from 'react';

const DonationInfo = () => {
    return (
        <div className="w-[400px] h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-md shadow-lg p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Aportar mi ofrenda</h2>
            <div className="space-y-4 text-center">
                <div className="bg-white rounded-md shadow-sm p-4">
                    <p className="font-medium text-gray-700">Número Yape:</p>
                    <p className="text-lg text-blue-600 font-semibold">542322332</p>
                </div>
                <div className="bg-white rounded-md shadow-sm p-4">
                    <p className="font-medium text-gray-700">Número de Cuenta Scotiabank:</p>
                    <p className="text-lg text-green-600 font-semibold">434283729</p>
                </div>
                <div className="bg-white rounded-md shadow-sm p-4">
                    <p className="font-medium text-gray-700">Número de BCP:</p>
                    <p className="text-lg text-red-600 font-semibold">32327793293</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">¡Tu aporte es importante!</p>
            </div>
        </div>
    );
};

export default DonationInfo;