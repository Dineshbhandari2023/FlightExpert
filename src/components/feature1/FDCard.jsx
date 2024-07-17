import React from 'react'

const FDCard = () => {
    return (
        <div className='mt-2'>
            <div className='p-3 flex'>
                <div className='w-16 h-16 bg-blue-700 flex items-center justify-center rounded-full overflow-hidden'>
                    <img src="" alt="airline logo" />
                </div>
                <div className='ml-3'>
                    <p className='font-bold text-2xl'> Yeti Airlines</p>
                    <p className='font-semibold text-xs'>Aircraft: flight 691</p>
                    <p className='font-semibold text-xs'>Available Seat: 5</p>
                </div>
            </div>

            <div>
                <table className='border shadow-2xl  bg-white w-full mt-4 '>
                    <tr className='border shadow-2xl  bg-white '>
                        <p className='font-semibold p-3'>Kathmandu to Pokhara, 10 Jul 2024</p>
                    </tr>

                    <tr className='border shadow-2xl  bg-white '>
                        <div></div>
                        <div className='flex items-center justify-around p-4'>
                            <div className='flex flex-col items-center'>
                                <p className='font-semibold'>12:22</p>
                                <small className='text-gray-500'>22 June, 2024</small>
                                <small className='text-gray-500'>Tribhuwan Intl Airport</small>
                                <small className='text-gray-500'>Kathmandu</small>
                            </div>

                            <div className='flex flex-col items-center'>
                                <small className='text-gray-500'>1 hour 10 minutes</small>
                                <div className='bg-gray-500 w-28 h-0.5'></div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <p className='font-semibold'>1:32</p>
                                <small className='text-gray-500'>22 June, 2024</small>
                                <small className='text-gray-500'>Pokhara Intl Airport</small>
                                <small className='text-gray-500'>Pokhara</small>
                            </div>

                            <div className='flex flex-col items-center'>
                                <p className=' font-semibold'>Baggage</p>
                                <small className='text-gray-500'>Adult</small>
                            </div>

                            <div className='flex flex-col items-center'>
                                <p className=' font-semibold'>CheckIn</p>
                                <small className='text-gray-500'>20 KG</small>

                            </div>

                            <div className='flex flex-col items-center'>
                                <p className=' font-semibold'>Cabin</p>
                                <small className='text-gray-500'>7 KG</small>

                            </div>
                        </div>
                    </tr>
                </table>

            </div>

        </div>
    )
}

export default FDCard
