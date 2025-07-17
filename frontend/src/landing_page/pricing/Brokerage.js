// src/landing_page/pricing/Brokerage.js
import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Brokerage = () => {
  const brokerageRates = [
    {
      type: "Equity Delivery",
      basic: "Free",
      pro: "Free",
      premium: "Free",
    },
    {
      type: "Equity Intraday",
      basic: "₹20/trade",
      pro: "₹15/trade",
      premium: "₹10/trade",
    },
    {
      type: "F&O",
      basic: "₹20/trade",
      pro: "₹15/trade",
      premium: "₹10/trade",
    },
    {
      type: "Currency",
      basic: "₹20/trade",
      pro: "₹15/trade",
      premium: "₹10/trade",
    },
    {
      type: "Commodity",
      basic: "₹20/trade",
      pro: "₹15/trade",
      premium: "₹10/trade",
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Brokerage Rates</h2>
          <p className="mt-4 text-lg text-gray-600">
            Competitive rates across all segments
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Segment
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Basic Plan
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pro Plan
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium Plan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {brokerageRates.map((rate, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {rate.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {rate.basic}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {rate.pro}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {rate.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>* All rates are exclusive of applicable statutory charges and GST</p>
          <p>* Rates are subject to change with regulatory requirements</p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;