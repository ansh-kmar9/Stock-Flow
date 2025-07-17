// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(6)}
//             >
//               <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

// // Menu.js
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
// FaHome,
// FaClipboardList,
// FaChartPie,
// FaChartLine,
// FaWallet,
// FaTools,
// FaUser,
// FaSignOutAlt
// } from 'react-icons/fa';

// const Menu = () => {
// const location = useLocation();
// const [isProfileOpen, setIsProfileOpen] = useState(false);

// const menuItems = [
// { path: "/", icon: <FaHome />, label: "Dashboard" },
// { path: "/orders", icon: <FaClipboardList />, label: "Orders" },
// { path: "/holdings", icon: <FaChartPie />, label: "Holdings" },
// { path: "/positions", icon: <FaChartLine />, label: "Positions" },
// { path: "/funds", icon: <FaWallet />, label: "Funds" },
// { path: "/apps", icon: <FaTools />, label: "Apps" },
// ];

// return (
// <div className="h-screen w-64 bg-white border-r border-gray-200">
// {/* Logo */}
// <div className="px-6 py-4">
// <img src="/logo copy.png" alt="StockFlow" className="h-10" />
// </div>


//   {/* Navigation Menu */}
//   <nav className="mt-4">
//     {menuItems.map((item) => (
//       <Link
//         key={item.path}
//         to={item.path}
//         className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
//           location.pathname === item.path
//             ? "text-blue-600 bg-blue-50"
//             : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//         }`}
//       >
//         <span className="mr-3">{item.icon}</span>
//         {item.label}
//       </Link>
//     ))}
//   </nav>

//   {/* Profile Section */}
//   <div className="absolute bottom-0 w-64 border-t border-gray-200">
//     <div
//       className="px-6 py-4 flex items-center cursor-pointer hover:bg-gray-50"
//       onClick={() => setIsProfileOpen(!isProfileOpen)}
//     >
//       <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
//         ZU
//       </div>
//       <div className="ml-3">
//         <p className="text-sm font-medium text-gray-700">USERID</p>
//         <p className="text-xs text-gray-500">View Profile</p>
//       </div>
//     </div>

//     {/* Profile Dropdown */}
//     {isProfileOpen && (
//       <div className="border-t border-gray-200 py-2">
//         <a href="#" className="flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">
//           <FaUser className="mr-3" />
//           Profile Settings
//         </a>
//         <a href="#" className="flex items-center px-6 py-2 text-sm text-red-600 hover:bg-gray-50">
//           <FaSignOutAlt className="mr-3" />
//           Sign Out
//         </a>
//       </div>
//     )}
//   </div>
// </div>
// );
// };

// export default Menu;



// Menu.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaChartPie,
  FaChartLine,
  FaWallet,
  FaTools,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const menuItems = [
    { path: "/", icon: <FaHome />, label: "Dashboard" },
    { path: "/orders", icon: <FaClipboardList />, label: "Orders" },
    { path: "/holdings", icon: <FaChartPie />, label: "Holdings" },
    { path: "/positions", icon: <FaChartLine />, label: "Positions" },
    { path: "/funds", icon: <FaWallet />, label: "Funds" },
    { path: "/apps", icon: <FaTools />, label: "Apps" },
  ];

  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  const getUserInitials = () => {
    if (user?.name) {
      return user.name.split(' ').map(name => name[0]).join('').toUpperCase();
    }
    return 'U';
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="px-6 py-4">
        <img src="/logo copy.png" alt="StockFlow" className="h-10" />
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              location.pathname === item.path
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="absolute bottom-0 w-64 border-t border-gray-200">
        <div
          className="px-6 py-4 flex items-center cursor-pointer hover:bg-gray-50"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            {getUserInitials()}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500">
              {user?.email || 'View Profile'}
            </p>
          </div>
        </div>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="border-t border-gray-200 py-2 bg-white shadow-lg">
            <button 
              className="w-full flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50"
              onClick={() => {
                // Handle profile settings
                setIsProfileOpen(false);
              }}
            >
              <FaUser className="mr-3" />
              Profile Settings
            </button>
            <button 
              className="w-full flex items-center px-6 py-2 text-sm text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-3" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;