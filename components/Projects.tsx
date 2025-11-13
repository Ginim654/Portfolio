
import React from 'react';
import type { Project } from '../types';
import Section from './Section';

interface ProjectsProps {
  projects: Project[];
}

const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary p-6 rounded-lg shadow-lg h-full transition-all duration-300 hover:shadow-accent/30 hover:-translate-y-1 border border-transparent hover:border-accent/50">
    <h3 className="text-xl font-bold text-accent mb-3">{project.title}</h3>
    <ul className="space-y-2">
      {project.description.map((point, index) => (
        <li key={index} className="flex items-start text-medium">
          <span className="text-accent mr-2 mt-1 flex-shrink-0"><ChevronRightIcon /></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
