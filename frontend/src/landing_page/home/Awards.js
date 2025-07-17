// Awards.js
import React from 'react';
import { FaTrophy, FaLightbulb, FaHeadset } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Best Trading Platform',
      organization: 'Financial Excellence Awards 2023',
      icon: <FaTrophy className="text-5xl text-yellow-500" />,
    },
    {
      id: 2,
      title: 'Innovation in Fintech',
      organization: 'Tech Summit 2023',
      icon: <FaLightbulb className="text-5xl text-blue-500" />,
    },
    {
      id: 3,
      title: 'Best Customer Service',
      organization: 'Customer Choice Awards',
      icon: <FaHeadset className="text-5xl text-green-500" />,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Recognition</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Award Winning Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Recognized for excellence in trading technology and customer service
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {awards.map((award) => (
              <div key={award.id} className="flex flex-col items-center group">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {award.icon}
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900 text-center">
                  {award.title}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 text-center">
                  {award.organization}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Awards;