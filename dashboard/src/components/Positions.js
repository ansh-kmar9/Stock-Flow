// // components/LoadingSkeletonPositions.js
// const LoadingSkeletonPositions = () => {
//   return (
//     <div className="space-y-6 animate-pulse">
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex justify-between items-center mb-6">
//           <div className="h-8 w-40 bg-gray-200 rounded"></div>
//           <div className="flex space-x-2">
//             <div className="h-8 w-24 bg-gray-200 rounded"></div>
//             <div className="h-8 w-24 bg-gray-200 rounded"></div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {/* Header */}
//           <div className="grid grid-cols-7 gap-4">
//             {[...Array(7)].map((_, i) => (
//               <div key={i} className="h-4 bg-gray-200 rounded"></div>
//             ))}
//           </div>

//           {/* Rows */}
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="grid grid-cols-7 gap-4">
//               {[...Array(7)].map((_, j) => (
//                 <div key={j} className="h-4 bg-gray-200 rounded"></div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// src/components/Positions.js
import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import LoadingSkeletonPositions from "./LoadingSkeletonPositions"
import { 
  FaSpinner, 
  FaExclamationTriangle, 
  FaRedoAlt, 
  FaDownload, 
  FaSync,
  FaFilter,
  FaSort,
  FaSortUp,
  FaSortDown
} from 'react-icons/fa';

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filter, setFilter] = useState('all'); // 'all', 'profit', 'loss'

  const fetchPositions = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      else setLoading(true);
      setError(null);
      
      const response = await axios.get("/allPositions");
      setPositions(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch positions data');
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? 
        <FaSortUp className="text-blue-600" /> : 
        <FaSortDown className="text-blue-600" />;
    }
    return <FaSort className="text-gray-400" />;
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...positions].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setPositions(sortedData);
  };

  const filterPositions = () => {
    if (filter === 'all') return positions;
    return positions.filter(position => {
      const pnl = position.price * position.qty - position.avg * position.qty;
      return filter === 'profit' ? pnl >= 0 : pnl < 0;
    });
  };

  const calculateTotals = () => {
    return positions.reduce((acc, position) => {
      const pnl = position.price * position.qty - position.avg * position.qty;
      acc.totalPnL += pnl;
      if (pnl >= 0) acc.totalProfit += pnl;
      else acc.totalLoss += Math.abs(pnl);
      return acc;
    }, { totalPnL: 0, totalProfit: 0, totalLoss: 0 });
  };

  if (loading) {
    return <LoadingSkeletonPositions />;
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm">
        <FaExclamationTriangle className="text-red-500 text-4xl mb-4" />
        <p className="text-gray-800 font-medium mb-2">Unable to load positions</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={() => fetchPositions()}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <FaRedoAlt className={refreshing ? "animate-spin" : ""} />
          <span>Try Again</span>
        </button>
      </div>
    );
  }

  if (positions.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-8">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <FaExclamationTriangle className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Open Positions</h3>
        <p className="text-gray-600 text-center max-w-md">
          You don't have any open positions at the moment
        </p>
      </div>
    );
  }

  const filteredPositions = filterPositions();
  const { totalPnL, totalProfit, totalLoss } = calculateTotals();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Positions ({filteredPositions.length})
            </h3>
            <button
              onClick={() => fetchPositions(true)}
              className={`p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors ${
                refreshing ? 'animate-spin' : ''
              }`}
              disabled={refreshing}
              title="Refresh"
            >
              <FaSync className="w-4 h-4" />
            </button>
          </div>

          <div className="flex space-x-2">
            {/* Filter Dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <option value="all">All Positions</option>
              <option value="profit">Profit</option>
              <option value="loss">Loss</option>
            </select>

            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors flex items-center space-x-2">
              <FaDownload className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total P&L</p>
            <p className={`text-lg font-semibold ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{totalPnL.toFixed(2)}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Profit</p>
            <p className="text-lg font-semibold text-green-600">₹{totalProfit.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Loss</p>
            <p className="text-lg font-semibold text-red-600">₹{totalLoss.toFixed(2)}</p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  { key: 'product', label: 'Product' },
                  { key: 'name', label: 'Instrument' },
                  { key: 'qty', label: 'Qty.' },
                  { key: 'avg', label: 'Avg.' },
                  { key: 'price', label: 'LTP' },
                  { key: 'pnl', label: 'P&L' },
                  { key: 'day', label: 'Chg.' },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    onClick={() => requestSort(key)}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center space-x-1">
                      <span>{label}</span>
                      {getSortIcon(key)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPositions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {stock.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{stock.qty}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹{stock.avg.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹{stock.price.toFixed(2)}</td>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${
                      isProfit ? "text-green-600" : "text-red-600"
                    }`}>
                      ₹{pnl.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${
                      stock.isLoss ? "text-red-600" : "text-green-600"
                    }`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Positions;