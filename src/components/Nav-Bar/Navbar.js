import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <Link to="/" className="logo">QUIZ</Link>
        <ul>
        <Link to="/" className="links">Home</Link>
        <Link to="/about" className="links">About</Link>
        <Link to="/profile" className="links">Profile</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
