import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center mb-5">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/RegisterForm" className="nav-link register-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/LoginForm" className="nav-link login-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/Logout" className="nav-link logout-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;


