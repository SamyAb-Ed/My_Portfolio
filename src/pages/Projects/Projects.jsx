import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
// Import project images from local Img folder
import amazonImg from "./Img/10002.jpg";
import netflixImg from "./Img/10001.jpg";
import appleImg from "./Img/10003.png";
import evangadiImg from "./Img/10004.jpg";

const Projects = () => {
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
      live: "https://meek-sherbet-22bffc.netlify.app/",
      technologies: ["React", "TMDB API", "CSS", "React Router"],
    },

    {
      title: "Apple-Clone",
      description:
        "A sleek Apple-inspired website clone built with React and modern CSS",
      image: appleImg,
      github: "https://github.com/SamyAb-Ed/Apple-Clone",
      live: "https://polite-mooncake-cefdfa.netlify.app/",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      title: "Evangadi-Forum",
      description:
        "A full-stack discussion platform inspired by Evangadi, built using React, Node.js, Express, and MySQL. Supports user authentication, question posting, and community-based Q&A interactions.",
      image: evangadiImg,
      github: "https://github.com/SamyAb-Ed/Evangadi-Forum-Final",
      live: "https://evangadi-for.netlify.app/",
      technologies: ["React", "MySQL", "Firebase", "Node.js", "Express"],
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} className="project-link">
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
                  <a href={project.github} className="project-link-text">
                    <FaGithub />
                    GitHub
                  </a>
                  <a href={project.live} className="project-link-text">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
