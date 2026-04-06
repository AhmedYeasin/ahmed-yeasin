import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from "../../assets/github-logo-png_seeklogo-304612.png";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl shadow-2xl shadow-black/60" : ""
      }`}
      style={{ background: scrolled ? "rgba(9,9,15,0.85)" : "transparent", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/60 transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)" }}>
            AY
          </div>
          <span className="font-bold text-lg text-white/90 group-hover:text-white transition-colors">
            Ahmed<span style={{ color: "#A78BFA" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, id }) => {
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(124,58,237,0.18)", border: "1px solid rgba(124,58,237,0.35)" }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* GitHub CTA */}
        <a
          href="https://github.com/AhmetChatgami"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)", boxShadow: "0 4px 20px rgba(124,58,237,0.25)" }}
        >
          <img className="h-4 w-4 invert" src={github} alt="GitHub" />
          GitHub
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center" aria-label="Toggle Menu">
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-6 h-0.5 bg-white origin-center" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -10 : 0 }} className="block w-6 h-0.5 bg-white" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-6 h-0.5 bg-white origin-center" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ background: "rgba(9,9,15,0.97)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            className="md:hidden overflow-hidden backdrop-blur-xl"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;