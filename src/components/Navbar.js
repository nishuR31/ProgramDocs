import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const items=[
    "JavaScript", "Python", "MySQL", "MongoDB", "Data Structures", "Algorithms", 
    "HTML", "CSS", "Node.js", "Express", "AI Tools", "Image Editing Tools",
    "Git", "GitHub", "API Development", "Web Development", "Frontend", "Backend",
    "Full Stack Development",
    "Version Control", "Database Management", "REST APIs"
  ];// Example list for search match

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const placeHold = (items) => {
    return items.map((item, index) => (
      <a href={`/${item}`} key={index} className="nav-link">
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    ));
  };

  // Filter matching items
  const matchedItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">StudySite</h1>

      {/* Search Section */}
      <div className="search-container">
        <input
          type="search"
          className={`navbar-search ${searchQuery ? 'active' : ''}`}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <div className="search-results">
            {matchedItems.length ? (
              matchedItems.map((item, index) => (
                <div key={index} className="search-result-item">
                  {item}
                </div>
              ))
            ) : (
              <div className="search-no-match">No matches found</div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
    {placeHold(items)}
      </div>
    </nav>
  );
};

export default Navbar;
