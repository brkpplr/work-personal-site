import './App.css'
import './themes.css';
import selfPortrait from '/selfPortrait.webp'
import ThemeSwitcher from './components/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <div className='navbar'>
        <div className="left-tray">
          <img src={selfPortrait} className="portrait" />
          <div className='title'>Bruno Koppel</div>
        </div>
        <div className="right-tray">
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        </div>
      </div>

      <div className='dashboard'>
        <Link to="/about" className="social">
          About
        </Link>
        <Link to="/projects" className="social">
          Projects
        </Link>
      </div>
    </>
  )
}

export default App
