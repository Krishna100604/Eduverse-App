import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/Signup';
import ContactUs from './Components/Contact/ContactUs';
import AboutUs from './Components/About/AboutUs';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard';

  return (
    <div className="bg-gray-100 min-h-screen">
      {showNavbar && <Navbar />}
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
      {showNavbar && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
