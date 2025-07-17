// src/landing_page/product/ProductHero.js
import React from 'react';
import { FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const ProductHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-md mx-auto lg:max-w-none lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Trade Smarter with
              <span className="block text-blue-600 mt-1">StockFlow's Products</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Experience the power of advanced trading tools, real-time analytics, and seamless execution - all in one platform.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <FaChartLine className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Advanced Charts</h3>
                <p className="mt-2 text-gray-600">Professional-grade charting with 100+ indicators and drawing tools.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <FaMobileAlt className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Mobile Trading</h3>
                <p className="mt-2 text-gray-600">Trade anywhere, anytime with our powerful mobile application.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <FaShieldAlt className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Secure Platform</h3>
                <p className="mt-2 text-gray-600">Bank-grade security with two-factor authentication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;