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
import Image9 from './images/13 (1).png';
import Image10 from './images/14.png';
import Image11 from './images/15.png';
import Image12 from './images/16.jpg';

// Import team profile images
import Profile1 from './images/p1.png';
import Profile2 from './images/p2.jpg';
import Profile3 from './images/p3.png';
import Profile4 from './images/p4.jpg';
import Profile5 from './images/p5.png';
import Profile6 from './images/p6.png';
import Profile7 from './images/p7.jpg';
import Profile8 from './images/p8.jpg';
import Profile9 from './images/p9.jpg';
import Profile10 from './images/p10.jpg';

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>

      {/* Founder Section */}
      <h3>Founder :</h3>
      <div style={{ height: "5vh" }}></div>
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
      <div style={{ height: "10vh" }}></div>
      {/* Mentors & Advisors Section */}
      <h3>Mentors & Advisors :</h3>
      <div style={{ height: "5vh" }}></div>
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
        <div className="profile">
          <img src={Profile7} alt="Profile 7" />
          <h3>Avik Roy</h3>
          <p>Fashion & Design Studies</p>
        </div>
        <div className="profile">
          <img src={Profile8} alt="Profile 8" />
          <h3>Rhea Fernandes</h3>
          <p>Digital Marketing & Communications</p>
        </div>
        <div className="profile">
          <img src={Profile9} alt="Profile 9" />
          <h3>Pritha Mohinta</h3>
          <p>Communication & Finance</p>
        </div>
        <div className="profile">
          <img src={Profile10} alt="Profile 10" />
          <h3>Manuel Fernandes</h3>
          <p>HR Advisor and Mentor</p>
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
      <h2 className="section-title">Corporate Training</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * -700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "linear" }}
      >
        <img src={Image1} alt="Image 1" className="image4" />
        <img src={Image2} alt="Image 2" className="image4" />

      </motion.div>


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
      <h2 className="section-title">Leadership Program</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * 700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "linear" }}
      >
        <img src={Image3} alt="Image 3" className="image" />
        <img src={Image4} alt="Image 4" className="image" />
        <img src={Image5} alt="Image 5" className="image" />

      </motion.div>


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
      <h2 className="section-title">Training Program For Executives</h2>
      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * -700, // Moves left within section
          y: -scrollProgress * 800, // Moves up within section
        }}
        transition={{ type: "tween", ease: "easeOut" }}
      >
        <img src={Image6} alt="Image 6" className="image" />
        <img src={Image7} alt="Image 7" className="image" />
        <img src={Image8} alt="Image 8" className="image" />

      </motion.div>


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
    <div ref={sectionRef} className="moving-section2">
      <h2 className="section-title">Student Training (HEI)</h2>

      <div style={{ height: "10vh" }}></div>
      <motion.div
        className="moving-container"
        animate={{
          x: -scrollProgress * 450, // Moves left within section
          y: -scrollProgress * 900, // Moves up within section
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div><h3 className="section-title">PDP</h3>
          <img src={Image9} alt="Image 9" className="image4" /></div>

        <div><h3 className="section-title">Skill Training</h3>
          <img src={Image10} alt="Image 10" className="image4" /></div>
        <br></br>
        <div><h3 className="section-title">Placement Training</h3>
          <img src={Image11} alt="Image 11" className="image4" /></div>
        <div><h3 className="section-title">Effective Communication Skills</h3>
          <img src={Image12} alt="Image 12" className="image4" /></div>

      </motion.div>
      <div className="download">
      <h2 className="section-title">Value Added Courses</h2>
      <a href="/Value_Added_Courses.pdf" download>
        <button className="oval-button">
          Click to Download Brochure
          <span className="stars"></span>
          <span className="stars"></span>
          <span className="stars"></span>
        </button>
      </a>
    </div>
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
      <div style={{ height: "30vh" }}></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;