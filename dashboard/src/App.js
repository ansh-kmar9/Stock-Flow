// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;