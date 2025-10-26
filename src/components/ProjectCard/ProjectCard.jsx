import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
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
          <a
            href={project.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} code on GitHub`}
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
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
            href={project.github}
            className="project-link-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Code
          </a>
          <a
            href={project.live}
            className="project-link-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
