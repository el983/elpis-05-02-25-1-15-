import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';
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
import Image12 from './images/16.png';
import Image13 from './images/17.png';
import Image14 from './images/propritory_cource.png';



const images = [
  { title: 'Corporate Training', sources: [Image1, Image2] },
  { title: 'Leadership Program', sources: [Image3, Image4, Image5] },
  { title: 'Training Program for Executives', sources: [Image6, Image7, Image8] },
  { 
    title: 'Student Training (HEI)', 
    subcategories: [
      { subtitle: 'Personality Development Program (PDP)', sources: [Image9] },
      { subtitle: 'Skill Training', sources: [Image10] },
      { subtitle: 'Placement Training', sources: [Image11] },
      { subtitle: 'Effective Communication Skills', sources: [Image12] },
      { subtitle: 'Technical training', sources: [Image13,Image14] }
    ]
  }
];

const AnimatedImage = ({ src, alt, className }) => {
    const ref = useRef(null);
    // Exclude top and bottom 15% of the viewport from triggering the animation.
    const inView = useInView(ref, { once: false, margin: '-25% 0% -25% 0%' });
    
    return (
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        className={className}
        // When in view, the image animates to the center.
        // When out of view, it animates off-screen to the left.
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        // The initial state is off-screen to the right.
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: .7, ease: 'easeInOut' }}
      />
    );
  };
  
  export default function Services() {
    return (
      <div className="services-container">
        <h1 className='section-main-title'>Our Speciality</h1>
        {images.map((section, index) => (
          <div key={index} className="section">
            <h1 className="section-title">{section.title}</h1>
            {section.sources && section.sources.map((src, i) => (
              <AnimatedImage key={i} src={src} alt={src} className="image" />
            ))}
            {section.subcategories && section.subcategories.map((sub, i) => (
              <div key={i} className="subcategory">
                <h2 className="subcategory-title">{sub.subtitle}</h2>
                {sub.sources.map((src, j) => (
                  <AnimatedImage key={j} src={src} alt={src} className="image" />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }