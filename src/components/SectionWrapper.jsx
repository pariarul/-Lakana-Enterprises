'use client';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = "", id = "", delay = 0, variant = "fadeUp" }) => {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
