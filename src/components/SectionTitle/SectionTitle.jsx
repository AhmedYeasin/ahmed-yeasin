import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionTitle = ({ label, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-16">
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#A78BFA] mb-4 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-px w-24 mx-auto mt-5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"
      />
    </div>
  );
};

export default SectionTitle;
