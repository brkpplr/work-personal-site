import './App.css'
// import { useState } from 'react'
import selfPortrait from '/selfPortrait.webp'
import projectOne from '/sample.gif'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function App() {
  // const [alignment, setAlignment] = useState("list")
  // const handleProjectAlignment = (event: unknown, newAlignment: string) => {
  //   console.log("prev:", alignment, "new:", newAlignment);
  //   if (newAlignment !== null) {
  //     setAlignment(newAlignment);
  //   }
  // };

  return (
    <>
      <div className="header">
        <img src={selfPortrait} className="portrait" />
        <div className="links">
          <a className="social" href="https://github.com/brko8088">
            <GitHubIcon />
          </a>
          <a className="social" href="https://www.linkedin.com/in/bruno-softdev/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className='card'>
        <div className="name">Bruno Koppel</div>
        <div className="description">Software Engineer</div>
      </div>
      <div className='vertical-space'></div>
      <div className="projects">
        <div className='header'>
          <h2>Projects</h2>
          {/* <ToggleButtonGroup
            color='primary'
            className='toggle'
            value={alignment}
            exclusive
            onChange={handleProjectAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup> */}
        </div>
        {/* <div className={alignment ? 'list' : 'grid'}> */}
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
    </>
  )
}

export default App
