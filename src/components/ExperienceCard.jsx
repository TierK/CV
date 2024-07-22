import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './ExperienceCard.css';

function ExperienceCard({ experience }) {
  const { title, company, period, description, logo } = experience;
  return (
    <Card className="experience-card">
      <CardContent className="experience-content">
        <div className="experience-text">
          <Typography variant="h5" className="experience-title">{title}</Typography>
          <Typography variant="subtitle1" className="experience-company">{company}</Typography>
          <Typography variant="body2" className="experience-period">{period}</Typography>
          <Typography variant="body2" className="experience-description">{description}</Typography>
        </div>
        {logo && (
          <div className="experience-logo">
            <img src={logo} alt={`${company} logo`} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
