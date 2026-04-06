import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionTitle from "../SectionTitle/SectionTitle";
import react from "../../assets/react.svg";
import prochallenger from "../../assets/prochallenger.jpg";
import homeHero from "../../assets/homeHero.jpg";
import toy from "../../assets/hero.jpg";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import node from "../../assets/node.png";
import firebase from "../../assets/firebase.png";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.png";

const projectList = [
  {
    title: "ProChallenger",
    img: prochallenger,
    desc: "A robust Full-Stack Web Application built with the MERN stack for high-performance task management.",
    stack: [
      { name: "React", icon: react }, { name: "Tailwind", icon: tailwind },
      { name: "Node.js", icon: node }, { name: "Express", icon: express },
      { name: "MongoDB", icon: mongo }, { name: "Firebase", icon: firebase },
    ],
    github: "https://github.com/AhmetChatgami/proChallenger.git",
    live: "https://ornate-horse-0239d6.netlify.app/",
    featured: true,
  },
  {
    title: "Home Hero",
    img: homeHero,
    desc: "A comprehensive Service Provider Web Application focusing on dynamic UI and backend integration.",
    stack: [
      { name: "JavaScript", icon: javascript }, { name: "React", icon: react },
      { name: "Node.js", icon: node }, { name: "Express", icon: express },
      { name: "MongoDB", icon: mongo }, { name: "Firebase", icon: firebase },
    ],
    github: "https://github.com/AhmetChatgami/homeHero.git",
    live: "https://voluble-narwhal-c287c9.netlify.app/",
    featured: false,
  },
  {
    title: "Toy Tophia",
    img: toy,
    desc: "An engaging e-commerce interface with real-time search functionality for toy discovery.",
    stack: [
      { name: "HTML5", icon: htmlLogo }, { name: "CSS3", icon: css },
      { name: "JavaScript", icon: javascript }, { name: "React", icon: react },
      { name: "Tailwind", icon: tailwind },
    ],
    github: "https://github.com/AhmetChatgami/assignment-8.git",
    live: "https://zesty-hero-app-ab6a38.netlify.app/",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -8;
    const y = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 8;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        setTilt({ x: 0, y: 0 });
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.45)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(124,58,237,0.18)";
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={project.img} alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #09090f 0%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "rgba(124,58,237,0.12)" }} />
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full"
            style={{ background: "linear-gradient(135deg,#7C3AED,#A78BFA)" }}>
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(255,255,255,0.48)" }}>{project.desc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <div key={tech.name} title={tech.name}
              className="w-7 h-7 bg-white/90 rounded-lg p-1 hover:scale-125 transition-transform duration-200 cursor-help">
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-300 hover:scale-105"
            style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
            <FaGithub /> Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 text-sm font-bold text-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "#CCFF00" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(204,255,0,0.3)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
            <HiArrowUpRight /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-28 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
      style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
    <div className="container mx-auto px-6">
      <SectionTitle label="My Work" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;