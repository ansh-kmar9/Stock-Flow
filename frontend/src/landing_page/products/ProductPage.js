// src/landing_page/product/ProductPage.js
import React from 'react';
import ProductHero from './ProductHero';
import { 
  FaDesktop, 
  FaMobile, 
  FaChartBar, 
  FaRobot, 
  FaBookOpen, 
  FaUserShield,
  FaRegChartBar,
  FaBell,
  FaHistory,
  FaTools
} from 'react-icons/fa';

const ProductPage = () => {
  const tradingPlatforms = [
    {
      title: "Web Trading Platform",
      icon: <FaDesktop className="text-4xl text-blue-600" />,
      description: "Powerful web-based platform with advanced charting and real-time analytics",
      features: [
        "Advanced Technical Analysis",
        "Real-time Market Data",
        "One-Click Trading",
        "Customizable Workspace"
      ]
    },
    {
      title: "Mobile Trading App",
      icon: <FaMobile className="text-4xl text-blue-600" />,
      description: "Trade on the go with our feature-rich mobile application",
      features: [
        "Instant Execution",
        "Live Market Updates",
        "Portfolio Tracking",
        "Price Alerts"
      ]
    }
  ];

  const features = [
    {
      icon: <FaChartBar />,
      title: "Advanced Charts",
      description: "100+ technical indicators and drawing tools"
    },
    {
      icon: <FaRobot />,
      title: "Algo Trading",
      description: "Create and automate your trading strategies"
    },
    {
      icon: <FaBookOpen />,
      title: "Market Research",
      description: "In-depth analysis and research reports"
    },
    {
      icon: <FaUserShield />,
      title: "Smart Orders",
      description: "Advanced order types for better risk management"
    },
    {
      icon: <FaRegChartBar />,
      title: "Portfolio Analytics",
      description: "Track and analyze your portfolio performance"
    },
    {
      icon: <FaBell />,
      title: "Price Alerts",
      description: "Customizable alerts for price movements"
    },
    {
      icon: <FaHistory />,
      title: "Historical Data",
      description: "Access to extensive historical market data"
    },
    {
      icon: <FaTools />,
      title: "API Access",
      description: "Build custom trading applications"
    }
  ];

  return (
    <div className="bg-white">
      <ProductHero />

      {/* Trading Platforms Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Trading Platforms</h2>
            <p className="mt-4 text-xl text-gray-600">Choose the platform that suits your trading style</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {tradingPlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  {platform.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">{platform.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <ul className="space-y-4">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need for successful trading</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition duration-300">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Integration Section */}
      <div className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Build with Our API</h2>
          <p className="text-xl text-blue-100 mb-8">
            Create custom trading applications with our robust API integration
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
            View API Documentation
          </button>
        </div>
      </div>

      {/* Get Started CTA */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Open your free account today and experience the power of StockFlow
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;