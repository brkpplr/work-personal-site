import './App.css'
import './themes.css';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
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
