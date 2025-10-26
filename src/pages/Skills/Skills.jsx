import { motion } from "framer-motion";
import "./Skills.css";
// Using external skill icons for now - replace with local images when available
const reactImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const nodejsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const javascriptImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const html5Img =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const bootstrapImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
const gitImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";

const Skills = () => {
  const skills = [
    {
      name: "React",
      image: reactImg,
      level: "Expert",
    },
    {
      name: "Node.js",
      image: nodejsImg,
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      image: javascriptImg,
      level: "Expert",
    },
    {
      name: "HTML5",
      image: html5Img,
      level: "Expert",
    },
    {
      name: "Bootstrap",
      image: bootstrapImg,
      level: "Intermediate",
    },
    {
      name: "Git",
      image: gitImg,
      level: "Intermediate",
    },
  ];

  return (
    <section className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Development Skills
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
