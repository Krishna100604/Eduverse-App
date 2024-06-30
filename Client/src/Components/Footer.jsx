// src/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-blue-500 py-4 mt-8"
    >
      <div className="container mx-auto text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          &copy; 2024 Eduverse. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
