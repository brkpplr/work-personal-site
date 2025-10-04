import './Projects.css';
import { useEffect, useState } from 'react';
import { projectList } from '../data/projectList';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('grid');

  const toggleDisplayMode = () => {
    const newDisplayMode = displayMode === 'grid' ? 'list' : 'grid';
    setDisplayMode(newDisplayMode);
  }
  
  useEffect(() => {
    document.documentElement.setAttribute('data-display-mode', displayMode);
  }, [displayMode]);

  return (
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
  );
}

export default Projects;
