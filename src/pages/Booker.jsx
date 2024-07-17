import React from 'react'
import SessionTimeout from '../components/Timeout'
import PriceSlider from '../components/PriceSlider'
import DepTime from '../components/DepTime'
import TransitTime from '../components/TransitTime'
import OtherSelection from '../components/OtherSelection'
import CatSelection from '../components/CatSelection'
import FlightCards from '../components/FlightCards'

const Booker = () => {
  return (
    <div className='flex w-10/12 m-auto '>

      <div className='w-4/12 '>
        <SessionTimeout />
        <PriceSlider />
        <DepTime />
        <OtherSelection />
        <TransitTime />
      </div>

      <div className='w-9/12 '>
        <CatSelection/>
        <FlightCards />
      </div>

    </div>
  )
}

export default Booker
