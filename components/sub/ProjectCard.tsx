// sub/ProjectCard.tsx
import React from 'react';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
};

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="block w-full max-w-sm transform transition-transform hover:scale-105 cursor-default">
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden h-full flex flex-col border border-white/20">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow text-white">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm mb-4 flex-grow">{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 font-medium hover:underline cursor-pointer"
          >
            View Code →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
