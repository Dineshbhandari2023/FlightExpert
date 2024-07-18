import React, { useState } from 'react';
import FDCard from './FDCard';
import FareSummary from './FareSummary';
import FareRules from './FareRules';

const DetailCard = () => {
  const [activeComponent, setActiveComponent] = useState('FDCard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'FDCard':
        return <FDCard />;
      case 'FareSummary':
        return <FareSummary />;
      case 'FareRules':
        return <FareRules />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button
          className={`text-gray-600 text-xs font-semibold border shadow-2xl p-1 hover:bg-blue-700 hover:text-white ${activeComponent === 'FDCard' ? 'bg-blue-700 text-white' : ''}`}
          onClick={() => setActiveComponent('FDCard')}
        >
          Flight Details
        </button>
        <button
          className={`text-gray-600 text-xs font-semibold border shadow-2xl p-1 hover:bg-blue-700 hover:text-white ${activeComponent === 'FareSummary' ? 'bg-blue-700 text-white' : ''}`}
          onClick={() => setActiveComponent('FareSummary')}
        >
          Fare Summary
        </button>
        <button
          className={`text-gray-600 text-xs font-semibold border shadow-2xl p-1 hover:bg-blue-700 hover:text-white ${activeComponent === 'FareRules' ? 'bg-blue-700 text-white' : ''}`}
          onClick={() => setActiveComponent('FareRules')}
        >
          Fare Rules
        </button>
      </div>

      {renderComponent()}
    </div>
  );
};

export default DetailCard;
