import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./NavbarButton.css";

const NAV_ITEMS = [
  { id: "carrusel", label: "Inicio", isScrollLink: true },
  { id: "servicios", label: "Servicios", isScrollLink: true },
  { id: "sobre-nosotros", label: "Sobre Nosotros", isScrollLink: true },
  { id: "/noticias", label: "Noticias", isScrollLink: false },
  { id: "/contactanos", label: "Contáctanos", isScrollLink: false },
];

function NavbarButton() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (to, isScrollLink) => {
    setIsOpen(false);

    if (isScrollLink) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(to);
    }
  };

  return (
    <div className="navbar-button">
      <button className={`navbar-button ${isOpen ? 'expandido' : 'contraido'}`} onClick={() => setIsOpen(!isOpen)}>
        <FiMenu className="menu-icon"/>
      </button>
      {isOpen &&
        NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleOnClick(item.id, item.isScrollLink)}
          >
            {item.label}
          </button>
        ))}
    </div>
  );
}

export default NavbarButton;
