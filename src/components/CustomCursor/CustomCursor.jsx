import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { damping: 45, stiffness: 1200 });
  const dotY = useSpring(my, { damping: 45, stiffness: 1200 });
  const ringX = useSpring(mx, { damping: 22, stiffness: 500 });
  const ringY = useSpring(my, { damping: 22, stiffness: 500 });

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div
        style={{ left: dotX, top: dotY }}
        className="fixed w-2 h-2 rounded-full bg-[#CCFF00] z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <motion.div
        style={{ left: ringX, top: ringY }}
        className="fixed w-10 h-10 rounded-full border border-[#7C3AED]/60 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
