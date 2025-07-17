// src/landing_page/support/SupportHero.js
import React from 'react';
import { FaHeadset, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SupportHero = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: "Call Us",
      detail: "1800-123-4567",
      timing: "Mon-Sat 9:00 AM - 6:00 PM"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-blue-600" />,
      title: "WhatsApp",
      detail: "+91 98765 43210",
      timing: "24/7 Support"
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: "Email",
      detail: "support@stockflow.com",
      timing: "Response within 24 hours"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FaHeadset className="mx-auto text-5xl text-blue-600 mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            How Can We Help You?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Get instant support from our dedicated team. We're here to help you with all your trading needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900">
                {method.title}
              </h3>
              <p className="mt-2 text-center text-blue-600 font-medium">
                {method.detail}
              </p>
              <p className="mt-1 text-sm text-center text-gray-500">
                {method.timing}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportHero;