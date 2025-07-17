// import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
// import { VerticalGraph } from "./VerticalGraph";

// // import { holdings } from "../data/data";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       // console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   // export const data = {
//   //   labels,
//   //   datasets: [
//   // {
//   //   label: 'Dataset 1',
//   //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   // },
//   //     {
//   //       label: 'Dataset 2',
//   //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   //     },
//   //   ],
//   // };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>
//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;

// // Holdings.js
// import React, { useState, useEffect } from "react";
// import { VerticalGraph } from "./VerticalGraph";
// import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

// import { holdings } from "../data/data";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

//   useEffect(() => {
//     // Your existing axios call
//   }, []);

//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
//     }
//     return <FaSort />;
//   };

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Holdings ({allHoldings.length})
//           </h2>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
//               Export
//             </button>
//             <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
//               Add Holdings
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 {['Instrument', 'Qty.', 'Avg. cost', 'LTP', 'Cur. val', 'P&L', 'Net chg.', 'Day chg.'].map((header) => (
//                   <th
//                     key={header}
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>{header}</span>
//                       {getSortIcon(header)}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {allHoldings.map((stock, index) => {
//                 const curValue = stock.price * stock.qty;
//                 const isProfit = curValue - stock.avg * stock.qty >= 0.0;

//                 return (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{stock.qty}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{stock.avg.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{stock.price.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{curValue.toFixed(2)}</td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
//                       ₹{(curValue - stock.avg * stock.qty).toFixed(2)}
//                     </td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
//                       {stock.net}
//                     </td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${stock.isLoss ? 'text-red-600' : 'text-green-600'}`}>
//                       {stock.day}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Total Investment</p>
//           <h3 className="text-2xl font-bold text-gray-900">₹29,875.55</h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Current Value</p>
//           <h3 className="text-2xl font-bold text-gray-900">₹31,428.95</h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">P&L</p>
//           <h3 className="text-2xl font-bold text-green-600">₹1,553.40 (+5.20%)</h3>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <VerticalGraph data={data} />
//       </div>
//     </div>
//   );
// };

// export default Holdings;

// // Holdings.js
// import React, { useState, useEffect } from "react";
// import { VerticalGraph } from "./VerticalGraph";
// import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
// import axios from "axios";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3002/allHoldings")
//       .then((res) => {
//         setAllHoldings(res.data);
//       })
//       .catch((err) => console.error("Error fetching holdings:", err));
//   }, []);

//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
//     }
//     return <FaSort />;
//   };

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });

//     const sortedData = [...allHoldings].sort((a, b) => {
//       if (typeof a[key] === "number") {
//         return direction === "ascending" ? a[key] - b[key] : b[key] - a[key];
//       } else {
//         return direction === "ascending"
//           ? a[key].localeCompare(b[key])
//           : b[key].localeCompare(a[key]);
//       }
//     });

//     setAllHoldings(sortedData);
//   };

//   const labels = allHoldings.map((stock) => stock.name);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Holdings ({allHoldings.length})
//           </h2>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
//               Export
//             </button>
//             <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
//               Add Holdings
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 {[
//                   { label: "Instrument", key: "name" },
//                   { label: "Qty.", key: "qty" },
//                   { label: "Avg. cost", key: "avg" },
//                   { label: "LTP", key: "price" },
//                   { label: "Cur. val", key: "curValue" },
//                   { label: "P&L", key: "pnl" },
//                   { label: "Net chg.", key: "net" },
//                   { label: "Day chg.", key: "day" },
//                 ].map(({ label, key }) => (
//                   <th
//                     key={key}
//                     onClick={() => requestSort(key)}
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>{label}</span>
//                       {getSortIcon(key)}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {allHoldings.map((stock, index) => {
//                 const curValue = stock.price * stock.qty;
//                 const pnl = curValue - stock.avg * stock.qty;
//                 const isProfit = pnl >= 0;

//                 return (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{stock.qty}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{stock.avg.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{stock.price.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">₹{curValue.toFixed(2)}</td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${isProfit ? "text-green-600" : "text-red-600"}`}>
//                       ₹{pnl.toFixed(2)}
//                     </td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${isProfit ? "text-green-600" : "text-red-600"}`}>
//                       {stock.net}
//                     </td>
//                     <td className={`px-6 py-4 whitespace-nowrap ${stock.isLoss ? "text-red-600" : "text-green-600"}`}>
//                       {stock.day}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Total Investment</p>
//           <h3 className="text-2xl font-bold text-gray-900">₹29,875.55</h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Current Value</p>
//           <h3 className="text-2xl font-bold text-gray-900">₹31,428.95</h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">P&L</p>
//           <h3 className="text-2xl font-bold text-green-600">₹1,553.40 (+5.20%)</h3>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <VerticalGraph data={data} />
//       </div>
//     </div>
//   );
// };

// export default Holdings;

// Holdings.js
// import React, { useState, useEffect } from "react";
// import { VerticalGraph } from "./VerticalGraph";
// import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
// import axios from "axios";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);
//   const [sortConfig, setSortConfig] = useState({
//     key: null,
//     direction: "ascending",
//   });

//   useEffect(() => {
//     axios.get("http://localhost:9000/allHoldings").then((res) => {
//       setAllHoldings(res.data);
//     });
//   }, []);

//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "ascending" ? (
//         <FaSortUp />
//       ) : (
//         <FaSortDown />
//       );
//     }
//     return <FaSort />;
//   };

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });

//     const sorted = [...allHoldings].sort((a, b) => {
//       const aValue =
//         typeof a[key] === "string" ? a[key].toString().toLowerCase() : a[key];
//       const bValue =
//         typeof b[key] === "string" ? b[key].toString().toLowerCase() : b[key];
//       if (aValue < bValue) return direction === "ascending" ? -1 : 1;
//       if (aValue > bValue) return direction === "ascending" ? 1 : -1;
//       return 0;
//     });

//     setAllHoldings(sorted);
//   };

//   const labels = allHoldings.map((stock) => stock.name);
//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "LTP",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//       },
//     ],
//   };

//   const totalInvestment = allHoldings.reduce(
//     (sum, s) => sum + s.avg * s.qty,
//     0
//   );
//   const totalValue = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);
//   const totalPNL = totalValue - totalInvestment;
//   const pnlPercent = ((totalPNL / totalInvestment) * 100).toFixed(2);
//   const isOverallProfit = totalPNL >= 0;

//   return (
//     <div className="space-y-6">
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Holdings ({allHoldings.length})
//           </h2>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
//               Export
//             </button>
//             <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
//               Add Holdings
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 {[
//                   { label: "Instrument", key: "name" },
//                   { label: "Qty.", key: "qty" },
//                   { label: "Avg. cost", key: "avg" },
//                   { label: "LTP", key: "price" },
//                   { label: "Cur. val", key: "curValue" },
//                   { label: "P&L", key: "pnl" },
//                   { label: "Net chg.", key: "net" },
//                   { label: "Day chg.", key: "day" },
//                 ].map(({ label, key }) => (
//                   <th
//                     key={key}
//                     onClick={() => requestSort(key)}
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>{label}</span>
//                       {getSortIcon(key)}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {allHoldings.map((stock, index) => {
//                 const curValue = stock.price * stock.qty;
//                 const pnl = curValue - stock.avg * stock.qty;
//                 const isProfit = pnl >= 0;

//                 return (
//                   <tr key={index} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {stock.name}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">{stock.qty}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       ₹{stock.avg.toFixed(2)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       ₹{stock.price.toFixed(2)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       ₹{curValue.toFixed(2)}
//                     </td>
//                     <td
//                       className={`px-6 py-4 whitespace-nowrap ${
//                         isProfit ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       ₹{pnl.toFixed(2)}
//                     </td>
//                     <td
//                       className={`px-6 py-4 whitespace-nowrap ${
//                         isProfit ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {stock.net}
//                     </td>
//                     <td
//                       className={`px-6 py-4 whitespace-nowrap ${
//                         stock.isLoss ? "text-red-600" : "text-green-600"
//                       }`}
//                     >
//                       {stock.day}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Total Investment</p>
//           <h3 className="text-2xl font-bold text-gray-900">
//             ₹{totalInvestment.toFixed(2)}
//           </h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">Current Value</p>
//           <h3 className="text-2xl font-bold text-gray-900">
//             ₹{totalValue.toFixed(2)}
//           </h3>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <p className="text-sm text-gray-600">P&L</p>
//           <h3
//             className={`text-2xl font-bold ${
//               isOverallProfit ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             ₹{totalPNL.toFixed(2)} ({pnlPercent}%)
//           </h3>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <VerticalGraph data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default Holdings;
// components/Holdings.js
import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import { 
  FaSort, 
  FaSortUp, 
  FaSortDown, 
  FaSpinner, 
  FaExclamationTriangle, 
  FaRedoAlt,
  FaDownload,
  FaPlus,
  FaSync
} from "react-icons/fa";
import axios from '../utils/axios';
import LoadingSkeleton from './LoadingSkeleton';

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [refreshing, setRefreshing] = useState(false);

  const fetchHoldings = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      else setLoading(true);
      setError(null);

      const response = await axios.get("/allHoldings");
      setAllHoldings(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch holdings data');
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp className="text-blue-600" />
      ) : (
        <FaSortDown className="text-blue-600" />
      );
    }
    return <FaSort className="text-gray-400" />;
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...allHoldings].sort((a, b) => {
      const aValue = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const bValue = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];
      
      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setAllHoldings(sorted);
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm">
        <FaExclamationTriangle className="text-red-500 text-4xl mb-4" />
        <p className="text-gray-800 font-medium mb-2">Unable to load holdings</p>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={() => fetchHoldings()}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <FaRedoAlt className={refreshing ? "animate-spin" : ""} />
          <span>Try Again</span>
        </button>
      </div>
    );
  }

  if (allHoldings.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-8">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <FaPlus className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Holdings Yet</h3>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          Start your investment journey by adding stocks to your portfolio
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <FaPlus className="text-sm" />
          <span>Add Holdings</span>
        </button>
      </div>
    );
  }

  const chartData = {
    labels: allHoldings.map(stock => stock.name),
    datasets: [{
      label: "LTP",
      data: allHoldings.map(stock => stock.price),
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 1
    }]
  };

  const totalInvestment = allHoldings.reduce((sum, s) => sum + s.avg * s.qty, 0);
  const totalValue = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);
  const totalPNL = totalValue - totalInvestment;
  const pnlPercent = ((totalPNL / totalInvestment) * 100).toFixed(2);
  const isOverallProfit = totalPNL >= 0;

  return (
    <div className="space-y-6">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Holdings ({allHoldings.length})
            </h2>
            <button
              onClick={() => fetchHoldings(true)}
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
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors flex items-center space-x-2">
              <FaDownload className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center space-x-2">
              <FaPlus className="w-4 h-4" />
              <span>Add Holdings</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  { label: "Instrument", key: "name" },
                  { label: "Qty.", key: "qty" },
                  { label: "Avg. cost", key: "avg" },
                  { label: "LTP", key: "price" },
                  { label: "Cur. val", key: "curValue" },
                  { label: "P&L", key: "pnl" },
                  { label: "Net chg.", key: "net" },
                  { label: "Day chg.", key: "day" },
                ].map(({ label, key }) => (
                  <th
                    key={key}
                    onClick={() => requestSort(key)}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
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
              {allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {stock.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      ₹{stock.avg.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      ₹{stock.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      ₹{curValue.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${
                      isProfit ? "text-green-600" : "text-red-600"
                    }`}>
                      ₹{pnl.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${
                      isProfit ? "text-green-600" : "text-red-600"
                    }`}>
                      {stock.net}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap font-medium ${
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Total Investment</p>
          <h3 className="text-2xl font-bold text-gray-900">
            ₹{totalInvestment.toFixed(2)}
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">Current Value</p>
          <h3 className="text-2xl font-bold text-gray-900">
            ₹{totalValue.toFixed(2)}
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-sm text-gray-600">P&L</p>
          <h3 className={`text-2xl font-bold ${
            isOverallProfit ? "text-green-600" : "text-red-600"
          }`}>
            ₹{totalPNL.toFixed(2)} ({pnlPercent}%)
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <VerticalGraph data={chartData} />
      </div>
    </div>
  );
};

export default Holdings;