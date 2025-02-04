import React, { useEffect, useState } from 'react';

const SnakeDottedLine = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxDots, setMaxDots] = useState(50); // Default value

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateDots = () => {
      setMaxDots(Math.floor((window.innerHeight * 0.75) / 12)); // Adjust dots based on viewport height
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDots);

    updateDots(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDots);
    };
  }, []);

  const generateDottedLine = () => {
    const dots = [];
    const maxOffset = window.innerWidth / 3; // Ensures dots don't go beyond screen

    for (let i = 0; i < maxDots; i++) {
      const offset = Math.sin((scrollY / 200) + (i / 12)) * maxOffset; // Adjusted amplitude dynamically
      const size = i % 2 === 0 ? 6 : 4; // Smaller dots for better mobile view

      // Calculate opacity for fading effect
      const fadeStart = maxDots * 0.7;
      const opacity = i < fadeStart ? 1 : 1 - (i - fadeStart) / (maxDots - fadeStart);

      dots.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `calc(50% + ${offset}px)`,
            top: `${i * 12}px`, // Adjusted spacing
            width: `${size}px`,
            height: `${size}px`,
            background: '#4d3fff',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            opacity: opacity,
          }}
        />
      );
    }
    return dots;
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '75vh',
        zIndex: '1',
        overflow: 'hidden', // Prevents dots from going outside
      }}
    >
      {generateDottedLine()}
    </div>
  );
};

export default SnakeDottedLine;
