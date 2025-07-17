// Stats.js
import React from 'react';

const Stats = () => {
  const stats = [
    { id: 1, name: 'Active Users', value: '1M+' },
    { id: 2, name: 'Daily Trades', value: '₹10,000 Cr+' },
    { id: 3, name: 'App Downloads', value: '5M+' },
    { id: 4, name: 'Customer Support', value: '24/7' },
  ];

  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by millions of Indians
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              India's fastest growing investment platform
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;