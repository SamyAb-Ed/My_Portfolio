import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-info">
            <h3>Samuel Worku</h3>
            <p>Full Stack Developer</p>
            <p>Creating exceptional web experiences</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <FaEnvelope />
                  sam@example.com
                </li>
                <li>
                  <span>📍</span>
                  Austin, TX
                </li>
                <li>
                  <FaGithub />
                  <a
                    href="https://github.com/SamyAb-Ed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/SamyAb-Ed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <div className="social-links">
            <a
              href="https://github.com/SamyAb-Ed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <p>&copy; 2025 Samuel Worku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
