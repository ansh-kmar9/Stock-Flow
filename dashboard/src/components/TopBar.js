// import React from "react";

// import Menu from "./Menu";

// const TopBar = () => {
//   return (
//     <div className="topbar-container">
//       <div className="indices-container">
//         <div className="nifty">
//           <p className="index">NIFTY 50</p>
//           <p className="index-points">{100.2} </p>
//           <p className="percent"> </p>
//         </div>
//         <div className="sensex">
//           <p className="index">SENSEX</p>
//           <p className="index-points">{100.2}</p>
//           <p className="percent"></p>
//         </div>
//       </div>

//       <Menu />
//     </div>
//   );
// };

// export default TopBar;

// TopBar.js
import React from "react";
import { FaChartLine, FaBell, FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left section - Indices */}
          <div className="flex space-x-8">
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <p className="text-gray-500">NIFTY 50</p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">19,425.65</span>
                  <span className="text-green-500 flex items-center">
                    <FaChartLine className="h-3 w-3 mr-1" />
                    +1.2%
                  </span>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">SENSEX</p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">64,363.78</span>
                  <span className="text-green-500 flex items-center">
                    <FaChartLine className="h-3 w-3 mr-1" />
                    +0.9%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Search & Notifications */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search stocks..."
                className="w-64 px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <FaBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;