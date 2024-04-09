import React from "react";
import { motion } from "framer-motion";
import "./NosotrosTarjeta.css";

const NosotrosTarjeta = ({ icono, titulo, texto }) => {
  return (
    <motion.div
      className="tarjeta"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="icono">{icono}</div>
      <h2 className="titulo">{titulo}</h2>
      <p className="texto">{texto}</p>
    </motion.div>
  );
};

export default NosotrosTarjeta;
