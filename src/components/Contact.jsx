import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { error } from "tilt/lib/router";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { contacts } from "../constants/constants";

const ContactCard = ({ title, value, icon: Icon, href, action }) => (
  <motion.a
    href={href}
    target={"_blank"}
    rel="noopener noreferrer"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black-100 p-4 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-[0_12px_40px_rgba(145,94,255,0.15)]"
  >
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#915EFF]/10">
        <Icon className="h-6 w-6 text-[#915EFF]" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-secondary">{value}</p>
      </div>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-10 space-y-5">
          {contacts.map((contact) => (
            <ContactCard key={contact.title} {...contact} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
