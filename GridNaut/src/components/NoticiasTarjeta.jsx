// NoticiasTarjeta.jsx
import React from 'react';
import './NoticiasTarjeta.css';
import { Link } from 'react-router-dom';

function NoticiasTarjeta({ noticia }) {
  return (
    <div className="noticias-tarjeta">
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido.substring(0, 100)}...</p>
      <img src={noticia.url_imagen} alt="Imagen de la noticia" />
      <p>Fecha de publicación: {noticia.fecha_publicacion}</p>
      <Link to={`/noticias/${noticia.id}`}>Ver más</Link>
    </div>
  );
}

export default NoticiasTarjeta;
