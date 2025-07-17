// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaHeadset, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  const quickLinks = [
    {
      icon: <FaHome className="text-xl" />,
      text: 'Home',
      path: '/',
    },
    {
      icon: <FaSearch className="text-xl" />,
      text: 'Products',
      path: '/products',
    },
    {
      icon: <FaHeadset className="text-xl" />,
      text: 'Support',
      path: '/support',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-blue-600 animate-pulse">404</h1>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full">
            <div className="relative">
              <div className="h-2 w-2 bg-blue-600 rounded-full absolute animate-ping"></div>
              <div className="h-2 w-2 bg-blue-600 rounded-full absolute animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 bg-blue-600 rounded-full absolute animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for seems to have gone on a trading break.
            Let's get you back to where the markets are active!
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <span className="text-blue-600 mb-2">{link.icon}</span>
              <span className="text-gray-700 font-medium">{link.text}</span>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="inline-flex items-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 mx-auto"
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            If you believe this is a technical error, please{' '}
            <Link to="/support" className="text-blue-600 hover:underline">
              contact our support team
            </Link>
            . We're here to help!
          </p>
        </div>

        {/* Stock Market Theme Animation */}
        <div className="mt-8 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-2 bg-blue-600 rounded-full animate-bounce"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${index * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;