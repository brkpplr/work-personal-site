import React from 'react';
import './ProjectCard.css';
import { Project } from './../data/projectList';

interface ProjectCardProps {
  key: number;
  displayMode: 'grid' | 'list';
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ displayMode, project }) => {
  return (
    displayMode === 'grid' ? (
    <div className='project-card'>
      <div className="name">{project.title}</div>
      <img src={project.imageSource} className="project-media" />
      <div className="description">
        { project.description ? (<p>{project.description}</p>) : null }
        { project.liveAppLinkHref ? (<a href={project.liveAppLinkHref}>Live App Website</a>) : null }
        { project.ghLinkHref ? (<a href={project.ghLinkHref}>Github Repo Link</a>) : null }
      </div>
    </div> ) : (
      <div className='project-inline'>
        <div className="name">{project.title}</div>
        <div className="description">
          { project.description ? (<p>{project.description}</p>) : null }
          { project.liveAppLinkHref ? (<a href={project.liveAppLinkHref}>Live App Website</a>) : null }
          { project.ghLinkHref ? (<a href={project.ghLinkHref}>Github Repo Link</a>) : null }
        </div>
      </div>
    )
  );
};

export default ProjectCard;
