import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  type,
  role,
  description,
  technologies,
  highlights,
  github,
  live,
  private: isPrivate,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group h-full"
    >
      <div className="h-full rounded-2xl border border-white/10 bg-tertiary p-6 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-[0_12px_40px_rgba(145,94,255,0.15)] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                type === "Client Project"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
              }`}
            >
              {type}
            </span>

            <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>

            <p className="mt-1 text-sm text-[#915EFF]">{role}</p>
          </div>

          {!isPrivate && (
            <div className="flex gap-2">
              {live && (
                <button
                  onClick={() => window.open(live, "_blank")}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-lg transition hover:bg-black/50"
                >
                  🌐
                </button>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-secondary">
          {description}
        </p>

        {/* Highlights */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-white">
            Key Highlights
          </h4>

          <ul className="space-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-secondary"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#915EFF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-6">
          <h4 className="mb-3 text-sm font-semibold text-white">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-all duration-300 hover:border-[#915EFF]/40 hover:bg-[#915EFF]/10 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Featured Work</p>
        <h2 className={styles.sectionHeadText}>Things I've Built.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          These projects represent my experience building scalable web, mobile,
          and backend applications. From enterprise solutions developed for clients to personal projects, each one reflects my
          passion for clean architecture, performance, and solving real-world
          problems.
        </motion.p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
