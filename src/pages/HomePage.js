import React from 'react';
import Card from '../components/Card';
import './HomePage.css';


// Array of card data
const cardData = [
    {
      image: '/assets/card1.jpg',
      title: 'Math',
      content: 'Explore various mathematical concepts, theories, and problem-solving techniques.',
      link: 'https://example.com/math',
      tele: 'math_channel',
    },
    {
      image: '/assets/card2.jpg',
      title: 'Science',
      content: 'Dive into the world of science with experiments, theories, and discoveries.',
      link: 'https://example.com/science',
      tele: 'science_channel',
    },
    {
      image: '/assets/card3.jpg',
      title: 'Programming',
      content: 'Learn programming languages, frameworks, and best practices for coding.',
      link: 'https://example.com/programming',
      tele: 'programming_channel',
    },
  ];
  
  const CardContainer = () => {
    return (
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
            link={card.link}
            tele={card.tele}
          />
        ))}
      </div>
    );
  };
  
  export default CardContainer;
