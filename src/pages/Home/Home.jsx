import { motion } from "framer-motion";
import {
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope as FaMail,
} from "react-icons/fa";
import "./Home.css";
import SamImg from "../../assets/images/Sam.png";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="container">
          <motion.div
            className="hero-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-photo">
              <img src={SamImg} alt="Samuel Worku" />
            </div>
            <div className="hero-content">
            <motion.div
              className="typing-animation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="hero-title">
                I'm <span className="highlight">Samuel Worku</span> - A Full
                Stack Developer
              </h1>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create responsive, user-friendly websites and applications using
              modern technologies. From frontend design to backend development,
              I bring ideas to life.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href="https://github.com/SamyAb-Ed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/samuel-worku"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/samuel_worku"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a href="mailto:sam@example.com" aria-label="Email">
                <FaMail />
              </a>
            </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
