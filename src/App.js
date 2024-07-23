import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import { Phone as PhoneIcon, Email as EmailIcon, Brightness4 as Brightness4Icon } from '@mui/icons-material'; // Импорт иконок
import project1Video from './videos/project1.mp4';
import project2Video from './videos/project2.mp4';
import project3Video from './videos/project3.mp4';
import project4Image from './images/project4.png';
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
    title: 'Instagram Project',
    video: project1Video,
    description: 'Social media models Project',
    demoLink: 'https://tierk.github.io/instagram-ui/',
    repoLink: 'https://github.com/TierK/instagram-ui',
  },
  {
    title: 'Globs subscription page',
    video: project2Video,
    description: 'Digital newspaper subscription price list',
    demoLink: 'https://tierk.github.io/globs-app/',
    repoLink: 'https://github.com/TierK/globs-app',
  },
  {
    title: 'Scout Grill Store',
    video: project3Video,
    description: 'Landing page for Weber Grills online shop',
    demoLink: 'https://tierk.github.io/ScoutTest/',
    repoLink: 'https://github.com/TierK/ScoutTest',
  },
  {
    title: 'Design Company page',
    image: project4Image, // Updated to use 'image' instead of 'video'
    description: 'Landing page for design company (in the process of development)',
    demoLink: 'coming soon',
    repoLink: 'https://github.com/TierK/Design-Company',
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Kim Bondarchuk - Full Stack Developer</h1>
        <button className="theme-toggle-button" onClick={toggleDarkMode}>
          <Brightness4Icon />
        </button>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+972533442478">
              <PhoneIcon />
            </a>
            <span>053 344 24 78</span>
          </div>
          <div className="contact-item">
            <a href="mailto:kimbfsd@gmail.com">
              <EmailIcon />
            </a>
            <span>kimbfsd@gmail.com</span>
          </div>
        </div>
      </header>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-gallery">
    {experiences.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </div>
      </section>

      <section>
        <h2>A Few of My Works</h2>
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
