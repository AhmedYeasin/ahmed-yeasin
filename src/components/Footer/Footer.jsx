import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaArrowUp } from "react-icons/fa6";

const links = [
  ["#home", "Home"], ["#skills", "Skills"], ["#about", "About"],
  ["#projects", "Projects"], ["#contact", "Contact"],
];

const socials = [
  { href: "https://github.com/AhmetChatgami", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/", icon: <FaLinkedin /> },
  { href: "https://x.com/", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/ahmet.yeasin.ramazan/?hl=en", icon: <FaInstagram /> },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background: "#060608" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #7C3AED, transparent)" }} />
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7C3AED, transparent)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: "linear-gradient(135deg,#7C3AED,#A78BFA)" }}>AY</div>
              <span className="font-bold text-xl text-white">Ahmed<span style={{ color: "#A78BFA" }}>.</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              A passionate React Developer who loves bringing new ideas to life through clean code and beautiful UI.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, icon }) => (
                <motion.a key={href} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-base transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}>Quick Links</h3>
            <ul className="space-y-3">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href}
                    className="group flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.38)"}>
                    <span className="w-0 group-hover:w-4 h-px transition-all duration-300 flex-shrink-0"
                      style={{ background: "#7C3AED" }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}>Motto</h3>
            <p className="text-sm leading-relaxed italic mb-4" style={{ color: "rgba(255,255,255,0.38)" }}>
              "Code never lies, comments sometimes do."
            </p>
            <div className="glass-card rounded-xl p-4 text-xs font-mono" style={{ color: "#A78BFA" }}>
              <span style={{ color: "rgba(255,255,255,0.35)" }}>const</span>{" "}
              <span style={{ color: "#CCFF00" }}>passion</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>=</span>{" "}
              <span style={{ color: "#A78BFA" }}>"building lovely pages suites to you &lt;3"</span>;
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#A78BFA", fontWeight: 600 }}>Ahmed Yeasin Ramadan</span>.
            {" "}All rights reserved.
          </p>
          <motion.button onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-black font-bold text-sm transition-all duration-300"
            style={{ background: "#CCFF00", boxShadow: "0 4px 20px rgba(204,255,0,0.25)" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 30px rgba(204,255,0,0.4)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(204,255,0,0.25)"}>
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;