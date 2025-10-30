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
const tailwindImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
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
// Non-devicon placeholders
const responsiveImg = "https://img.icons8.com/fluency/96/responsive.png";
const apiImg = "https://img.icons8.com/fluency/96/api.png";
const mediaQueryImg = "https://img.icons8.com/fluency/96/smartphone-tablet.png";

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
