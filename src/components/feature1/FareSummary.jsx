import React from 'react'

const FareSummary = () => {
  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-bold">Fare Summary</th>
            <th className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-bold">Base Fare</th>
            <th className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-bold">Taxes + Fee</th>
            <th className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-bold">Per Passenger</th>
            <th className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center">Adult</td>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center">Rs 11000</td>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center">Rs 1333</td>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center">Rs (12333*1)</td>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center">Rs 12333</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-semibold">Total (1 Traveler)</td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2 text-sm text-gray-500 text-center font-semibold">Rs 12333</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FareSummary
