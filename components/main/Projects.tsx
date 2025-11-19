// components/Projects.tsx
import React from 'react';
import ProjectCard from '../sub/ProjectCard';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: 'ERP System For MaxAB E-Commerce',
    description: 'A modular ERP built with Java Spring Boot and PostgreSQL, providing RESTful APIs for employee onboarding, contracts, and insurance, with dynamic document generation and ongoing expansion into authentication, payroll, and reporting.',
    imageUrl: 'maxab-erp.png',
    githubLink: 'https://github.com/Andrewashraf-dev/MaxAB-ERP',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS to showcase projects, skills, and experience. Features smooth animations, a starry background, and a video-enhanced hero section.',
    imageUrl: 'Portfolio.png',
    githubLink: 'https://github.com/Andrewashraf-dev/Andrew-Ashraf-Portfolio',
  },
  {
    title: 'School Guide — Smart School Finder App',
    description: 'An Android app that helps users find, compare, and apply to schools based on location, system, fees, and reviews. Developed using Kotlin, Java, Firebase, and Android Studio as a graduation project.',
    imageUrl: './schoolsguide.png',
    githubLink: 'https://github.com/Andrewashraf-dev/SchoolsGuide',
  },
  {
    title: 'TicTacToe-XO-Game',
    description: 'A console-based Tic Tac Toe game in C++ using OOP and the Minimax algorithm to play against AI or a friend.',
    imageUrl: './project3.png',
    githubLink: 'https://github.com/yourname/weather-app',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white underline underline-offset-4 decoration-blue-500">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
