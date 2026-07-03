import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { error } from "tilt/lib/router";
import { ArrowUpRight, Download, Mail } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "nasifswalah@gmail.com",
    icon: Mail,
    href: "mailto:nasifswalah@gmail.com",
    action: "Send Email",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/nasifswalah",
    icon: Mail,
    href: "https://linkedin.com/in/nasifswalah",
    action: "View Profile",
  },
  {
    title: "GitHub",
    value: "github.com/nasifswalah",
    icon: Mail,
    href: "https://github.com/nasifswalah",
    action: "Explore Projects",
  },
  {
    title: "Resume",
    value: "Download my latest resume",
    icon: Download,
    href: "/resume.pdf",
    action: "Download",
  },
];

const ContactCard = ({ title, value, icon: Icon, href, action }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : "_self"}
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

      {/* <ArrowUpRight className="h-5 w-5 text-secondary transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /> */}
    </div>

    {/* <p className="mt-4 text-sm font-medium text-[#915EFF]">{action}</p> */}
  </motion.a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zuji0f3",
        "template_ih3lhpt",
        {
          from_name: form.name,
          to_name: "Nasif",
          from_email: form.email,
          to_email: "nasifswalah@gmail.com",
          message: form.message,
        },
        "90XIKSYAs8LbEUG8k",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        },
      );
  };

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
