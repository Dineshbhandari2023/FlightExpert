import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const DepTime = () => {
    return (
        <div className='bg-white w-full shadow-lg h-fit mt-0.5 p-6'>
            <div>
                <h3 className='text-lg font-semibold ml-3'>Departure time in Kathmandu</h3>
            </div>
            <div className='flex justify justify-around mt-3'>
                <div className=' w-32  rounded-lg border border-zinc-950 h-fit p-3'>
                    <MdOutlineWbSunny className='m-auto' />
                    <div className=' w-10/12 m-auto mt-1'>
                        <p className='font-semibold text-center text-sm' >Afternoon</p>
                        <p className='text-xs font-semibold text-center'>12:00-17:59</p>
                    </div>
                </div>
                <div className=' w-32  rounded-lg border border-zinc-950 h-fit p-3'>
                    <BsFillMoonStarsFill className='m-auto' />
                    <div className=' w-10/12 m-auto mt-1'>
                        <p className='font-semibold text-center text-sm' >Evening</p>
                        <p className='text-xs font-semibold text-center'>12:00-17:59</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepTime
