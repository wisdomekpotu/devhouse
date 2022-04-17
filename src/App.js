import React from 'react';
import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Homepage from './pages/Homepage';
import Onboard from "./pages/Onboard"
import Feed from "./pages/Feed"
import { Provider } from 'react-redux';
import store from './Redux/store';
// import BottomNav from "./components/BottomNav/BottomNav"



function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/onboard' element={<Onboard />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </div>
    </Provider>
  );
}



export default App;
