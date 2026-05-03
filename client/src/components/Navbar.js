import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
  <Link to="/">Libra</Link>
</div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/tariffs">Tariffs</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/notaries">Notaries</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register" className="register-btn">Register</Link></li>
      </ul>

    </nav>
  );
}