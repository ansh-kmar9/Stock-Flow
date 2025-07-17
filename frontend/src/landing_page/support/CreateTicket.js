// src/landing_page/support/CreateTicket.js
import React, { useState } from 'react';
import { FaPaperPlane, FaExclamationCircle, FaClock, FaTag, FaEnvelope, FaUser, FaHeadset } from 'react-icons/fa';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    priority: 'medium',
    attachments: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachments: Array.from(e.target.files)
    });
  };

  const categories = [
    { value: 'account', label: 'Account Related', icon: <FaUser /> },
    { value: 'trading', label: 'Trading Issues', icon: <FaTag /> },
    { value: 'technical', label: 'Technical Support', icon: <FaHeadset /> },
    { value: 'funds', label: 'Funds & Payments', icon: <FaEnvelope /> },
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-800' },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPaperPlane className="text-3xl text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create Support Ticket</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're here to help! Fill out the form below and our support team will respond shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <div
                    key={category.value}
                    className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all duration-200 ${
                      formData.category === category.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                    onClick={() => handleChange({ target: { name: 'category', value: category.value } })}
                  >
                    <div className="flex justify-center mb-2">{category.icon}</div>
                    <div className="text-sm font-medium">{category.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of your issue"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please provide detailed information about your issue..."
                required
              ></textarea>
            </div>

            {/* Priority Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <div className="flex space-x-4">
                {priorities.map((priority) => (
                  <label
                    key={priority.value}
                    className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.priority === priority.value ? priority.color : 'bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={priority.value}
                      checked={formData.priority === priority.value}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <FaExclamationCircle className={formData.priority === priority.value ? 'text-current' : 'text-gray-400'} />
                    <span className={formData.priority === priority.value ? 'font-medium' : 'text-gray-600'}>
                      {priority.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* File Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                      <span>Upload files</span>
                      <input
                        type="file"
                        multiple
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <FaPaperPlane />
                <span>Submit Ticket</span>
              </button>
            </div>
          </form>

          {/* Response Time Notice */}
          <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
            <FaClock className="mr-2" />
            <span>Average response time: 2-4 business hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;