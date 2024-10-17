import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Corrigido para o caminho correto
import Navbar from './components/Navbar'; // Supondo que você tenha um Navbar em components
import Footer from './components/Footer'; // Supondo que você tenha um Footer em components

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione suas outras rotas aqui */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
