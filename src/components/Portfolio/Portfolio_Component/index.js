import { useState } from "react";
import React from "react";
// import resume from "../../../assets/docs/ResumeAyush.pdf"
import ResumeAyushKanaujia from '../../../assets/docs/AyushKanaujia_Résumé.pdf'

import './index.scss'
import gameImg from "../../../assets/images/game.jpeg"
import qrCode from "../../../assets/images/qrcode.jpeg"
import todo from "../../../assets/images/todo.jpeg"
import watch from "../../../assets/images/watch.jpeg"
import simpleInterest from "../../../assets/images/simpleInterest.jpeg"
import data from "../../../assets/images/data.jpeg"
import jobPeer from "../../../assets/images/job-peer.png"
import winkbuy from "../../../assets/images/winkbuy.png"
import wattsCreates from "../../../assets/images/wattsCreates.png"
import FleetManagement from "../../../assets/images/fleetManagement.png"

const Work = () => {
    const [skills, setSkills] = useState(false)
    const [experience, setExperience] = useState(false)
    const [projects, setProjects] = useState(false)
    const [achievement, setAchievement] = useState(false)
    const [work, setWork] = useState(false)
    const [showResume, setShowResume] = useState(true);
    const [hover, setHover] = useState(false)

    const handleSkills = () => {
        setSkills(true);
        setExperience(false);
        setProjects(false);
        setWork(false);
        setAchievement(false);
        setShowResume(false);
    };

    const handleExperience = () => {
        setSkills(false);
        setExperience(true);
        setProjects(false);
        setWork(false);
        setAchievement(false);
        setShowResume(false);
    };

    const handleProjects = () => {
        setSkills(false);
        setExperience(false);
        setProjects(true);
        setWork(false);
        setAchievement(false);
        setShowResume(false);
    };

    const handleWork = () => {
        setSkills(false);
        setExperience(false);
        setProjects(false);
        setAchievement(false);
        setWork(true)
        setShowResume(false);
    };

    const portfolioData = [

        {
            id: 1,
            title: "Fleet Management System",
            description: "A secure full-stack fleet management platform built for Northwest Missouri State University (Client) to manage vehicles, refueling, and maintenance. Features include role based authentication, vehicle profiles, digital receipt management, user activity tracking, and annual report generation. Please check it out.",
            imageUrl: FleetManagement,
            projectUrl: "https://frontend-nwmsu-fleet-management.vercel.app/"
        },
        {
            id: 2,
            title: "winkbuy.com",
            description: "Winkbuy.com is a user friendly full stack affiliate marketing platform which have admin and user webapp. It is developed using React.js, Node, Express.js, MySQL, AWS S3, AWS EC2 and AWS RDS. Check it out.",
            imageUrl: winkbuy,
            projectUrl: "https://winkbuy.com/"
        },
        {
            id: 3,
            title: "WattsCreatesLearning",
            description: "Watts Creates Learning is a solely frontent application developed for a small business of Mrs. Fallon Watts. Did this work as a freelancer and used React.js, Node and Express.js for the development. Used React.js for frontend and used Node and Express.js for developing SMTP server. For Hosting purposing used AWS EC2 Instance and S3 Bucket.Check it out.",
            imageUrl: wattsCreates,
            projectUrl: "https://wattscreates.com/"
        },
        {
            id: 4,
            title: "Job-Peer.com",
            description: "Developed Job-Peer.com as an application tracker which helped students and professionals to save there job applications and track them for later success in job appling experience with touch of social media where user can follow there peer to check there numbers of applications they applied in different timeframes. Tech Stack: Node.JS, Express.Js, React.JS, JWT, Password hasing, MySQL, Node Corns, Firebase authentication. Check it out.",
            imageUrl: jobPeer,
            projectUrl: "https://www.job-peer.com/login"
        },
        {
            id: 5,
            title: "Todo List",
            description: "Built todo list web application by using React.js and Particle.js",
            imageUrl: todo,
            projectUrl: "https://ayush1014.github.io/TodoList/"
        },
        {
            id: 6,
            title: "Qr-code-maker",
            description: "Developed customizable QR Code generator using Flask python framework",
            imageUrl: qrCode,
            projectUrl: "https://ayushkanaujia.pythonanywhere.com/"
        },
        {
            id: 7,
            title: "Stopwatch",
            description: "Built stopwatch using React.Js",
            imageUrl: watch,
            projectUrl: "https://ayush1014.github.io/Stopwatch-using-react/"
        },
        {
            id: 8,
            title: "RPG Game",
            description: "Developed RPG game using Godot Engine, built by GDScript, C# and C++",
            imageUrl: gameImg,
            projectUrl: "https://44351-w22.github.io/creative-game-quad-nations-studio-1/"
        },
        {
            id: 9,
            title: "Simple Interest Calculator",
            description: "Simple interest calculator built by using Html, Css and JS for calculating simple interest by years",
            imageUrl: simpleInterest,
            projectUrl: "https://ayush1014.github.io/Simple-Interest-Calculator/"
        },
        {
            id: 10,
            title: "HR Data Analysis Dashboard",
            description: "Analyzed HR Data by designing dynamic HR Dashboard in Tableau Desktop also created streamline data pipeline for better optimization",
            imageUrl: data,
            projectUrl: "https://public.tableau.com/app/profile/ayush.kanaujia/viz/HR_Analysis_17046017914930/HRANALYSTICSDASHBOARD"
        },
    ];

    const handleAchievement = () => {
        setSkills(false);
        setExperience(false);
        setProjects(false);
        setWork(false);
        setAchievement(true);
        setShowResume(false);
    };

    const handleBack = () => {
        setSkills(false);
        setExperience(false);
        setProjects(false);
        setAchievement(false);
        setWork(false);
        setShowResume(true);
    }

    const handleWorkBack = () => {
        setSkills(false);
        setExperience(false);
        setProjects(true);
        setAchievement(false);
        setWork(false)
        setShowResume(false);
    }

    return (
        <div>
            <div className="top-btn">
                <button className={`skill-btn ${skills ? 'active-btn' : ''}`} onClick={handleSkills}>Skills</button>
                <button className={`experience-btn ${experience ? 'active-btn' : ''}`} onClick={handleExperience}>Experiences</button>
                <button className={`projects-btn ${projects ? 'active-btn' : ''}`} onClick={handleProjects}>Projects</button>
                <button className={`achievement-btn ${achievement ? 'active-btn' : ''}`} onClick={handleAchievement}>Achievements & Leadership</button>
            </div>
            {showResume && (
                //Resume Component 
                <div className="resume">
                    <h3 style={{ 'fontSize': '200%', 'backgroundColor': '#FFA4B2', 'padding': '4px', 'borderRadius': '1px' }}>My Professional Resume</h3>
                    {/* Download Button */}
                    <a href={ResumeAyushKanaujia} download="KanaujiaAyush_Résumé.pdf" className="download-btn">DOWNLOAD RESUME</a>
                    <p>Scroll inside to view more</p>
                    <iframe src={`${ResumeAyushKanaujia}#toolbar=0&#view=Fit`} width="20%" height="100%" />
                </div>
            )}
            <div>
                {skills && <div className="skill-container">
                    <ul>
                        <li>
                            <span>Languages: </span> Python, JavaScript, HTML5, CSS3, SQL, Java, C, C++, Typescript
                        </li>
                        <li>
                            <span>Frameworks: </span> React.JS, Vue.JS, Express.JS, Angular.JS, Node.JS, Flask, Django
                        </li>
                        <li>
                            <span>Databases:</span> MySQL, MongoDB, PostgreSQL, T-SQL
                        </li>
                        <li>
                            <span>UI/UX:</span> Tailwind, Figma, Canva, Wordpress, Wix
                        </li>
                        <li>
                            <span>Cloud Tech:</span> Amazon Web Services (AWS), Google Cloud Platform(GCP)
                        </li>
                        <li>
                            <span>Tools:</span> Visual Studio Code, Jupyter Lab, MySql Workbench, MongoDB, Postman, Azure Data Studio, Docker, Github, Tableau, PowerBI
                        </li>
                        <li>
                            <span>Software Development Lifecycles: </span> Agile, Scrum, Waterfall
                        </li>

                    </ul>
                    <button className="back-btn" onClick={handleBack}>BACK TO RESUME</button>
                </div>}
                {experience && <div className="experience-container">
                    <ol>
                        <li>
                            <span> Graduate Teaching Assistant </span> <br /><span className="dates-span">August 2024 – Present</span><br /><span className="company-span">Northwest Missouri State University, Maryville, MO</span>
                            <ul>
                                <li>
                                    Instructed 200 students in Excel, Access, HTML, CSS, and JavaScript, enhancing practical skills with weekly help sessions.

                                </li>
                                <li>
                                    Created and graded over 400 weekly assignments, enriching academic content and student assessments.
                                </li>
                                <li>
                                    Streamlined student data management and admissions, maintaining more than 500 academic records for faculty support.


                                </li>
                                <li>
                                    Facilitated eﬃcient administrative operations, ensuring compliance with educational standards and process coordination
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span> Software Developer </span> <br /><span className="dates-span">June 2024 – September 2024</span><br /><span className="company-span">Watts Creates Learning, Omaha, NE</span>
                            <ul>
                                <li>
                                    Constructed a 5 page business website using React.js, enhancing brand visibility and UI with transitions and SEO integration.

                                </li>
                                <li>
                                    Implemented a custom SMTP service with Node.js and Express.js, optimizing email functionalities with SQL DBMS.
                                </li>
                                <li>
                                    Conducted Agile 3-4 stand-up meetings a week to align project goals with client needs, ensuring on-time delivery.

                                </li>
                                {/* <li>
                                    Spearheaded the integration of AI for resume building and initiated a content-sharing extension, driving innovation and
                                    community growth.
                                </li> */}
                            </ul>
                        </li>

                        <li>
                            <span>Full-Stack Developer</span> <br /><span className="dates-span">June 2023 –- June 2024</span><br /><span className="company-span">SPG America, Piscataway, NJ</span>
                            <ul>
                                <li>
                                    Developed web applications using React.js, Node.js, Express.js, Angular, and SQL; enhanced integration with AWS and Firebase.

                                </li>
                                <li>
                                    Designed RESTful APIs and responsive web designs, recognized by clients for timely and eﬀective delivery.

                                </li>
                                <li>
                                    Managed 2 development teams, improving project outcomes through eﬀective leadership and technical guidance.

                                </li>
                                {/* <li>
                                    Spearheaded the integration of AI for resume building and initiated a content-sharing extension, driving innovation and
                                    community growth.
                                </li> */}
                            </ul>
                        </li>
                        <li>
                            <span>Freelance Full-Stack Web Developer</span> <br /><span className="dates-span">May 2023 –- June 2023</span><br /><span className="company-span">DrinkEz, New York, Ny</span>
                            <ul>
                                <li>
                                    Crafted DrinkEZ’s web app using React, Node.js, and Express; enabled dynamic updates via WebSockets.
                                </li>
                                <li>
                                    Implemented robust auth protocols with JWT, bcrypt, Firebase, and managed AWS cloud infrastructure.
                                </li>
                                <li>
                                    Designed a streamlined UI for efficient drink ordering using Tailwind CSS and Material UI.
                                </li>
                                <li>
                                    Employed Redux for state management, enhancing app performance and user transaction flow.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span>Software Developer</span> <br /><span className="dates-span">August 2021 -- May 2023</span><br /><span className="company-span">Northwest Missouri State University, Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Implemented scheduling application API using Node.js and Express.js to optimize online education platform.
                                </li>
                                <li>
                                    Built event tracking system by using React and Redux, result in achieving 60% increase in accountability and a 50% boost in
                                    student-faculty engagement in first month.
                                </li>
                                <li>
                                    Optimized MySQL database queries, reducing page load times by 15% and enhancing overall application performance
                                </li>
                                <li>
                                    Expertly crafted and maintained robust, scalable backend APIs using Node.js and Express.js, incorporating sophisticated canvas Rest APIs. Skillfully executed intricate scripts for database schema migrations, ensuring seamless data flow and integrity.
                                </li>
                                <li>
                                    Diligently conducted thorough bug resolution and debugging activities, employing a methodical approach to problem-solving.
                                </li>
                            </ul>
                        </li>

                        {/* <li>
                            <span>Data Analyst</span> <br /><span className="dates-span">May 2019 -- May 2021</span><br /><span className="company-span">Northwest Missouri State University Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Spearheaded the full-cycle Software Development Life Cycle (SDLC) within an Agile framework, focusing on the strategic implementation of Tableau to drive operational efficiency. Orchestrated the end-to-end process of requirement gathering, solution design, development, testing, and deployment, resulting in enhanced data visualization capabilities and decision-making processes.
                                    Advanced Data Analytics & Reporting:
                                </li>
                                <li>
                                    Delivered critical business insights through adept use of Tableau, Power BI, and advanced SQL querying. Played a pivotal role in optimizing the university's database for student record tracking, transforming raw data into actionable intelligence that informed key administrative decisions.
                                    Data Integration & ETL Process Management:
                                </li>
                                <li>
                                    Successfully integrated Tableau with diverse data sources including Google Cloud Platform (GCP) BigQuery, MySQL Workbench, MS Excel, and AWS Redshift, showcasing versatility and technical proficiency. Managed complex ETL (Extract, Transform, Load) processes, ensuring seamless data aggregation, transformation, and loading for accurate and timely analytics.
                                    Python Programming for Data Modeling:
                                </li>
                                <li>
                                    Utilized Python for sophisticated data modeling and manipulation tasks, demonstrating expertise in leveraging libraries such as Pandas for data analysis. Skillfully employed MySQL for robust data storage solutions, optimizing data structures and schemas in alignment with project requirements in an Agile team setting.
                                </li>
                            </ul>
                        </li> */}

                        <li>
                            <span>Research Assistant</span> <br /><span className="dates-span">August 2022 -- May 2023</span><br /><span className="company-span">Northwest Missouri State University, Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Led a university research project developing a GPS and QR code-based IOT parking app, showcased at CCSC 2023.

                                </li>
                                <li>
                                    Enhanced parking efficiency for 80% of commuter students by implementing Dijkstra’s Algorithm.

                                </li>
                                <li>
                                    Engineered Web Application using React.JS, integrating real-time geolocation for optimal parking solutions.

                                </li>
                                <li>
                                    Implemented QR code scanning system for seamless parking registration, managed via MySQL Workbench
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Junior Frontend Developer</span> <br /><span className="dates-span">May 2021 -- August 2021</span><br /><span className="company-span">ASDS Technologies, New Delhi, India</span>
                            <ul>
                                <li>
                                    Developed and refined UX/UI components for customer-facing applications, enhancing scalability and user experience.


                                </li>
                                <li>
                                    Collaborated with product managers and customers to define and expand software capabilities.


                                </li>
                                <li>
                                    Conducted code reviews, unit testing, and implemented continuous integration to uphold code quality standards.

                                </li>
                                <li>
                                    Managed technical debt reduction and internal efficiency improvements, ensuring sustainable software development practices.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span>Career Ambassador</span> <br /><span className="dates-span">August 2020 -- May 2022</span><br /><span className="company-span">Northwest Missouri State University, Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Actively assist 8-10 students daily with the development of professional resumes and cover letters, enhancing their job
                                    application skills and confidence.


                                </li>
                                <li>
                                    Skillfully manage job postings on various social media platforms using the ’Hire a Bearcat’ portal, effectively connecting students
                                    with potential career opportunities.


                                </li>
                                <li>
                                    Conduct approximately 4-5 engaging and informative tours daily for prospective students and parents, showcasing the university
                                    and career services’ offerings.

                                </li>
                                <li>
                                    Lead the organization of key campus events for Career Services including Career Day, Mock Interview Day, and Speed Networking
                                    events, fostering valuable connections and practical experience for students.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <button className="back-btn" onClick={handleBack}>BACK TO RESUME</button>
                </div>}
                {work && <div className="projects-container">
                    <div className="projects-desc">
                        <div className="top-btn" style={{ width: '200vw' }}>
                            <button
                                className={`work-btn ${work ? 'active-btn' : ''}`}
                                onClick={handleWorkBack}
                                style={{ color: hover ? "white" : "rgb(252,21,37)" }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Back to projects
                            </button>
                        </div>
                        <ol>
                            <li>
                                <span>
                                    SOCIAL MEDIA APPLICATION (TRENDING_HASH)</span> <br /><span className="dates-span">August 2023 -- Jan 2024</span> <br /> <span className="company-span">Full Stack Project</span>
                                <ul>
                                    <li>
                                        Complex Application Architecture: Spearheaded the engineering of a robust full-stack social media platform leveraging React.js for dynamic front-end interactions and Node.js for efficient server-side processing, seamlessly integrated with a MySQL database for data persistence.
                                    </li>
                                    <li>
                                        Advanced Authentication & Interactive Features: Implemented state-of-the-art JWT (JSON Web Tokens) authentication to secure user sessions, coupled with a sophisticated follow-unfollow system to mimic real-world social media dynamics. Pioneered an interactive media management module, facilitating users to upload, modify, and manage a variety of media formats.
                                    </li>
                                    <li>
                                        Innovative User Interface Design: Designed and implemented a cutting-edge infinite scroll functionality with integrated pagination, enhancing user engagement and content accessibility. Incorporated private route security, fortifying the application against unauthorized access and ensuring a secure user experience.
                                    </li>
                                    <li>
                                        Trending Hashtag Algorithm: Conceptualized and developed a bespoke algorithm for identifying and promoting trending hashtags, significantly boosting user engagement and content discoverability. This system dynamically analyzed user-generated content to surface popular trends, contributing to a more engaging platform experience.
                                    </li>
                                    <li>
                                        Efficient Content Lifecycle Management: Orchestrated a comprehensive content management suite, optimizing the post creation and editing process. Implemented efficient multimedia storage solutions, handling the complexities of large-scale data storage and retrieval, thereby ensuring a seamless user experience in content browsing and interaction.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <span>UBER DATA ANALYSIS AND ENGINEERING</span> <br /><span className="dates-span">May 2023 -- August 2023</span> <br /> <span className="company-span">Data Analytics and Data Engineering Project</span>
                                <ul>
                                    <li>
                                        Conducted in-depth data analytics on comprehensive Uber datasets, utilizing Google Cloud Platform (GCP) Storage for scalable data warehousing. Employed Python for intricate data manipulation and analysis tasks, demonstrating proficiency in data science programming.

                                    </li>
                                    <li>
                                        Expertly utilized the Mage Data Pipeline Tool to streamline the Extract, Transform, Load (ETL) process, ensuring efficient data flow from raw data sources to the analytical platform. This process played a pivotal role in maintaining data integrity and facilitating timely insights.
                                    </li>
                                    <li>
                                        Conceptualized and designed a sophisticated data model using Lucidchart, which served as the foundational blueprint for data structuring and analysis. This step was crucial in aligning data architecture with analytical objectives.
                                    </li>
                                    <li>
                                        Executed a high-performance ETL pipeline on Google Cloud Platform, showcasing expertise in cloud-based data solutions. Processed and analyzed large datasets in BigQuery, employing advanced SQL queries to extract critical insights, thereby demonstrating strong skills in database querying and optimization.
                                    </li>
                                    <li>
                                        Developed a highly interactive and dynamic Tableau dashboard, featuring a diverse array of data visualizations that provided stakeholders with clear and actionable insights. This involved creating customized charts, graphs, and maps to represent complex data trends effectively.
                                    </li>
                                    <li>
                                        Played a key role in unveiling profitable business insights about Uber, contributing to strategic decision-making. This included analyzing patterns in customer behavior, service usage, and operational efficiency, thus directly impacting business growth and service optimization.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <p style={{ color: "rgb(252,21,37)", animation: "bounce 5s" }}>
                            Please see more projects and use it by click on 'Back to projects' on the top
                        </p>
                    </div>
                    <button className="back-btn" onClick={handleBack}>BACK TO RESUME</button>
                </div>}

                <div>
                    {projects && <div className="work-container">
                        <div className="top-btn" style={{ }}>
                            <button
                                className={`work-btn ${work ? 'active-btn' : ''}`}
                                onClick={handleWork}
                                style={{ color: hover ? "white" : "rgb(252,21,37)" }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                More Work Details
                            </button>
                        </div>
                        <div className="grid">
                            {portfolioData.map((project) => (
                                <div className="grid-item" key={project.id}>
                                    <img src={project.imageUrl} alt={project.title} />
                                    <div className="overlay">
                                        <div className="project-description" style={{ fontSize: "120%", fontWeight: '600' }}>{project.description}</div>
                                        {/* <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn">View Project</a> */}
                                        <a href={`${project.projectUrl}?fromPortfolio=true`} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="back-btn" onClick={handleBack}>BACK TO RESUME</button>
                    </div>}
                </div>

                {achievement && <div className="achievement-container">
                    <h1 style={{ padding: "0", margin: "0" }}>Achievements</h1>
                    <ol>
                        <li>
                            <span>Honors Research Award</span> <br /><span className="dates-span">May 2023</span> <br /> <span className="company-span">Northwest Missouri State University</span>
                            <ul>
                                <li>
                                    Won first prize for the research on Implementation of University Parking Application.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h1 style={{ padding: "0", margin: "0" }}>Leadership</h1>
                    <ol>
                        <li>
                            <span>Orientation Leader</span> <br /><span className="dates-span">August 2022</span> <br /> <span className="company-span">Northwest Missouri State University</span>
                            <ul>
                                <li>
                                    Assisted and helped new students by giving tours, information about campus and Academic help.
                                </li>
                                <li>
                                    Helped students by explaining campus rules, answered questions about campus. Helped with choosing classes for semesters and advising for future semesters.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>Soar Leader</span> <br /><span className="dates-span">June 2022 -- August 2022</span> <br /> <span className="company-span">Northwest Missouri State University</span>
                            <ul>
                                <li>
                                    Provided brief tour of campus and answered questions of parents and students about different organizations and offices
                                    on Campus.
                                </li>
                                <li>
                                    Helped freshman students by providing advice on what major and classes should be taken for future developments.
                                </li>
                                <li>
                                    Gave presentations to new and old students of how to build resumes, cover letters and CV. Presented in front of more than 40-50 students a day of how to get on campus and off campus employment opportunities and how to build up successful resumes for future opportunities.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <button className="back-btn" onClick={handleBack}>BACK TO RESUME</button>
                </div>}

            </div>
            <div>

            </div>
        </div>
    );
}

export default Work;