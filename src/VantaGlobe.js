import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/src/vanta.globe';
import './VantaGlobe.css'; // Import the CSS file for animations
import './App.css';
const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const effect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 20.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      color2: 0xa71414,
      size: 0.70,
      backgroundColor: 0xffffff,
      THREE: THREE, // Pass the THREE.js instance
    });
  
    setVantaEffect(effect);

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (vantaEffect) {
        const scrollY = window.scrollY || window.pageYOffset;
        const rotationSpeed = scrollY * 0.001; // Adjust rotation speed based on scroll
        vantaEffect.setOptions({
          rotationX: rotationSpeed,
          rotationY: rotationSpeed,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="vanta-banner"
      style={{
        width: '100%',
        height: '800px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <h3
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: '"ITC Clearface W01 Bold", serif, "Arial", sans-serif',
          textAlign: 'center',
        }}
      >
        ELPIS
      </h3>
      <h2
        style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          position: 'absolute',
          top: '100px',
          left: '42%',
          transform: 'translateX(-65%)',
          fontFamily: '"ITC Clearface W01 Bold", serif, "Arial", sans-serif',
          textAlign: 'left',
          color: 'white',
          zIndex: 100,
        }}
      >
        “Training is not an expense,<br>
        </br> but an investment in human capital.”
      </h2>
      <div className="fade-in-text">
        <p><span className="highlight">Training Programs Are Like a World in Motion</span></p>
        <p>You carefully create, design & develop a training program,</p>
        <p><strong>Once Delivered,</strong></p>
        <p>You evolve and start again.</p>
        <p>Because we believe <strong>every learner is unique</strong>,</p>
        <p>And needs a different path to grow—<span className="earth">just like the world keeps turning. 🌍✨</span></p>
      </div>
    </div>
  );
};

export default VantaGlobe;