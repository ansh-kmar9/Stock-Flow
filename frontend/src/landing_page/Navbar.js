import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Stock Flow Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link
                  to="/product"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Products
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  About
                </Link>
                <Link
                  to="/support"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="https://dashboard-stockflow.netlify.app/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/product"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Products
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/support"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Support
            </Link>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block bg-blue-600 text-white px-3 py-2 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
