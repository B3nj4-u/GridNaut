import React from 'react';
import { motion } from 'framer-motion';
import './ServiciosModal.css';

const ServiciosModal = ({ image, text, description, onClose }) => {
  return (
    <motion.div className="modal" onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="modal-content" onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }} // Se expande al abrir
        animate={{ scale: 1 }}
        exit={{ scale: 0 }} // Se contrae al cerrar
        transition={{ duration: 0.5 }}
      >
        <span className="close" onClick={onClose}>×</span>
        <img src={image} alt={text} />
        <h2>{text}</h2>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ServiciosModal;
