import './App.css'
import './themes.css';
import selfPortrait from '/selfPortrait.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThemeSwitcher from './components/ThemeSwitcher';
import ProjectCard from './components/ProjectCard';
import { projectList } from './data/projectList';
import { useEffect, useState } from 'react';


function App() {
  const [theme, setTheme] = useState('dark');
  const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('grid');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const toggleDisplayMode = () => {
    const newDisplayMode = displayMode === 'grid' ? 'list' : 'grid';
    setDisplayMode(newDisplayMode);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-display-mode', displayMode);
  }, [displayMode]);

  return (
    <>
      <div className='navbar'>
        <div className="left-tray">
          <img src={selfPortrait} className="portrait" />
          <div className='title'>Bruno Koppel</div>
          <a className="social" href="https://github.com/brkpplr">
              <GitHubIcon />
            </a>
            <a className="social" href="https://www.linkedin.com/in/bruno-softdev/">
              <LinkedInIcon />
            </a>
        </div>
        <div className="right-tray">
          <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
        </div>
      </div>

      <div className='dashboard'>

        <div className="projects">
          <div className='header'>
            <h2>Projects</h2>
            <button onClick={toggleDisplayMode}>{displayMode === 'grid' ? 'List View' : 'Grid View'}</button>
          </div>
          <div className={displayMode}>
            {projectList.map((project) => (
              <ProjectCard key={project.id} displayMode={displayMode} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
