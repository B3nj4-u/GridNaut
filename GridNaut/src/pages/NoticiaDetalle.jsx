// NoticiaDetalle.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./NoticiaDetalle.css"

function NoticiaDetalle() {
  const [noticia, setNoticia] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/noticias/${id}`)
      .then(response => response.json())
      .then(data => setNoticia(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  return (
    <div className="noticia-detalle">
      <h1>{noticia.titulo}</h1>
      <p>{noticia.contenido}</p>
      <img src={noticia.url_imagen} alt="Imagen de la noticia" />
      <p>Fecha de publicación: {noticia.fecha_publicacion}</p>
    </div>
  );
}

export default NoticiaDetalle;
