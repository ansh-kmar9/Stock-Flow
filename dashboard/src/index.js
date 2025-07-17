// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";
// // import "./index.css";
// // import Home from "./components/Home";

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <Home />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );

// // index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import PrivateRoute from "./components/PrivateRoute";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/*"
//           element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);