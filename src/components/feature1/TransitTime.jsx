import React from 'react'

const TransitTime = () => {
    return (
        <div className='bg-white p-4 shadow-lg w-full mt-0.5'>
            <div className='p-1'>
                <h1>Transit Time in (Kathmandu - Pokhara)</h1>
                <div className='flex items-center mt-2 mb-2'>
                    <input type="checkbox"
                        className='w-4 h-4 border border-gray-400 rounded-sm  focus:outline-none transition duration-200 ease-in-out' />
                    <label className='ml-2 text-sm text-gray-700'>No Transit Time (8)</label>
                </div>
            </div>
            <button className='bg-white border border-blue-600 text-blue-600  p-1.5 w-full rounded-lg hover:bg-blue-600 hover:text-white hover:font-semibold text-xl mt-2'>Clear Filters</button>
        </div>
    )
}

export default TransitTime
