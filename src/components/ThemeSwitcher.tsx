// src/components/ThemeSwitcher.tsx
import React from 'react';
import './ThemeSwitcher.css';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeSwitcher;
