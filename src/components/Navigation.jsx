import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation frosty">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="avatar-placeholder">A</div>
          <span>Awwal Adeyemo</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Work</Link>
          <a href="mailto:hello@example.com" className="nav-link contact-btn">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
