// src/components/CatSelection.js
import React from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CatSelection = () => {
    return (
        <>
            <div className='w-11/12 mx-auto my-4'>
                <div className='flex items-center justify-between mb-4'>
                    <IoMdArrowDropleft className='text-blue-600 text-6xl cursor-pointer' />
                    <h1 className='text-xl font-bold text-gray-700'>Flights from Kathmandu to Pokhara</h1>
                    <IoMdArrowDropright className='text-blue-600 text-6xl cursor-pointer' />
                </div>
                <div className='flex items-center justify-center p-2 border-slate-950 shadow-xl bg-white'>
                    <div className='flex-1 text-justify '>
                        <h1 className='text-lg font-semibold text-gray-700 '>Cheapest</h1>
                        <p className='text-sm text-gray-600'>Get the cheapest available flight</p>
                    </div>
                    <div className='w-px h-24 bg-gray-400 mx-4'></div>
                    <div className='flex-1 text-justify'>
                        <h1 className='text-lg font-semibold text-gray-700'>Shortest</h1>
                        <p className='text-sm text-gray-600'>Get the shortest available flight</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatSelection;
