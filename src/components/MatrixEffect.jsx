// src/components/MatrixEffect.jsx
import React, { useEffect, useState } from 'react';
import './MatrixEffect.css';

const MatrixEffect = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('header').offsetHeight;
      const experienceSection = document.querySelector('section');
      const experienceTop = experienceSection.getBoundingClientRect().top;
      const scrollY = window.scrollY;

      // Activate effect when scrolled past header and before reaching ExperienceCard section
      if (scrollY + window.innerHeight > headerHeight && scrollY < experienceTop) {
        setActive(true);
        setTimeout(() => setActive(false), 10000);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate columns with random binary characters
  const generateColumns = (numColumns) => {
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      const columnHeight = Math.random() * 200 + 200; // Random height for the effect
      columns.push(
        <div
          key={i}
          className="matrix-column"
          style={{ 
            left: `${i * 1}em`, 
            animation: `matrix-drop ${Math.random() * 10 + 10}s linear infinite` // Slower animation
          }}
        >
          {[...Array(Math.floor(columnHeight / 2))].map((_, idx) => (
            <div key={idx}>{Math.random() > 0.5 ? '1' : '0'}</div>
          ))}
        </div>
      );
    }
    return columns;
  };

  return (
    <div className={`matrix-effect ${active ? 'active' : ''}`}>
      {generateColumns(150)}
    </div>
  );
};

export default MatrixEffect;
