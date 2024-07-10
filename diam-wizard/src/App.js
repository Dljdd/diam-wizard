import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './components/ChatBot.js';
import './App.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to the DIAM Wizard</h1>
    <p>Discover everything you need to know about DIAM. Our wizard is here to guide you through trading, setting up your wallet, and much more.</p>
    <div className="cta-button-container">
      <Link to="/chatbot" className="cta-button">Get Started with DIAM Wizard</Link>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/chatbot">The DIAM Wizard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
