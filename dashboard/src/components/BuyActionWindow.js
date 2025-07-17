// BuyActionWindow.js
import React, { useState, useContext } from "react";
import { 
  FaTimes, 
  FaInfoCircle, 
  FaCalculator, 
  FaClock, 
  FaChartLine,
  FaRegularClock,
  FaShieldAlt,
  FaExclamationTriangle
} from 'react-icons/fa';
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [formData, setFormData] = useState({
    quantity: 1,
    price: 0.0,
    triggerPrice: 0.0,
    target: 0.0,
    stopLoss: 0.0,
    orderType: 'MARKET',
    productType: 'CNC',
    validity: 'DAY',
    disclosedQty: 0,
    amo: false, // After Market Order
    gtd: '', // Good Till Date
    tslValue: 0, // Trailing Stop Loss
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const productTypes = [
    { value: 'CNC', label: 'Cash & Carry (CNC)', description: 'For delivery trades' },
    { value: 'MIS', label: 'Intraday (MIS)', description: 'Squared off same day' },
    { value: 'NRML', label: 'Normal (NRML)', description: 'For F&O trades' },
  ];

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = () => {
    // Validate form
    if (!validateForm()) return;
    
    // Your axios post logic here
    closeBuyWindow();
  };

  const validateForm = () => {
    // Add your validation logic here
    return true;
  };

  const calculateMargin = () => {
    // Add margin calculation logic
    return 140.65;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">{uid}</h3>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">NSE</span>
            </div>
            <div className="flex items-center space-x-4 mt-1">
              <p className="text-sm text-gray-600">LTP: ₹452.30</p>
              <p className="text-sm text-green-600">+1.2%</p>
            </div>
          </div>
          <button
            onClick={closeBuyWindow}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Product Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                {productTypes.map(product => (
                  <button
                    key={product.value}
                    type="button"
                    className={`p-3 text-sm rounded-lg border-2 transition-all ${
                      formData.productType === product.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                    onClick={() => handleChange({ target: { name: 'productType', value: product.value } })}
                  >
                    <div className="font-medium">{product.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{product.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['MARKET', 'LIMIT', 'SL-M'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
                      formData.orderType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleChange({ target: { name: 'orderType', value: type } })}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                    title="Calculate Quantity"
                  >
                    <FaCalculator />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={formData.orderType === 'MARKET'}
                  step="0.05"
                />
              </div>
            </div>

            {/* Trigger Price (for SL-M) */}
            {formData.orderType === 'SL-M' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trigger Price
                </label>
                <input
                  type="number"
                  name="triggerPrice"
                  value={formData.triggerPrice}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.05"
                />
              </div>
            )}

            {/* Advanced Options Toggle */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>

            {/* Advanced Options */}
            {showAdvanced && (
              <div className="space-y-4 border-t pt-4">
                {/* Target and Stop Loss */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Price
                    </label>
                    <input
                      type="number"
                      name="target"
                      value={formData.target}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      step="0.05"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stop Loss
                    </label>
                    <input
                      type="number"
                      name="stopLoss"
                      value={formData.stopLoss}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      step="0.05"
                    />
                  </div>
                </div>

                {/* Trailing Stop Loss */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trailing Stop Loss
                  </label>
                  <input
                    type="number"
                    name="tslValue"
                    value={formData.tslValue}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    step="0.05"
                  />
                </div>

                {/* Validity and Disclosed Quantity */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Validity
                    </label>
                    <select
                      name="validity"
                      value={formData.validity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="DAY">Day</option>
                      <option value="IOC">Immediate or Cancel</option>
                      <option value="GTD">Good Till Date</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Disclosed Qty.
                    </label>
                    <input
                      type="number"
                      name="disclosedQty"
                      value={formData.disclosedQty}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* AMO Option */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="amo"
                    id="amo"
                    checked={formData.amo}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="amo" className="text-sm text-gray-700">
                    After Market Order (AMO)
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Margin Required */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Margin Required</span>
                <FaInfoCircle className="text-gray-400 cursor-help" />
              </div>
              <span className="font-medium text-blue-600">₹{calculateMargin()}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Buy</span>
              <span className="text-sm opacity-75">₹{formData.price || 'Market'}</span>
            </button>
            <button
              onClick={closeBuyWindow}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;