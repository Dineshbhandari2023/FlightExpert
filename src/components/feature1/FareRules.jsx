import React from 'react';

const FareRules = () => {
  return (
    <div className="p-6 font-sans">
      <p className="text-center text-xl font-bold text-gray-600">Passenger must know this rule and follow</p>
      
      <table className="mt-2 w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 p-2 text-gray-600">Rule Type</th>
            <th className="border-b-2 border-gray-200 p-2 text-gray-600">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">General Rules</small>
            </td>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">All passengers must adhere to the general rules and regulations...</small>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Cancellation Policy</small>
            </td>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Cancellations made within 24 hours of booking will be fully refunded...</small>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Change Policy</small>
            </td>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Changes to the booking are allowed up to 24 hours before the departure time...</small>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Baggage Policy</small>
            </td>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Each passenger is allowed one carry-on bag and one personal item...</small>
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Refund Policy</small>
            </td>
            <td className="border-b border-gray-200 p-2">
              <small className="text-gray-600">Refunds will be processed within 7-10 business days after the request...</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FareRules;
