import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./NoticiaDetalle.css";
import { motion } from "framer-motion";

function NoticiaDetalle() {
  const [noticia, setNoticia] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/noticias/${id}`)
      .then((response) => response.json())
      .then((data) => setNoticia(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  // Formatea la fecha de publicación
  const fechaPublicacion = new Date(noticia.fecha_publicacion);
  const fechaFormateada = `${fechaPublicacion
    .getDate()
    .toString()
    .padStart(2, "0")}/${(fechaPublicacion.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${fechaPublicacion.getFullYear()} ${fechaPublicacion
    .getHours()
    .toString()
    .padStart(2, "0")}:${fechaPublicacion
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <>
      <Link to="/noticias">
      <motion.button 
        whileHover={{ 
          scale: [1, 1.1, 1], // Oscila entre el tamaño normal y un 10% más grande
          transition: { repeat: Infinity, duration: 0.5 } // Repite la animación infinitamente
        }}
        className="atras-button"
      >
        Volver atrás
      </motion.button>
    </Link>
      <div className="noticia-detalle">
        <h1>{noticia.titulo}</h1>
        <p className="fecha-publicacion">
          Fecha de publicación: {fechaFormateada}
        </p>
        <p>{noticia.contenido}</p>
        <img src={noticia.url_imagen} alt="Imagen de la noticia" />
      </div>
    </>
  );
}

export default NoticiaDetalle;
