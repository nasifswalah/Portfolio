import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, description, skills, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="xs:w-[270px] w-full hover:-translate-y-2 transition-all duration-300"
    >
      <div className="h-full rounded-2xl border border-white/10 bg-tertiary p-7">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain mb-6 opacity-90"
        />

        <h3 className="text-white text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-secondary text-[15px] leading-7 mb-5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-4xl space-y-6 text-secondary text-[17px] leading-[30px]"
      >
        <p>
          I'm a Software Engineer passionate about designing and developing
          scalable web and mobile applications that solve real-world problems. I
          enjoy taking products from idea to production, focusing on clean
          architecture, maintainable code, and seamless user experiences.
        </p>

        <p>
          My experience spans modern TypeScript ecosystems including NestJS,
          Next.js, React Native, Express.js, and FastAPI, where I've built
          enterprise-grade platforms featuring real-time communication, secure
          authentication, role-based access control, and cloud-integrated
          services.
        </p>

        <p>
          More recently, I've been expanding my expertise into AI-powered
          applications and intelligent workflows while deepening my
          understanding of system design and scalable software architecture.
        </p>

        <p>
          I'm driven by curiosity and continuous learning, always looking for
          better ways to build software that is performant, secure, and built to
          scale.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
