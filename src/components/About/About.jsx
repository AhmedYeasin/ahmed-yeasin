import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import profile from "../../assets/ahmed.jpeg.jpg";

const stats = [
  { value: 3, label: "Projects Built", suffix: "+" },
  { value: 1, label: "Year Learning", suffix: "+" },
  { value: 8, label: "Technologies", suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.ceil(1500 / value);
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl font-extrabold gradient-text">{count}{suffix}</div>
  );
};

const tags = ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Express.js", "Git"];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = "I am an aspiring Web Developer specializing in building modern web applications. With a primary focus on Frontend Development with React.js, I bridge the gap between design and functionality. I have hands-on experience with the MERN stack and I am now expanding into Next.js and advanced backend concepts.".split(" ");

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }} />

      <div className="container mx-auto px-6">
        <SectionTitle label="Who I Am" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }} className="relative flex justify-center">
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-5 -left-5 w-28 h-28 rounded-2xl opacity-40 pointer-events-none"
                style={{ border: "1px solid rgba(124,58,237,0.4)" }} />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl opacity-30 pointer-events-none"
                style={{ border: "1px solid rgba(204,255,0,0.3)" }} />

              <div className="relative w-72 h-80 md:w-80 md:h-[22rem] rounded-2xl overflow-hidden gradient-border">
                <img src={profile} alt="Ahmed Yeasin" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,15,0.5), transparent)" }} />
              </div>

              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                Open to Opportunities
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate about building things for the{" "}
              <span className="gradient-text">web</span>
            </h3>

            {/* Word-by-word reveal */}
            <div className="text-white/55 leading-relaxed mb-8 flex flex-wrap gap-x-1.5">
              {words.map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.022 }}
                  className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag, i) => (
                <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                  style={{ color: "#A78BFA", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.22)" }}>
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;