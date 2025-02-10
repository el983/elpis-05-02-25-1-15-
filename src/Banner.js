import React from "react";
import "./Banner.css";

const Banner = () => {

    const scrollToFooter = () => {
        const footer = document.getElementById('footer'); // Ensure your footer has this ID
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the footer
        }
      };

    return (
        <section>
        <section className="nav">
        <div className="oval-buttons-container">
            {/* Add onClick handler to the Contact button */}
            <button className="oval-button" onClick={scrollToFooter}>
                Contact
            </button>
            <button className="oval-button">Video</button>
        </div>
    </section>
        <section id="Banner" className="main-banner">
                <h1 className="title">Elpis</h1>
                <p className="subtitle">
                    "Training is not an expense, but an investment in human capital."
                </p>
            <div className="gif-container">
                <img src="/Puzzle Puzzling Sticker.gif" alt="Jigsaw Puzzle" className="puzzle-gif" />
            </div>
            <div className="text-content">
                <h2>Training Programs Are Like Jigsaw Puzzles</h2>
                <p>
                    You meticulously create, design & develop a training program, <br />
                    Once Delivered, <br />
                    Need to start all over again. <br />
                    Because, we believe every learner is different, <br />
                    And needs a different approach.
                </p>
            </div>

        </section>
        </section>
    );
};

export default Banner;
