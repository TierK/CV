import React, { useRef } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Link as MuiLink } from '@mui/material';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
const { title, description, demoLink, repoLink } = project;
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Сбрасываем видео на начало
    }
  };
 
  return (
    <Card className="project-card"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
>
    <CardMedia
      component="div" 
       className="project-video"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={project.video}
        alt={title}
        className="project-video-content"
        muted 
        loop
      />
    </CardMedia>
    <CardContent className="project-content">
      <Typography variant="h5" component="div" className="project-title">{title}</Typography>
      <Typography variant="body2" className="project-description">{description}</Typography>
      <Box className="project-links">
        <MuiLink href={demoLink} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
          <LinkIcon />
        </MuiLink>
        <MuiLink href={repoLink} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
          <GitHub />
        </MuiLink>
      </Box>
    </CardContent>
  </Card>
  );
};

export default ProjectCard;
