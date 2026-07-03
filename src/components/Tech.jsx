import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { techStacks } from "../constants/constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolbox</p>
        <h2 className={styles.sectionHeadText}>
          Technologies I Work With.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {techStacks.map((stack) => (
          <div
            key={stack.category}
            className="rounded-2xl border border-white/10 bg-tertiary p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              {stack.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {stack.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary transition hover:border-[#915EFF]/40 hover:bg-[#915EFF]/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
