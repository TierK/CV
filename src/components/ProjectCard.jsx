import React, { useRef } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Link as MuiLink } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, demoLink, repoLink, video, image } = project;
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = () => {
    window.open(demoLink, '_blank');
  };

  return (
    <Card
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <CardMedia
        component="div"
        className="project-media"
      >
        {video ? (
          <video
            ref={videoRef}
            src={video}
            alt={title}
            className="project-video-content"
            muted
            loop
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="project-image-content"
          />
        )}
      </CardMedia>
      <CardContent className="project-content">
        <Typography variant="h5" component="div" className="project-title">{title}</Typography>
        <Typography variant="body2" className="project-description">{description}</Typography>
        <Box className="project-links">
          <MuiLink href={repoLink} target="_blank" rel="noopener noreferrer" className="icon-wrapper">
            <GitHub />
          </MuiLink>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
