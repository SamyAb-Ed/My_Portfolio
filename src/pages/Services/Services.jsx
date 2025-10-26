import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Responsive Web Design",
      description:
        "I craft seamless, visually appealing layouts that adapt across desktop, tablet, and mobile for optimal UX.",
    },
    {
      icon: "👍⭐⭐⭐",
      title: "Client Satisfaction",
      description:
        "I prioritize communication, clean code, and high-quality deliverables to exceed expectations and build trust.",
    },
    {
      icon: "⏰✅",
      title: "Delivery on Time",
      description:
        "I ensure timely delivery with strong planning, proactive problem-solving, and clear milestone tracking.",
    },
    {
      icon: "🕐",
      title: "Availability",
      description:
        "Always ready to support and collaborate across different time zones with full availability.",
    },
    {
      icon: "🔌",
      title: "API Development",
      description:
        "Skilled in building RESTful APIs and integrating third-party services for full-stack projects.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Capable of managing both front-end and back-end development simultaneously for efficient delivery.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="services-subtitle">WHAT I OFFER</h3>
          <h2 className="services-title">My Services</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
