import React from 'react';
import './ChatBot.css';
import characterImage from './images/mascot.png'; // Update the path accordingly

const Chatbot = () => {
  const faqs = [
    "What is DIAM?",
    "How to trade DIAM?",
    "DIAM vs ETH",
    "DIAM Wallet Setup",
    "DIAM Price Prediction"
  ];

  return (
    <div className="chatbot-container">
      <div className="character-container">
        <img src={characterImage} alt="Character" className="character-image" />
      </div>
      <div className="speech-bubble">
      <iframe
          src="https://www.chatbase.co/chatbot-iframe/CGo_wuYF77FrY8De5b18n" // Replace with your chatbot URL
          title="Chatbot"
          className="chatbot-iframe"
        ></iframe>
      </div>
      <div className="faq-container">
        <h2>FAQs</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">{faq}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chatbot;
