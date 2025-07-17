// src/landing_page/about/AboutPage.js
import React from 'react';
import { FaChartLine, FaUsers, FaShieldAlt, FaMobile, FaLightbulb, FaHandshake, FaGraduationCap, FaClock } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Advanced Trading Platform",
      description: "Experience seamless trading with our cutting-edge platform designed for both beginners and professionals."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Secure & Reliable",
      description: "Your security is our priority. We implement bank-grade security measures to protect your investments."
    },
    {
      icon: <FaMobile className="text-4xl text-blue-600" />,
      title: "Mobile Trading",
      description: "Trade anywhere, anytime with our powerful mobile app that keeps you connected to the markets."
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-600" />,
      title: "Smart Analytics",
      description: "Make informed decisions with real-time market analysis and intelligent trading insights."
    }
  ];

  const stats = [
    { number: "1M+", text: "Active Users" },
    { number: "₹10,000Cr+", text: "Daily Trading Volume" },
    { number: "50+", text: "Cities Covered" },
    { number: "24/7", text: "Customer Support" }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our operations and pricing."
    },
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      title: "Educational Focus",
      description: "Empowering traders with knowledge through comprehensive learning resources."
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Customer First",
      description: "Our users are at the heart of everything we do."
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: "Reliable Support",
      description: "Round-the-clock assistance for all your trading needs."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Revolutionizing</span>
                  <span className="block text-blue-600">Stock Trading</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  StockFlow is India's fastest-growing investment platform, making financial markets accessible to millions through technology and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose StockFlow</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the next generation of stock trading with our innovative features
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide us in building India's most trusted trading platform
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to start your trading journey?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join millions of Indians who trust StockFlow for their investments
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Open Free Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;