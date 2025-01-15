import React from 'react';
import './styles/Card.css';

// Card component
const Card = ({ image, title, content, link, tele }) => {
  const isValidTele = tele && tele.startsWith('@');

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="card-links">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link" 
              aria-label={`Learn more about ${title}`}
            >
              Learn More
            </a>
          )}
          {isValidTele && (
            <a 
              href={`https://t.me/${tele}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-tele"
              aria-label={`Chat on Telegram with ${tele}`}
            >
              Telegram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
