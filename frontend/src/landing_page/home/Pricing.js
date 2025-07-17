// Pricing.js
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹0',
      description: 'Perfect for getting started',
      features: [
        'Free equity delivery',
        'Basic charts and tools',
        'Mobile trading app',
        'Regular market updates',
      ],
    },
    {
      name: 'Pro',
      price: '₹199',
      description: 'For active traders',
      features: [
        'Everything in Basic',
        'Advanced charts',
        'Options trading',
        'Priority support',
        'Research reports',
      ],
    },
    {
      name: 'Premium',
      price: '₹499',
      description: 'For professional traders',
      features: [
        'Everything in Pro',
        'API trading',
        'Advanced algorithms',
        'Dedicated relationship manager',
        'Premium research',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best suits your trading needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200"
            >
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;