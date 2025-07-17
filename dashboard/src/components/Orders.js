// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;


// Orders.js
import React, { useState } from "react";
import { FaFileAlt, FaFilter, FaDownload } from 'react-icons/fa';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('open');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'open'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('open')}
            >
              Open Orders
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'executed'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('executed')}
            >
              Executed
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md flex items-center">
              <FaFilter className="mr-2" />
              Filter
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md flex items-center">
              <FaDownload className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <FaFileAlt className="mx-auto text-gray-400 text-4xl mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No orders placed today
          </h3>
          <p className="text-gray-600 mb-6">
            Start trading by placing your first order
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;