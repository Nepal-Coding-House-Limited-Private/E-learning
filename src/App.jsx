// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Claim from "./pages/Claim";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

function AppWrapper() {
  const location = useLocation();

  // Pages where components should NOT appear
  const hideHeaderRoutes = ["/course/claim"];
  const hideNavbarRoutes = ["/course/claim"];
  const hideFotterRoutes = ["/course/claim"];

  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  const showFotter = !hideFotterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditional Header */}
      {showHeader && <Header />}

      {/* Conditional Navbar */}
      {showNavbar && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/claim" element={<Claim />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Conditional Footer */}
      {showFotter && <Fotter />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
