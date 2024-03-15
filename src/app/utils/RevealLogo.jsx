import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -50, x: -50 },
  visible: { opacity: 1, y: 0, x: 0 },
};

function RevealLogo({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={"visible"}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default RevealLogo;
