import React, { useEffect, useRef } from "react";
import "./Banner.css";

const Banner = () => {

    const scrollToFooter = () => {
        const footer = document.getElementById('contact-page');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.3 } // Adjust the threshold as needed
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section>
            <section className="nav">
                <div className="oval-buttons-container">
                    <button className="oval-button" onClick={scrollToFooter}>
                        Contact
                    </button>
                    <a href="/video.html"><button className="oval-button">Take a Peek</button></a>
                </div>
            </section>
            <section id="Banner" className="main-banner">
                <h1 className="title">Elpis</h1>
                <p className="subtitle">
                    "Training is not an expense, but an investment in human capital."
                </p>
                <div className="gif-container">
                    <img src="/puzzel.png" alt="Jigsaw Puzzle" className="puzzle-gif" />
                </div>
                {/* Add ref to text-content */}
                <div className="text-content" ref={textRef}>
                    <h2>Training Programs Are Like Jigsaw Puzzles</h2>
                    <p>
                        You meticulously create, design & develop a training program. <br />
                        Once delivered, need to start all over again. <br />
                        Because, we believe every learner is different, and needs different approach.<br/>
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Banner;
