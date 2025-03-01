import React from "react";
import "./DolphinSection.css";

const DolphinSection = () => {
  return (
    <section className="dolphin-section">
      <div className="dolphin-gif-container">
      <div class="video-container">
      <video width="90%" height="100%" autoPlay loop muted playsInline>
        <source 
            src="/Recording 2025-02-28 225938.webm" 
            type='video/mp4; codecs="hvc1"'/>
        <source 
            src="/Recording 2025-02-28 225938.webm" 
            type="video/webm"/>
      </video>
      </div>
        <div className="dolphin-text-overlay">
          <p className="dolphin-overlay-heading">Core Values:</p>
          <ul className="dolphin-overlay-list">
            <li><b>Excellence:</b> Elpis strives for the highest standards in educational guidance and support.</li>
            <li><b>Trust:</b> Elpis builds lasting relationships through honesty and reliability.</li>
            <li><b>Integrity:</b> We uphold ethical practices and transparency in all our services.</li>
            <li><b>Leadership:</b> Elpis inspires innovation and drives positive change in education.</li>
            <li><b>Accountability:</b> We take full responsibility for delivering quality outcomes.</li>
            <li><b>Passion:</b> Elpis is dedicated to empowering students and educators with knowledge.</li>
            <li><b>Collaboration:</b> We foster strong partnerships to create impactful learning experiences.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DolphinSection;
