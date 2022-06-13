import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import Onboard from "./pages/onboard"
import Feed from "./pages/feed"
import Dashboard from "./pages/dashboard"
import ProtectedRoute from './protect/ProtectedRoute';
import Tos from "./pages/tos"
import Write from './pages/write';
import NotFound from "./pages/notfound"
import Article from "./components/Article/Article"
import { useUserAuth } from './context/UserAuthContext'
import Footer from './components/Footer/Footer';




function App() {
  let { user } = useUserAuth()

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

        { user ? (
          null
        ) : <Route path='/onboard' element={<Onboard />} />
        }

        <Route path='/feed/article/:id' element={<Article />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/create/story/' element={<ProtectedRoute> <Write /> </ProtectedRoute>} />
        <Route path='/legal/terms-of-service-agreement' element={<Tos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App;
