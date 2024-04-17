import React, { useState, useEffect } from "react";
import NoticiasTarjeta from "../components/NoticiasTarjeta";
import "./Noticias.css"

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/noticias")
      .then((response) => response.json())
      .then((data) => setNoticias(data.reverse())) // Invierte el orden de las noticias
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <h1 className="noticias-h1">Noticias</h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {noticias.map((noticia, index) => (
          <NoticiasTarjeta key={index} noticia={noticia} />
        ))}
      </div>
    </>
  );
}

export default Noticias;
