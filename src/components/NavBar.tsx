import './NavBar.css'
import selfPortrait from '/selfPortrait.webp'
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='navbar'>
      <div className="left-tray">
        <Link to="/" >
          <img src={selfPortrait} className="portrait" />
        </Link>
        <Link to="/" >
          <div className='title'>Bruno Koppel</div>
        </Link>
      </div>
      <div className="right-tray">
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      </div>
    </div>
  )
}

export default NavBar
