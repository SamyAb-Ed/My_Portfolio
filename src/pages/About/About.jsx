import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import profileImage from "../../assets/images/Sam.png";
import "./About.css";

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // no-op viewer function removed to restore original modal behavior

  const experiences = [
    {
      title: "Business Systems Analyst / Data Analyst",
      company: "Flextronics International USA, Inc.",
      period: "August 2024 – Present",
      location: "Austin, TX",
      description:
        "Analyze business processes, implement system enhancements, and support full SDLC projects to improve efficiency and scalability.",
    },
    {
      title: "Clerk / Machine Operator",
      company: "Flextronics International USA, Inc.",
      period: "July 2023 – August 2024",
      location: "Austin, TX",
      description:
        "Operated production machinery and supported order management and warehouse control processes in a high‑volume environment.",
    },
    {
      title: "Database Administrator",
      company: "ET Plastic Production PLC",
      period: "February 2016 – August 2020",
      location: "Dire Dawa, Ethiopia",
      description:
        "Administered SQL Server environments (2008–2019), including backups, performance tuning, HADR, and data modeling.",
    },
  ];

  const education = [
    {
      degree: "Bachelor’s Degree, Computer Science",
      school: "Mekelle University",
      year: "2013",
      location: "Mekelle, Ethiopia",
    },
    {
      degree: "High School Diploma",
      school: "BGS High School",
      year: "",
      location: "Dire Dawa, Ethiopia",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ];
  return (
    <section className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img
                src={profileImage}
                alt="Samuel Worku - Professional Developer"
              />
              <div className="image-badge">
                <FaCode />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate Full Stack Developer with over 5 years of
              experience as a Business Systems Analyst and as a Full Stack
              Developer in creating digital solutions that make a difference. I
              specialize in modern web technologies and love turning complex
              problems into simple, beautiful, and intuitive designs.
            </p>

            <p>
              My goal is to help businesses and individuals achieve their
              digital objectives through innovative and efficient web solutions.
            </p>

            <div className="about-actions">
              <button className="btn btn-primary">
                <FaDownload />
                Download CV
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsResumeOpen(true)}
              >
                View Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              className="resume-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-modal-header">
                <h2>Resume</h2>
                <button
                  className="close-btn"
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close resume"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="resume-modal-content">
                <div className="resume-header">
                  <div className="resume-info">
                    <h1>Samuel Worku</h1>
                    <h2>Full Stack Developer</h2>
                    <div className="contact-info">
                      <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Austin, Texas</span>
                      </div>
                      <div className="contact-item">
                        <FaPhone />
                        <span>(737) 334-9242</span>
                      </div>
                      <div className="contact-item">
                        <FaEnvelope />
                        <span>samyemahhy@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resume-sections">
                  <div className="resume-section">
                    <h3>Professional Summary</h3>
                    <p>
                      As a Full Stack Developer, proficient in designing and
                      developing responsive, user-centric web applications using
                      React, Node.js, Express, and SQL/NoSQL databases.
                      Experienced in integrating RESTful APIs, implementing
                      secure authentication flows, and deploying applications on
                      cloud platforms such as Azure, Vercel, and Netlify.
                    </p>
                    <p>
                      Analytical and detail-oriented Full Stack Developer / Data
                      Analyst / Business Systems Analyst / SQL Server DBA with
                      over five years of combined experience in database
                      administration, ERP/MES systems (BAAN, ERP LN), and
                      data-driven process improvement. Skilled in analyzing
                      business processes, implementing system enhancements, and
                      supporting full SDLC projects to optimize efficiency,
                      productivity, and scalability.
                    </p>
                  </div>
                  <div className="resume-section">
                    <h3>Professional Experience</h3>
                    <div className="experience-list">
                      {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                          <div className="experience-header">
                            <h4>{exp.title}</h4>
                            <div className="experience-meta">
                              <span className="company">{exp.company}</span>
                              <span className="period">
                                <FaCalendarAlt />
                                {exp.period}
                              </span>
                              <span className="location">
                                <FaMapMarkerAlt />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <p>{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resume-section">
                    <h3>Education</h3>
                    <div className="education-list">
                      {education.map((edu, index) => (
                        <div key={index} className="education-item">
                          <h4>{edu.degree}</h4>
                          <div className="education-meta">
                            <span className="school">{edu.school}</span>
                            <span className="year">{edu.year}</span>
                            <span className="location">{edu.location}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resume-section">
                    <h3>Technical Skills</h3>
                    <div className="skills-list">
                      {skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
