import { motion } from 'framer-motion';

function Animations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
    </motion.div>
  );
}

export default Animations;