
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white text-sm font-medium">View Project <i className="fas fa-arrow-right ml-1"></i></span>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-md uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
