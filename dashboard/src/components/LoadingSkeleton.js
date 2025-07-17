// components/LoadingSkeleton.js
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <div className="flex space-x-3">
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {/* Table Header */}
          <div className="flex justify-between border-b border-gray-200 pb-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>

          {/* Table Rows */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between py-4">
              {[...Array(8)].map((_, j) => (
                <div key={j} className="h-4 w-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6">
            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;