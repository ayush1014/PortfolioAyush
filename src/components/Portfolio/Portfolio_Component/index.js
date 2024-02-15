import { useState } from "react";
import React from "react";
// import resume from "../../../assets/docs/ResumeAyush.pdf"
import resume from "../../../assets/docs/AyushResume.pdf";
import ResumeAyushKanaujia from "../../../assets/docs/ResumeAyushKanaujia.pdf"

import './index.scss'
import gameImg from "../../../assets/images/game.jpeg"
import qrCode from "../../../assets/images/qrcode.jpeg"
import todo from "../../../assets/images/todo.jpeg"
import watch from "../../../assets/images/watch.jpeg"
import simpleInterest from "../../../assets/images/simpleInterest.jpeg"
import data from "../../../assets/images/data.jpeg"
import jobPeer from "../../../assets/images/job-peer.png"

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
            title: "Job-Peer.com",
            description: "Developed Job-Peer.com as an application tracker which helped students and professionals to save there job applications and track them for later success in job appling experience with touch of social media where user can follow there peer to check there numbers of applications they applied in different timeframes. Tech Stack: Node.JS, Express.Js, React.JS, JWT, Password hasing, MySQL, Node Corns, Firebase authentication. Check it out.",
            imageUrl: jobPeer,
            projectUrl: "https://www.job-peer.com/"
        },
        {
            id: 2,
            title: "Todo List",
            description: "Built todo list web application by using React.js and Particle.js",
            imageUrl: todo,
            projectUrl: "https://ayush1014.github.io/TodoList/"
        },
        {
            id: 3,
            title: "Qr-code-maker",
            description: "Developed customizable QR Code generator using Flask python framework",
            imageUrl: qrCode,
            projectUrl: "https://ayushkanaujia.pythonanywhere.com/"
        },
        {
            id: 4,
            title: "Stopwatch",
            description: "Built stopwatch using React.Js",
            imageUrl: watch,
            projectUrl: "https://ayush1014.github.io/Stopwatch-using-react/"
        },
        {
            id: 5,
            title: "RPG Game",
            description: "Developed RPG game using Godot Engine, built by GDScript, C# and C++",
            imageUrl: gameImg,
            projectUrl: "https://44351-w22.github.io/creative-game-quad-nations-studio-1/"
        },
        {
            id: 6,
            title: "Simple Interest Calculator",
            description: "Simple interest calculator built by using Html, Css and JS for calculating simple interest by years",
            imageUrl: simpleInterest,
            projectUrl: "https://ayush1014.github.io/Simple-Interest-Calculator/"
        },
        {
            id: 7,
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

    const handleWorkBack = ()=>{
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
                <button className={`achievement-btn ${achievement ? 'active-btn' : ''}`} onClick={handleAchievement}>Achievements & Leaderships</button>
            </div>
            {showResume && (
                <div className="resume">
                    <h3>My Professional Resume</h3>
                    <a href={ResumeAyushKanaujia} download="Resume.pdf" className="download-btn">Download Resume</a>
                    <p>Scroll inside to view more</p>
                    <iframe src={`${ResumeAyushKanaujia}#toolbar=0&#view=Fit`} width="20%" height="100%" />
                </div>
            )}
            <div>
                {skills && <div className="skill-container">
                    <ul>
                        <li>
                            <span>Languages: </span> Python,JavaScript, HTML5, CSS3, SQL, Java,C, C++, Typescript
                        </li>
                        <li>
                            <span>Frameworks: </span> React.JS, Vue.JS, Express.JS, Angular.JS, Node.JS, Flask, Django
                        </li>
                        <li>
                            <span>Databases:</span> MySQL, MongoDB, PostgreSQL, T-SQL
                        </li>
                        <li>
                            <span>UI/UX:</span> Figma, Canva, Wordpress, Wix
                        </li>
                        <li>
                            <span>Cloud Tech:</span> Amazon Web Services (AWS), Google Cloud Platform(GCP)
                        </li>
                        <li>
                            <span>Tools:</span> Visual Studio Code, Jupyter Lab, MySql Workbench, MongoDB, Postman, Azure Data Studio, Docker, Github, Tableau, PowerBI
                        </li>
                        <li>
                            <span>Software Development Lifecycles: </span> Agile, Waterfall
                        </li>

                    </ul>
                    <button className="back-btn" onClick={handleBack}>Clear</button>
                </div>}
                {experience && <div className="experience-container">
                    <ol>
                        <li>
                            <span>Software Developer</span> <br /><span className="dates-span">Aug 2021 -- May 2023</span><br /><span className="company-span">Northwest Missouri State University Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Led the transformative integration of sophisticated data-driven solutions and advanced predictive analytics into the core of the event tracking infrastructure. This strategic initiative significantly optimized operational efficiency and fortified system reliability, leveraging cutting-edge analytical tools and methodologies.
                                </li>
                                <li>
                                    Conceptualized and engineered a state-of-the-art event tracking system, revolutionizing operational oversight for over 300 faculty members and supervisors. This robust platform enabled precise attendance tracking and active participation monitoring for an extensive student body exceeding 2,000 across various academic and extracurricular activities. The deployment of this system resulted in a remarkable 60% increase in accountability and a 20% enhancement in student-faculty communication dynamics.
                                </li>
                                <li>
                                    Spearheaded the development and deployment of a highly intuitive, React.js and Express.js-based single-page application, fundamentally transforming the scheduling process for online classes. This innovative solution dramatically reduced schedule generation time by 90% and concurrently decreased scheduling errors by 40%, thereby significantly streamlining administrative operations and enhancing the overall educational process.
                                </li>
                                <li>
                                    Expertly crafted and maintained robust, scalable backend APIs using Node.js and Express.js, incorporating sophisticated canvas Rest APIs. Skillfully executed intricate scripts for database schema migrations, ensuring seamless data flow and integrity. Administered and optimized multiple MySQL databases, forming the backbone of a comprehensive faculty management application and a detailed attendance tracking system, thereby elevating the operational capabilities to new heights.
                                </li>
                                <li>
                                    Diligently conducted thorough bug resolution and debugging activities, employing a methodical approach to problem-solving. This consistent focus on identifying and rectifying system flaws played a pivotal role in continually elevating the application's functionality, reliability, and overall user experience, ensuring the highest standards of software quality and performance.
                                </li>
                            </ul>
                        </li>

                        <li>
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
                        </li>

                        <li>
                            <span>RESEARCH ASSISTANT</span> <br /><span className="dates-span">Aug 2022 -- May 2023</span><br /><span className="company-span">Northwest Missouri State University Maryville, Missouri</span>
                            <ul>
                                <li>
                                    Spearheaded a high-impact university research project focused on developing an innovative GPS and QR code-based parking application, successfully showcased at the CCSC 2023 conference. Demonstrated exceptional project management and technical skills from conception through to execution, ensuring alignment with research objectives and user requirements.
                                    Parking Efficiency Optimization:

                                </li>
                                <li>
                                    Played a key role in significantly enhancing parking efficiency, directly benefiting 80% of commuter students at NWMSU. Conducted thorough needs analysis and user behavior studies to understand and address the specific challenges faced by the student community, leading to a substantial improvement in campus parking management.
                                    Advanced Web Application Engineering:
                                </li>
                                <li>
                                    Engineered a sophisticated WebApp utilizing Vue.js, incorporating real-time geolocation tracking to offer optimal parking solutions. Showcased proficiency in modern web development frameworks and client-side scripting, ensuring a responsive and user-friendly interface.
                                    QR Code System Integration & Database Management:
                                </li>
                                <li>
                                    Innovatively implemented a QR code scanning system to streamline the parking registration process, enhancing user engagement and operational efficiency. Managed the backend database using MySQL Workbench, skillfully handling data storage, retrieval, and manipulation to support the application's functionality.
                                    User Experience Transformation:
                                </li>
                                <li>
                                    Revolutionized the student parking experience by delivering a solution that achieved significant time savings and convenience. Focused on creating an intuitive user journey, from parking space discovery to registration, thereby elevating the overall campus experience for students and faculty.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <button className="back-btn" onClick={handleBack}>Clear</button>
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
                                    SOCIAL MEDIA APPLICATION (TRENDING_HASH)</span> <br /><span className="dates-span">Aug 2023 -- Jan 2024</span> <br /> <span className="company-span">Full Stack Project</span>
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
                                <span>UBER DATA ANALYSIS AND ENGINEERING</span> <br /><span className="dates-span">May 2023 -- Aug 2023</span> <br /> <span className="company-span">Data Analytics and Data Engineering Project</span>
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
                    <button className="back-btn" onClick={handleBack}>Clear</button>
                </div>}

                <div>
                    {projects && <div className="work-container">
                        <div className="top-btn" style={{ width: '200vw' }}>
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
                                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="back-btn" onClick={handleBack}>Clear</button>
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
                    <h1 style={{ padding: "0", margin: "0" }}>Leaderships</h1>
                    <ol>
                        <li>
                            <span>Orientation Leader</span> <br /><span className="dates-span">Aug 2022</span> <br /> <span className="company-span">Northwest Missouri State University</span>
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
                            <span>Soar Leader</span> <br /><span className="dates-span">June 2022 -- Aug 2022</span> <br /> <span className="company-span">Northwest Missouri State University</span>
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
                    <button className="back-btn" onClick={handleBack}>Clear</button>
                </div>}

            </div>
            <div>

            </div>
        </div>
    );
}

export default Work;