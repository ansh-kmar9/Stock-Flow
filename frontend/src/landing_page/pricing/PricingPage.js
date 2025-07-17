// src/landing_page/pricing/PricingPage.js
import React from 'react';
import PricingHero from './PricingHero';
import Brokerage from './Brokerage';
import { FaCheck } from 'react-icons/fa';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹0',
      description: 'Perfect for beginners',
      features: [
        'Free equity delivery trading',
        'Basic charting tools',
        'Mobile trading app',
        'Email support',
        'Market research reports',
      ],
      buttonText: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₹999',
      description: 'For active traders',
      features: [
        'Everything in Basic',
        'Advanced charting',
        'Priority support',
        'Options trading',
        'API access',
      ],
      buttonText: 'Try Pro',
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '₹1999',
      description: 'For professional traders',
      features: [
        'Everything in Pro',
        'Dedicated relationship manager',
        'Premium research',
        'Algo trading',
        'Customized solutions',
      ],
      buttonText: 'Go Premium',
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white">
      <PricingHero />

      {/* Subscription Plans */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg shadow-lg p-8 ${
                  plan.highlighted
                    ? 'border-2 border-blue-500 relative'
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Popular
                  </span>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium ${
                      plan.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Brokerage />

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How do I open an account?</h3>
              <p className="text-gray-600">Complete the online KYC process with your Aadhaar and PAN card. Your account will be activated within 24 hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What are the account opening charges?</h3>
              <p className="text-gray-600">Account opening is completely free. There are no hidden charges or annual maintenance fees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How can I upgrade my plan?</h3>
              <p className="text-gray-600">You can upgrade your plan anytime from your dashboard. The new benefits will be activated instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What payment methods are accepted?</h3>
              <p className="text-gray-600">We accept all major payment methods including UPI, net banking, and credit/debit cards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;