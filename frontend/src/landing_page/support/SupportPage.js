// src/landing_page/support/SupportPage.js
import React from 'react';
import SupportHero from './SupportHero';
import CreateTicket from './CreateTicket';
import { FaBook, FaVideo, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

const SupportPage = () => {
  const resources = [
    {
      icon: <FaBook className="text-3xl text-blue-600" />,
      title: "Knowledge Base",
      description: "Find answers to common questions in our comprehensive knowledge base",
      link: "#"
    },
    {
      icon: <FaVideo className="text-3xl text-blue-600" />,
      title: "Video Tutorials",
      description: "Learn through our detailed video guides and tutorials",
      link: "#"
    },
    {
      icon: <FaQuestionCircle className="text-3xl text-blue-600" />,
      title: "FAQ",
      description: "Quick answers to frequently asked questions",
      link: "#"
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: "Trading Guides",
      description: "Comprehensive guides for different trading aspects",
      link: "#"
    }
  ];

  return (
    <div className="bg-white">
      <SupportHero />

      {/* Help Resources Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Self-Help Resources</h2>
            <p className="mt-4 text-xl text-gray-600">
              Find quick solutions with our comprehensive help resources
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <CreateTicket />

      {/* Contact Hours Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Support Hours</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-2">Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-xl mb-2">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-lg text-blue-100">
              For urgent trading related queries, our support team is available 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;