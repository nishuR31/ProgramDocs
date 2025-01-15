import React from 'react';
import './styles/Footer.css'; // Make sure to style this footer appropriately

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We provide tutorials and resources to help you grow in various technologies like Python, JavaScript, Node.js, and more. Explore tools and resources for building the next generation of web applications and systems.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://www.python.org" target="_blank" rel="noopener noreferrer">Python</a></li>
            <li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a></li>
            <li><a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">Express.js</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">MongoDB</a></li>
            <li><a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="https://github.com/nishuR31" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://t.me/python_channel" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Program Docs. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
