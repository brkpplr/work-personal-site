import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>This is where I'll put some information about myself.</p>
      <div className="social-links">
        <a className="social" href="https://github.com/brkpplr">
          <GitHubIcon />
        </a>
        <a className="social" href="https://www.linkedin.com/in/bruno-softdev/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default About;
