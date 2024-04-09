import React from 'react';
import { motion } from 'framer-motion';
import './ServiciosTarjeta.css';

const ServiciosTarjeta = ({ image, text, onClick }) => {
  return (
    <motion.div className="tarjeta-servicio" onClick={onClick}
      animate={{ rotate: 0 }} // Vuelve a la posición original cuando el mouse ya no está encima
      whileHover={{ 
        rotate: [0, -10, 10, 0], // Oscila entre -10 y 10 grados
        transition: { repeat: Infinity, duration: 0.3 } // Repite la animación infinitamente
      }}
    >
      <img src={image} alt={text} className="service-image" />
      <p>{text}</p>
    </motion.div>
  );
};

export default ServiciosTarjeta;
