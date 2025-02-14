import './App.css'
import selfPortrait from '/selfPortrait.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
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
    </>
  )
}

export default App
