import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/Home/MainContent";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/Signup";
import ContactUs from "./Components/Contact/ContactUs";
import AboutUs from "./Components/About/AboutUs";
import Profile from "./Components/Profile/Profile";

import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
