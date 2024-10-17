import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Caminho correto para a página Home
import Pesquisa from './pages/Pesquisa'; // Componente de Pesquisa
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Navbar from './components/Navbar'; // Navbar como componente
import Footer from './components/Footer'; // Footer como componente

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/pesquisa" element={<Pesquisa />} /> 
        <Route path="/projetos" element={<Projetos />} />
        {/* outras rotas */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
