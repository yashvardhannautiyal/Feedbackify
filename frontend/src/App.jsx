import React from 'react'
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/UserRegister/Login';
import SignIn from './pages/UserRegister/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="bg-orange-50 min-h-screen">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
