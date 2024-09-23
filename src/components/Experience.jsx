import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certifications } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ certification }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={certification.date}
    iconStyle={{ background: certification.iconBg }}
    icon={
      <div className="flex justify-center items-center h-full w-full">
        <img
          src={certification.icon}
          alt={certification.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <img src={certification.certificateImg} alt="" className="w-full h-ful object-cover rounded-2xl"/>
      <h3 className="text-white text-[24px] font-bold mt-5">{certification.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {certification.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {certification.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have earn so far</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>
      <div className="mt-[50px] flex flex-col">
        <VerticalTimeline>
          {certifications.map((certification, index) => (
            <ExperienceCard key={index} certification={certification} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "certification");
