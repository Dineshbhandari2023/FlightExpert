import React from 'react';
import hero2 from '../assets/hero2.png';

const TravelBanner = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl my-8 mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-[2px] p-2 border-red-500">
          Explore unique <span className="text-red-500">places to stay</span>
        </h1>
      </div>
      <div className="relative h-[350px] justify-center bg-red-500 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center ">
            <div className="my-9">
              <h2 className="text-4xl font-bold text-white mb-4">
                Seamless travel made easy
              </h2>
              <p className="text-white font-arial text-md">
                Book and manage flights on the go. Jet off on exclusive <br /> fares. Enjoy unlimited access to digital content. Travel <br /> seamlessly with the flightexpert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBanner;
