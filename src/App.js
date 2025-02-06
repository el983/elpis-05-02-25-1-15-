import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import VantaGlobe from './VantaGlobe';
import SnakeDottedLine from './SnakeDottedLine';
import DolphinSection from './DolphinSection';
import Footer from './components/Footer';
import Services from './Services';
import './App.css';

// Import team profile images
import Profile1 from './images/p1.jpeg';
import Profile2 from './images/p2.jpeg';
import Profile3 from './images/p3.jpeg';
import Profile4 from './images/p4.jpeg';
import Profile5 from './images/p5.jpeg';
import Profile6 from './images/p6.jpeg';
import Profile7 from './images/p7.jpeg';
import Profile8 from './images/p8.jpeg';
import Profile9 from './images/p9.jpeg';
import Profile10 from './images/p10.jpeg';

//elpis banner 
import el_banner from './images/elpis_banner.png'

import Bookicon from './images/book-icon.png'
// import Visionup from './images/vision_up.png';

// function Who() {
//   return (
//     <div class="about-us-section">
//       <div class="who-are">
//         <h1>WHO</h1>
//         <h1>ARE</h1>
//       </div>
//       <div class="description">
//         <p>
//           <strong>WE ARE</strong> A UNIQUE CONSORTIUM OF GLOBAL PROVIDERS OF PROFESSIONAL DEVELOPMENT PROGRAMS DESIGNED TO AUGMENT THE SKILLS OF PROFESSIONALS AND TO HELP ORGANIZATIONS ACHIEVE THEIR BUSINESS GOALS. OUR OFFERINGS INCLUDE TRAINING, COACHING, AND CONSULTING. IN SHORT, EVERYTHING REQUIRED TO HANDHOLD OUR CUSTOMERS FROM BEGINNING TO END OF THEIR KNOWLEDGE-SEEKING JOURNEY.
//         </p>
//       </div>
//     </div>
//   );
// }

// function Vision() {
//   return (
//     <div class="vision-section">
//       <div class="description">
//         <p>
//         OUR VISION IS TO BE THE PREFERRED TRAINING SERVICES PROVIDER ACROSS THE GLOBE.  
// OUR PROMISE IS TO PROVIDE VALUE-BASED TRAINING, COACHING, AND CONSULTING SOLUTIONS TO PROFESSIONALS AND ORGANIZATIONS, AND ENSURE WE EXCEED THEIR SATISFACTION.

//         </p>
//       </div>
//       <div class="vision">
//         <h1>VISION</h1>
//       </div>
//     </div>
//   );
// }

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
      </div>
      <div className="profiles">
      <div className="profile">
          <img src={Profile7} alt="Profile 7" />
          <h3>Avik Roy</h3>
          <p>Fashion & Design Studies</p>
        </div>
        <div className="profile">
          <img src={Profile8} alt="Profile 8" />
          <h3>Rhea Fernandes</h3>
          <p> Digital Marketing & Communications</p>
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

function App() {
  return (
    <div className="App">
      {/* Vanta Globe Banner */}
      <VantaGlobe />

      {/* who we Section */}
      <br></br>
      <br></br>
      <br></br>
      <div ><img style={{
        alignItems:'center',
        width:'90%',
        height:'10%',
        zIndex:'900',
        position:'relative'
      }}  src={el_banner}/></div>
  
      <br></br>
      <h2 style={{ fontSize : '70px',color:'#0c0049'}}>Vision</h2>
      <p style={{ fontSize : '25px',color:'#0c0049'}}> Our vision is to be the preferred training services provider across the globe.
        Our promise is to provide value-based training, coaching, and consulting
        solutions to professionals and organizations, and ensure we exceed their satisfaction.</p>
        <br></br>
      <h2 style={{ fontSize : '70px',color:'#0c0049'}}>Who We Are?</h2>
      <p style={{ fontSize : '25px',color:'#0c0049'}}> We are a unique consortium of global providers of professional development programs designed to augment the skills of professionals and to help organizations achieve their business goals. Our offerings include training, coaching, and consulting. In short, everything required to handhold our customers from beginning to end of their knowledge-seeking journey.</p>
      {/* <Vision />
      <Who /> */}

      {/* About Us Section */}
      <AboutUs />

      <div class="container">
        <h1 style={{ fontSize : '70px',color:'#0c0049'}}>Our Services</h1>
        <ul class="services-list">
          <li>Coaching & Consulting</li>
          <li>Turnkey Educational Projects</li>
          <li>Finishing School Projects</li>
          <li>Vocational Training Partners</li>
          <li>International Student Admissions</li>
          <li>Colleges & University Admissions Across the Globe</li>
          <li>IELTS Preparation</li>
          <li>GRE Preparation</li>
          <li>GMAT Preparation</li>
          <li>GATE Preparation</li>
        </ul>

        
      </div>

      {/* Snake Dotted Line */}
      <SnakeDottedLine />

      {/* Spacer */}
      <div style={{ height: '50vh' }}></div>

      {/* Dolphin Section */}
      <DolphinSection />
      <Services />

      <div className="download" style={{
          marginTop : '150px', marginBottom : '150px', color:'rgb(0, 0, 108)'
        }}>
        <h2>Value Added Courses</h2>
        
        <a href="/Value_Added_Courses.pdf" download>
          <img src={Bookicon} alt="Download Brochure" width="120" height="auto"></img>          
        </a>
      </div>
      <div> 
      <section id="mission" style={{
          marginTop : '150px', marginBottom : '150px', color:'rgb(0, 0, 108)'
        }}>          
          <h3 style={{fontFamily: ' "Arial", sans-serif', fontSize: '2.4 rem',
          fontWeight: '200',}}>Are you ready to open the doors? A new level of Empowerment</h3>
         
          <blockquote style={{fontFamily: '"Brush Script MT", cursive, "Arial", sans-serif', fontSize: '2.4rem',
          fontWeight: '200',}}>“Training is a catalyst that can transform lives, companies, and even nations.”</blockquote>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;