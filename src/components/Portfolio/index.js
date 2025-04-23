import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Work from "./Portfolio_Component";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showJourney, setShowJourney] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  const handleJourneyClick = () => {
    setShowJourney(true);
  };

  const handleJourneyClose = () => {
    setShowJourney(false);
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        {!showJourney && (
          <>
            {/* <div className="work-btn-component">
              <button className="work-btn" onClick={handleJourneyClick}>Show Work</button>
            </div> */}
            <Work></Work>
          </>
        )}
        {/* {showJourney && (
          <>
            <div className="grid">
              {portfolioData.map((project) => (
                <div className="grid-item" key={project.id}>
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="overlay">
                    <div className="project-description">{project.description}</div>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                  </div>
                </div>
              ))}

            </div>
            <button className="back-btn" onClick={handleJourneyClose}>Back</button>
          </>
        )} */}

      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;
