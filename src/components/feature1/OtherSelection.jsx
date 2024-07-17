import React from 'react'

const OtherSelection = () => {
    return (
        <>
            <div className='bg-white p-4 shadow-lg w-full mt-0.5'>
                <h1>Stops From Kathmandu</h1>
                <div className='flex items-center mt-2 mb-2'>
                    <input type="checkbox"
                        className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                    <label className='ml-2 text-sm text-gray-800'>Non Stop (8)</label>
                </div>
            </div>

            <div className='bg-white p-4 shadow-lg w-full mt-0.5'>
                <h1>Check in Baggage Allowance</h1>
                <div className='flex items-center mt-2 mb-2'>
                    <input type="checkbox"
                        className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                    <label className='ml-2 text-sm text-gray-800'>20 KG (8)</label>
                </div>
            </div>

            <div className='bg-white p-4 shadow-lg w-full mt-0.5'>
                <h1>Refundable</h1>
                <div className='flex items-center mt-2 mb-2'>
                    <input type="checkbox"
                        className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                    <label className='ml-2 text-sm text-gray-800'>Partially Refundable (10)</label>
                </div>
            </div>

            <div className='bg-white p-4 shadow-lg w-full mt-0.5 flex justify-between'>
                <div>
                    <h1>Departing From</h1>
                    <div className='flex items-center mt-2 mb-2'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>TIA</label>
                    </div>
                </div>
                <div className='mr-16'>
                    <h1>Arriving At</h1>
                    <div className='flex items-center mt-2 mb-2'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>PSA</label>
                    </div>
                </div>
            </div>


            <div className='bg-white p-4 shadow-lg w-full mt-0.5'>
                <h1>Airlines</h1>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <div className='flex items-center'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>Shree Airlines</label>
                    </div>
                    <div className='flex items-center'>
                        <label className='text-sm text-gray-800'>Rs 29600</label>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <div className='flex items-center'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>Yeti Airlines</label>
                    </div>
                    <div className='flex items-center'>
                        <label className='text-sm text-gray-800'>Rs 29600</label>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <div className='flex items-center'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>Buddha Airlines</label>
                    </div>
                    <div className='flex items-center'>
                        <label className='text-sm text-gray-800'>Rs 29600</label>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <div className='flex items-center'>
                        <input type="checkbox"
                            className='w-4 h-4 border border-gray-400 rounded-sm focus:outline-none transition duration-200 ease-in-out' />
                        <label className='ml-2 text-sm text-gray-800'>Nepal Airlines</label>
                    </div>
                    <div className='flex items-center'>
                        <label className='text-sm text-gray-800'>Rs 29600</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherSelection
