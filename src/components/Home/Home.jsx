import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import profile from "../../assets/ahmed.jpeg.jpg";
import cvFile from "../../../public/Resume Template.pdf";

const roles = ["Frontend Focused-Web Developer", "React.js Developer", "JavaScript Enthusiast", "Next.js Learner"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t;
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        t = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((p) => (p + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  const words = ["Hello,", "I'm", "Ahmed", "Yeasin"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute pointer-events-none -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      <div className="absolute pointer-events-none -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, #CCFF00, transparent)" }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-8"
              style={{ borderColor: "rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)", color: "#A78BFA" }}>
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              Available for work
            </motion.div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-3">
              {words.map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className={`inline-block mr-3 ${i >= 2 ? "gradient-text" : "text-white"}`}>
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text mb-6">
              Ramadan
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="text-lg md:text-xl font-medium mb-8 h-8 flex items-center justify-center lg:justify-start gap-2"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              <span style={{ color: "#A78BFA" }}>&gt;</span>
              <span className="text-white/80">{displayed}</span>
              <span className="animate-pulse" style={{ color: "#CCFF00" }}>|</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Building high-performance, beautiful, and interactive user interfaces — from concept to deployment.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)", boxShadow: "0 4px 24px rgba(124,58,237,0.3)" }}>
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href={cvFile} download="Ahmed_Yeasin_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.background = "rgba(124,58,237,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
                <FaDownload style={{ color: "#A78BFA" }} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex-shrink-0 flex items-center justify-center">
            {/* Spinning ring */}
            <div className="absolute w-72 h-72 md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, #7C3AED, #CCFF00, #A78BFA, transparent 60%, #7C3AED)", padding: 2, borderRadius: "50%", opacity: 0.8 }} />
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1"
              style={{ background: "#09090f" }}>
              <img src={profile} alt="Ahmed Yeasin Ramadan"
                className="w-full h-full rounded-full object-cover"
                style={{ border: "3px solid #09090f" }} />
            </div>
            {/* Floating badges */}
            <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 glass-card rounded-2xl px-4 py-2.5 text-sm font-semibold text-white">
              🚀 MERN Stack
            </motion.div>
            <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-10 glass-card rounded-2xl px-4 py-2.5 text-sm font-semibold text-white">
              ⚛️ React Dev
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;