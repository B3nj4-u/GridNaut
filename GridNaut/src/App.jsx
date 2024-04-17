import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Contactanos from './pages/Contactanos';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import NoticiaDetalle from './pages/NoticiaDetalle';
import NavbarButton from './components/NavbarButton';

function App() {
  return (
    <Router>
      <Navbar />
      <NavbarButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
