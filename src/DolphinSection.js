// src/components/DolphinSection.js
import React from "react";
import "./DolphinSection.css"; // Import the CSS file

const DolphinSection = () => {
  return (
    <section className="dolphin-section">
      <div className="dolphin-gif-container">
        <img 
          src="/dolphin.gif" 
          alt="Dolphin swimming" 
          className="dolphin-gif"
        />
        <div className="dolphin-text-overlay">
          <p className="dolphin-overlay-heading">Core Values:</p>
          <ul type="none" className="dolphin-overlay-list">
            <li>Excellence</li>
            <li>Trust</li>
            <li>Collaboration</li>
            <li>Integrity</li>
            <li>Leadership</li>
            <li>Accountability</li>
            <li>Passion</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DolphinSection;
