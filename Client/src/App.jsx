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
import Sidebar from "./Components/Sidebar/Sidebar";
import LogoutButton from "./Components/Auth/Logout";

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/dashboard";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* {showNavbar && <Navbar />} */}

      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
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
