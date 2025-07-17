// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <GeneralContextProvider>
//         <WatchList />
//       </GeneralContextProvider>
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Summary />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// DashBoard.js
// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
// return (
// <div className="dashboard-container">
// <GeneralContextProvider>
// <WatchList />
// </GeneralContextProvider>
// <div className="content">
// <Routes>
// <Route exact path="/" element={<Summary />} />
// <Route path="/orders" element={<Orders />} />
// <Route path="/holdings" element={<Holdings />} />
// <Route path="/positions" element={<Positions />} />
// <Route path="/funds" element={<Funds />} />
// <Route path="/apps" element={<Apps />} />
// </Routes>
// </div>
// </div>
// );
// };

// export default Dashboard;

// Dashboard.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./TopBar";
import Menu from "./Menu";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
return (
<div className="flex h-screen bg-gray-50">
{/* Sidebar */}
<Menu />


  {/* Main Content */}
  <div className="flex-1 flex flex-col overflow-hidden">
    <TopBar />
    
    <div className="flex-1 flex overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
        <GeneralContextProvider>
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </GeneralContextProvider>
      </main>

      {/* Watchlist Sidebar */}
      <aside className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </aside>
    </div>
  </div>
</div>
);
};

export default Dashboard;