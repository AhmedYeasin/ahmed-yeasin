import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import reactImg from "../../assets/react.svg";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import vs from "../../assets/vs.png";
import github from "../../assets/github-logo-png_seeklogo-304612.png";
import vercel from "../../assets/vercel.svg";
import express from "../../assets/express.png";

const categories = [
  {
    id: "frontend", label: "Frontend",
    skills: [
      { name: "HTML5", icon: htmlLogo },
      { name: "CSS3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: reactImg },
      { name: "Tailwind", icon: tailwind },
    ],
  },
  {
    id: "backend", label: "Backend",
    skills: [
      { name: "Node.js", icon: node },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongo },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    id: "tools", label: "Tools",
    skills: [
      { name: "Git", icon: git },
      { name: "VS Code", icon: vs },
      { name: "GitHub", icon: github },
      { name: "Vercel", icon: vercel },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -16;
    const y = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 16;
    setStyle({ transform: `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(1.06)` });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStyle({ transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)" })}
      style={{ ...style, transition: "transform 0.18s ease-out" }}
      className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default"
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,58,237,0.45)"}
    >
      <div className="w-14 h-14 bg-white/90 rounded-xl p-2.5 shadow-md group-hover:scale-110 transition-transform duration-300">
        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState("frontend");
  const ref = useRef(null);
  useInView(ref, { once: true });
  const current = categories.find((c) => c.id === active);

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="container mx-auto px-6">
        <SectionTitle label="What I Use" title="Tech Stack" />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className="relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300"
              style={{ color: active === cat.id ? "#fff" : "rgba(255,255,255,0.38)" }}>
              {active === cat.id && (
                <motion.span layoutId="activeTab" className="absolute inset-0 rounded-xl"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#A78BFA)", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }} />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {current.skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
