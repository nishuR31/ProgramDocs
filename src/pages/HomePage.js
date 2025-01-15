import React from 'react';
import Card from '../components/Card';
// import './HomePage.css';
import py from "../assets/python.jpg";
import js from "../assets/javascript.jpg";
import node from "../assets/node.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.webp";
import mysql from "../assets/mysql.jpg";
import ai from "../assets/ai.jpg";
import pic from "../assets/pic-tools.jpg";
import exp from "../assets/express.png";
import mongo from "../assets/mongo.png";
import md from "../assets/markdown.jpg";

// Array of card data
const cardData =[
    {
      image: py,
      title: 'Python',
      content: 'Learn Python programming, from basics to advanced concepts and libraries.',
      link: 'https://www.python.org',
      tele: 'python_channel',
    },
    {
      image: js,
      title: 'JavaScript',
      content: 'Dive into JavaScript, one of the most popular web development languages.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      tele: 'javascript_channel',
    },
    {
      image: node,
      title: 'Node.js',
      content: 'Explore Node.js for building scalable server-side applications with JavaScript.',
      link: 'https://nodejs.org',
      tele: 'nodejs_channel',
    },
    {
      image: git,
      title: 'Git',
      content: 'Master version control with Git and learn collaboration with GitHub.',
      link: 'https://git-scm.com',
      tele: 'git_channel',
    },
    {
      image: github,
      title: 'GitHub',
      content: 'Learn GitHub for hosting, version control, and collaborating on code projects.',
      link: 'https://github.com',
      tele: 'github_channel',
    },
    {
      image: exp,
      title: 'Express.js',
      content: 'Build robust web applications using the Express.js framework for Node.js.',
      link: 'https://expressjs.com',
      tele: 'express_channel',
    },
    {
      image: mysql,
      title: 'MySQL',
      content: 'Get started with MySQL, a popular relational database management system.',
      link: 'https://www.mysql.com',
      tele: 'mysql_channel',
    },
    {
      image: mongo,
      title: 'MongoDB',
      content: 'Learn MongoDB, a NoSQL database, for handling large amounts of unstructured data.',
      link: 'https://www.mongodb.com',
      tele: 'mongodb_channel',
    },
    {
      image: md,
      title: 'Markdown',
      content: 'Write formatted text with Markdown, a lightweight markup language.',
      link: 'https://www.markdownguide.org',
      tele: 'markdown_channel',
    },
    {
      image: ai,
      title: 'AI Tools',
      content: 'Explore AI tools, libraries, and frameworks for building intelligent systems.',
      link: 'https://www.tensorflow.org',
      tele: 'ai_tools_channel',
    },
    {
      image: pic,
      title: 'Pic Tools',
      content: 'Explore various image manipulation and processing tools for developers and designers.',
      link: 'https://www.photofunia.com', // Link to a popular photo tool (can be changed based on your needs)
      tele: 'pic_tools_channel', // Assuming a telegram channel name
    }
    
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