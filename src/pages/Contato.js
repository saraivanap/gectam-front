import React from 'react';
import Navbar from '../components/Navbar';  // Importando o Navbar
import Footer from '../components/Footer';  // Importando o Footer

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Título com separador */}
        <h2 className="text-3xl font-bold text-center mb-4">Redes Sociais</h2>
        <hr className="border-gray-300 mb-8" />

        {/* Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <div className="text-left">
              <ul className="space-y-4">
                <li>
                  <a href="https://www.instagram.com/npca.ufra/" className="flex items-center space-x-2 text-lg hover:underline">
                    <span>@npca.ufra</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center space-x-2 text-lg hover:underline">
                    <span>npca.ufra@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center space-x-2 text-lg hover:underline">
                    <span>marcus.braga@ufra.edu.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@nucleodepesquisasemcomputa1776" className="flex items-center space-x-2 text-lg hover:underline">
                    <span>Núcleo de Pesquisa em Computação</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contato;
