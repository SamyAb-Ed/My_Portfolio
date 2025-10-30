import { motion } from "framer-motion";
import "./Skills.css";
// External icons (swap to local assets later if desired)
const reactImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const nodejsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const javascriptImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const html5Img =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const css3Img =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const bootstrapImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
const tailwindImg = "/icons/tailwind.svg";
const jqueryImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg";
const expressImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
const mysqlImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
const gitImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
const githubImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
// Non-devicon placeholders (embedded SVGs for reliability)
const responsiveImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%234fd1c5' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='14' height='10' rx='2'/%3E%3Cpath d='M22 13V7a2 2 0 0 0-2-2h-4'/%3E%3Crect x='7' y='17' width='7' height='4' rx='1'/%3E%3Cpath d='M5 21h11'/%3E%3C/svg%3E";
const apiImg =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg";
const mediaQueryImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23999cf9' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='13' height='9' rx='2'/%3E%3Crect x='7' y='16' width='6' height='4' rx='1'/%3E%3Cpath d='M19 10v7a2 2 0 0 1-2 2h-1'/%3E%3C/svg%3E";

const Skills = () => {
  const skills = [
    { name: "HTML5", image: html5Img, level: "Advanced" },
    { name: "CSS3", image: css3Img, level: "Advanced" },
    { name: "Bootstrap", image: bootstrapImg, level: "Intermediate" },
    { name: "Tailwind CSS", image: tailwindImg, level: "Intermediate" },
    { name: "Media Query", image: mediaQueryImg, level: "Intermediate" },
    { name: "JavaScript", image: javascriptImg, level: "Advanced" },
    { name: "React.js", image: reactImg, level: "Intermediate" },
    { name: "jQuery", image: jqueryImg, level: "Intermediate" },
    { name: "Node.js", image: nodejsImg, level: "Intermediate" },
    { name: "Express.js", image: expressImg, level: "Intermediate" },
    { name: "MySQL", image: mysqlImg, level: "Intermediate" },
    { name: "RESTful API", image: apiImg, level: "Intermediate" },
    { name: "Git & GitHub", image: githubImg, level: "Intermediate" },
    { name: "Responsive Design", image: responsiveImg, level: "Advanced" },
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
