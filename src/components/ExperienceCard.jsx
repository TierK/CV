import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <div className="experience-card-logo">
        <img src={experience.logo} alt={`${experience.company} logo`} />
      </div>
      <div className="experience-card-content">
        <h3 className="experience-card-title">{experience.title}</h3>
        <div className="experience-card-company">{experience.company}</div>
        <div className="experience-card-period">{experience.period}</div>
        <div className="experience-card-description">{experience.description}</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
