// Summary.js
import React from "react";
import { 
  FaArrowUp, 
  FaArrowDown, 
  FaWallet, 
  FaChartLine, 
  FaBoxes,
  FaBell,
  FaExchangeAlt,
  FaChartBar,
  FaRupeeSign,
  FaClock,
  FaInfoCircle
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Summary = () => {
  const { user } = useAuth();
  
  // You can add more mock data or fetch from API
  const marketIndices = [
    { name: 'NIFTY 50', value: '19,425.65', change: '+1.2%', isUp: true },
    { name: 'SENSEX', value: '64,363.78', change: '+0.9%', isUp: true },
    { name: 'BANK NIFTY', value: '43,252.30', change: '-0.3%', isUp: false },
    { name: 'NIFTY IT', value: '32,145.90', change: '+1.5%', isUp: true },
  ];

  const topMovers = [
    { name: 'TCS', change: '+3.2%', price: '3,456.75' },
    { name: 'Infosys', change: '+2.8%', price: '1,567.90' },
    { name: 'HDFC Bank', change: '-1.2%', price: '1,678.45' },
  ];

  const recentTransactions = [
    { type: 'BUY', stock: 'Reliance', quantity: 10, price: '2,345.60', time: '10:30 AM' },
    { type: 'SELL', stock: 'ITC', quantity: 50, price: '440.75', time: '11:15 AM' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back, {user?.name || 'User'}!
            </h1>
            <p className="text-gray-600 mt-1">Here's your portfolio overview</p>
          </div>
          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            <FaBell />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <FaRupeeSign />, label: 'Add Funds' },
          { icon: <FaExchangeAlt />, label: 'Transfer' },
          { icon: <FaChartBar />, label: 'Analytics' },
          { icon: <FaClock />, label: 'History' }
        ].map((action, index) => (
          <button
            key={index}
            className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-blue-600">{action.icon}</span>
            <span className="font-medium text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equity Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaWallet className="text-blue-600 text-xl mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Equity</h2>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaInfoCircle />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Margin Available</p>
              <h3 className="text-2xl font-bold text-gray-900">₹3.74k</h3>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-600">Margins Used</p>
                <p className="font-medium text-gray-900">₹0</p>
              </div>
              <div>
                <p className="text-gray-600">Opening Balance</p>
                <p className="font-medium text-gray-900">₹3.74k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaBoxes className="text-blue-600 text-xl mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Holdings (13)</h2>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">P&L</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold text-green-600">₹1.55k</h3>
                <span className="ml-2 text-sm text-green-600 flex items-center">
                  <FaArrowUp className="mr-1" />
                  5.20%
                </span>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-600">Current Value</p>
                <p className="font-medium text-gray-900">₹31.43k</p>
              </div>
              <div>
                <p className="text-gray-600">Investment</p>
                <p className="font-medium text-gray-900">₹29.88k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Overview Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaChartLine className="text-blue-600 text-xl mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Market Overview</h2>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700">More</button>
          </div>
          <div className="space-y-3">
            {marketIndices.map((index, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">{index.name}</p>
                  <p className="font-medium text-gray-900">{index.value}</p>
                </div>
                <span className={`text-sm flex items-center ${index.isUp ? 'text-green-600' : 'text-red-600'}`}>
                  {index.isUp ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  {index.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Movers */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Movers</h2>
          <div className="space-y-4">
            {topMovers.map((stock, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{stock.name}</p>
                  <p className="text-sm text-gray-600">₹{stock.price}</p>
                </div>
                <span className={`text-sm ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      transaction.type === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                    <p className="font-medium text-gray-900">{transaction.stock}</p>
                  </div>
                  <p className="text-sm text-gray-600">{transaction.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₹{transaction.price}</p>
                  <p className="text-sm text-gray-600">Qty: {transaction.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;