// themeToggle.js

// Importing React hooks
import { useState, useEffect } from 'react';
import './ThemeToggle.css';

// Define an array of color palettes with unique themes
const colorPalettes = [
  {
    name: "Light",
    primary: "#ffffff",
    secondary: "#f1f1f1",
    accent: "#1d72b8",
    text: "#333333",
    background: "#f9f9f9"
  },
  {
    name: "Dark",
    primary: "#121212",
    secondary: "#1f1f1f",
    accent: "#bb86fc",
    text: "#ffffff",
    background: "#121212"
  },
  {
    name: "Solarized",
    primary: "#002b36",
    secondary: "#073642",
    accent: "#b58900",
    text: "#839496",
    background: "#fdf6e3"
  },
  {
    name: "Oceanic",
    primary: "#2b3a42",
    secondary: "#2c3e50",
    accent: "#16a085",
    text: "#ecf0f1",
    background: "#34495e"
  },
  {
    name: "Warm",
    primary: "#ff7f50",
    secondary: "#ff6347",
    accent: "#f4a261",
    text: "#2f4f4f",
    background: "#faebd7"
  },
  {
    name: "Forest",
    primary: "#2e8b57",
    secondary: "#3cb371",
    accent: "#006400",
    text: "#ffffff",
    background: "#004d1a"
  },
  {
    name: "Pastel",
    primary: "#ffcbf2",
    secondary: "#f3c4fb",
    accent: "#ffabe1",
    text: "#2f2f2f",
    background: "#e0aaff"
  },
  {
    name: "Neon",
    primary: "#0ff",
    secondary: "#ff0",
    accent: "#f0f",
    text: "#000",
    background: "#222"
  },
  {
    name: "Monochrome",
    primary: "#444",
    secondary: "#555",
    accent: "#666",
    text: "#ddd",
    background: "#222"
  },
  {
    name: "Candy",
    primary: "#ff6f61",
    secondary: "#ff9671",
    accent: "#ffc75f",
    text: "#ffffff",
    background: "#d65db1"
  },
  {
    name: "Autumn",
    primary: "#a0522d",
    secondary: "#cd853f",
    accent: "#d2691e",
    text: "#fff5ee",
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

  // Reset theme to default
  const resetTheme = () => {
    const defaultTheme = colorPalettes[0];
    setPalette(defaultTheme);
    setCurrentTheme(defaultTheme.name);
  };

  return (
    <div className="theme-toggle-container glass-effect">
      <h2>Current Theme: {currentTheme}</h2>
      <div className="theme-details">
        <p>Primary Color: {palette.primary}</p>
        <p>Secondary Color: {palette.secondary}</p>
        <p>Accent Color: {palette.accent}</p>
        <p>Text Color: {palette.text}</p>
        <p>Background Color: {palette.background}</p>
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

      <button className="theme-toggle-btn" onClick={resetTheme}>
        Reset to Default
      </button>
    </div>
  );
};

export default ThemeToggle;
