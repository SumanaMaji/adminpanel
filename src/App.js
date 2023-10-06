import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from "./pages/User";
import Categories from "./pages/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import Sidebar from "./Components/Sidebar";
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Sidebar />
      <Routes>
      <Route exact path="/" element={ <Login/> } />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/about-us/aim" element={<OurAim/>} />
        <Route path="/about-us/vision" element={<OurVision/>} />
      <Route exact path="/Dashboard" element={ <Dashboard/> } />
      <Route exact path="/User" element={ <User/> } />
      <Route exact path="/Categories" element={ <Categories/> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
