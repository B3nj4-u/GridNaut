import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const NAV_ITEMS = [
  { id: 'carrusel', label: 'Inicio', isScrollLink: true },
  { id: 'servicios', label: 'Servicios', isScrollLink: true },
  { id: 'sobre-nosotros', label: 'Sobre Nosotros', isScrollLink: true },
  { id: '/noticias', label: 'Noticias', isScrollLink: false },
  { id: '/contactanos', label: 'Contáctanos', isScrollLink: false },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('carrusel');

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      NAV_ITEMS.forEach(({ id, isScrollLink }) => {
        if (isScrollLink) {
          const element = document.getElementById(id);
          const rect = element.getBoundingClientRect();
          const isInViewPort = rect.top <= window.innerHeight && rect.bottom >= 0;
          if (isInViewPort) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOnClick = (to, isScrollLink) => {
    if (isScrollLink) {
      if (location.pathname !== '/') {
        navigate('/');
      }
      setTimeout(() => {
        document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(to);
      }, 0);
    } else {
      navigate(to);
      setActiveSection(to);
    }
  };

  return (
    <nav>
        <LinkScroll
            to="carrusel"
            onClick={() => handleOnClick('carrusel', true)}
            smooth
            duration={1000}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <img className="logo" src={logo} alt="GridNaut" />
            <span>GridNaut</span>
        </LinkScroll>

        <ul>
            {NAV_ITEMS.map(({ id, label, isScrollLink }) => (
                <li key={id}>
                    {isScrollLink ? (
                        <LinkScroll
                            className={activeSection === id ? 'active' : ''}
                            to={id}
                            onClick={() => handleOnClick(id, isScrollLink)}
                            smooth
                            duration={1000}
                        >
                            {label}
                        </LinkScroll>
                    ) : (
                        <LinkRouter
                            className={activeSection === id ? 'active' : ''}
                            to={id}
                            onClick={() => handleOnClick(id, isScrollLink)}
                        >
                            {label}
                        </LinkRouter>
                    )}
                </li>
            ))}
        </ul>
    </nav>
);
}

export default Navbar;
