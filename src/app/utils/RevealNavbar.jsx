import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -50, x: 50 },
  visible: { opacity: 1, y: 0, x: 0 },
};

function RevealNavbar({ children, index }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={"visible"}
      transition={{ duration: 0.5, delay: index * 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default RevealNavbar;
