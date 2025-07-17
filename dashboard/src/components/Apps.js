// import React from "react";

// const Apps = () => {
//   return <h1>Apps</h1>;
// };

// export default Apps;


// Apps.js
import React from "react";
import { 
  FaRobot, 
  FaChartBar, 
  FaBookOpen, 
  FaCode,
  FaBell,
  FaDesktop 
} from 'react-icons/fa';

const Apps = () => {
  const apps = [
    {
      icon: <FaRobot className="text-blue-600 text-2xl" />,
      title: "Algo Trading",
      description: "Create and automate your trading strategies",
      status: "Coming Soon"
    },
    {
      icon: <FaChartBar className="text-green-600 text-2xl" />,
      title: "Advanced Charts",
      description: "Professional grade technical analysis tools",
      status: "Active"
    },
    {
      icon: <FaBookOpen className="text-purple-600 text-2xl" />,
      title: "Trading Journal",
      description: "Track and analyze your trading performance",
      status: "Active"
    },
    {
      icon: <FaCode className="text-orange-600 text-2xl" />,
      title: "API Access",
      description: "Build custom trading applications",
      status: "Active"
    },
    {
      icon: <FaBell className="text-red-600 text-2xl" />,
      title: "Price Alerts",
      description: "Get notified about price movements",
      status: "Active"
    },
    {
      icon: <FaDesktop className="text-indigo-600 text-2xl" />,
      title: "Desktop Trading",
      description: "Professional desktop trading platform",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Trading Apps & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {app.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{app.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    app.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{app.description}</p>
              <button className="mt-4 w-full py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                {app.status === 'Active' ? 'Launch App' : 'Get Notified'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* API Documentation Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Developer API</h2>
          <p className="mb-6">
            Build custom trading applications with our powerful API. Access real-time market data, place orders, and more.
          </p>
          <button className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;