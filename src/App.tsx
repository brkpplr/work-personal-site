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
        </div>
      </div>
    </>
  )
}

export default App
