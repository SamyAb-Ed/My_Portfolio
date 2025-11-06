import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useRef } from "react";
import "./Projects.css";
// Import project images from local Img folder
import amazonImg from "./Img/10002.jpg";
import netflixImg from "./Img/10001.jpg";
import appleImg from "./Img/10003.png";
import evangadiImg from "./Img/10004.jpg";
import evangadiFoodMenuImg from "./Img/evangadi-food-menu.png";
import diamondTradingImg from "./Img/diamond-trading-logo.png";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollProjects = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".project-card")?.offsetWidth || 0;
      const gap = 48; // 3rem = 48px
      const scrollAmount = (cardWidth + gap) * 3; // Scroll by 3 projects
      container.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      title: "Amazon-Clone",
      description:
        "Full-stack e-commerce solution with React, Node.js and Firebase. Features include user authentication, payment processing, and admin dashboard.",
      image: amazonImg,
      github: "https://github.com/SamyAb-Ed/amazon-clone",
      live: "https://amazon-clone-five-plum.vercel.app/",
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "Express",
        "MySQL",
        "Stripe",
      ],
    },
    {
      title: "Netflix-Clone",
      description: "A movie streaming web app built with React and TMDB API",
      image: netflixImg,
      github: "https://github.com/SamyAb-Ed/Netflix-Clone-2025",
      live: "https://netflix-clone-2025-teal.vercel.app/",
      technologies: ["React", "TMDB API", "CSS", "React Router"],
    },

    {
      title: "Apple-Clone",
      description:
        "A sleek Apple-inspired website clone built with React and modern CSS",
      image: appleImg,
      github: "https://github.com/SamyAb-Ed/Apple-Clone",
      live: "https://apple-clone-beige-three.vercel.app/",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      title: "Evangadi-Forum",
      description:
        "A full-stack discussion platform inspired by Evangadi, built using React, Node.js, Express, and MySQL. Supports user authentication, question posting, and community-based Q&A interactions.",
      image: evangadiImg,
      github: "https://github.com/SamyAb-Ed/Sami-Evangadi-Forum.git",
      live: "https://sami-forum.carpnon.com/",
      technologies: ["React", "MySQL", "Firebase", "Node.js", "Express"],
    },
    {
      title: "Evangadi Food Menu",
      description:
        "A modern food menu web application showcasing Ethiopian cuisine. Built with React and Vite, featuring a responsive design with beautiful food cards displaying menu items, prices, and descriptions.",
      image: evangadiFoodMenuImg,
      github: "https://github.com/SamyAb-Ed/Evangadi-food-menu",
      live: "https://evangadi-food-menu.vercel.app/",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
    },
    {
      title: "Diamond Trading PLC",
      description:
        "A professional corporate website for Diamond Trading PLC, a leading supplier of Dangote Cement and coffee husks in Ethiopia. Features include interactive sections, contact form, AI chat assistant, and responsive design showcasing the company's services and values.",
      image: diamondTradingImg,
      github: "https://github.com/SamyAb-Ed/Diamond-Trading-PLC",
      live: "https://diamondtradingplc.com/",
      technologies: [
        "React",
        "Tailwind CSS",
        "Vite",
        "AI Chat Assistant",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="title">Projects</h2>
          <p className="subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-scroll-wrapper">
          <button
            className="scroll-button scroll-button-left"
            onClick={() => scrollProjects("prev")}
            aria-label="Scroll to previous projects"
          >
            <FaChevronLeft />
          </button>
          <div className="projects-grid" ref={scrollContainerRef}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.live}
                      className="project-btn btn-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="project-btn btn-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            className="scroll-button scroll-button-right"
            onClick={() => scrollProjects("next")}
            aria-label="Scroll to next projects"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
