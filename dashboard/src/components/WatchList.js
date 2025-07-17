// import React, { useState, useContext } from "react";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import { Tooltip, Grow } from "@mui/material";

// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from "@mui/icons-material";

// import { watchlist } from "../data/data";
// import { DoughnutChart } from "./DoughnoutChart";

// const labels = watchlist.map((subArray) => subArray["name"]);

// const WatchList = () => {
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Price",
//         data: watchlist.map((stock) => stock.price),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // export const data = {
//   //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   // datasets: [
//   //   {
//   //     label: "# of Votes",
//   //     data: [12, 19, 3, 5, 2, 3],
//   //     backgroundColor: [
//   //       "rgba(255, 99, 132, 0.2)",
//   //       "rgba(54, 162, 235, 0.2)",
//   //       "rgba(255, 206, 86, 0.2)",
//   //       "rgba(75, 192, 192, 0.2)",
//   //       "rgba(153, 102, 255, 0.2)",
//   //       "rgba(255, 159, 64, 0.2)",
//   //     ],
//   //     borderColor: [
//   //       "rgba(255, 99, 132, 1)",
//   //       "rgba(54, 162, 235, 1)",
//   //       "rgba(255, 206, 86, 1)",
//   //       "rgba(75, 192, 192, 1)",
//   //       "rgba(153, 102, 255, 1)",
//   //       "rgba(255, 159, 64, 1)",
//   //     ],
//   //     borderWidth: 1,
//   //   },
//   // ],
//   // };

//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>

//       <DoughnutChart data={data} />
//     </div>
//   );
// };

// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = (e) => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = (e) => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="down" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     generalContext.openBuyWindow(uid);
//   };

//   return (
//     <span className="actions">
//       <span>
//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//           onClick={handleBuyClick}
//         >
//           <button className="buy">Buy</button>
//         </Tooltip>
//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sell">Sell</button>
//         </Tooltip>
//         <Tooltip
//           title="Analytics (A)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };


// // WatchList.js
// import React, { useState, useContext } from "react";
// import { 
//   FaSearch, 
//   FaChartLine, 
//   FaEllipsisH, 
//   FaCaretUp, 
//   FaCaretDown,
//   FaPlus,
//   FaStar 
// } from 'react-icons/fa';
// import GeneralContext from "./GeneralContext";
// import { DoughnutChart } from "./DoughnoutChart";
// import { watchlist } from "../data/data";

// const WatchList = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-900">Watchlist</h2>
//           <button className="text-blue-600 hover:text-blue-700">
//             <FaPlus />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search stocks..."
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <FaSearch className="absolute left-3 top-3 text-gray-400" />
//         </div>
//         <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
//           <span>NSE</span>
//           <span>{watchlist.length} / 50</span>
//         </div>
//       </div>

//       {/* Watchlist Items */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="divide-y divide-gray-200">
//           {watchlist.map((stock, index) => (
//             <WatchListItem key={index} stock={stock} />
//           ))}
//         </div>
//       </div>

//       {/* Chart Section */}
//       <div className="p-4 border-t border-gray-200">
//         <DoughnutChart data={data} />
//       </div>
//     </div>
//   );
// };

// const WatchListItem = ({ stock }) => {
//   const [showActions, setShowActions] = useState(false);
//   const generalContext = useContext(GeneralContext);

//   return (
//     <div 
//       className="p-4 hover:bg-gray-50 transition-colors duration-200"
//       onMouseEnter={() => setShowActions(true)}
//       onMouseLeave={() => setShowActions(false)}
//     >
//       <div className="flex justify-between items-center">
//         <div>
//           <div className="flex items-center space-x-2">
//             <FaStar className="text-yellow-400" />
//             <h3 className="font-medium text-gray-900">{stock.name}</h3>
//           </div>
//           <p className="text-sm text-gray-600">NSE</p>
//         </div>
//         <div className="text-right">
//           <p className="font-medium text-gray-900">₹{stock.price}</p>
//           <div className={`flex items-center text-sm ${stock.isDown ? 'text-red-600' : 'text-green-600'}`}>
//             {stock.isDown ? <FaCaretDown /> : <FaCaretUp />}
//             <span>{stock.percent}%</span>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       {showActions && (
//         <div className="mt-3 flex justify-between items-center">
//           <div className="space-x-2">
//             <button
//               onClick={() => generalContext.openBuyWindow(stock.name)}
//               className="px-4 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
//             >
//               Buy
//             </button>
//             <button className="px-4 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">
//               Sell
//             </button>
//           </div>
//           <div className="flex space-x-2">
//             <button className="p-1 text-gray-600 hover:text-blue-600">
//               <FaChartLine />
//             </button>
//             <button className="p-1 text-gray-600 hover:text-blue-600">
//               <FaEllipsisH />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchList;


// // WatchList.js
// import React, { useState, useContext } from "react";
// import {
//   FaSearch,
//   FaChartLine,
//   FaEllipsisH,
//   FaCaretUp,
//   FaCaretDown,
//   FaPlus,
//   FaStar,
// } from "react-icons/fa";

// import GeneralContext from "./GeneralContext";
// import { DoughnutChart } from "./DoughnoutChart";
// import { watchlist } from "../data/data";

