import React from 'react'
import SessionTimeout from '../components/feature1/sessionTimeout'
import PriceSlider from '../components/feature1/PriceSlider'
import DepTime from '../components/feature1/DepTime'
import TransitTime from '../components/feature1/TransitTime'
import OtherSelection from '../components/feature1/OtherSelection'
import CatSelection from '../components/feature1/CatSelection'
import FlightCards from '../components/feature1/FlightCards'

const Booker = () => {
  return (
    <div className='flex w-10/12 m-auto shadow-lg '>

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
