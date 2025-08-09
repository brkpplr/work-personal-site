import './App.css'
import './themes.css';
import selfPortrait from '/selfPortrait.webp'
import projectOne from '/sample.gif'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useEffect, useState } from 'react';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

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
          </div>
          <div className="grid">
            <div className='project-card'>
              <div className="name">Conway's Game of Life</div>
              <img src={projectOne} className="project-media" />
              <div className="description">
                <a href="https://brko-cgof.netlify.app/">Live App Website</a>
                <a href="https://github.com/brko8088/webapp-game-of-life">Github Repo Link</a>
              </div>
            </div>
            <div className='project-card'>
              <div className="name">Python Blog Website</div>
              <div className="description">
                <p>Blogging site that allows users to sign up, make posts and like posts from other users, as well as comment on them, create accounts and put their social links</p>
                <a href="https://github.com/brko8088/research-djangoBlogWebsite">Github Repo Link</a>
              </div>
            </div>
            <div className='project-card'>
              <div className="name">List of LeetCode Solutions</div>
              <div className="description">
                <p>Trying to complete all Leetcode problems and their Unit Tests</p>
                <a href="https://github.com/brko8088/research-algorithms">Github Repo Link</a>
              </div>
            </div>
            <div className='project-card'>
              <div className="name">Video Game in Godot</div>
              <div className="description">
                <p>Simple game that I'm currently working on</p>
                <a href="https://github.com/brko8088/game-learning">Github Repo Link</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
