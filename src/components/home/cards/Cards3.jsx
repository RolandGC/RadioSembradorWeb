import React from 'react'

function Cards3() {
    return (
        <div>
            <div>
                <div className="mx-auto grid max-w-7xl px-3 lg:grid-cols-4 m-3 sm:grid-cols-2">
                    <div className="flex justify-center items-center gap-x-3 border-r border-gray-400">
                        <div className='m-4 p-2 font-roboto '>
                            {/* <FaHandshake className='bg-white absolute h-16 w-16 rounded-full m-3 justify-center flex text-green-500 text-3xl p-4 shadow-md right-[35%] top-[-40px] pl-2 pr-2 ' /> */}
                            <h3 className="text-[50px] font-semibold leading-7  text-gray-900 "> + 100</h3>
                            <p className="text-sm font-extralight font-roboto  leading-6 text-gray-700 mt-3 flex justify-center"> Oyentes</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-3 border-r border-gray-400">
                        <div className='m-4 p-2 font-roboto '>
                            {/* <BsFillAlarmFill className='bg-white absolute h-16 w-16 rounded-full m-3 justify-center flex text-green-500 text-3xl p-4 shadow-md right-[35%] top-[-40px] pl-2 pr-2 ' /> */}
                            <h3 className="text-[50px] font-semibold leading-7  text-gray-900">+ 20</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-700 mt-3 flex justify-center">colaboradores.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-3 border-r border-gray-400">
                        <div className='m-4 p-2 font-roboto '>
                            {/* <HiHome className='bg-white absolute h-16 w-16 rounded-full m-3 justify-center flex text-green-500 text-3xl p-4 shadow-md right-[35%] top-[-40px] pl-2 pr-2 ' /> */}
                            <h3 className="text-[50px] font-semibold leading-7  text-gray-900">24/7</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-700 mt-3 flex justify-center">Todo el tiempo</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-3 ">
                        <div className='m-4 p-2 font-roboto '>
                            {/* <FaHouseUser className='bg-white absolute h-16 w-16 rounded-full m-3 justify-center flex text-green-500 text-3xl p-4 shadow-md right-[35%] top-[-40px] pl-2 pr-2 ' /> */}
                            <h3 className="text-[50px] font-semibold leading-7  text-gray-900">+ 1000</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-700 mt-3 flex justify-center">visitas diarias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards3