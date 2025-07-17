// import React from "react";
// import { Link } from "react-router-dom";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;

// Funds.js
import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown, FaInfoCircle } from 'react-icons/fa';

const Funds = () => {
return (
<div className="space-y-6">
{/* Action Cards */}
<div className="bg-white rounded-lg shadow-sm p-6">
<h2 className="text-lg font-semibold text-gray-900 mb-4">
Quick Actions
</h2>
<div className="flex space-x-4">
<button className="flex-1 bg-green-50 hover:bg-green-100 p-4 rounded-lg flex items-center justify-center space-x-2">
<FaArrowDown className="text-green-600" />
<span className="font-medium text-green-600">Add Funds</span>
</button>
<button className="flex-1 bg-blue-50 hover:bg-blue-100 p-4 rounded-lg flex items-center justify-center space-x-2">
<FaArrowUp className="text-blue-600" />
<span className="font-medium text-blue-600">Withdraw</span>
</button>
</div>
</div>

text
  {/* Equity Section */}
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">Equity</h2>
      <FaInfoCircle className="text-gray-400 hover:text-gray-600 cursor-pointer" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Available Margin</p>
        <h3 className="text-2xl font-bold text-blue-600">₹4,043.10</h3>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Used Margin</p>
        <h3 className="text-2xl font-bold text-gray-900">₹3,757.30</h3>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Available Cash</p>
        <h3 className="text-2xl font-bold text-gray-900">₹4,043.10</h3>
      </div>
    </div>

    <div className="space-y-4">
      {[
        { label: 'Opening Balance', value: '4,043.10' },
        { label: 'Payin', value: '4,064.00' },
        { label: 'SPAN', value: '0.00' },
        { label: 'Delivery Margin', value: '0.00' },
        { label: 'Exposure', value: '0.00' },
        { label: 'Options Premium', value: '0.00' },
      ].map((item) => (
        <div key={item.label} className="flex justify-between py-2 border-b border-gray-100">
          <p className="text-gray-600">{item.label}</p>
          <p className="font-medium text-gray-900">₹{item.value}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Commodity Account */}
  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
    <FaWallet className="mx-auto text-gray-400 text-4xl mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">
      You don't have a commodity account
    </h3>
    <p className="text-gray-600 mb-6">
      Open a commodity account to start trading in MCX
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Open Account
    </button>
  </div>
</div>
);
};

export default Funds;