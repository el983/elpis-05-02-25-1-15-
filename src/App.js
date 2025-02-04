import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import VantaGlobe from './VantaGlobe';
import SnakeDottedLine from './SnakeDottedLine';
import DolphinSection from './DolphinSection';
import Footer from './components/Footer';
import './App.css';

// Import images
import Image1 from './images/5.png';
import Image2 from './images/6.png';
import Image3 from './images/7.png';
import Image4 from './images/8.png';
import Image5 from './images/9.png';
import Image6 from './images/10.png';
import Image7 from './images/11.png';
import Image8 from './images/12.png';
import Image9 from './images/13.png';
import Image10 from './images/14.png';
import Image11 from './images/15.png';

// Import team profile images
import Profile1 from './images/p1.png';
import Profile2 from './images/p2.jpg';
import Profile3 from './images/p3.png';
import Profile4 from './images/p4.jpg';
import Profile5 from './images/p5.png';
import Profile6 from './images/p6.png';

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      
      {/* Founder Section */}
      <h3>Founder :</h3>
      <div className="profiles">
        <div className="profile">
          <img src={Profile1} alt="Profile 1" />
          <h3>Smita Nandi</h3>          
          <p>An evangelist & Literary enthusiast</p>
        </div>
        <div className="profile">
          <img src={Profile6} alt="Profile 6" />
          <h3>Joy Chowdhury</h3>
          <p>Thought Leader, L&D Professional and Emotional Intelligence Coach</p>
        </div>
      </div>
      
      {/* Mentors & Advisors Section */}
      <h3>Mentors & Advisors :</h3>
      <div className="profiles">
        <div className="profile">
          <img src={Profile2} alt="Profile 2" />
          <h3>Vijay Chandra</h3>          
          <p>Fashion Brand Management International</p>
        </div>
        <div className="profile">
          <img src={Profile3} alt="Profile 3" />
          <h3>Kankana Nandi</h3>          
          <p>Digital Marketing Specialist</p>
        </div>
        <div className="profile">
          <img src={Profile4} alt="Profile 4" />
          <h3>Dr. Arun Kumar Nandi</h3>          
          <p>Management & Projects</p>
        </div>        
        <div className="profile">
          <img src={Profile5} alt="Profile 5" />
          <h3>Triparna Nandi</h3>          
          <p>Fashion Business Management</p>
        </div>
      </div>
    </div>
  );
}

function MovingContainer1() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollY = window.scrollY;

        const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="moving-section">
      <h2 className="section-title">Heading of The Images</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * -700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "linear" }}
      >
        <img src={Image1} alt="Image 1" className="image" />
        <img src={Image2} alt="Image 2" className="image" />
        <img src={Image3} alt="Image 3" className="image" />
      </motion.div>

      <p className="end-message">Ending Message........</p>
    </div>
  );
}

function MovingContainer2() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollY = window.scrollY;

        const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="moving-section">
      <h2 className="section-title">Heading of The Images</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * 700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "linear" }}
      >
        <img src={Image4} alt="Image 4" className="image" />
        <img src={Image5} alt="Image 5" className="image" />
        <img src={Image6} alt="Image 6" className="image" />
      </motion.div>

      <p className="end-message">Ending Message........</p>
    </div>
  );
}

function MovingContainer3() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollY = window.scrollY;

        const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="moving-section">
      <h2 className="section-title">Heading of The Images</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * -700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "easeOut" }}
      >
        <img src={Image7} alt="Image 7" className="image" />
        <img src={Image8} alt="Image 8" className="image" />
        <img src={Image9} alt="Image 9" className="image" />
      </motion.div>

      <p className="end-message">Ending Message........</p>
    </div>
  );
}

function MovingContainer4() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollY = window.scrollY;

        const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="moving-section">
      <h2 className="section-title">Heading of The Images</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * 2550, // Moves left within section
          y: -scrollProgress * 100, // Moves up within section
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <img src={Image10} alt="Image 10" className="image4" />
        <img src={Image11} alt="Image 11" className="image4" />
      </motion.div>

      <p className="end-message">Ending Message........</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Vanta Globe Banner */}
      <VantaGlobe />

      {/* About Us Section */}
      <AboutUs />

      {/* Snake Dotted Line */}
      <SnakeDottedLine />

      {/* Spacer */}
      <div style={{ height: '50vh' }}></div>

      {/* Dolphin Section */}
      <DolphinSection />

<MovingContainer1 />
<MovingContainer2 />
<MovingContainer3 />
<MovingContainer4 />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
