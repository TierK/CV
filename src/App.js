import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import project1Video from './videos/project1.mp4';
import project2Video from './videos/project1.mp4';
import project3Video from './videos/project1.mp4';
import companyLogo1 from './images/elbit.png';
import companyLogo2 from './images/iec.png';
import companyLogo3 from './images/sber.png';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Elbit Systems',
    period: '01.2022 - today',
    description: 'Developing web applications using a wide range of technologies.',
    logo: companyLogo1
  },
  {
    title: 'Test Automation Engineer',
    company: 'IEC (Israel Electric Corporation)',
    period: '2020 – 2022',
    description: 'Developed DevOps tools and test automation scripts.',
    logo: companyLogo2
  },
  {
    title: 'Senior QA Automation Engineer',
    company: 'Sberbank',
    period: '2015 - 2019',
    description: 'Implemented Scrum and Agile methodology.',
    logo: companyLogo3
  },
];

const projects = [
  {
    title: 'Project 1',
    video: project1Video,
    description: 'Description for project 1',
    demoLink: 'https://demo1.com',
    repoLink: 'https://github.com/repo1',
  },
  {
    title: 'Project 2',
    video: project2Video,
    description: 'Description for project 2',
    demoLink: 'https://demo2.com',
    repoLink: 'https://github.com/repo2',
  },
  {
    title: 'Project 3',
    video: project3Video,
    description: 'Description for project 3',
    demoLink: 'https://demo3.com',
    repoLink: 'https://github.com/repo3',
  },
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Kim Bondarchuk - Full Stack Developer</h1>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+972533442478" className="icon-wrapper">
              <PhoneIcon />
            </a>
            <span>053 344 24 78</span>
          </div>
          <div className="contact-item">
            <a href="mailto:kimbfsd@gmail.com" className="icon-wrapper">
              <EmailIcon />
            </a>
            <span>kimbfsd@gmail.com</span>
          </div>
        </div>
      </header>

      <section>
        <h2>Professional Experience</h2>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;