import { useState, useEffect, useRef } from 'react';
import './styles/ThemeToggle.css';

// Define an array of color palettes with unique themes
const colorPalettes = [
    {
      name: "Light",
      primary: "#ffffff",
      secondary: "#606060",
      accent: "#1e90ff",
      text: "#333333",
      background: "#f2f2f2"
    },
    {
      name: "Dark",
      primary: "#1a1a1a",
      secondary: "#2a2a2a",
      accent: "#5211ea",
      text: "#f5f5f5",
      background: "#121212"
    },
    {
      name: "Solarized",
      primary: "#073642",
      secondary: "#586e75",
      accent: "#b58900",
      text: "#839496",
      background: "#fdf6e3"
    },
    {
      name: "Oceanic",
      primary: "#34495e",
      secondary: "#2c3e50",
      accent: "#1abc9c",
      text: "#ecf0f1",
      background: "#22303c"
    },
    {
      name: "Warm",
      primary: "#ffdab9",
      secondary: "#ff8c69",
      accent: "#f4a261",
      text: "#3b2f2f",
      background: "#faebd7"
    },
    {
      name: "Forest",
      primary: "#2e8b57",
      secondary: "#3cb371",
      accent: "#228b22",
      text: "#e6ffe6",
      background: "#1c4b27"
    },
    {
      name: "Pastel",
      primary: "#f9f5ff",
      secondary: "#efc3e6",
      accent: "#ffbbcc",
      text: "#4a4a4a",
      background: "#d5cbe5"
    },
    {
      name: "Neon",
      primary: "#0ff",
      secondary: "#ff0",
      accent: "#f0f",
      text: "#222",
      background: "#000"
    },
    {
      name: "Monochrome",
      primary: "#555",
      secondary: "#666",
      accent: "#777",
      text: "#e0e0e0",
      background: "#1c1c1c"
    },
    {
      name: "Candy",
      primary: "#f28a8a",
      secondary: "#ffb3b3",
      accent: "#ffda77",
      text: "#fff5f5",
      background: "#ec407a"
    },
    {
      name: "Autumn",
      primary: "#b76e31",
      secondary: "#d88a55",
      accent: "#e96c3a",
      text: "#fffaf0",
      background: "#8b4513"
    }
  ];
  

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'Light'
  );
  const [palette, setPalette] = useState(
    colorPalettes.find((p) => p.name === currentTheme)
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const themeToggleRef = useRef(null);

  // Update document styles whenever the theme changes
  useEffect(() => {
    document.body.style.backgroundColor = palette.background;
    document.body.style.color = palette.text;

    const root = document.documentElement;
    root.style.setProperty('--primary-color', palette.primary);
    root.style.setProperty('--secondary-color', palette.secondary);
    root.style.setProperty('--accent-color', palette.accent);

    localStorage.setItem('theme', currentTheme);
  }, [palette, currentTheme]);

  // Handle click outside to collapse the theme palette
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeToggleRef.current && !themeToggleRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset theme to default
  const resetTheme = () => {
    const defaultTheme = colorPalettes[1];
    setPalette(defaultTheme);
    setCurrentTheme(defaultTheme.name);
  };

  return (
    <div ref={themeToggleRef} className="theme-toggle-container">
      <button className="theme-toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Close Theme Palette' : 'Change Theme'}
      </button>
      {isExpanded && (
        <div className="theme-toggle-popup glass-effect">
          <h2>Current Theme: {currentTheme}</h2>
          <div className="theme-details">
            <p style={{color:palette.primary}}>Primary Color: {palette.primary}</p>
            <p style={{color:palette.secondary}}>Secondary Color: {palette.secondary}</p>
            <p style={{color:palette.accent}}>Accent Color: {palette.accent}</p>
            <p style={{color:palette.text}}>Text Color: {palette.text}</p>
            <p style={{color:palette.background}}>Background Color: {palette.background}</p>
          </div>

          {/* Theme preview */}
          <div className="theme-preview-container">
            {colorPalettes.map((theme, index) => (
              <div
                key={index}
                className="theme-preview"
                style={{
                  backgroundColor: theme.background,
                  color: theme.text,
                  border: `2px solid ${theme.accent}`
                }}
                onClick={() => {
                  setPalette(theme);
                  setCurrentTheme(theme.name);
                }}
              >
                {theme.name}
              </div>
            ))}
          </div>

          <button className="theme-toggle-btn" id="reset" onClick={resetTheme}>
            Reset to Default
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;