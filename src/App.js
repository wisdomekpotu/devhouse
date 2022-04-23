import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Onboard from "./pages/Onboard"
import Feed from "./pages/Feed"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from './Protect/ProtectedRoute';
import ProtectLogin from './Protect/ProtectLogin';
import Sidebar from "./components/Sidebar/Sidebar"



function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path='/onboard' element={<Onboard />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/side' element={<Sidebar />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  )
}

export default App;
