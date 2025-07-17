// src/landing_page/pricing/PricingHero.js
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Choose the plan that best suits your trading needs. No hidden charges, no surprises.
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">Free Account Opening</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">Zero Annual Maintenance Charges</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-600">Instant Withdrawal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;