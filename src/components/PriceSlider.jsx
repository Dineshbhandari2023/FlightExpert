import React, { useState } from 'react';

const PriceSlider = () => {
  const [maxPrice, setMaxPrice] = useState(7000); // Initial price

  const handleSliderChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className='bg-white p-4 rounded shadow-lg w-full mt-0.5'>
      <p className='text-xl  mb-2'>One Way Price</p>
      <input 
        type="range" 
        min="7000" 
        max="90000" 
        value={maxPrice} 
        onChange={handleSliderChange} 
        className='w-full mb-2' 
      />
      <p className='text-gray-800  font-semibold'>Rs 7,000 - Rs {maxPrice}</p>
    </div>
  );
}

export default PriceSlider;
