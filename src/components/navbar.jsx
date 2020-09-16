import React, { useState } from "react";
import { Link } from "react-router-dom";
import './../assets/logo.jpg';

const Navbar = (props) => {
 const [isLoggedIn , setLoggedIn] = useState(props);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand">
          <img src="logo.jpg" className="img-fluid" />
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pool"className="nav-link">
              Game pool
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mt-2 mt-lg-0 navbar-right">
          
          <li className="nav-item ">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
