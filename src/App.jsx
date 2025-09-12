import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import Header from './components/Header';

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
