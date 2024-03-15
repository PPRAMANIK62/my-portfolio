import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variantsMain = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const variantsSlide = {
  hidden: { left: 0 },
  visible: { left: "100%" },
};

function Reveal({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        variants={variantsMain}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={variantsSlide}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute rounded-2xl top-4 bottom-4 left-0 right-0 bg-purple-400 opacity-20 z-20"
      />
    </div>
  );
}

export default Reveal;
