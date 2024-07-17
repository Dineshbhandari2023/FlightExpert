import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
import DetailCard from '../feature1/DetailCard';

const FlightCards = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-11/12 mx-auto   border-slate-950 shadow-xl bg-white h-48'>
            <div className='flex items-center justify-around p-4'>
                <div className='flex flex-col items-center'>
                    <div className='w-16 h-16 bg-blue-700 flex items-center justify-center rounded-full overflow-hidden'>
                        <img src="" alt="" />
                    </div>
                    <p className='mt-2 text-center'>Yeti Airlines</p>
                    <small className='text-green-500 font-bold'>Partially Refundable</small>
                </div>

                <div className='flex flex-col items-center'>
                    <small className='text-gray-500'>Departure</small>
                    <p className='font-semibold'>12:22</p>
                    <small className='text-gray-500'>22 June, 2024</small>
                </div>

                <div className='flex flex-col items-center'>
                    <small className='text-gray-500'>1 hour 10 minutes</small>
                    <div className='bg-gray-500 w-28 h-0.5'></div>
                    <small className='text-gray-500'>Non Stop</small>
                </div>

                <div className='flex flex-col items-center'>
                    <small className='text-gray-500'>Arrival</small>
                    <p className=' font-semibold'>13:32</p>
                    <small className='text-gray-500'>22 June, 2024</small>
                </div>

                <div className='flex flex-col items-center'>
                    <small className='text-gray-500'>Price</small>
                    <p className=' font-semibold'>Rs 12,333</p>
                </div>

                <div>
                    <button className='bg-blue-700 text-white py-1.5 px-2 rounded mb-16'>Book Now</button>
                </div>
            </div>
            <div className='flex items-center float-right mr-6 cursor-pointer' onClick={handleExpand}>
                <p className='font-semibold text-blue-700'>Flight Details</p>
                <IoIosArrowDown className={`text-xl text-blue-700 transform ${isExpanded ? 'rotate-180' : ''}`} />
            </div>

            {/* expandable div */}
            {isExpanded && (
                <div className='bg-white border-slate-950 shadow-xl mt-7 p-3  '>
                    <DetailCard/>
                </div>
            )}
        </div>
    );
};

export default FlightCards;
