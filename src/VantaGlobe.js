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
          fontSize: '3.5rem',
          fontWeight: 'bold',
          position: 'absolute',
          top: '20px',
          paddingBottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: '"ITC Clearface W01 Bold", serif, "Arial", sans-serif',
          textAlign: 'center',
        }}
      >
        Elpis
      </h3>
      <br></br>
      <h2
        style={{
          fontSize: '2.4rem',
          fontWeight: '200',
          position: 'absolute',
          top: '150px',
          left: '42%',
          transform: 'translateX(-40%)',
          fontFamily: '"Brush Script MT", cursive, "Arial", sans-serif',
          textAlign: 'left',
          color: 'white',
          zIndex: 300,
        }}
      >
        “Training is not an expense,but an investment in human capital.”
      </h2>
      <div className="fade-in-text"
        style={{
          zIndex: 302,
        }}>
        <p><span className="highlight">Training Programs Are Like Jigsaw Puzzles</span></p>
        <p>You meticulously create, design & develop a training program,</p>
        <p><strong>Once Delivered,</strong></p>
        <p>Need to start all over again.</p>
        <p>Because,We believe Every learner is different,</p>
        <p>And needs a different approach.</p>

      </div>
    </div>

  );
};

export default VantaGlobe;