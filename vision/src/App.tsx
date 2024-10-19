import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
import DictPage from './pages/DictPage';

import './App.css'

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dict"
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
              >
                Dict
              </NavLink>
            </li>
            {/* Add more NavLinks as needed */}
          </ul>
        </nav>
          <div className="page-content">
            {/* A <Routes> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dict" element={<DictPage />} />
              {/* ... other routes */}
            </Routes>
          </div>
      </div>
    </Router>  
  )
}

export default App
