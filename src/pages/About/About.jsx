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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved system performance by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications and mobile apps. Collaborated with design teams to create user-friendly interfaces and optimized database performance.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Remote",
      description:
        "Built interactive user interfaces using React and Vue.js. Implemented responsive designs and integrated with RESTful APIs.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2015 - 2019",
      location: "Boston, MA",
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
              <a
                className="btn btn-secondary"
                href="/resume/Samuel_Worku_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a
                className="btn btn-primary"
                href="/resume/Samuel_Worku_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download CV
              </a>
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
                        <FaEnvelope />
                        <span>sam@example.com</span>
                      </div>
                      <div className="contact-item">
                        <FaPhone />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="resume-sections">
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
