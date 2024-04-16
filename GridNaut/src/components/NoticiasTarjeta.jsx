import React from "react";
import "./NoticiasTarjeta.css";
import { Link } from "react-router-dom";

function NoticiasTarjeta({ noticia }) {
  // Formatea la fecha de publicación
  const fechaPublicacion = new Date(noticia.fecha_publicacion);
  const fechaFormateada = `${fechaPublicacion
    .getDate()
    .toString()
    .padStart(2, "0")}-${(fechaPublicacion.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${fechaPublicacion.getFullYear()}`;

  return (
    <div className="noticias-tarjeta">
      <h2>{noticia.titulo}</h2>
      <p className="fecha">Fecha de publicación: {fechaFormateada}</p>
      <p>{noticia.contenido.substring(0, 80)}...</p>
      <img src={noticia.url_imagen} alt="Imagen de la noticia" />
      <Link to={`/noticias/${noticia.id}`}>Ver más</Link>
    </div>
  );
}

export default NoticiasTarjeta;
