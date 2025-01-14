import React from 'react';
import './Card.css';

// Card component
const Card = ({ image, title, content, link, tele }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="card-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
              Learn More
            </a>
          )}
          {tele && (
            <a href={`https://t.me/${tele}`} target="_blank" rel="noopener noreferrer" className="card-tele">
              Telegram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
