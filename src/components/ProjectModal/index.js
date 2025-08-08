import React, { useState, useEffect } from 'react';
import './index.scss';
import Astro2Sphere from "../../assets/images/Astro2Sphere.png";
import FleetManagement from "../../assets/images/fleetManagement.png";
import winkbuy from "../../assets/images/winkbuy.png";
import wattsCreates from "../../assets/images/wattsCreates.png";

const ProjectModal = ({ showModal, setShowModal }) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [showSwipeHint, setShowSwipeHint] = useState(true);

    const projects = [
        {
            id: 1,
            title: "Astro2Sphere",
            image: Astro2Sphere,
            url: "https://www.astro2sphere.com/",
            buttonText: "Astro2Sphere.com"
        },
        {
            id: 2,
            title: "Fleet Management System",
            image: FleetManagement,
            url: "https://frontend-nwmsu-fleet-management.vercel.app/",
            buttonText: "Fleet Management"
        },
        {
            id: 3,
            title: "winkbuy.com",
            image: winkbuy,
            url: "https://winkbuy.com/",
            buttonText: "winkbuy.com"
        },
        {
            id: 4,
            title: "WattsCreatesLearning",
            image: wattsCreates,
            url: "https://wattscreates.com/",
            buttonText: "WattsCreates.com"
        }
    ];

    // Auto-rotate carousel every 10 seconds
    useEffect(() => {
        if (showModal) {
            const interval = setInterval(() => {
                setCurrentProject((prev) => (prev + 1) % projects.length);
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [showModal, projects.length]);

    // Hide swipe hint after 5 seconds or user interaction
    useEffect(() => {
        if (showModal && showSwipeHint) {
            const timer = setTimeout(() => {
                setShowSwipeHint(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showModal, showSwipeHint]);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setShowSwipeHint(false); // Hide hint on first touch
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextProject();
        } else if (isRightSwipe) {
            prevProject();
        }
    };

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToProject = (index) => {
        setCurrentProject(index);
        setShowSwipeHint(false);
    };

    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="glass-modal">
                <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
                
                <div 
                    className="carousel-container"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <button className="carousel-btn prev-btn" onClick={prevProject}>❮</button>
                    
                    <div className="carousel-content">
                        <img 
                            src={projects[currentProject].image} 
                            alt={projects[currentProject].title} 
                            className="modal-img" 
                        />
                        <h2 style={{ color: "white", fontFamily: "Great-vibes", fontSize: "20px" }}>
                            🚀 Check out my recent projects
                        </h2>
                        
                        {/* Swipe Hint Animation for Mobile */}
                        {showSwipeHint && (
                            <div className="swipe-hint">
                                <div className="hand-gesture">
                                    <span className="hand-icon">👆</span>
                                    <span className="swipe-text">Swipe left or right</span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <button className="carousel-btn next-btn" onClick={nextProject}>❯</button>
                </div>

                {/* Carousel indicators */}
                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentProject ? 'active' : ''}`}
                            onClick={() => goToProject(index)}
                        />
                    ))}
                </div>

                {/* Dynamic project link */}
                <div className="modal-buttons">
                    <a
                        href={projects[currentProject].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link primary"
                        style={{ fontFamily: "Great-vibes", fontSize: "18px" }}
                    >
                        {projects[currentProject].buttonText}
                    </a>
                    <a
                        href="#/portfolio"
                        className="modal-link secondary"
                        onClick={() => setShowModal(false)}
                        style={{ fontFamily: "Great-vibes", fontSize: "18px" }}
                    >
                        Take me to Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