// const WatchList = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredWatchlist = watchlist.filter((stock) =>
//     stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const chartData = {
//     labels: watchlist.map((stock) => stock.name),
//     datasets: [
//       {
//         label: "Price",
//         data: watchlist.map((stock) => stock.price),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//           "rgba(199, 199, 199, 0.5)",
//           "rgba(255, 205, 86, 0.5)",
//           "rgba(100, 181, 246, 0.5)",
//         ],
//         borderColor: "rgba(255,255,255,1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-900">Watchlist</h2>
//           <button className="text-blue-600 hover:text-blue-700">
//             <FaPlus />
//           </button>
//         </div>
//         <div className="relative">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search stocks..."
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <FaSearch className="absolute left-3 top-3 text-gray-400" />
//         </div>
//         <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
//           <span>NSE</span>
//           <span>{watchlist.length} / 50</span>
//         </div>
//       </div>

//       {/* Watchlist Items */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="divide-y divide-gray-200">
//           {filteredWatchlist.map((stock, index) => (
//             <WatchListItem key={index} stock={stock} />
//           ))}
//         </div>
//       </div>

//       {/* Doughnut Chart Section */}
//       <div className="p-4 border-t border-gray-200">
//         <DoughnutChart data={chartData} />
//       </div>
//     </div>
//   );
// };

// const WatchListItem = ({ stock }) => {
//   const [showActions, setShowActions] = useState(false);
//   const generalContext = useContext(GeneralContext);

//   return (
//     <div
//       className="p-4 hover:bg-gray-50 transition-colors duration-200"
//       onMouseEnter={() => setShowActions(true)}
//       onMouseLeave={() => setShowActions(false)}
//     >
//       <div className="flex justify-between items-center">
//         <div>
//           <div className="flex items-center space-x-2">
//             <FaStar className="text-yellow-400" />
//             <h3 className="font-medium text-gray-900">{stock.name}</h3>
//           </div>
//           <p className="text-sm text-gray-600">NSE</p>
//         </div>
//         <div className="text-right">
//           <p className="font-medium text-gray-900">₹{stock.price}</p>
//           <div
//             className={`flex items-center text-sm ${
//               stock.isDown ? "text-red-600" : "text-green-600"
//             }`}
//           >
//             {stock.isDown ? <FaCaretDown /> : <FaCaretUp />}
//             <span>{stock.percent}</span>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       {showActions && (
//         <div className="mt-3 flex justify-between items-center">
//           <div className="space-x-2">
//             <button
//               onClick={() => generalContext.openBuyWindow(stock.name)}
//               className="px-4 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
//             >
//               Buy
//             </button>
//             <button className="px-4 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">
//               Sell
//             </button>
//           </div>
//           <div className="flex space-x-2">
//             <button className="p-1 text-gray-600 hover:text-blue-600">
//               <FaChartLine />
//             </button>
//             <button className="p-1 text-gray-600 hover:text-blue-600">
//               <FaEllipsisH />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchList;
// WatchList.js
import React, { useState, useContext } from "react";
import {
  FaSearch,
  FaChartLine,
  FaEllipsisH,
  FaCaretUp,
  FaCaretDown,
  FaPlus,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
import { watchlist } from "../data/data";

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chartData = {
    labels: filteredWatchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header Section */}
      <div className="flex-shrink-0 p-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-base font-semibold text-gray-900">Watchlist</h2>
            <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
              {watchlist.length}/50
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {!isSearchOpen && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaSearch size={14} />
              </button>
            )}
            <button className="p-1.5 text-blue-600 hover:text-blue-700 rounded-full hover:bg-blue-50 transition-colors">
              <FaPlus size={14} />
            </button>
          </div>
        </div>

        {/* Collapsible Search */}
        {isSearchOpen && (
          <div className="mt-2 relative animate-fadeIn">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search stocks..."
              className="w-full pl-8 pr-8 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus
            />
            <FaSearch className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchTerm("");
              }}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Watchlist Items */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
        {filteredWatchlist.map((stock) => (
          <WatchListItem key={stock.name} stock={stock} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="flex-shrink-0 border-t border-gray-200">
        <div className="p-4">
          <div className="h-48">
            <DoughnutChart
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    position: "right",
                    labels: {
                      boxWidth: 12,
                      padding: 10,
                      font: {
                        size: 11,
                      },
                    },
                  },
                  title: {
                    display: false,
                  },
                },
                cutout: "70%",
                radius: "90%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);
  const generalContext = useContext(GeneralContext);

  return (
    <div
      className="px-3 py-2.5 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" size={12} />
            <h3 className="font-medium text-gray-900 truncate max-w-[140px]">{stock.name}</h3>
          </div>
          <p className="text-xs text-gray-600 mt-0.5">NSE</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-gray-900">₹{stock.price}</p>
          <div
            className={`flex items-center text-xs mt-0.5 ${
              stock.isDown ? "text-red-600" : "text-green-600"
            }`}
          >
            {stock.isDown ? <FaCaretDown size={12} /> : <FaCaretUp size={12} />}
            <span className="ml-1">{stock.percent}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="mt-2 flex justify-between items-center animate-fadeIn">
          <div className="space-x-1.5">
            <button
              onClick={() => generalContext.openBuyWindow(stock.name)}
              className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
            >
              Buy
            </button>
            <button className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700 transition-colors">
              Sell
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
              <FaChartLine size={12} />
            </button>
            <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
              <FaEllipsisH size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;
