import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi2";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SectionTitle from "../SectionTitle/SectionTitle";

const socials = [
  { href: "https://github.com/AhmetChatgami", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://x.com/", icon: <FaXTwitter />, label: "Twitter" },
  { href: "https://facebook.com", icon: <FaFacebook />, label: "Facebook" },
];

const inputClass = "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none transition-all duration-300";
const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" };

const Contact = () => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(124,58,237,0.6)";
    e.target.style.background = "rgba(124,58,237,0.07)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.09)";
    e.target.style.background = "rgba(255,255,255,0.05)";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm("service_8gwuay8", "template_gmcdfcb", form.current, "ejwuFXkg8GGSahtYd")
      .then(() => {
        Swal.fire({
          title: "Sent! 🚀", text: "Message sent successfully.", icon: "success",
          background: "#09090f", color: "#f0f0f8",
          confirmButtonColor: "#7C3AED",
        });
        e.target.reset();
      })
      .catch(() => toast.error("Failed to send. Try again!"))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }} />

      <div className="container mx-auto px-6">
        <SectionTitle label="Get In Touch" title="Contact Me" />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid transparent",
              backgroundImage: "linear-gradient(rgba(9,9,15,1), rgba(9,9,15,1)), linear-gradient(135deg, #7C3AED, #CCFF00)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {[
                { name: "user_name", type: "text", label: "Your Name", placeholder: "Ahmed Yeasin" },
                { name: "user_email", type: "email", label: "Email Address", placeholder: "you@example.com" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.45)" }}>{f.label}</label>
                  <input type={f.type} name={f.name} placeholder={f.placeholder} required
                    className={inputClass} style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "rgba(255,255,255,0.45)" }}>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." required rows={5}
                  className={`${inputClass} resize-none`} style={inputStyle}
                  onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <motion.button type="submit" disabled={sending}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 font-bold text-black rounded-xl transition-all duration-300 disabled:opacity-50"
                style={{ background: "#CCFF00" }}>
                {sending ? "Sending..." : <><span>Send Message</span><HiPaperAirplane /></>}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's <span className="gradient-text">collaborate</span>
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.48)" }}>
              I'm currently open to new opportunities and exciting collaborations. Whether you have a project idea, a question, or just want to say hi — my inbox is always open!
            </p>

            <div className="space-y-3 mb-10">
              {[
                { label: "📧 Email", value: "ahmetchatgami@gmail.com" },
                { label: "📍 Location", value: "Chattogram, Bangladesh" },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card rounded-xl px-5 py-4">
                  <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</div>
                  <div className="text-sm font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {socials.map(({ href, icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;