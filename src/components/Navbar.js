import React, { useState, useRef, useEffect } from 'react';
import './styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showThemeToggle, setShowThemeToggle] = useState(false);
  const themeToggleRef = useRef(null);
  const items = [
    "JavaScript", "Python", "MySQL", "MongoDB", "Data Structures", "Algorithms", 
    "HTML", "CSS", "Node.js", "Express", "AI Tools", "Image Editing Tools",
    "Git", "GitHub", "API Development", "Web Development", "Frontend", "Backend",
    "Full Stack Development",
    "Version Control", "Database Management", "REST APIs"
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleThemePalette = () => {
    setShowThemeToggle(!showThemeToggle);
  };

  const matchedItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click outside to collapse the theme palette
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeToggleRef.current && !themeToggleRef.current.contains(event.target)) {
        setShowThemeToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      
      < h1 className="navbar-logo">Program Docs</h1>


      <div className="navbar-content">
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
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/tele">Tele Bot</a>
          <div ref={themeToggleRef} className="theme-toggle-container">
            <button className="theme-toggle-btn" onClick={toggleThemePalette}>
              Theme
            </button>
            {showThemeToggle && (
              <div className="theme-toggle-popup">
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;